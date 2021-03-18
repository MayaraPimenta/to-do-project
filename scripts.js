let list = document.getElementById("list")
let task = document.getElementById("task")
let newInput = document.getElementById("newInput")
let newTask = document.getElementById("newTask")

function exclude() {
    //task.remove();
}

function duplicate() {
    var newLi = document.createElement("li")
    newLi.setAttribute("id", "newTask")
    list.appendChild(newLi);

    newLi.textContent = newInput.value;
}


