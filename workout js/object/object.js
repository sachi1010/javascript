function submit(){
    let obj=document.querySelector("#root");
    obj.value;
    let data = {
        "name": document.querySelector("#name").value,
        "age": document.querySelector("#age").value,
        "password": document.querySelector("#password").value,
        "email": document.querySelector("#email").value
        };
  console.log(data); 
  
}
