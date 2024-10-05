let div=document.querySelector('div');
console.log(div);
let id=div.getAttribute('id');
console.log(id);
let j=document.querySelector("#box")
console.log(j);
let name1=j.getAttribute('name');
console.log(name1);
let p=document.querySelector(".para").getAttribute('class');
console.log(p);
let ca=document.querySelector("p")
console.log(ca);
ca.setAttribute("class",'newclass');
console.log(ca.getAttribute('class'));

// =======================================================
let div1=document.querySelector('div');
console.log(div1.style);
div1.style.backgroundColor='lightgreen';
div1.style.fontSize="30px";
// div1.innerText="hello!";

// =============================================
let newBtn=document.createElement('button');
newBtn.innerText="clickme";

let myd=document.getElementById("mydiv");
console.log(myd);
// myd.append(newBtn);
myd.style.backgroundColor="blue";
myd.style.color="white";
myd.style.border="3px solid hotpink";
myd.style.borderRadius="5px";
// myd.prepend(newBtn);
// myd.before(newBtn);
myd.after(newBtn);


let newheading=document.createElement('p');
newheading.innerHTML='<h2> <i> Hello this is new heading</i> </h2>';
let bd=document.querySelector('body');
bd.prepend(newheading);

let para=document.querySelector('.newclass');
console.log(para);
para.remove()







