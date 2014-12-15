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

import java.io.IOException;

public class ElasticSearch extends Configured implements Tool {
    public static class AwesomeMapper extends Mapper<LongWritable, Text, NullWritable, MapWritable> {
        @Override
        protected void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {
            context.write(NullWritable.get(), XmlUtils.xmlTextToMapWritable(value));
        }
    }

    public static class AwesomeReducer extends Reducer<NullWritable, MapWritable, NullWritable, NullWritable> {
    }

    public int run(String[] args) throws Exception {
        Configuration conf = getConf();
        conf.set("xmlinput.start", "<page>");
        conf.set("xmlinput.end", "</page>");
        conf.setBoolean("mapred.map.tasks.speculative.execution", false);
        conf.setBoolean("mapred.reduce.tasks.speculative.execution", false);
        conf.set("es.nodes", "localhost:9200");
        conf.set("es.resource", "radio/artists");

        Job job = Job.getInstance(conf);
        job.setJarByClass(ElasticSearch.class);
        job.setInputFormatClass(XmlInputFormat.class);
        job.setOutputFormatClass(EsOutputFormat.class);
        job.setMapOutputValueClass(MapWritable.class);
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