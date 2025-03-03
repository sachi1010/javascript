
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
	const emailp=/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
	const pass=/([a-zA-Z0-9]+[a-zA-Z0-9]+[!@#$%^&*])/;

	if(x==""){
		alert("Email must be filled ");
		return false;
	}

	if(emailp.test(x)){
		return true;
	}else{
		alert("Invalid email");
	}

	if(pass.test(y)){
		return true;
	}else{
		alert("password is not a format")
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

