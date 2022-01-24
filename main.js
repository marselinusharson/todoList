function clearfirstTodo() {
  const todoListBody = document.getElementById("todoListBody");
  while (todoListBody.firstChild) {
    todoListBody.removeChild(todoListBody.firstChild);
  }
}

function addTodoList(todo) {
  const tr = document.createElement("tr");
  const tdButton = document.createElement("td");
  tr.appendChild(tdButton);

  const buttonDone = document.createElement("input");
  buttonDone.type = "button";
  buttonDone.value = "Done";
  tdButton.appendChild(buttonDone);
  const tdTodo = document.createElement("td");
  tdTodo.textContent = todo;
  tr.appendChild(tdTodo);
  const todoListBody = document.getElementById("todoListBody");
  todoListBody.appendChild(tr);
}
function displayTodoList() {
  clearfirstTodo();
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    addTodoList(todo)
  }
}

const todoList = ["Belajar HTML", "Belajar PHP", "Belajar JavaScript", "Belajar CSS", "Belajar Java", "Belajar C++"];
document.forms["todoForm"].onsubmit = function (event) {
  event.preventDefault();
  const todo = document.forms["todoForm"]["todo"].value;
  todoList.push(todo);
  document.forms["todoForm"].reset();
  displayTodoList();
};

const searchInput = document.getElementById("search");
searchInput.onckeyup = function () {
  console.log("On key up");
};
searchInput.onkeydown = function () {
  console.log("On key down");
};

displayTodoList();
