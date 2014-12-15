package com.clqb.app;

import com.clqb.utils.XmlInputFormat;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.conf.Configured;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Reducer;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.mapreduce.lib.output.TextOutputFormat;
import org.apache.hadoop.util.Tool;
import org.apache.hadoop.util.ToolRunner;

import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamConstants;
import javax.xml.stream.XMLStreamReader;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/*
TF-IDF - Phase 1:

    Map:
        Input: (page, <page>...</page>)
        Output: (word@pageId, 1))

    Reducer
        n = sum of the values of for each key “word@document”
        Output: ((word@pageId), n)

 */

public class WordCountAtPage extends Configured implements Tool {
    private static Set<String> googleStopwords;

    static {
        googleStopwords = new HashSet<String>();
        googleStopwords.add("I"); googleStopwords.add("a");
        googleStopwords.add("about"); googleStopwords.add("an");
        googleStopwords.add("are"); googleStopwords.add("as");
        googleStopwords.add("at"); googleStopwords.add("be");
        googleStopwords.add("by"); googleStopwords.add("com");
        googleStopwords.add("de"); googleStopwords.add("en");
        googleStopwords.add("for"); googleStopwords.add("from");
        googleStopwords.add("how"); googleStopwords.add("in");
        googleStopwords.add("is"); googleStopwords.add("it");
        googleStopwords.add("la"); googleStopwords.add("of");
        googleStopwords.add("on"); googleStopwords.add("or");
        googleStopwords.add("that"); googleStopwords.add("the");
        googleStopwords.add("this"); googleStopwords.add("to");
        googleStopwords.add("was"); googleStopwords.add("what");
        googleStopwords.add("when"); googleStopwords.add("where");
        googleStopwords.add("who"); googleStopwords.add("will");
        googleStopwords.add("with"); googleStopwords.add("and");
        googleStopwords.add("the"); googleStopwords.add("www");
    }

    static Pattern p = Pattern.compile("\\w+");

    public static class AwesomeMapper extends Mapper<LongWritable, Text, Text, IntWritable> {
        /**
         * @param key is the byte offset of the current line in the file;
         * @param value is the content in <page></page>, including <page></page>
         *
         *      Output: pairs like <"world", "1"> pairs
         */
        @Override
        protected void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {
            try {
                XMLStreamReader reader =
                        XMLInputFactory.newInstance().createXMLStreamReader(new
                                ByteArrayInputStream(value.toString().getBytes()));

                String currentElement = "";
                int level = 0;
                Text pageId = null;
                ArrayList<Text> words = new ArrayList<Text>();
                while (reader.hasNext()) {
                    int code = reader.next();
                    switch (code) {
                        case XMLStreamConstants.START_ELEMENT:
                            level++;
                            currentElement = reader.getLocalName();
                            break;
                        case XMLStreamConstants.CHARACTERS:
                            if (currentElement.equalsIgnoreCase("id") &&
                                    level == 2) {
                                pageId = new Text(reader.getText().trim());
                            } else if (currentElement.equalsIgnoreCase("title") ||
                                    currentElement.equalsIgnoreCase("username") ||
                                    currentElement.equalsIgnoreCase("comment") ||
                                    currentElement.equalsIgnoreCase("text")) {
                                Matcher m = p.matcher(reader.getText());

                                while (m.find()) {
                                    String matchedKey = m.group().toLowerCase();
                                    // remove names starting with non letters, digits, considered stopwords or containing other chars
                                    if (!Character.isLetter(matchedKey.charAt(0)) || Character.isDigit(matchedKey.charAt(0))
                                            || googleStopwords.contains(matchedKey) || matchedKey.contains("_")) {
                                        continue;
                                    }
                                    words.add(new Text(matchedKey));
                                }
                            }
                            break;
                        case XMLStreamConstants.END_ELEMENT:
                            level--;
                            currentElement = "";
                            break;
                    }
                }
                reader.close();
                if (pageId != null) {
                    for (Text word : words) {
                        StringBuilder valueBuilder = new StringBuilder();
                        valueBuilder.append(word);
                        valueBuilder.append("@");
                        valueBuilder.append(pageId.toString());
                        context.write(new Text(valueBuilder.toString()), new IntWritable(1));
                    }
                }
            }
            catch(Exception e){
                e.printStackTrace();
            }
        }
    }

    public static class AwesomeReducer extends Reducer<Text, IntWritable, Text, IntWritable> {
        private Text pageIds = new Text();

        /**
         * @param key is the key of the mapper
         * @param values are all the values aggregated during the mapping phase
         * @param context contains the context of the job run
         *
         *      Input: receive a list of <"word@pageId",[1, 1, 1, ...]> pairs
         *        <"hello@123", [1, 1]>
         *
         *      Output: emit the output a single key-value where the sum of the occurrences.
         *        <"hello@123", 2>
         */
        @Override
        protected void reduce(Text key, Iterable<IntWritable> values, Context context) throws IOException, InterruptedException {
            int sum = 0;
            for (IntWritable val : values) {
                sum += val.get();
            }
            context.write(key, new IntWritable(sum));
        }
    }

    public int run(String[] args) throws Exception {
        Configuration conf = getConf();
        conf.set("xmlinput.start", "<page>");
        conf.set("xmlinput.end", "</page>");
        Job job = Job.getInstance(conf, "WordCountAtPage");
        job.setJarByClass(WordCountAtPage.class);

        job.setMapOutputKeyClass(Text.class);
        job.setMapOutputValueClass(IntWritable.class);
        job.setOutputKeyClass(Text.class);
        job.setOutputValueClass(IntWritable.class);

        job.setMapperClass(AwesomeMapper.class);
        job.setCombinerClass(AwesomeReducer.class);
        job.setReducerClass(AwesomeReducer.class);
        job.setInputFormatClass(XmlInputFormat.class);
        job.setOutputFormatClass(TextOutputFormat.class);

        Path outputPath = new Path(args[1]);
        FileInputFormat.setInputPaths(job, new Path(args[0]));
        FileOutputFormat.setOutputPath(job, outputPath);
        outputPath.getFileSystem(conf).delete(outputPath, true);

        return job.waitForCompletion(true) ? 0 : 1;
    }

    public static void main(String[] args) throws Exception {
        int exitCode = ToolRunner.run(new WordCountAtPage(), args);
        System.exit(exitCode);
    }
}
