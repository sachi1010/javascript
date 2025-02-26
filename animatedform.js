
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('log-in');
const register = document.getElementById('register');

signUpButton.addEventListener('click', () => {
	register.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	register.classList.remove("right-panel-active");
});

