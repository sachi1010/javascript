function vary(){
let obj=document.querySelector("#root");
obj.value="";
let data={
     "username":document.querySelector("#name").value,
     "password":document.querySelector("#pass").value,
     "email":document.querySelector("#mail").value,
 };
 console.log(data); 
}
// let person={
//     get data(){
//         return this.username.toUpperCase()
//     }
// }

class person{
    constructor(username){
        this._username=username;
    }
    get username(){
        return this._username.toUpperCase()
    }

}
let obj2=person;
obj2.value;
let 

