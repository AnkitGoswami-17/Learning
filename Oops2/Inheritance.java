package Oops2;

class Calc{
    public int add(int n1, int n2) {
        return n1 + n2;
    }
    public int sub(int n1, int n2) {
        return n1 - n2;
    }
}

public class Inheritance {
    public static void main(String[] args) {
        VeryAdvCalc obj = new VeryAdvCalc();
        int r1 = obj.add(4,6);
        int r2 = obj.sub(6,4);
        double r3 = obj.power(2,4);
        System.out.println(r1+ " "+r2+" "+r3);
    }
}