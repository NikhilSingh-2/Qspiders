console.log("Hello");
// alert('hello');
// window.alert("hello2");
// console.log('accesing html tag' + window.document.all[0]);
console.log(window);
console.log(window.document);
console.dir(window.document);
console.dir(document.body);
console.log(document.body);
console.log("child node is=",document.childNodes[1]);
document.body.style.background='pink'
function chan(){
    console.log(document.body.childNodes[1].innerText='hello buddy!!!');
}
let t=document.getElementById("topic");
console.log(t);
console.dir(t);

// ==============================================
// accesing tag in javascript
console.log("accessing window objects");
console.log(window);
// console.log("window.document")== console.log(document);
// console.log(document);
console.log(document.body);

// ================================
let mydiv=document.getElementById('mydiv');
console.log(mydiv);
let mypara=document.getElementsByClassName('mypara');
console.log(mypara);
let mytag=document.getElementsByTagName('p');
console.log(mytag);
let firstEl=document.querySelector('#mybtn');
console.log(firstEl);
console.log(firstEl.textContent);
console.log(firstEl.tagName);
console.log(firstEl.innerText);
let hidd=document.querySelector('#hide');
console.log(hidd.innerText);
console.log(hidd.textContent);
// ==========================
console.dir(document.body.firstChild);
console.dir(document.body.lastChild);
console.dir(document.body.children);
let list=document.querySelector('ul');
console.log(list.innerText);
console.log(list.tagName);
console.log(list.innerHTML);
console.log(list.textContent);
