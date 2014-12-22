package com.clqb.utils;

import org.apache.hadoop.io.MapWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.io.Writable;
import org.w3c.dom.*;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.ByteArrayInputStream;
import java.io.IOException;

public class XmlUtils {
    public static MapWritable XmlTextToMapWritable(Text text) throws ParserConfigurationException, IOException, SAXException {
        Document doc = DocumentBuilderFactory
                .newInstance()
                .newDocumentBuilder()
                .parse(new InputSource(new ByteArrayInputStream(
                        text.toString().getBytes("utf-8"))));
        MapWritable rootMap = new MapWritable();
        Element rootElement = doc.getDocumentElement();
        rootMap.put(new Text(rootElement.getNodeName()),
                nodeToWritable(rootElement));
        return rootMap;
    }

    public static Writable nodeToWritable(Node node) {
        NodeList childNodes = node.getChildNodes();
        NamedNodeMap attributes = node.getAttributes();
        if ((childNodes == null || childNodes.getLength() == 0) &&
                (attributes == null || attributes.getLength() == 0)) {
            return new Text(node.getTextContent());
        } else {
            MapWritable map = new MapWritable();
            if (childNodes != null) {
                for (int i = 0; i < childNodes.getLength(); i++) {
                    Node childNode = childNodes.item(i);
                    if (childNode.getNodeType() == Node.ELEMENT_NODE) {
                        map.put(new Text(childNode.getNodeName()),
                                nodeToWritable(childNode));
                    }
                }
            }
            if (attributes != null) {
                for (int i = 0; i < attributes.getLength(); i++) {
                    Node attribute = attributes.item(i);
                    map.put(new Text(attribute.getNodeName()),
                            new Text(attribute.getTextContent()));
                }
            }
            if (map.isEmpty()) {
                return new Text(node.getTextContent());
            } else {
                return map;
            }
        }
    }
}
