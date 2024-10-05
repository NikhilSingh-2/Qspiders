let heroes =['ironman','shaktiman','hulk','thor'];
console.log(heroes);

let city=['Delhi',"Mumbai",'punjab','Gurgaon'];
// for of loop 
for(let citi of city)
{
    console.log(citi.toUpperCase());
}
// splice():- change orignal arry(add, remove,replace) -> splice(Startindx,delcount,newElements) 
// slice();- returns a sub string 
let num=[1,2,3,4,5,6,7,8];
console.log(num.slice(1,5));
console.log(num);
let li=num.splice(2,2,101,102); 
console.log(num);


// using splice to add two elements
num.splice(2,0,103);
console.log(num);

// splice example 
arr1=[0,1,2,3,4,5,6];

// delete three elements from index no .1
arr1.splice(1,3,7);
console.log(arr1);

// add two elements at index no 1
arr1.splice(1,0,101,102);
console.log(arr1);


// practise question 
// create a company list
let companies=['Bloomberg','Microsoft','Uber','Google','IBM',"Netflix"];
// remove first comapny -> -> pop or shift also
companies.shift();
// companies.splice(0,1);
console.log(companies);
// remove uber and add ola  
let count=0;
for (let i of companies)
{
    if(i === 'Uber')
    {
        break;
    }
    count++;
}
companies.splice(count,1,'Ola');
console.log(companies);
//add amazon at the end -> push- add element to the end, unshift-add element to the beigining/start
console.log(companies.length);
companies.splice(7,0,'amazon');
console.log(companies);

// remove the first company from the array -> pop- remove from the last/end , shift- delete from start
companies.shift();
console.log(companies);



