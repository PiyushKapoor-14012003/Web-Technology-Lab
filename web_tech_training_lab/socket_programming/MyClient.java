import java.net.*;
import java.io.*;
class MyClient{
public static void main(String args[]) throws Exception
{
        Socket s = new Socket("localhost",3333);
        DataInputStream din = new DataInputStream(s.getInputStream());
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        DataOutputStream dout = new DataOutputStream(s.getOutputStream());
        

        String str = "";
        String str2 = "";

        while(!str.equals("stop")){
            str = br.readLine();
            dout.writeUTF(str);
            dout.flush();
            str2 = din.readUTF();
            
        
            System.out.println("Server says : "+ str2);

        }
        
  dout.close();
}
}