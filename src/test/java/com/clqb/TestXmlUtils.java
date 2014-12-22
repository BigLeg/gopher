package com.clqb;

import com.clqb.app.ElasticSearch;
import com.clqb.utils.XmlUtils;
import org.apache.hadoop.io.MapWritable;
import org.apache.hadoop.io.Text;
import org.junit.Test;
import org.xml.sax.SAXException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;

public class TestXmlUtils {

    @Test
    public void testDomBuilder() throws ParserConfigurationException, IOException, SAXException {
        String docStr = "<page>\n" +
                "    <title>AccessibleComputing\n\n</title>\n" +
                "    <ns>0</ns>\n" +
                "    <id>10</id>\n" +
                "    <redirect title=\"Computer accessibility\" />\n" +
                "    <revision>\n" +
                "      <id>631144794</id>\n" +
                "      <parentid>381202555</parentid>\n" +
                "      <timestamp>2014-10-26T04:50:23Z</timestamp>\n" +
                "      <contributor>\n" +
                "        <username>Paine Ellsworth</username>\n" +
                "        <id>9092818</id>\n" +
                "      </contributor>\n" +
                "      <comment>add [[WP:RCAT|rcat]]s</comment>\n" +
                "      <text xml:space=\"preserve\">#REDIRECT [[Computer accessibility]]\n" +
                "\n" +
                "{{Redr|move|from CamelCase|up}}</text>\n" +
                "      <sha1>4ro7vvppa5kmm0o1egfjztzcwd0vabw</sha1>\n" +
                "      <model>wikitext</model>\n" +
                "      <format>text/x-wiki</format>\n" +
                "    </revision>\n" +
                "  </page>";
        DocumentBuilder domBuilder = DocumentBuilderFactory.newInstance().newDocumentBuilder();
        Text text = new Text(docStr);
        MapWritable mapWritable = XmlUtils.XmlTextToMapWritable(text);
        ElasticSearch.wikiPageTextToMapWritable(text);
    }
}