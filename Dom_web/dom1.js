
function change(){
    let text=document.querySelector('h2').innerText;
    console.log(text);
    document.querySelector('h2').innerText=text+" Apna College Students ";
}
let div=document.querySelectorAll(".box");
console.log(div.length);
for(let i =0;i<3;i++){
    console.log(div[i].innerText);
    let val=prompt("add something for div "+(i+1));
    div[i].innerText=val;
}

