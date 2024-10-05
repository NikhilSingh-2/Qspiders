

function reverseNumber() {
    let num = document.getElementById("numberInput").value;
    let reversed = num.split('').reverse().join('');
    document.getElementById("result").innerText = reversed;
}


function fun(){
    console.log("Hello it is exegcuteredd;");   
    let name=document.getElementById("Name").value;
    let number=document.querySelector("#Num").value;
    let rev=number;
    console.log(typeof(rev)+"  "+rev.split("").reverse().join(""));
    // document.write(rev.split("").reverse("").join(""));


    console.log("Name="+name+"number"+number);
}