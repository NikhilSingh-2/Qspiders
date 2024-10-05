const URL = "https://cat-fact.herokuapp.com/facts";
const button = document.querySelector("#btn");
const para = document.querySelector("#fact");


// using async and await
const getFacts = async () => {
    console.log("getting DAta....");
    let response = await fetch(URL);
    console.log(response); // json format
    // console.log(response.status);
    let data=await response.json();
    console.log(data);
    // console.log(data[0].text);
    let fct=data[parseInt(Math.random(6)*6)].text;
    para.innerText=fct;   
}

// using promise chain
// async function getFacts() {
//     let data = await fetch(URL).then((response) => {
//         return response.json();
//     })
//     para.innerText = data[parseInt(Math.random(6) * 6)].text;
// }
button.addEventListener('click', getFacts);


// getFacts();

// (async()=>{
// let response=fetch(URL);
// console.log(response);
// })();

// ===========================================
// fetch API-> the fetch api provides an interface for fetching (sending/receiving) resources.
// It uses Request and Response objects.
// the fetch() method is used to fetch a resource(data)
// let promise=fetch(URL,[options]) -> default fetch request is of type Get request which is used max time


// ===============================================================
// Understanding Terms
// AJAX: is Asynchronus JS & XML
// JSON: is JavaScript Object Notation
// JSON(): method() returns a second promise that resolves with the result of parsing the response body text as JSON.(input is JSON, output is JS object)

// step to use the fetched data is , the data that we receive is in the form of JSON format.
// step1. Response(JSON)
// step2. convert to JS object using JSON() method
