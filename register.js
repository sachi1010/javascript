// function details(){
//     let data={
//         "name": document.querySelector("#username").value,
//         "age": document.querySelector("#age").value,
//         "mail":document.querySelector("#mail").value,
//         "password":document.querySelector("#password").value
//     }
//     console.log(data);
// }
function reset(){
    document.querySelector("#username").value="";
    document.querySelector("#age").value="";
    document.querySelector("#mail").value="";
    document.querySelector("#password").value="";
}

let registers = new WeakSet();

function login() {
    let data = {
        name: document.querySelector("#username").value,
        password: document.querySelector("#password").value,
        mail: document.querySelector("#mail").value,
        age: document.querySelector("#age").value
    };
    registers.add(data);
    console.log(...registers.value);
}
