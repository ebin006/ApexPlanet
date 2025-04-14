function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = taskInput.value;
        
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.style.marginLeft = "10px";
        removeBtn.onclick = function() {
            taskList.removeChild(li);
            saveTasks();
        };
        
        li.appendChild(removeBtn);
        taskList.appendChild(li);
        saveTasks();
        taskInput.value = "";
    }
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push(li.textContent.replace("Remove", "").trim());
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.textContent = task;
        
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.style.marginLeft = "10px";
        removeBtn.onclick = function() {
            taskList.removeChild(li);
            saveTasks();
        };
        
        li.appendChild(removeBtn);
        taskList.appendChild(li);
    });
}

function filterProducts() {
    // Sample filter function
    console.log("Filtering products...");
}

function sortProducts() {
    // Sample sort function
    console.log("Sorting products...");
}

window.onload = loadTasks;
