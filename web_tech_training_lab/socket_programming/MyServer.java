import java.io.*;
import java.net.*;

class MyServer {
    public static void main(String a[]) {
        try {
            ServerSocket ss = new ServerSocket(3333);
            Socket s = ss.accept();

            DataInputStream ds = new DataInputStream(s.getInputStream());
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            DataOutputStream dout = new DataOutputStream(s.getOutputStream());

            String str1 = "";
            String str2 = "";

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}