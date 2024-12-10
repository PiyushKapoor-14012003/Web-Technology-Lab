import java.io.*;
import java.net.*;
public class URLDemo{
public static void main(String args[]) throws MalformedURLException{
    URL ul=new URL("http://psit.in:8880/index.jsp");
    System.out.println(ul.getFile());
    System.out.println(ul.getHost());
    System.out.println(ul.getPort());
    System.out.println(ul.getProtocol());
}
}