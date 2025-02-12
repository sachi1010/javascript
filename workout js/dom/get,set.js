function vary(){
let obj=document.querySelector("#root");
obj.value="";
let data={
     "username":document.querySelector("#name").value,
     "password":document.querySelector("#pass").value,
     "email":document.querySelector("#mail").value,
 };
 console.log(data); 

 let obj1=new person(data.username);
console.log(obj1.username);
}

class person{
    constructor(username){
        this._username=username;
    }
    get username(){
        return this._username.toUpperCase()
    }

}

function clear(){
    document.querySelector("#name").value = '';
    document.querySelector("#pass").value = '';
    document.querySelector("#mail").value = '';
    
}

