

document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState==="complete")
        {
            
            console.log("complete");
            formsubmit();
        }
});




function formsubmit(){

const input=document.querySelector("#register");
input.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("form submitted");
}  );
}


