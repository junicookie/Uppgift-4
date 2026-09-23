const input = document.querySelector('input');
const addBtn = document.getElementById("addButton")
const button = document.querySelector('button');
const list = document.querySelector("ul")
const completedTask = document.getElementById("taskCounter")


let completedNum = 0;
let tasks = [];



function addTask() {
//Check is value is empty and send alert
if (input.value.trim() === "") {
alert("Please write something in the text box.")
return; 

} else {
// Create a list and span-element. Add text from input. 
const addList = document.createElement("li")
const addSpanElement = document.createElement("span");

addSpanElement.innerText = input.value;
list.appendChild(addList);
addList.appendChild(addSpanElement);


//Insert text to array and get position in array
tasks.push(input.value);
const taskIndex = tasks.length - 1;

//Insert delete button and empty text box field.
addDeleteBtn(addList, taskIndex);
input.value = ""
}}

//Adding counter for completed tasks
function counter(){
 completedNum = list.querySelectorAll(".complete").length   
 completedTask.innerText = (`${completedNum} tasks completed`)
}

//Create delete button
function addDeleteBtn(taskElement, index) {
const deleteBtn = document.createElement("button")
deleteBtn.textContent = "🗑️";
deleteBtn.id = "deleteBtn"

//Remove task on button "click"
deleteBtn.addEventListener("click", () => {
    taskElement.remove();
    tasks.splice(index, 1)
});

taskElement.appendChild(deleteBtn);
}

//Toggle between finished/unfinished on "click" 
list.addEventListener("click", (text) => {
if(text.target.tagName === "SPAN") {
text.target.classList.toggle("complete")
counter();}
})


//Create list when "Add to list" is clicked. 
button.addEventListener("click", addTask)




