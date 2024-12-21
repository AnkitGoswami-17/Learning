package Oops2;

class Human {
    private int age;
    private String name;

    public Human() {

    }

    public Human(int age, String name) {
        this.age = age;
        this.name = name;
    }



    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

public class Constructor {

    public static void main(String[] args) {
        Human obj = new Human(11,"Ankit");
        System.out.println(obj.getName() + " " + obj.getAge());
    }
}
