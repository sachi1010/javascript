const signupbtn=document.getElementById('signUp');
const loginbtn=document.getElementById('log-in');
const container=document.getElementById('register-page');

signupbtn.addEventListener('click',()=>{
    container.classList.add('sign-up');
}
);
loginbtn.addEventListener('click',()=>{
    container.classList.remove('sign-up');
}   );

