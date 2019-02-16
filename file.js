let newTask = document.querySelector('#new-task');
let addTaskBtn = document.querySelector('#addTask');

let toDoUl = document.querySelector(".todo-list ul");
let completeUl =  document.querySelector(".complete-list ul");



let createNewTask = function(task){
  console.log("Creating task...");
  
  let listItem = document.createElement("li"); //add <li>
  let checkBox = document.createElement("input"); // add checkbox
  let label = document.createElement("label"); // add <label>
  
  
  //add the inputted text by user into the label
  label.innerText = task;
  
 
  checkBox.type = "checkbox";
  
  //append inputted text with checkbox iside <li> tag
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  //return the result as single element
  return listItem;  
  
};

let addTask = function(){
  console.log("Adding task...");
  let listItem = createNewTask(newTask.value);

  toDoUl.appendChild(listItem); 

  newTask.value="";
  
  bindIncompleteItems(listItem, completeTask);

};

let completeTask = function(){
  
  let listItem = this.parentNode;
  
  let deleteBtn = document.createElement("button"); 
  deleteBtn.innerText ="Delete"; 
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);
  
  let checkBox = listItem.querySelector("input[type=checkbox]");
  checkBox.remove();
  
  completeUl.appendChild(listItem); 
  
  bindCompleteItems(listItem, deleteTask);
  
};

let deleteTask = function(){
  console.log("Deleting task...");
  
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  
  ul.removeChild(listItem);
  
};


let bindIncompleteItems = function(taskItem, checkBoxClick){  
  console.log("Binding the incomplete list...");
  
  
  let checkBox = taskItem.querySelector("input[type=checkbox]");
  
  
  checkBox.onchange = checkBoxClick;  
}; 


let bindCompleteItems = function(taskItem, deleteButtonPress){
  console.log("Binding the complete list...");

  let deleteButton = taskItem.querySelector(".delete");
  deleteButton.onclick = deleteButtonPress;
    
};


for(let i=0; i < toDoUl.children.length; i++) {
  bindIncompleteItems(toDoUl.children[i], completeTask);
}

for(let i=0; i < completeUl.children.length; i++) {
  bindCompleteItems(completeUl.children[i], deleteTask);
}


addTaskBtn.addEventListener("click", addTask);