// let btn=document.createElement('button');
// btn.innerText='Click me';
// btn.style.color='white';
// btn.style.backgroundColor="red";
// btn.style.borderRadius='5px';
// let bd=document.querySelector('body');
// console.log(bd);
// bd.prepend(btn);

// ================================
// Question 2;
// let para1=document.createElement('p');
// para1.innerText='Hey this is a sample para..';
// let bod=document.querySelector('body');
// para1.setAttribute('class','new_class');
// bod.prepend(para1);

let par=document.querySelector('.myclass');
console.log(par);
console.log(par.classList);
par.classList.add('new_class');
par.classList.add('class1');
par.classList.remove('class1');
console.log(par.classList);

