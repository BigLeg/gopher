package com.clqb.app;

import com.clqb.utils.XmlInputFormat;
import com.clqb.utils.XmlUtils;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.conf.Configured;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.MapWritable;
import org.apache.hadoop.io.NullWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Reducer;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.util.Tool;
import org.apache.hadoop.util.ToolRunner;
import org.elasticsearch.hadoop.mr.EsOutputFormat;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.ByteArrayInputStream;
import java.io.IOException;

public class ElasticSearch extends Configured implements Tool {
    public static class AwesomeMapper extends Mapper<LongWritable, Text, NullWritable, MapWritable> {
        @Override
        protected void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {
            try {
                context.write(NullWritable.get(), XmlUtils.XmlTextToMapWritable(value));
            } catch (ParserConfigurationException e) {
                e.printStackTrace();
            } catch (SAXException e) {
                e.printStackTrace();
            }
        }
    }

    public static class AwesomeReducer extends Reducer<NullWritable, MapWritable, NullWritable, NullWritable> {
    }

    public int run(String[] args) throws Exception {
        Configuration conf = getConf();
        conf.set("xmlinput.start", "<page>");
        conf.set("xmlinput.end", "</page>");
        conf.setBoolean("mapreduce.map.speculative", false);
        conf.setBoolean("mapreduce.reduce.speculative", false);
        conf.set("es.nodes", "localhost:9200");
        conf.set("es.resource", "wiki/pages");

        Job job = Job.getInstance(conf);
        job.setJarByClass(ElasticSearch.class);
        job.setInputFormatClass(XmlInputFormat.class);
        job.setOutputFormatClass(EsOutputFormat.class);
        job.setMapOutputKeyClass(NullWritable.class);
        job.setMapOutputValueClass(MapWritable.class);
        job.setOutputKeyClass(NullWritable.class);
        job.setOutputValueClass(NullWritable.class);
        job.setMapperClass(AwesomeMapper.class);
        job.setReducerClass(AwesomeReducer.class);

        Path outputPath = new Path(args[1]);
        FileInputFormat.setInputPaths(job, new Path(args[0]));
        FileOutputFormat.setOutputPath(job, outputPath);
        outputPath.getFileSystem(conf).delete(outputPath, true);

        return job.waitForCompletion(true) ? 0 : 1;
    }

    public static void main(String[] args) throws Exception {
        int exitCode = ToolRunner.run(new ElasticSearch(), args);
        System.exit(exitCode);
    }
}