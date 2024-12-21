package Oops2;

class A{
    public A(){
        System.out.println("in A");
    }
}

class B extends A{
    public B() {
        super();
        System.out.println("in B");
    }
    public B(int n) {
        this();
        System.out.println("in B int");
    }
}
public class ThisSuper {
    public static void main(String[] args) {
        B obj = new B(5);
    }
}
