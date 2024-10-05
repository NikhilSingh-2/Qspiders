function myFunction() {
    console.log("welcome to web tech classes");
}
myFunction();

function fun2(msg) // parameter
{
    console.log(msg);
}
fun2("i love js"); // argument fun2("hello" * 2); // NaN- error not a number

// function to calculate sum of two numbers
function sum(x, y) {
    console.log("x+y", x + y);
}
sum(234, 56);

function sum1(x, y) {
    s = x + y;
    return s;// return statement can be used only one time
    console.log("hello"); // unreachable code
}

console.log(sum1(23, 43));

// create a function using the "function" keyword that two a string as an argument & returns the number of vowels in the string

function vow(string1, string2) {
    let count = 0;
    for (i of string1) {
        for (j of 'aeiou') {
            if (i == j) {
                count++;
            }
        }
    }

    for (i of string2) {
        for (j of 'aeiou') {
            if (i == j) {
                count++;
            }
        }
    }

    return count;
}
str1 = 'a this is a sample to test the vowels';
str2 = 'i hello world how are you dear';
console.log("vowels=",vow(str1, str2));

//create a function using the "arrow function " that two  a string as an argument and return the number of vowels in the string
const c= (string1,string2)=>{
    let count = 0;
    for (i of string1) {
        for (j of 'aeiou') {
            if (i == j) {
                // console.log(i, j);
                count++;
                // console.log(count);
            }
        }
    }

    for (i of string2) {
        for (j of 'aeiou') {
            if (i == j) {
                // console.log(i, j);
                count++;
            }
        }
    }

    return count;
}
console.log("total no. of vowels using arrow function",c(str1,str2));

// forEach(value,idx,arr){}

// Wap to for a given array of numbers , print the square of each value using the forEach()loop.
let num=[1,2,3,4]
num.forEach((n)=>{
    console.log("square is",n*n);
})

// array map method to create a new array from a method
let arr1=[63,34,69,70];
let arr2=arr1.map((val)=>{
    console.log(val);
    return val*5;
})
console.log("Map new array=", arr2);

// other important array method (filter)
// program to create a even array using the filter method
let arr=[1,2,3,4,5,6,7,8,9];
let even_arr=arr.filter((val)=>{
    console.log(val);
    return val%2===0;// condition
})
console.log("array using filter method=",even_arr);

// other important array method is (reduce)
const arr3=[1,2,3,4];
// 0+1+2+3+4
// const initial_value=0;
// const sumWithInitial= arr3.reduce((accumulator,currentvalue)=>{
//     accumulator+currentvalue,initialvalue
// })
// console.log(sumWtihInitial);

const output=arr3.reduce((res,current)=>{
    return res+current;
})      // arr.reduce((previousval,currentval)=>{})
console.log("sum using reduce method()",output);

// wap to find the maximum element from a array using the reduce method
const arr4=[2,50,3,10,68,7];
let max=arr4.reduce((pre,cur)=>{
    // if(pre>cur){return pre;}
    // else{return cur;}
    // simple way
    return pre>cur?pre:cur
})
console.log("max element using the arr.reduce method is=",max);

// practise question- we are given array of marks of students. Filter out of the marks of Students that scored 90+
let marks=[50,68,72,90,91,92,95,99,100]
let marks90=marks.filter((m)=>{
    if (m>90){
        return m;
    }
})
console.log("marks greater than 90 are",marks90);

// take a number n as input from user. 
// Create an array of numbers from 1 to n. 
// use the reduce method to calculate sum of all numbers in the array. 
// use the reduce method to calculate product of all numbers in the array

let numb=prompt("enter a number up to which u want sum and product");
let arr5=[];
for(let i=1;i<=numb;i++)
{
arr5.push(i);
}
const suma=arr5.reduce((pre,cur)=>
{
    return pre+cur;
})
console.log("Sum of array =",suma);
const prod=arr5.reduce((p,c)=>
{
    return p*c;
})
console.log("product of array is=", prod);