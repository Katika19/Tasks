import checkComplete from "./Components/checkComplete.js";
import deleteIcon from "./Components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn");

const createTask = (evento) => {
    evento.preventDefault();
    
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = "";
    
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
        
    // task.innerHTML = content;

    taskContent.appendChild(titleTask);
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);  
};

btn.addEventListener("click", createTask);


