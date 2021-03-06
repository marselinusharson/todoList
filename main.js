const todoList = ["Belajar HTML", "Belajar PHP", "Belajar JavaScript", "Belajar CSS", "Belajar Java", "Belajar C++"];
function clearfirstTodo() {
  const todoListBody = document.getElementById("todoListBody");
  while (todoListBody.firstChild) {
    todoListBody.removeChild(todoListBody.firstChild);
  }
}

function removeTodoList(index) {
  todoList.splice(index, 1);
  displayTodoList();
}

function addTodoList(index, todo) {
  const tr = document.createElement("tr");
  const tdButton = document.createElement("td");
  tr.appendChild(tdButton);

  const buttonDone = document.createElement("input");
  buttonDone.type = "button";
  buttonDone.value = "Done";
  buttonDone.onclick = function () {
    removeTodoList(index);
  };

  tdButton.appendChild(buttonDone);
  const tdTodo = document.createElement("td");
  tdTodo.textContent = todo;
  tr.appendChild(tdTodo);
  const todoListBody = document.getElementById("todoListBody");
  todoListBody.appendChild(tr);
}

//tampilkan todo]
function displayTodoList() {
  clearfirstTodo();
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    //filter
    const searchText = document.getElementById("search").value.toLowerCase();
    if (todo.toLowerCase().includes(searchText)) {
      addTodoList(i, todo); //kirim index juga
    }
  }
}

document.forms["todoForm"].onsubmit = function (event) {
  event.preventDefault();
  const todo = document.forms["todoForm"]["todo"].value;
  todoList.push(todo);
  document.forms["todoForm"].reset();
  displayTodoList();
};

const searchInput = document.getElementById("search");
searchInput.onkeyup = function () {
  displayTodoList();
};
searchInput.onkeydown = function () {
  displayTodoList();
};

displayTodoList();
