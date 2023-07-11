const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const question = document.querySelector("#question");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) {
  event.preventDefault();
  question.classList.remove("hidden");
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY,loginInput.value)
  paintGreetings()
}

function paintGreetings(){
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `안녕!\u00a0\u00a0${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME)
}



const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings()
}

const usernameInf = localStorage.getItem(USERNAME_KEY);
if(usernameInf===null){
  question.classList.add("hidden");
} 

