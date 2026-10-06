const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector("ul");
const completedTask = document.getElementById("taskCounter");
const message = document.getElementById("empty-input-message");

let completedNum = 0;
let tasks = [];



function addTask() {
//Check is value is empty and show error message
if (input.value.trim() === "") {
message.innerHTML = "Input must not be empty";
message.style.display = "block";

return; 

} else {

//Remove error message
message.style.display= "none";    

// Create a list and span-element. 
const addList = document.createElement("li")
const addSpanElement = document.createElement("span");

// Create the task object
const addObject = {
text: input.value,
};

//Insert text to lists and span
addSpanElement.innerText = addObject.text;
addSpanElement.innerText = input.value;
list.appendChild(addList);
addList.appendChild(addSpanElement);


//Insert text to array and get position in array
tasks.push(addObject);
const taskIndex = tasks.length - 1;

//Insert delete button and empty text box field.
addDeleteBtn(addList, taskIndex);
input.value = ""
}}

//Adding counter for completed tasks
function counter(){
 completedNum = tasks.length

completedNum = list.querySelectorAll(".complete").length;
completedTask.innerText = `${completedNum} completed`;
}

//Create delete button
function addDeleteBtn(taskElement, index) {
const deleteBtn = document.createElement("button")
const deleteImg = document.createElement("img");
deleteImg.src = "https://em-content.zobj.net/source/apple/325/wastebasket_1f5d1-fe0f.png";

deleteBtn.id = "deleteBtn";
deleteImg.id = "deleteBtnImage"

//Remove task on button "click"
deleteBtn.addEventListener("click", () => {
    taskElement.remove();
    tasks.splice(index, 1);
    counter();
});

taskElement.appendChild(deleteBtn);
deleteBtn.appendChild(deleteImg);
}

//Toggle between finished/unfinished on "click" 
list.addEventListener("click", (text) => {
if(text.target.tagName === "SPAN") {
text.target.classList.toggle("complete")
counter();}
})


//Create list when "Add to list" is clicked. 
button.addEventListener("click", addTask)








