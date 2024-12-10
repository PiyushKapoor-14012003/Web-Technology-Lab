import java.io.*;
public class BeanStarter{
    public static void main(String [] args){
    /*CustomerBean cb1=new CustomerBean();
    CustomerBean cb2=new CustomerBean();
    cb1.setName("Aman");
    cb1.setAge(21);
    cb2.setName("Shubhram");
    cb2.setAge(21);
    System.out.println(cb1.getName()+" "+cb1.getAge());
    System.out.println(cb2.getName()+" "+cb2.getAge());
*/   
    CustomerBean cb1=new CustomerBean("Tom", 20);
    try{
    FileOutputStream fs1=new FileOutputStream("Customer.ser");
    ObjectOutputStream ob1=new ObjectOutputStream(fs1);
    ob1.writeObject(cb1);
    ob1.close();
    fs1.close();
    System.out.println("Customer bean is now Serialized");
    }
    catch(Exception e){
    e.printStackTrace();
    }
    //DEserialization
    CustomerBean cb1;
    try{
    FileInputStream fin1=new FileInputStream("Customer.ser");
    ObjectInputStream obin1=new ObjectInputStream(fin1);
    cb1=obin.
    obin1.close();
    fin1.close();
    System.out.println("Customer bean is now DeSerialized");
    }
    catch(Exception e){
    e.printStackTrace();

}
}