// /* Strings in java script There are inbuilt methods to facilitate string
// Strings are immutable
// 1. length is by default calculated of every string to use it ( str.lenght  )
// 2.str.toUpperCase()- it convert str to capital 
// 3.str.toLowerCase()- it convert str to lowercase
// 4. str.trim() -> it removes whitespaces from the begining and ending of the string
// 5.str.slice(start,end);
// 6.str1.concat(str2)
// 7.str.replace(searchval,newval)
// 7.str.replaceAll(searchval,newval)
// 8.str.charAt(idx);
// */
// let str="  Web Development   ";
// console.log("print str=",str);
// console.log("Length=",str.length);
// console.log("To  upper case=",str.toUpperCase());
// console.log("to lower case=",str.toLowerCase());
// console.log("trim =",str.trim());
// console.log("slice(4,9)=",str.slice(4,9));
// console.log("slice(4) =",str.slice(4));


// let str1="hello Friends";
// let str2="how are you";
// console.log("concat =",str1.concat(" k ",str2));
// console.log("str2.replace('h','v')=",str2.replace("h","v"));
// str="helololo"
// console.log("replaceAll('lo','p')",str.replaceAll("lo","p"));
// console.log("char at=",str2.charAt(0));
// // console.log(str1)
// // console.log(str2)

// // practise question -> prompt the user to enter their full name. Generate a username for them based on the input. Start username with @ , followed by their full name and ending with the fullname length.
// let fname=prompt("Enter your full name to get your username");
// let username=fname.replace(" ","_");
// username="@"+username+username.length;
// console.log("your username is =",username);

// Arrays - collection of related items ///
// arrays are mutable
//arrays are iterable
//iterables(strings ,arrays,objects);
let marks=[96,95,85,70,73];
console.log(marks);
console.log("Length of marks",marks.length)
console.log(marks[3]);
for ( i in marks){
    console.log('marks=',i);
}

marks[2]=40;// allowed
console.log(marks);

// looping over an array
let heroes=["ironman","thor","hulk","shaktiman","spiderman","antman"];
console.log(typeof heroes);
for( i=0;i<heroes.length;i++)
{
console.log("Hero",i+1,heroes[i]);
}

// for(let i of heroes){
    // console.log(i.toUppercase);
// }

//practise question-> for a given array with marks of students-> [85,97,44,37,76,60]. find the average marks of the entire class
let mark=[85,97,44,37,76,60]
let avg=0;
for(m of mark)
{
    avg=avg+m;
}
avg=avg/mark.length;
console.log(`Average=${avg}`);


/// practise question-> for a given array with prices of 5 items -> [250,645,300,900,50]all the items have an offer of 10% on them . Change the array to store final price after applying offer
let items=[250,645,300,900,50]
for (let i=0;i<items.length;i++)
{
    let update=items[i]-(items[i]*0.1);
    console.log(`price=${update}`);
    items[i]=update;
}
console.log(items);

// Array methods-> 1.push():add to end 2.pop():delete from end and return3.toString():converts array to string
let food=["potato","apple","litchi","tomato"];
food.push("chips","brownie");
console.log(food);
let del=food.pop();
console.log(del);
let str=food.toString();
console.log(str);

// methods:- concat():joins multiple arrays and return result , unshift():add to start just like push, shift():delete from start & return like pop
let arr1=[1,2,3,4];
// console.log(arr1);
let arr2=[5,6,7,8,9]
let conarr=arr1.concat(arr2);
console.log(conarr);
console.log(conarr.length);
arr1.unshift(20);
console.log(arr1);
console.log(arr1.shift());

//methods-> slice(): returns a piece of the array; splice() slice(strtldx,delcount):change orignal array;(add.remove,place);
