const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
  if(toDos.length==0){
    toDoList.classList.add('hidden')
  }
}


function paintToDo(newTodoObj){
  const li = document.createElement("li");
  li.id = newTodoObj.id
  const span = document.createElement("span");
  span.innerText=newTodoObj.text;
  const inputBtn = document.createElement("input");
  inputBtn.type = "checkbox"
  inputBtn.addEventListener("click", deleteToDo )
  toDoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(inputBtn);
}


function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value="";
  const newTodoObj = {
    text:newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
  toDoList.classList.remove('hidden')
}

toDoForm.addEventListener("submit", handleToDoSubmit  );



const savedToDos = localStorage.getItem(TODOS_KEY);


// 최소 한번은 저장했을시
if (savedToDos!==null){
  if ((JSON.parse(savedToDos)).length==0){
  toDoList.classList.add("hidden");
  } else {
  toDoList.classList.remove("hidden");
  }
  console.log('check');
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

