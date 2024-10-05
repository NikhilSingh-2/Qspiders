// let promise=new Promise((resolve,reject)=>{
//     console.log("i am a promise");
//     // resolve("success");
//     reject("some issue occured");
// })
// console.log(promise);// promise state- pending

// ======================================================================================================

// promise states -> pending, fulfilled(resolved),reject

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data= ",dataId);
//             resolve("Data received");
//             if(getNextData){
//                 getNextData();
//             }
//             console.log(fv);
//         },5000);

//     });

// }

// let fv=getData(123);
// console.log(fv);


// getData(123,()=>{getData(12)});   

// =======================================================================================================

// how to use promises -> we can handle only two states that are (1.fulfilled, 2.reject)
// we use .then() and .catch() with out promise to handle them
// syntax-> Promise.then((res)=>{...})
// Promise.catch((err)=>{...})

// const getpromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("i am a promise");
//         // resolve("successful delivery");
//         reject("Network Error");
//     })
// }

// let promise = getpromise();
// promise.then((res) => {
//     console.log("promise state=", res);
// })

// promise.catch((er) => {
//     console.log("rejected due to", er);
// })


// ======================================================================================
// Promise Chain example1

// function asyncFun1(){
//     console.log("Fetching data1...");
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data1");
//             resolve("Successfull data1");
//         },4000)
//     })
// }

// function asyncFun2(){
//     return new Promise((resolve,reject)=>{
//         console.log("Fetching data2...");
//         setTimeout(()=>{
//             console.log("Data2");
//             resolve("sucess data2");
//         },4000)
//     })
// }

// asyncFun1().then((res)=>{
//     console.log(res);
//     asyncFun2().then((res)=>{
//         console.log(res);
//     })

// })

//promise chain example2 of callback hell problem

function getData(dataId){
    return new Promise((resolve,reject)=>{
        console.log("Fetching Data",dataId,"....");
        setTimeout(()=>{console.log("data",dataId);
        resolve("data received");
        },4000)
    })
};

// getData(1).then(()=>{
//     getData(2).then(()=>{
//         getData(3).then((res)=>{
//             console.log(res);
//         })
//     })
// });

getData(1).then(()=>{
    return getData(3).then(()=>{
        return getData(2).then((res)=>{
            console.log(res);
            console.log("NO more data to fetch !!");
        })
    })
})