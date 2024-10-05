document.getElementById('btn1').onclick = (e) => {
    console.log("hello friends");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
    alert("it is btn1");
}

let bt2 = document.querySelector('#btn2');
bt2.ondblclick = (evt) => {
    console.log("btn2 was doubleclicked");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}

// ====================================================

let div1 = document.querySelector('#box');
//  console.log(div);
div1.addEventListener("mouseover", () => {
    console.log('div-handler1');
});

div1.addEventListener('mouseover', () => {
    console.log('div-handler2');
});
const handler3 = () => {
    console.log('div-handler3');
}
div1.addEventListener('mouseover', handler3);
div1.addEventListener('mouseover', () => {
    console.log('div-handler4');
});

div1.removeEventListener('mouseover', handler3);


// ======================================
// practise question 3  (my solution)
let mode_btn = document.querySelector('#mode');
// console.log(mode_btn);

let Chmod = () => {

    // console.log(mode_btn.innerText);

    if (mode_btn.innerText == 'dark') {
        let body = document.querySelector('body');
        body.style.backgroundColor = 'black';
        mode_btn.innerText = 'Light';
        return;
    }
    if (mode_btn.innerText == 'Light') {
        let body = document.querySelector('body');
        body.style.backgroundColor = 'white';
        mode_btn.innerText = 'dark';
    }
}
mode_btn.addEventListener('click', Chmod);


// ==========================================
// (Apna college solution)
