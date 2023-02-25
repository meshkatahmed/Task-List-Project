//Define UI element
let form = document.querySelector("#task-form");
let taskList = document.querySelector('#task-list');
let clearBtn = document.querySelector("#clear-task");
let filter = document.querySelector('#task-filter');
let taskInput = document.querySelector("#new-task");

//Define Event Listeners
form.addEventListener('submit',addTask);
taskList.addEventListener('click',removeTask);
clearBtn.addEventListener('click',clearTasks);
filter.addEventListener('keyup',filterTask);
//document.addEventListener('DOMContentLoaded',getTasks);

//Define Functions
function addTask(e){
    if(taskInput.value === '') {
        alert('Write a task to add!');
    } else {
        //create li element
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + " "));
        let link = document.createElement('a');
        link.setAttribute('href','#');
        link.innerText = 'x';
        li.appendChild(link);
        taskList.appendChild(li);
        storeTaskInLocalStorage(taskInput.value);
        taskInput.value = '';
    }
    e.preventDefault();
}
function removeTask(e){
    if (e.target.hasAttribute('href')){
        if (confirm("Are you sure?")){
            let ele = e.target.parentElement;
            ele.remove();
        }
    }  
}
function clearTasks(e){
    //taskList.innerHTML = ''; or

    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}
function filterTask(e){
    let text = e.target.value.toLowerCase();
    document.querySelectorAll('li').forEach(task => {
        let item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}
function storeTaskInLocalStorage(task){
    let tasks;
    if (localStorage.getItem('tasks')===null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}
