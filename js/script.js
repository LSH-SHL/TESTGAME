const signUpForm = document.querySelector("#Sign-Up");
const signUpInput = document.querySelector("#Sign-Up input");

const logInForm = document.querySelector("#Log-In");
const logInInput = document.querySelector("#Log-In input");

const greeting = document.querySelector("#greeting");
const signUpBtn = document.querySelector("#SUbtn");
const logInBtn = document.querySelector("#Cbtn");

const HIDDEN_CLASS = "hidden";


function onSignUpSubmit(event) {
	event.preventDefault();
	//signUpForm.classList.add(HIDDEN_CLASS);
  signUpForm.style.display='none';
	const userID = signUpInput.value;
  console.log(userID);
  alert(userID);
}

function onLogInSubmit(event){
  event.preventDefault();
  //logInForm.classList.add(HIDDEN_CLASS);
  logInForm.style.display='none';
  const userID = logInInput.value;
  console.log(userID);
  alert(userID);
}
// Submit

function onSignUpButton() {
  signUpForm.style.display='block';
  signUpBtn.style.display='none';
  console.log("progress[1]");
}

function onLogInButton() {
  logInForm.style.display='block';
  logInBtn.style.display='none';
  console.log("progress[2]");
}

//Button


console.log(signUpForm);
console.log(signUpBtn);


signUpForm.addEventListener("submit",onSignUpSubmit);
logInForm.addEventListener("submit",onLogInSubmit);

signUpBtn.addEventListener("click",onSignUpButton);
logInBtn.addEventListener("click",onLogInButton);
