package com.clqb.utils;

import org.apache.hadoop.io.MapWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.io.Writable;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.xml.sax.SAXException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.ByteArrayInputStream;
import java.io.IOException;

public class XmlUtils {
    public static MapWritable xmlTextToMapWritable(Text text) {
        MapWritable map = null;
        try {
            DocumentBuilder domBuilder = DocumentBuilderFactory.newInstance().newDocumentBuilder();
            Document doc = domBuilder.parse(new ByteArrayInputStream(text.getBytes()));
            Element root = doc.getDocumentElement();
            Node page = root.getChildNodes().item(0);
            parseNode(page, map);
        } catch (ParserConfigurationException e) {
            e.printStackTrace();
        } catch (SAXException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    private static void parseNode(Node parent, Writable content) {
        if (parent.hasChildNodes()) {
            content = new MapWritable();
            for (Node node = parent.getFirstChild();
                 node != null;
                 node = node.getNextSibling()) {

                Writable nodeContent = null;
                parseNode(node, nodeContent);
                ((MapWritable) content).put(
                        new Text(node.getNodeName()),
                        nodeContent);
            }
        } else {
            content = new Text(parent.getNodeValue());
        }
    }
}
