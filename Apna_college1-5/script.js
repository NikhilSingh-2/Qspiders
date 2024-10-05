// find out odd and even number
let num=7;
if (num%2===0)
{
    console.log(num," is a even number");
}
else{
    console.log(num,"is a odd number");
}

let age=24;
if (age<18){
    console.log("junior");
}
else if (age>=60)
{
    console.log("senior");
}
else{
    console.log("middle");
}

// **********  Ternary operators ***********
// condition ? true output : false output  | example->
age>18 ? console.log("-> adult") : console.log("not adult");

age=17;
++age>=18 ? console.log("true") : console.log("false");

// we can store the result of the ternary operator in a variable:-
let num1=3;
let num2=10;
let result=num1 & num2 ? num1 : num2;
console.log("result is ", result);
result =10>2 ? 12>3 ? 12 : 5 : 2;
console.log("result2",result);

// ================================================================

// Switch case ( alternative of if-else chain);
const animal="dinosaur";
switch(animal)
{
    case "giragge":
        case "pig":
            console.log("pig");
            case "dog":
                case "cow":
                    console.log("not distinct");
                    default : console.log(animal, " is not distinct");
                    break;
                case "dinosaur":
                    console.log(animal ,"is distinct");
                case "dodo":
                    console.log(animal, "is disctinct bird");
}

// check whether the input no. is a multiple of 5 or not
// let num3=prompt("enter a number");
// console.log(num3%5===0 ? "it is a multiple of 5" : "it is not a multiple of 5");

// give grades to the student according to the marks entered by them 
let marks= prompt("Enter your marks to get the grade");
if(marks>=80)
{
    console.log("A grade");
}
else if (marks<=79 && marks>=70)
{
    console.log("B grade");
}
else if (marks<=69 && marks>=60)
{console.log("C grade");
}
else if (marks<=59 && marks>=50)
{
    console.log("D grade");
}
else{
    console.log("E");
}
// marks=parseInt(marks);
// console.log(typeof marks);
// switch(marks)
// {   
//     case (marks>='80'):
//         console.log("A grade");
//         break;
//     case (marks>70 && marks<79):
//         console.log("B grade");
//         break;
//     case (marks>60 && marks<69):
//         console.log("C grade");
//         break;
//     case (marks>50 && marks<59):
//         console.log("D grade");
//         break;
//     default : 
//     console.log("Enter valid marks between 0-100");
//     break;
//     case (marks>0 && marks<49):
//         console.log("F grade");
// }

