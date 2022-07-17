const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let toDos = [];

const TODOS_KEY = "toDos";

function saveToDos_ft() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(deleteToDo) {
  const li = deleteToDo.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos_ft();
}

function createToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function ToDoSubmit(submitEvent) {
  submitEvent.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoOBJ = {
    text: newTodo,
    id: Date.now(),
  };

  toDos.push(newTodoOBJ);
  createToDo(newTodoOBJ);
  saveToDos_ft();
}

todoForm.addEventListener("submit", ToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(createToDo);
}
