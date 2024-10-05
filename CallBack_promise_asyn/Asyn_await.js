console.log("Hello");
function getData(dataId,sp){
    return new Promise((resolve,reject)=>{
        console.log("Fetching Data",dataId,"....");
        setTimeout(()=>{console.log("data",dataId);
        resolve("data received");
        if (sp){
            console.log("No more data to fetch!!");
        }
        },4000)
    })
};

const fun2 =()=>{
    // setTimeout(()=>{console.log("This is another data from different api");})
    console.log("This is another data from different api");
    
}

//how to use async and await keywords-> they both are used to control the flow of calling a function
// async function GetAllDATA(){
//     await getData(1);
//     await getData(2);
//     // await fun2(); // no effect on the execution of the function only the order will be maintained
//     await getData(3,"stop");
// }
// GetAllDATA();

// We have to create async function in which we have to define the pattern of calling functions with a keyword await in front of them .
// ===================================================================


// to avoid the unnessasary calling of the asyncFunction we have a alternative whichis IIFE
// IIFE :-  Immediately Invoked Function Expressing
// IIFE is a function that is called immediately as soon as it is defined.
// Three ways to write IIFE function are  ()();
// 1. (function(){console.log("firstway");})();
// 2. (()=>{console.log('second way');})();
// 3.(async ()=>{console.log('third way');})();
// 4.(async function (){console.log("fourthway");})();

// example of using IIFE

(async ()=>{
    await getData(1);
    await getData(2);
    await getData(3,"stop");
})();

// no need to call a addtional function GetAllData();