// console.log("welcome nikhil singh");
// console.log("Hello world");
// console.log("i love js");
// name="nikhil";
// age=24;
// k="test";
// x=null;
// console.log(x);
// y=undefined;
// console.log(y);
// boole=true;
// console.log(boole);
// a=10;
// b=20;
// sum=a+b;
// console.log(sum);

// =========================================================================
// three keywords to declare a variable-> var , const , let
// let -> it cannot be re-declared but can be updated and it is a scope variable;
// const-> it cannot be re-declared ,updated and need to be initialise while declaring it;
// var-> it can be re-declared and updated 
// let name="Nikhil singh";
// let age=24;
// let val=2.5;
// console.log(val);
// console.log(age);
// console.log(name);
// const pi=3.14;
// console.log(pi)
// let a; // undefined
// const b=10;
// console.log(a);
// console.log(b);


// ==================================================
// data types :- primitive-(number,string,boolean,undefined,null,BigInt,symbol) nonprimitive:- objects
let age=24.2;
console.log(typeof age);
// let age=8;// error  because of let
let name="nikhil";
console.log(typeof name);
let tvalue=true;
console.log(typeof tvalue);
let a;
console.log(typeof a);
let nill=null;
console.log(typeof nill);
let x=BigInt(121391231291242874812093);
console.log(typeof x);
let sym=Symbol('@');
console.log(typeof sym);

// non - primitive (objects - arrays and functions)
const student={
    name:"Nikhil",
    age:24,
    cgpa:8.6,
    isPass:true
};
console.log(student);
console.log(typeof student);
console.log("name =",student["name"]);
console.log("age =",student.age);

student['age']=student['age']+1;
student.name="nik";
console.log(student);

// if we add any number with a string it get concatinate with that string example:-
let st="abcd";
let num=1234;
let sn=st+num;
console.log(sn);

// ====================================
// chapter 2= operators and conditional statements
// Arithmetic operators -> + - * /
// modulus=%
// exponentiation= **
// unary operators -> increment ++ , decrement --
let b=7;
console.log(b++); // post increment 7
console.log(b);  // incremented here b=b+1; 8
console.log(++b);// incremented here b=b+1: 9

// ======================================================

// assignment and comparition operators
let c=1; 
c += 2;
console.log(c);
let d=3;
d **=2;
console.log(d);

a=5;
b=2;
console.log("5 == 2", a==b);
c="5";// string -> number implicitly
console.log("5 =='5'",a==c)
console.log("5 ==='5'",a===c)
console.log("5 === 2", a===b);
console.log("5!=2",a!=b);
console.log("5!==2",a!==b);
// comparision-: >,<,<=,>=

// logical operators
// logical and &&
// logical or ||
// logical not !

let num1=2;
let num2=3;
console.log(num1&&num2);
let cond1=a>b;
let cond2=a===b;
console.log("cond1 && cond2",cond1&&cond2);
console.log("cond1 || cond2",cond1||cond2);
console.log("!(cond1 && cond2)",!(cond1&&cond2));

if (num1>=3)
{
    console.log("you can vote");}
let age1=18;
if (age1>= 18)
{console.log(" you are eligible to vote");}
else{
    console.log("you cannot vote");
}
