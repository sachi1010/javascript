document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState==="complete")
        {
            
            console.log("complete");
            afterpage();
        }
});


function afterpage(){
const myform=document.querySelector("#inputvalue");
myform.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("form submitted");




    let data={
        "name":document.querySelector("#name").value,
        "email":document.querySelector("#mail").value,
        "password":document.querySelector("#password").value
      }
      console.log(data);
    
    
    
    });
    
    }
