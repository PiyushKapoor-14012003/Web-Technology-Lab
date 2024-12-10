import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.SocketException;

public class DGPacketReciever{
     public static void main(String [] args)throws IOException{
	 DatagramSocket dst2=new DatagramSocket(3000);
	 byte []buff =new byte[1024];
	 DatagramPacket dp1= new DatagramPacket(buff,1024);
	 dst2.receive(dp1);
	 String str =new String(buff, 0, 1024);
	 System.out.println(str);

    }
}