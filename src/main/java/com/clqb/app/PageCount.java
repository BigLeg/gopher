package com.clqb.app;

import com.clqb.utils.XmlInputFormat;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.conf.Configured;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.NullWritable;
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
import java.util.Collection;

public class PageCount extends Configured implements Tool {
    public static class AwesomeMapper extends Mapper<LongWritable, Text, Text, IntWritable> {
        @Override
        protected void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {
            try {
                XMLStreamReader reader =
                        XMLInputFactory.newInstance().createXMLStreamReader(new
                                ByteArrayInputStream(value.toString().getBytes()));

                String currentElement = "";
                int level = 0;
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
                                context.write(new Text(reader.getText().trim()),
                                              new IntWritable(1));
                            }
                            break;
                        case XMLStreamConstants.END_ELEMENT:
                            level--;
                            currentElement = "";
                            break;
                    }
                }
                reader.close();
            }
            catch(Exception e){
                e.printStackTrace();
            }
        }
    }

    public static class AwesomeCombiner extends Reducer<Text, IntWritable, Text, IntWritable> {
        public static String UNIQUE = "unique";
        @Override
        protected void reduce(Text key, Iterable<IntWritable> values, Context context) throws IOException, InterruptedException {
            context.write(new Text(UNIQUE), new IntWritable(1));
        }
    }

    public static class AwesomeReducer extends Reducer<Text, IntWritable, NullWritable, IntWritable> {
        @Override
        protected void reduce(Text key, Iterable<IntWritable> values, Context context) throws IOException, InterruptedException {
            int size = 0;
            if (values instanceof Collection<?>) {
                size = ((Collection<IntWritable>) values).size();
            } else {
                for (IntWritable value : values) {
                    size++;
                }
            }
            context.write(NullWritable.get(), new IntWritable(size));
        }
    }


    public int run(String[] args) throws Exception {
        Configuration conf = getConf();
        conf.set("xmlinput.start", "<page>");
        conf.set("xmlinput.end", "</page>");
        Job job = Job.getInstance(conf, "PageCount");
        job.setJarByClass(PageCount.class);

        job.setMapOutputKeyClass(Text.class);
        job.setMapOutputValueClass(IntWritable.class);
        job.setOutputKeyClass(NullWritable.class);
        job.setOutputValueClass(IntWritable.class);

        job.setMapperClass(AwesomeMapper.class);
        job.setCombinerClass(AwesomeCombiner.class);
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
        int exitCode = ToolRunner.run(new PageCount(), args);
        System.exit(exitCode);
    }
}