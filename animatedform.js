// function login(){
//     let username = document.getElementById('username').value;
//     let password = document.getElementById('password').value;
//     let email = document.getElementById('email').value;
//         let data = {
//             "username": username,
//             "password": password,
//             "email": email

//         };
//         console.log(data);
// }
// function signup(){
//     const form=document.querySelector("#login");
//     form.addEventListener("click",(event)=>{
//         event.preventDefault();
    
       

//     })
// }



const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
