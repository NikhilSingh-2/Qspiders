// for(let i=1;i<=5;i++)
// {
//     console.log("hello ",i);
//     // console.log("hi")
// }

// calculate the sum of n natural numbers
// let num= prompt("Enter the number upto which you wants sum");
// let sum=0;
// // for loop
// for (let i=1;i<=num;i++)
// {
//     sum += i;
// }
// console.log("using for loop sum upto ",num,"is",sum);
// sum=0;
// num=parseInt(num);
// let n=num;

//while loop
// while(num>0)
// {
// sum += num;
// num=num-1;
// }
// console.log("using while loops sum upto",num,"is",sum);

// //do while loop
// sum=0;
// do{
//     sum=sum+n;
//     n=n-1
// }while(n>0);
// console.log("using do-while loop sum upto",n,"is",sum);

// for-of loop
let str="apple banana";
for (let i of str)
{
    console.log("i =",i);
}

// calculate the length of the string
str="lakfjlksajdfl asldfjlasj slafj";
let count=0;
for (i in str)
{
    count++;
}
console.log(" length =", count);

// for - in loop
let student={
    name : "rahul kumar",
    age:10,cgpa:7.5,ispass:true

}
for (let key in student)
{
    console.log("key=",key,"value =",student[key]);
}

// practise question -> print the even number from 0 to 100
// let nu=100;
// for (let i=1;i<=100;i++)
// {
//     if(i%2===0){
//     console.log(i);}
// }

const animal={
    name:"bird",
    fly:'yes',
    weight:5
}
for (let i in animal){
console.log("key=",i,"value=",animal[i]);
// console.log(animal[i]);
}

// practise question2 -> create a game where you start with any random game number.ask the user to keep quessing the number until the user enter  correct value
let gameNumber=25;
// let chance=3;
// while(chance>=0){
//     let num=parseInt(prompt("Guesss the game number "));
//     console.log("num=",num,typeof num);
//      if(num===gameNumber){
//         console.log("finally you guessed it right");
//         break;
//     }
//     chance--;
// }

//unlimited chances
// let userNum=prompt("Guess the game number");
// while( userNum!=gameNumber)
// {
//     userNum=prompt("You entered wrong number, guess again");
// }
// console.log("Congratulations you guessed it right!!")

/////////////////////////////////////////////////////////
// String-literals
let str2="Nikhil";
// in- built property:- length
console.log("length of",str2,"is",str2.length);
console.log("str[2]",str2[2]);
let obj={item:"pen",price:10}
let output=`the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
console.log("The cost of",obj.item,"is",obj.price,"rupees")

