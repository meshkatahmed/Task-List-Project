//Define UI element
let form = document.querySelector('#task-form');
let taskList = document.querySelector('#task-list');
let clearBtn = document.querySelector("#clear-task");
let filter = document.querySelector('#task-filter');
let taskInput = document.querySelector("#new-task");

//Define Event Listeners
form.addEventListener('submit',addTask);

//Define Functions
function addTask(e){
    if(taskInput.value === '') {
        alert('Write a task to add');
    } else {
        //create li element
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + " "));
        let link = document.createElement('a');
        link.setAttribute('href','#');
        link.innerText = 'x';
        li.appendChild(link);
        taskList.appendChild(li);
        taskInput.value = '';
    }
    e.preventDefault();
}