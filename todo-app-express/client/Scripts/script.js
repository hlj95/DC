const taskName = document.getElementById("taskName")
const taskPriority = document.getElementById("taskPriority")
const taskDate = document.getElementById("taskDate")
const addButton = document.getElementById("addTask")
const tasksUL = document.getElementById("tasksUL")

addButton.addEventListener("click", () => {
    const title = taskName.value
    const priority = taskPriority.value
    const date = taskDate.value

    fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            priority: priority,
            date: date
        })
    }).then(response => response.json())
    .then(result => {
        toDoList()
    })
})

function toDoList() {
    fetch('http://localhost:3000/todo')
    .then(response => response.json())
    .then(toDo => {
        const toDoItems = toDo.map((newToDo) => {
            return `<li>${newToDo.title} - ${newToDo.priority} - ${newToDo.date}</li>`
        })
    tasksUL.innerHTML = toDoItems.join("")
    })
}

toDoList()
