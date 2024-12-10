import java.net.InetAddress;
import java.net.UnknownHostException;

public class InetAddressDemo{
    public static void main(String args[]){
	try{
	InetAddress in=InetAddress.getByName("www.psit.ac.in");
	System.out.println(in.getHostAddress());
	System.out.println(in.getHostName());
	System.out.println(in);
	
	InetAddress in1[]=InetAddress.getAllByName("www.google.com");
	System.out.println(in1.length);
	}
	catch(Exception e){
	System.out.println("From Exception");
	}
    }
}

