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
import java.util.*;

/*
TF-IDF - Phase 2:

    Map:
        Input: ((word@pageId), n)
        Re-arrange the mapper to have the key based on each document
        Output: (pageId, word=n)

    Reducer
        N = totalWordsInDoc = sum [word=n]) for each document
        Output: ((word@pageId), (n/N))

 */

public class WordFreqAtPage extends Configured implements Tool {
    public static class AwesomeMapper extends Mapper<LongWritable, Text, Text, Text> {
        /**
         * @param key     is the byte offset of the current line in the file;
         * @param value   is the line from the file
         *
         *      Input: hello@123     1
         *             world@121     98
         *             gg@234        3
         *
         *      Output: pairs like <"121", "world=98">
         */
        @Override
        protected void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {
            String[] wordAndDocCounter = value.toString().split("\t");
            String[] wordAndDoc = wordAndDocCounter[0].split("@");
            context.write(new Text(wordAndDoc[1]), new Text(wordAndDoc[0] + "=" + wordAndDocCounter[1]));
        }
    }

    public static class AwesomeReducer extends Reducer<Text, Text, Text, Text> {
        /**
         * @param key is the key of the mapper
         * @param values are all the values aggregated during the mapping phase
         *
         *      Input: receive a list of <pageId, ["word-a=n_a", "word-b=n_b"]>
         *             pairs like <"123", ["hello=3", "world=5"]>
         *
         *      Output: <"hello@123, 3/8">,
         *              <"world@123, 5/8">
         */
        @Override
        protected void reduce(Text key, Iterable<Text> values, Context context) throws IOException, InterruptedException {
            int sum = 0;
            Map<String, Integer> counter = new HashMap<String, Integer>();
            for (Text val : values) {
                String[] wordCounter = val.toString().split("=");
                try {
                    counter.put(wordCounter[0], Integer.valueOf(wordCounter[1]));
                    sum += Integer.parseInt(val.toString().split("=")[1]);
                } catch(ArrayIndexOutOfBoundsException e) {
                    System.err.println("Won't parse " + val);
                }
            }
            for (String word : counter.keySet()) {
                context.write(
                        new Text(word + "@" + key.toString()),
                        new Text(counter.get(word) + "/" + sum)
                );
            }
        }
    }

    public int run(String[] args) throws Exception {
        Configuration conf = getConf();
        Job job = Job.getInstance(conf, "WordFreqAtPage");

        job.setJarByClass(WordFreqAtPage.class);
        job.setMapperClass(AwesomeMapper.class);
        job.setReducerClass(AwesomeReducer.class);

        job.setMapOutputKeyClass(Text.class);
        job.setMapOutputValueClass(Text.class);
        job.setOutputKeyClass(Text.class);
        job.setOutputValueClass(Text.class);
        job.setInputFormatClass(TextInputFormat.class);
        job.setOutputFormatClass(TextOutputFormat.class);

        Path outputPath = new Path(args[1]);
        FileInputFormat.addInputPath(job, new Path(args[0]));
        FileOutputFormat.setOutputPath(job, outputPath);
        outputPath.getFileSystem(conf).delete(outputPath, true);

        return job.waitForCompletion(true) ? 0 : 1;
    }

    public static void main(String[] args) throws Exception {
        int exitCode = ToolRunner.run(new WordFreqAtPage(), args);
        System.exit(exitCode);
    }
}