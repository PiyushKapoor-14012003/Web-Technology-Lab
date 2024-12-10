import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.net.UnknownHostException;

public class DataGPacketSender{
    public static void main(String[] args) throws IOException{
	//TODO Auto-generated method Stub
	String str;
	DatagramSocket dst1=new DatagramSocket();
	String temp ="Hello how r u";
	InetAddress ip=InetAddress.getByName("localhost");
	DatagramPacket dp1=new DatagramPacket(temp.getBytes(),temp.length(),ip,3000);
	dst1.send(dp1);
	dst1.close();
}
}