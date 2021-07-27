const addButton = document.getElementById("addButton")
const taskInput = document.getElementById("taskInput")
const tasksUl = document.getElementById("tasks")
const doneTasks = document.getElementById("donetasks")





addButton.addEventListener("click", function() {
    const task = taskInput.value;


    const taskLI = document.createElement("li")
    taskLI.innerHTML = task
    let checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("class", "checkbox")
    taskLI.appendChild(checkbox)
    
    const removeButton = document.createElement("button")
    

    //REMOVE TASK
    removeButton.addEventListener("click", function() {
        tasksUl.removeChild(this.parentElement)
    })

    removeButton.innerHTML = "Remove"
    taskLI.appendChild(removeButton)
    tasksUl.appendChild(taskLI)

    //Complete Task
    checkbox.addEventListener("click", function() {
        tasksUl.removeChild(this.parentElement)
        const completeLI = document.createElement("li")
        completeLI.innerHTML = task
        let checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox")
        checkbox.setAttribute("class", "checkbox")
        completeLI.appendChild(checkbox)
        
        
            removeButton.addEventListener("click", function() {
                doneTasks.removeChild(this.parentElement)
            })

            removeButton.innerHTML = "Remove"
            completeLI.appendChild(removeButton)
            doneTasks.appendChild(completeLI)

    })
})


