package Oops2;


class A{
    public void show() {
        System.out.println("in show");
    }
    public void config() {
        System.out.println("in A config");
    }
}
class B extends A{
    // System.out.println()
    @Override
    public void show() {
        System.out.println("in B show");
    }
}

public class MethodOveriding {
    public static void main(String[] args) {
        B obj = new B();
        obj.show();
        obj.config();
    }
}
