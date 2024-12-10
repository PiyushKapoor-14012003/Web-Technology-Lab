import java.io.Serializable;

public class employee implements Serializable {
    private static final long serialVersionUID = 1L;

    private int empID;
    private String name;
    private double salary;
    private String designation;
    private String department;

    // Default Constructor
    public employee() {}

    // Parameterized Constructor
    public employee(int empID, String name, double salary, String designation, String department) {
        this.empID = empID;
        this.name = name;
        this.salary = salary;
        this.designation = designation;
        this.department = department;
    }

    // Getter and Setter for empID
    public int getEmpID() {
        return empID;
    }

    public void setEmpID(int empID) {
        this.empID = empID;
    }

    // Getter and Setter for name
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // Getter and Setter for salary
    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    // Getter and Setter for designation
    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    // Getter and Setter for department
    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }
}