const todoInput = document.getElementById("todoInput")
const todoButton = document.getElementById("todoButton")

todoInput.addEventListener("change",inputTodoValue)
todoButton.addEventListener("click", addTodo)
let inputValue;

function inputTodoValue (e) {
    inputValue = e.target.value
}

function addTodo (e) {
    e.preventDefault();
    console.log(inputValue);
    todoInput.value = ""
}

