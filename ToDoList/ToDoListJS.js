const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoListUl = document.querySelector(".todolist-ul");

let toDos = [];
const TODOS_KEY = "toDos";
//로컬 스토리지에 들어갈 키 이름

function deleteToDoList(deleteEvent) {
  const li = deleteEvent.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  localSaveToDos();
}

function createToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = newToDo.text;
  button.innerText = "×";
  button.addEventListener("click", deleteToDoList);
  li.appendChild(span);
  li.appendChild(button);
  todoListUl.appendChild(li);
}

function localSaveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function submitToDo(submitEvent) {
  submitEvent.preventDefault();
  const inputValue = todoInput.value;
  todoInput.value = "";
  const newToDoOBJ = {
    text: inputValue,
    id: Date.now(),
  };
  toDos.push(newToDoOBJ);
  createToDo(newToDoOBJ);
  localSaveToDos();
}

todoForm.addEventListener("submit", submitToDo);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parseToDos = JSON.parse(savedToDos);
  toDos = parseToDos;
  parseToDos.forEach(createToDo);
  //parseToDos를 createToDo의 매개변수로 넣고 처음부터 끝까지 돌려준다
  //parseToDos에 들어있는 배열값만큼 createToDo함수가 작동된다.
}
