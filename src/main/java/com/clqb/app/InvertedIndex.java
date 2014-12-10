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
import org.apache.hadoop.mapreduce.lib.input.TextInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.mapreduce.lib.output.TextOutputFormat;
import org.apache.hadoop.util.StringUtils;
import org.apache.hadoop.util.Tool;
import org.apache.hadoop.util.ToolRunner;

import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamConstants;
import javax.xml.stream.XMLStreamReader;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.HashSet;

public class InvertedIndex extends Configured implements Tool {
    public static class AwesomeMapper extends Mapper<LongWritable, Text, Text, LongWritable> {
        @Override
        protected void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {
            String document = value.toString();
            try {
                XMLStreamReader reader =
                        XMLInputFactory.newInstance().createXMLStreamReader(new
                                ByteArrayInputStream(document.getBytes()));

                String currentElement = "";
                int level = 0;
                LongWritable pageId = null;
                HashSet<Text> uniqueWords = new HashSet<Text>();
                while (reader.hasNext()) {
                    int code = reader.next();
                    switch (code) {
                        case XMLStreamConstants.START_ELEMENT: //START_ELEMENT:
                            level++;
                            currentElement = reader.getLocalName();
                            break;
                        case XMLStreamConstants.CHARACTERS: //CHARACTERS:
                            if (currentElement.equalsIgnoreCase("id") &&
                                    level == 2) {
                                try {
                                    pageId = new LongWritable(Long.parseLong(reader.getText().trim()));
                                    System.out.println("Good id is " + pageId.get());
                                } catch (NumberFormatException e) {
                                    System.out.println("Bad id is " + reader.getText());
                                    System.out.println("level is " + level);
                                }
                            } else if (currentElement.equalsIgnoreCase("title") ||
                                    currentElement.equalsIgnoreCase("username") ||
                                    currentElement.equalsIgnoreCase("comment") ||
                                    currentElement.equalsIgnoreCase("text")) {
                                for (String token : reader.getText()
                                            .trim().replaceAll("'|\"|\\[|\\]|=|°S|", "")
                                        .split(" |,|\\.|;")) {
                                    uniqueWords.add(new Text(token));
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
                    for (Text word : uniqueWords) {
                        context.write(word, pageId);
                    }
                }
            }
            catch(Exception e){
                throw new IOException(e);

            }
        }
    }

    public static class AwesomeReducer extends Reducer<Text, LongWritable, Text, Text> {
        private Text pageIds = new Text();

        @Override
        protected void reduce(Text key, Iterable<LongWritable> values, Context context) throws IOException, InterruptedException {
            HashSet<LongWritable> uniquePageIds = new HashSet<LongWritable>();
            for (LongWritable pageId : values) {
                uniquePageIds.add(pageId);
            }
            pageIds.set(uniquePageIds.toString());
            context.write(key, pageIds);
        }
    }

    public int run(String[] args) throws Exception {
        Configuration conf = getConf();
        conf.set("xmlinput.start", "<page>");
        conf.set("xmlinput.end", "</page>");
        Job job = Job.getInstance(conf);
        job.setJarByClass(InvertedIndex.class);
        job.setOutputKeyClass(Text.class);
        job.setOutputValueClass(LongWritable.class);
        job.setMapperClass(AwesomeMapper.class);
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
        int exitCode = ToolRunner.run(new InvertedIndex(), args);
        System.exit(exitCode);
    }
}