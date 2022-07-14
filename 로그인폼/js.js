const login = document.querySelector(".login");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");
const greetingSpan = document.querySelector(".greeting span");
const logoutBtn = document.querySelector(".greeting button");

const HIDDEN_CLASS_NAME = "hidden";
const LOCAL_USERNAME_KEY = "username";

function loginSubmit(event) {
  event.preventDefault(); //새로고침 안함
  //form은 submit하면 자동으로 새로고침되기때문에 해줌
  login.classList.add(HIDDEN_CLASS_NAME);
  //로그인 class에 hidden을 더해서 사라지게한다
  const loginInputValue = loginInput.value;
  //loginInput의 값을 변수에 저장한다
  localStorage.setItem(LOCAL_USERNAME_KEY, loginInputValue);
  //로컬스토리지에 key값으로 username value값으로 loginInputValue를 저장한다.
  showGreeting(loginInputValue);
}

function showGreeting(username) {
  greeting.classList.remove(HIDDEN_CLASS_NAME);
  //인사말 class에 hidden을 제거해서 나오게 한다.
  greetingSpan.innerText = `어서오세요! ${username}님`;
}

const savedUserName = localStorage.getItem(LOCAL_USERNAME_KEY);

if (savedUserName === null) {
  login.classList.remove(HIDDEN_CLASS_NAME);
  login.addEventListener("submit", loginSubmit);
} else {
  showGreeting(savedUserName);
  //savedUserName에 값이 저장되어 있다면
  //로컬스토리지에 저장되어있는 savedUserName을 매개변수로
  //showGreeting을 실행한다
}

function removeStorage() {
  localStorage.removeItem(LOCAL_USERNAME_KEY);
  login.classList.remove(HIDDEN_CLASS_NAME);
  greeting.classList.add(HIDDEN_CLASS_NAME);
  loginInput.value = "";
}

logoutBtn.addEventListener("click", removeStorage);
