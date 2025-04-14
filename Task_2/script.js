document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("formMessage");

    if (name === "" || email === "") {
        message.innerHTML = "Please fill out all fields.";
        message.style.color = "red";
    } else if (!email.includes("@")) {
        message.innerHTML = "Please enter a valid email.";
        message.style.color = "red";
    } else {
        message.innerHTML = "Form submitted successfully!";
        message.style.color = "green";
    }
});

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
        };
        
        li.appendChild(removeBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
