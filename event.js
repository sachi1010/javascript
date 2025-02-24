

// function Something(){
//     alert("this is a function");
// }
// h1.addEventListener("click",Something);
// h1.removeEventListener("click",Something)


// h1.addEventListener("click",(event)=>
// {
//     console.log(event.target);
//     event.target.textContent="this is a new text";
// }
// );

document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState==="complete")
        {
            
            console.log("complete");
            afterpage();
        }
});

const afterpage=()=>{
   const page=document.querySelector("#content");
   const div=page.querySelector("div");
   const h1=div.querySelector("h1")

   page.addEventListener("click",(event)=>{
             page.classList.toggle("red");
            page.classList.toggle("darkblue");
});

div.addEventListener("click",(event)=>{
    event.stopPropagation(); 
    div.style.backgroundColor="red";
    div.style.color="white";
    div.style.padding="20px";
    div.style.margin="20px";
    div.style.border="3px solid black";
    div.style.width="50%";
    div.style.transition="background-color 2s ease-out";
    
})

h1.addEventListener("click",(event)=>{
    event.stopPropagation(); 

    const myText=event.target.textContent;
    myText==="main content"?(event.target.textContent="python"):(event.target.textContent="main content");
})


}  