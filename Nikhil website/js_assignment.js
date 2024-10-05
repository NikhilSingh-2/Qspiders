// question 1- reverse a number
function reverseNumber(num) {
    let numStr = num.toString();
    let reversedStr = numStr.split('').reverse().join('');
    let reversedNum = parseInt(reversedStr);
    return reversedNum;
}

let number = 32243;
let reversedNumber = reverseNumber(number);
console.log("Reversed number:", reversedNumber);

// let number= 12345;
let st=number.toString();
let arr=st.split('');
console.log(st);
console.log("array before"+arr);
arr.reverse();
console.log("array after"+arr);
let st2=arr.join('');// join method is used with the arrays to return a string after joining them
console.log(st2);

// question 2- enter a string and print it in alphabetical order eg- kbdec -> bcdek
function alphastr(st)
{   st=st.split('');   
    st.sort();
    st=st.join("");
    return st;
}

let str1='webmaster'
console.log("alphabetical string => "+alphastr(str1));

//question 3- write a javascript function that accepts a string as a parameter and counts the number of vowels in it
function countVowel(st){
    let count = 0;
    for (i of st) {
        if ("aeiou".includes(i))
        {count++;}}
        return count;}

let str="The quick brown fox";
console.log("Number of vowel are = "+countVowel(str));

// console.log("ing".includes("i"));
// function countVowel(st)
// {
//     let vo=['a','e','i','o','u'];
//     let count=0;
//     for (i of st)
//     { 
//         // console.log(i);
//         // console.log(i);
//         // for(j in vo)
//         // { if( i===vo[j])
//         //     {
//         //         count++;
//         //     }
           
//         // }
//         if (vo.includes(i))
//         {count++;}

//     }
//     return count;
// }

//question 4- write a js function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
function capitalizeString(st) {
    st = st.split(' ');
    let st2 = '';
    for (i of st) { st2 = st2 + i.charAt(0).toUpperCase() + i.slice(1) + " "; }
    return st2.slice(0, st2.length - 1);
}
let str2="the quick brown fox";
console.log("String after capitalizing = "+capitalizeString(str2));

//question 5- write a java script program to calculate number of days left in christmas
// let d=Date();
const date=new Date();
let da=date.getDate();
let mo=date.getMonth()+1;
let yy=date.getFullYear();
let christ='25-12-2024';
let d1=
console.log("days remaining in christmas are");
// console.log(da);
// console.log(mo);
// console.log(yy);
//----------------------------------chat gpt---------------------------
// function daysUntilChristmas() {
//     // Get today's date
//     let today = new Date();

//     // Get the current year
//     let currentYear = today.getFullYear();

//     // Create a new Date object for Christmas of the current year
//     let christmas = new Date(currentYear, 11, 25); // Month is 0-based, so 11 is December

//     // If Christmas has already passed this year, set it to next year
//     if (today > christmas) {
//         christmas.setFullYear(currentYear + 1);
//     }

//     // Calculate the difference in milliseconds between today and Christmas
//     let timeDiff = christmas.getTime() - today.getTime();

//     // Convert the difference to days
//     let daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

//     // Return the number of days left until Christmas
//     return daysLeft;
// }

// // Example usage:
// let daysLeft = daysUntilChristmas();
// console.log("Days until next Christmas:", daysLeft);

//--------------------------------end--------------------------------

//question 6- write a java script program to calculate multiplication and division of two numbers

