# Mapreduce for inverted index on Wikipedia data

__CAREFUL: It's just a homework done in a hurry. Some of the resorts are not elegant__

## Prerequisites
1. Download [wiki data](https://dumps.wikimedia.org/)
2. Set up [hadoop](http://hadoop.apache.org/) if you wanna run TFIDF.
3. Add `$HADOOP_HOME/bin` to `PATH` in `~/.bash_profile`. Or if you're using Windows or Linux, you should export the PATH somehow by modifying the tasks.
4. Set up [elasticsearch](http://www.elasticsearch.org/) if you wanna run that.


## Project Structure
I confirm that the arrangement is a mess, but is ok to develop locally. It's a multi-app project but I use a plugin without multi-app support.

```
|- src/main/com/clqb
 |- app
  |- WordCountAtPage.java
  |- WordFreqAtPage.java
  |- PageCount.java
  |- WordAtPageTFIDF.java
  |- ElasticSearch.java
 |- utils
  |- XmlInputFormat.java
  |- XmlUtils.java
|- build.gradle
```

To run different applications under `app` folder, I write different tasks in `build.gradle`. __You may need to change them, e.g. `. ~/.bash_profile` in tasks.__ You can resort to any solutions as long as you export the PATH which includes the script `hadoop`.

## Instructions
First make sure your hadoop daemons are running, i.e. you have run

```
start-hdfs.sh
start-yarn.sh
```
or something equivalent.

### Build index using TFIDF
It takes steps to build the index: `WordCountAtPage`, `WordFreqAtPage`, `PageCount` and `WordAtPageTFIDF`; __They must be run in order.__ I followed [this tutorial](https://code.google.com/p/hadoop-clusternet/wiki/RunningMapReduceExampleTFIDF). I copied most part, except some names and had some small modifications according to my understanding and needs.

#### Step 1: Run WordCountAtPage
* Uncomment the section in `build.gradle`:

```
/* section WordCountAtPage */
//ext.hadoopSubDir = 'hadoop'
//ext.hadoopApplicationName = 'WordCountAtPage'
//ext.hadoopMainClassName = 'com.clqb.app.WordCountAtPage'
```

* Comment all other sections in `build.gradle`.
* Modify the task `runTFIDF_Phase1`.
	* Modify `. ~/.bash_profile` if needed.
	* Modify the parameters passed in hadoop application if needed. Here it's `/data/wiki-161m /output-TFIDF-1`.
* Run the task:

```
gradle runTFIDF_Phase1
```
or use GUI in your IDE.
	
#### Step 2: Run WordFreqAtPage
* Uncomment the section in `build.gradle`:

```
/* section WordFreqAtPage */
ext.hadoopSubDir = 'hadoop'
ext.hadoopApplicationName = 'WordFreqAtPage'
ext.hadoopMainClassName = 'com.clqb.app.WordFreqAtPage'
```
* Comment all other sections in `build.gradle`.
* Modify the task `runTFIDF_Phase2` accordingly.
* Run the task:

```
gradle runTFIDF_Phase2
```
or use GUI in your IDE.

#### Step 2.5: Run PageCountAtPage
* Uncomment the section in `build.gradle`:

```
/* section PageCount */
ext.hadoopSubDir = 'hadoop'
ext.hadoopApplicationName = 'PageCount'
ext.hadoopMainClassName = 'com.clqb.app.PageCount'
```
* Comment all other sections in `build.gradle`.
* Modify the task `runTFIDF_Phase2_5` accordingly.
* Run the task:

```
gradle runTFIDF_Phase2
```
or use GUI in your IDE.

* Go to `Name node manage` and check the result. __Take the result in mind__, for example `1660576`, and __this will be used in step 3__.


#### Step 3: Run WordAtPageTFIDF
* Replace @link{com.clqb.app.WordAtPageTFIDF#NUM_PAGES} with the value you just obtained.
* Uncomment the section in `build.gradle`:

```
/* section WordAtPageTFIDF */
ext.hadoopSubDir = 'hadoop'
ext.hadoopApplicationName = 'WordAtPageTFIDF'
ext.hadoopMainClassName = 'com.clqb.app.WordAtPageTFIDF'
```

* Modify the task `runTFIDF_Phase_3` accordingly.
* Run the task:

```
gradle runTFIDF_Phase_3
```
or use GUI in your IDE.


### Build index with elasticsearch
* First make sure your elasticsearch server(s) are serving. Go to `http://your_elasticsearch_host:9200` to see if you get the json response.
* Ucomment the section in `build.gradle`:

```
/* section ElasticSearch */
ext.hadoopSubDir = 'hadoop'
ext.hadoopApplicationName = 'ElasticSearch'
ext.hadoopMainClassName = 'com.clqb.app.ElasticSearch'
```

* Comment all other sections.
* Modify the task `runElasticSearch` accordingly.
* Run the task:

```
gradle runElasticSearch
```
or use GUI in your IDE.


 

