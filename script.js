// Declaring the variables to be used in the program
const addTaskButton=document.getElementById('task-button');

const inputText=document.getElementById('input-text');

const parentContainer=document.getElementById('parent-container');
const taskContainer=document.getElementById('task-container');
const completedTaskContainer=document.getElementById('completed-task-container');
const pendingTaskContainer=document.getElementById('pending-task-container');
const informationTaskContainer=document.getElementById('information');
const info=document.getElementById('info');
const home=document.getElementById('home');
const completed=document.getElementById('completed');
const pending=document.getElementById('pending');
const pendingTaskList=document.getElementById('pending-task-list');
const demo=document.getElementById('demo');
const testHead=document.getElementById('test-head');
// Adding event listener for the addtask button
addTaskButton.addEventListener('click',()=>{
    //Make the button display as none and textfield's display as block
    addTaskButton.style.display='none';
    inputText.style.display='block';
    inputText.focus();
});

// Adding event listener for the text input
inputText.addEventListener("keydown",(event)=>{
    //If the user press enter after writing a text only then proceed
    if(event.key==='Enter'){
        //Add the name of the task
        const taskName=document.createElement('p');
        //Add the complete task button
        const taskButton=document.createElement('button');
        //Add the delete button
        const deleteButton=document.createElement('span');
        //Add the main task container
        const task=document.createElement('div');
        deleteButton.id='delete-button';
        taskName.textContent=inputText.value.trim().toUpperCase();
        const val=inputText.value.trim().toUpperCase();
        deleteButton.className="fa-solid fa-trash-can";
        task.appendChild(taskButton);
        task.appendChild(taskName);
        task.appendChild(deleteButton);
        taskContainer.appendChild(task);
        task.style.margin='1rem';
        inputText.value='';
        inputText.style.display='none';
        addTaskButton.style.display='block';
        //Add event listener for the complete task button
        taskButton.addEventListener('click',()=>completedTask(taskName));
        deleteButton.addEventListener('click',()=>removeTask(task));
        showPendingTask(val);
    }
})

//Function that shows that the task has been completed
function completedTask(taskName){
    taskName.style.color='black';
    const completedTaskPara=document.createElement('p');
    const trashButton=document.createElement('span');
    const task=document.createElement('div');
    completedTaskPara.textContent=taskName.textContent;
    trashButton.className="fa-solid fa-trash-can";
    task.appendChild(completedTaskPara);
    task.appendChild(trashButton);
    task.className='task';
    completedTaskContainer.appendChild(task);
    trashButton.addEventListener('click',()=>removeTask(task));
    demo.style.display='none';
    removeFromPending(taskName);
}

//Function that shows the pending task
function showPendingTask(taskName){
    const taskItem=document.createElement('li');
    taskItem.textContent=taskName;
    pendingTaskList.appendChild(taskItem);
    testHead.style.display='none';
}

//Function that removes the task from the task list
function removeTask(task){
    task.remove();
}


//Function that removes the task from pending task list and updates the pendingTaskContainer
function removeFromPending(taskName){
    console.log(taskName.textContent);
    var items=pendingTaskList.getElementsByTagName('li');
    for(var i=0;i<items.length;i++){
        if(items[i].textContent===taskName.textContent){
            pendingTaskList.removeChild(items[i]);
        }
    }
}

//Event listener for home in the hamburger menu
home.addEventListener('click',()=>{
    taskContainer.style='block';
    completedTaskContainer.style.display='none';
    pendingTaskContainer.style.display='none';
    informationTaskContainer.style.display='none';
    addTaskButton.style.display='block';
});

//Event listener for displaying only completed task
completed.addEventListener('click',()=>{
   completedTaskContainer.style.display='block';
   taskContainer.style.display='none';
   pendingTaskContainer.style.display='none'; 
   informationTaskContainer.style.display='none';
   addTaskButton.style.display='none';
});

//Event listener for displaying only pending task
pending.addEventListener('click',()=>{
    completedTaskContainer.style.display='none';
    taskContainer.style.display='none';
    informationTaskContainer.style.display='none';
    pendingTaskContainer.style.display='block'; 
    addTaskButton.style.display='none';
 });

//Event listener for displaying the information
info.addEventListener('click',()=>{
    informationTaskContainer.style.display='block';
    taskContainer.style.display='none';
    completedTaskContainer.style.display='none';
    pendingTaskContainer.style.display='none';
    addTaskButton.style.display='none';
});
