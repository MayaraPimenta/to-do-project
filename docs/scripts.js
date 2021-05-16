let list = document.getElementById("list")
let task = document.getElementById("task")
let newInput = document.getElementById("newInput")
let newTask = document.getElementById("newTask")

function duplicate() {
    
    if (newInput.value == "") {
       alert("Escreva uma tarefa!")
        return
    }
    
    let newLi = document.createElement("li")
    newLi.setAttribute("id", "newTask")
    list.appendChild(newLi)
    
    let check = document.createElement("input")
    check.setAttribute("type", "checkbox")
    newLi.appendChild(check)
    
    let label = document.createElement("label")
    label.textContent = newInput.value
    newLi.appendChild(label)  

    let span = document.createElement("SPAN");
    span.setAttribute("class", "far fa-trash-alt")
    span.onclick = function() {
        list.removeChild(this.parentNode)
    }
    newLi.appendChild(span)

    let saveEdit = document.createElement("button")
    saveEdit.setAttribute("hidden", true)
    saveEdit.textContent = "Alterar"
        saveEdit.onclick = function() {
            label.textContent = input.value

            input.removeAttribute("text")
            input.setAttribute("type", "hidden")

            label.style.display = "inline"
            span.style.display = "inline"

            saveEdit.setAttribute("hidden", true)
        }

    let input = document.createElement("input")
    input.setAttribute("type", "hidden")
    newLi.appendChild(input)
    newLi.appendChild(saveEdit)
        label.addEventListener("click", switchEdit)
        function switchEdit() {
            input.removeAttribute("hidden")
            input.setAttribute("type", "text")

            saveEdit.removeAttribute("hidden")

            input.value = label.textContent
            label.style.display = "none"
            span.style.display = "none"
        };

    check.onchange = function() {
        if (this.checked) {
            label.style.textDecoration = "line-through"
        } else {
            label.style.textDecoration = "none"
        }
    }

    newInput.value = ""
}
