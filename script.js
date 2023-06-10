const addTaskBtn = document.getElementById('add-task');
const tasksList = document.getElementById('list');
const removeBtn = document.getElementById("remove-icon");
let tasks = [];
let totalTasks = document.getElementById('total-tasks');
let count = 0;

function renderTaskListItem(tasks){
    tasksList.innerHTML = "";
    for(let task of tasks){
        const li = document.createElement('li');
        li.innerHTML = `
                    <input
                    type="checkbox"
                    id="check-box"
                    data-id=${task.id}
                    class="custom-checkbox"
                    ${task.isCompleted ? "checked" :""}
                />
                <label for="task1" id=${task.id} >${task.text}</label>
                <div class="remove-icon" id="remove-icon">
                    <span><i id="remove-icon" data-id =${task.id} style="font-size: 25px;" class="fa-sharp fa-regular fa-circle-xmark"></i></span>
                </div>`
        ;
        tasksList.appendChild(li);
    }
    
}


function createTask(){
    const inputElem = document.getElementById("inputElement");
    if(inputElem.value){
        const task = {
            text : inputElem.value,
            id : Date.now().toString(),
            isCompleted : false
        }   
        tasks.push(task);
        count++;
        totalTasks.innerHTML = count;
        inputElem.value="";
        renderTaskListItem(tasks);
        alert("Task added successfully");
        return;
    }
    alert("Please enter the task name");
}

function handleAddTask(){
    createTask();
}


function handleDeleteOperation(e){
    if(e.target.id == "remove-icon"){
        const id = e.target.dataset.id; 
        const newTasks = tasks.filter(function(task){
            return task.id != id;
        });
        tasks = newTasks;
        count--;
        totalTasks.innerHTML = count;
        renderTaskListItem(tasks);
    }
    else if(e.target.id ==="check-box"){
        const id = e.target.dataset.id; 
        for(let task of tasks){
            if(task.id == id){
                task.isCompleted =!task.isCompleted;
            }
        }
        renderTaskListItem(tasks);
    }
}
addTaskBtn.addEventListener('click', handleAddTask);
document.addEventListener('click', handleDeleteOperation);


