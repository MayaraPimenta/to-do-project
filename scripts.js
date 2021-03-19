let list = document.getElementById("list")
let task = document.getElementById("task")
let newInput = document.getElementById("newInput")
let newTask = document.getElementById("newTask")

function duplicate() {       
    let newLi = document.createElement("li")
    newLi.setAttribute("id", "newTask")
    list.appendChild(newLi)
    
    let check = document.createElement("input")
    check.setAttribute("type", "checkbox")
    newLi.appendChild(check)
    
    let label = document.createElement("label")
    newLi.appendChild(label)

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7")
    span.appendChild(txt)
    span.onclick = function() {
        list.removeChild(this.parentNode)
    }
    newLi.appendChild(span)
}

function checked () {
    
}

