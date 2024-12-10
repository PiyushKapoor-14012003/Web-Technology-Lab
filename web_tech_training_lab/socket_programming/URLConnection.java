import java.io.*;
import java.net.*;

public class URLConnectionDemo{
    public static void main(String args[])throws MalformedURLException{
        URL ul=new URL ("https:// psit.ac.in");
        System.out.println(ul.getProtocol()):
	HttpURLConnection hurc=(HTTPURLConnection)ur.openConection();
	System.out.println("Content Type "+hurc.getContentType());
	System.out.println("Last Modified: "+hurc.getLastModified());
	System.out.println("Expiration: "+hurc.getExpirtaion());
	System.out.println("Content Length: "+hurc.getContentLength());
	System.out.println("Content: "+hurc.getContent());
   }
}