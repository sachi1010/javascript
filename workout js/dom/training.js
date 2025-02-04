const box1=document.getElementById("box1");
console.log(box1);

const divs=box1.querySelectorAll("div");
console.log(divs);

const evendivs=box1.querySelectorAll("div:nth-of-type(odd)");
console.log(evendivs);

for (let i=0;i<evendivs.length;i++){
    evendivs[i].style.backgroundColor="yellow";
     evendivs[i].style.width="200px";
     evendivs[i].style.color="red";   
}

const div=box2.querySelectorAll("div:nth-of-type(odd)");
console.log(div);

for (let i=0;i<div.length;i++){
     div[i].style.backgroundColor="red";
     div[i].style.width="400px";
     div[i].style.color="yellow";
     div[i].style.display=""
}


function addition(){
    const a=document.getElementById("num1").value;
    console.log(a);
    const b=document.getElementById("num2").value;
    console.log(b);
   const result=document.getElementById("addition");
   result.value=Number.parseInt(a) + Number.parseInt(b);
}
function reset(){
     document.getElementById("num1").value=" ";
     document.getElementById("num2").value=" ";
     document.getElementById("addition").value=" ";
}