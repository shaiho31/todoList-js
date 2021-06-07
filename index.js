const todoInput = document.getElementById("todoInput")
const todoButton = document.getElementById("todoButton")
let ul = document.getElementById("todosList");

todoButton.addEventListener("click", addTodo)

function addTodo (event) {
    event.preventDefault();

    const divTodo = document.createElement("div")
    divTodo.classList.add("div-todo")
    ul.appendChild(divTodo)

    const li = document.createElement("li")
    li.classList.add("li-todo")
    li.innerText = todoInput.value;
    divTodo.appendChild(li)

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete-todo")
    divTodo.appendChild(deleteButton)

    const editButton = document.createElement("button")
    editButton.innerText = "Edit";
    editButton.classList.add("edit-todo");
    divTodo.appendChild(editButton)

    todoInput.value = ""

}

