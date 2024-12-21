package Oops2;

abstract class A {
    abstract void show1();

    public void show() {
        System.out.println("In B");
    }

}

class B extends A {

    public void show1() {
        System.out.println("In A");
    }
}

public class AbstractCl {
    public static void main(String[] args) {
        A obj = new B();
        obj.show();
        obj.show1();
    }
}
