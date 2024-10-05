const student = { 
    fullname:'nikhil singh',
    marks:95.6,
    printmarks : function(){
        console.log("marks= ",this.marks);
    },
};

// this -> is used to refer to the current object this in above example means student.marks

let arr=["apple","mango","banana"];
// console.log(arr);
// console.log(typeof (arr));
arr.push("litchi");
// console.log(arr);


const employee={
    calcTax1(){
        console.log("tax rate is 10%=", this.salary*0.1);
    },

    calcTax2 : function () {
        console.log("tax rate is 20%=", this.salary-this.salary*0.2);
    }

}

const karan={
salary : 50000,
};
console.log(karan);
karan.__proto__ = employee;
console.log(karan);
karan.calcTax1()
karan.calcTax2()


