package com.clqb.app;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.conf.Configured;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Reducer;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.input.TextInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.mapreduce.lib.output.TextOutputFormat;
import org.apache.hadoop.util.Tool;
import org.apache.hadoop.util.ToolRunner;

import java.io.IOException;
import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.Map;

/*
Phase 3:

Map:
    Input: ((term@page), n/N)
    Re-arrange the mapper to have the word as the key, since we need to count the number of pages where it occurs
    Output: (term, page=n/N)

Reducer:
    D = total number of pages in the dump. This can be passed by the driver as a constant;
    d = number of pages in dump where the term appears. It is a counter over the reduced values for each term;
    TFIDF = n/N * log(D/d);
    Output: ((word@document), [d/D, (n/N), TFIDF])
 */
public class WordAtPageTFIDF extends Configured implements Tool {
//    public static final int NUM_PAGES = 6283;
    public static final int NUM_PAGES = 1660576;

    public static class AwesomeMapper extends Mapper<LongWritable, Text, Text, Text> {
        /**
         * @param key is the byte offset of the current line in the file;
         * @param value is the line from the file
         * @param output has the method "collect()" to output the key,value pair
         * @param reporter allows us to retrieve some information about the job (like the current filename)
         *
         *      input: hello@123  \t  3/1500
         *      output: hello, 123=3/1500
         */
        public void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {
            String[] wordAndCounters = value.toString().split("\t");
            String[] wordAndDoc = wordAndCounters[0].split("@");
            context.write(new Text(wordAndDoc[0]), new Text(wordAndDoc[1] + "=" + wordAndCounters[1]));
        }
    }

    public static class AwesomeReducer extends Reducer<Text, Text, Text, Text> {
        private static final DecimalFormat DECIMAL_FORMAT = new DecimalFormat("###.########");

        /**
         * @param key is the key of the mapper
         * @param values are all the values aggregated during the mapping phase
         * @param context contains the context of the job run
         *
         *      input: receive a list of <word, ["page1=n1/N1", "doc2=n2/N2"]>
         *      output: <"word@page1,  [p1/P, n1/N, TF-IDF]">
         *              <"word@page2,  [p2/P, n2/N, TF-IDF]">
         *
         *      NUM_PAGES is P
         *      numberOfPagesWhereWordAppears is p, p1, p2
         *
         *      wordFrequenceAndTotalWords[0] is n, n1, n2
         *      wordFrequenceAndTotalWords[1] is N
         *
         */
        protected void reduce(Text key, Iterable<Text> values, Context context) throws IOException, InterruptedException {
            // total frequency of this word
            int numberOfPagesWhereWordAppears = 0; // p
            // key is pageId, value is n/N
            Map<String, String> wordFreqInPage = new HashMap<String, String>();
            for (Text val : values) {
                String[] pageAndFrequencies = val.toString().split("=");
                numberOfPagesWhereWordAppears++;
                wordFreqInPage.put(pageAndFrequencies[0], pageAndFrequencies[1]);
            }
            for (String pageId : wordFreqInPage.keySet()) {
                // [0] is n, [1] is N
                String[] wordFrequenceAndTotalWords = wordFreqInPage.get(pageId).split("/");

                // Term frequency is the quocient of the number of terms in document and the total number of terms in doc
                double tf = Double.valueOf(Double.valueOf(wordFrequenceAndTotalWords[0])
                        / Double.valueOf(wordFrequenceAndTotalWords[1]));

                // inverse document frequency quotient between the number of docs in corpus and number of docs the term appears
                double idf = (double) NUM_PAGES / (double) numberOfPagesWhereWordAppears;

                // given that log(10) = 0, just consider the term frequency in documents
                double tfIdf = NUM_PAGES == numberOfPagesWhereWordAppears ?
                        tf : tf * Math.log10(idf);

                context.write(new Text(key + "@" + pageId), new Text("[" + numberOfPagesWhereWordAppears + "/"
                        + NUM_PAGES + " , " + wordFrequenceAndTotalWords[0] + "/"
                        + wordFrequenceAndTotalWords[1] + " , " + DECIMAL_FORMAT.format(tfIdf) + "]"));
            }
        }
    }

    public int run(String[] args) throws Exception {
        Configuration conf = getConf();
        Job job = Job.getInstance(conf, "WordAtPageTFIDF");

        job.setJarByClass(WordAtPageTFIDF.class);
        job.setMapperClass(AwesomeMapper.class);
        job.setReducerClass(AwesomeReducer.class);

        job.setMapOutputKeyClass(Text.class);
        job.setMapOutputValueClass(Text.class);
        job.setOutputKeyClass(Text.class);
        job.setOutputValueClass(Text.class);
        job.setInputFormatClass(TextInputFormat.class);
        job.setOutputFormatClass(TextOutputFormat.class);

        FileInputFormat.addInputPath(job, new Path(args[0]));
        Path outputPath = new Path(args[1]);
        FileOutputFormat.setOutputPath(job, outputPath);
        outputPath.getFileSystem(conf).delete(outputPath, true);

        return job.waitForCompletion(true) ? 0 : 1;
    }

    public static void main(String[] args) throws Exception {
        int exitCode = ToolRunner.run(new WordAtPageTFIDF(), args);
        System.exit(exitCode);
    }
}
