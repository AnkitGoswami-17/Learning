class Human{
    private int age;
    private String name;

    public int getAge() {
        return age;
    } 

    public void setAge(int a) {
        age = a;
    }

    public String getName() {
        return name;
    }

    public void setName(String n) {
        name = n;
    }
        
}

public class Encapsualtion {
    public static void main(String[] args) {
        Human obj = new Human();
        // obj.age = 11;
        // obj.name = "Ankit";
        obj.setAge(11);
        obj.setName("Ankit");
        System.out.println(obj.getName() + " " + obj.getAge());
    }
}