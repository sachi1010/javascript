
const signUpButton = document.getElementById('signUp');
const logInButton = document.getElementById('log-in');
const register = document.getElementById('register');

signUpButton.addEventListener('click', () => {
	register.classList.add("right-panel-active");
});

logInButton.addEventListener('click', () => {
	register.classList.remove("right-panel-active");
});

function validateform(){
	let x=document.querySelector("#email").value;
	let y=document.querySelector("#password").value;
	if(x==""){
		alert("Email must be filled ");
		return false;
	}
	if(y==""){
		alert("Password must be filled ");
		return false;
	}
	if(y.length<6){
		alert("Password must be at least 6 characters long");
		return false;
	}

	let data={
		"email": document.querySelector("#email").value,
		"password": document.querySelector("#pass").value
	}
	console.log(data);
}


function signup(){
	let data = {
		"fname": document.querySelector("#fname").value,
		"sname": document.querySelector("#sname").value,
		"email": document.querySelector("#mail").value,
		"password": document.querySelector("#password").value,
		"age": document.querySelector("#age").value,
		"conform password": document.querySelector("#cpass").value

}
console.log(data);
}


const box=document.querySelector("#mouse input");
box.addEventListener("mouseover",(event)=>{
	event.target.classList.add("inputbox");
});

const box1=document.querySelector("#mouse input");
box1.addEventListener("mouseout",(event)=>{
	event.target.classList.remove("inputbox");
});
