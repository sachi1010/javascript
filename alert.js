function validation(){
    let a=document.querySelector("#name").Value;
    let b=document.querySelector("#email").Value;
    let c=document.querySelector("#pass").Value;
    if(a===undefined){
        alert("Please enter your name");
        return false;
    }
    if(b===undefined){
        alert("Please enter your email");
        return false;
        }
    if(c===undefined){
            alert("Please enter your password");
            return false;
    }
    alert("Registation Successfull");
    return true;
}