const addButton = document.getElementById("addButton")
const taskInput = document.getElementById("taskInput")
const tasksUl = document.getElementById("tasks")
const doneTasks = document.getElementById("donetasks")





addButton.addEventListener("click", function() {
    const task = taskInput.value;


    const taskLI = document.createElement("li");
    taskLI.innerHTML = task

    const removeButton = document.createElement("button")
    const completeButton = document.createElement("button")

    //REMOVE TASK
    removeButton.addEventListener("click", function() {
        tasksUl.removeChild(this.parentElement)
    })

    removeButton.innerHTML = "Remove"
    taskLI.appendChild(removeButton)
    tasksUl.appendChild(taskLI)

    //Complete Task
    completeButton.addEventListener("click", function() {
        tasksUl.removeChild(this.parentElement)
        const completeLI = document.createElement("li")
        
        doneTasks.innerHTML = task

            removeButton.addEventListener("click", function() {
                doneTasks.removeChild(this.parentElement)
            })
        
            removeButton.innerHTML = "Remove"
            completeLI.appendChild(removeButton)
            doneTasks.appendChild(completeLI)
    })

    completeButton.innerHTML = "Complete"
    taskLI.appendChild(completeButton)
    tasksUl.appendChild(taskLI)


})



