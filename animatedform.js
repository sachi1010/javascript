function login(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
        let data = {
            "username": username,
            "password": password,
            "email": email

        };
        console.log(data);
}
function signup(){
    const form=document.querySelector("#login");
    form.addEventListener("click",(event)=>{
        event.preventDefault();
    
       

    })
}