console.log("hello world");
// alert("me");
// document.write("this is document write")

//javascript console api
console.log("hello world", 4 + 6, "another log");
console.warn("this is a warning");
console.error("this is an error");
console.assert(4 == (8 - 4));

//javascript variables
//what are variables?- containers to store data values
/*multiline comment*/
var number1 = 34;
var number2 = 56;
console.log(number1 + number2);
//4.Data types in javascript
//numbers
var num1 = 455;
var num2 = 56.75;

//strings
var str1 = "this is a string";
var str2 = 'this is also a string';

//objects
var marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.977
}
console.log(marks);

//booleans
// var a = true;
// var b = false;
// console.log(a, b);

//var udn = undefined;
// var und;
// console.log(und);

// var n = null;
// console.log(n);

/*At a very high level, there are two types of date types in JS
1.primitive data type: undefined, null, number, string, booolean,symbol
2.Reference data types: Arrays and objects
*/
// var arr = [1, 2, 3, 4, 5, "Bablu"];
// console.log(arr);

//operators in javascript
//arithmetic operators
// var a = 100;
// var b = 10;
// console.log("the value of a + b is", a + b);
// console.log("the value of a - b is", a - b);
// console.log("the value of a * b is", a * b);
// console.log("the value of a / b is", a / b);

//assignment operators
// var c = b;
// c += 2;
// console.log(c);

//comparision operator
// var x = 56;
// var y = 48;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

//logical operators
//logical and
// console.log(true && true);
// console.log(false && false);
// console.log(true && false);

//logical or
// console.log(true || true);
// console.log(true ||  false);
// console.log(false || false);

//logical not
// console.log(!false);
// console.log(!true);

//JavaScript Function

// function avg(a, b) {
//     return(a + b)/2;
// }

//DRY = Do not repeat yourself
// c1 = avg(4, 6);
// c2 = avg(14, 16);
// console.log(c1,c2);

//conditionals in javascript
// var age = 34;
// if(age > 8) {
//     console.log('you are not a kid');
// }
// else{
//     console.log("you are a kid");
// }

//if-else ladder
// if (age > 32) {
//     console.log("you are not a kid");
// } else if (age > 26) {
//     console.log("bacche mahi rahe");
// } else if(age > 22) {
//     console.log("yes bacche nahi rahe");
// } else {
//     console.log("yes you are a kid");
// }
// console.log("end of ladder");

//exercise 
function can_drink(age) {
    if (age > 8) {
        console.log("can drink rasna");
    } else {
        console.log("only can drink water");
    }
}
var age = 6;
can_drink(age);

//loops
var arr = [1, 2, 3, 4, 5];
// console.log(arr);
// for (var i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }
// arr.forEach(function(element){ //forEach loop
//     console.log(element);
// })

// const ac =0;
// ac++;

// let j = 0;
// while (j < arr.length) {
//     console.log(arr[j]);
//     j++;
// }

// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length); 

//break and continue

for (var i = 0; i < arr.length; i++) {
    if (i == 2) {
        //break;
        continue;
    }
    console.log(arr[i]);
}

let myArr = ["Fan", "camera", 34, null, true];
//Array Methods
console.log(myArr.length);
//myArr.pop();
//myArr.push("Goobles");
//  myArr.shift();
// console.log(myArr.unshift("Boo"));
// console.log(myArr);
// myArr.toString();
// myArr.sort();

//String Methods
// let myLoveString = "Harry is a good boy";
// console.log(myLoveString.length);
// console.log(myLoveString.indexOf("good"));
// console.log(myLoveString.lastIndexOf("good"));
// console.log(myLoveString.slice(1, 3));
// let d = myLoveString.replace("Harry", "madhu");
// console.log(d, myLoveString);

let myDate = new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());

//DOM Manipulation
let ele = document.getElementById('click');
console.log(ele);

let ele2 = document.getElementsByClassName("container");
console.log(ele2);
// ele2[0].style.background = "yellow";
ele2[1].style.background = "pink";
ele2[0].classList.add("bg-primary");
