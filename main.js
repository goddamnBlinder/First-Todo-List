window.addEventListener("load", () => {

    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_element = document.querySelector("#tasks");
    
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        
        const task = input.value;
        
        if (!task) {
            alert("Is Blank 😔") 
            return;
        }
        
        form.reset();

        
    const task_element = document.createElement("div");
    task_element.classList.add("task");

    const task_content_element = document.createElement("div");
    task_content_element.classList.add("content");

    const task_input_element = document.createElement("input");
    task_input_element.classList.add("text");
    task_input_element.type = "text";
    task_input_element.value = task;
    task_input_element.setAttribute("readonly", "readonly");

   //append me oh Lord
   list_element.appendChild(task_element);
   task_element.appendChild(task_content_element);
   task_content_element.appendChild(task_input_element);

// input.value = "";


 const task_actions_element = document.createElement("div");
 task_actions_element.classList.add("action");
 
  const task_actions_delete = document.createElement("button");
  task_actions_delete.classList.add("delete");
  task_actions_delete.textContent = "Delete";
 
 const task_actions_edit = document.createElement("button");
 task_actions_edit.classList.add("edit");
 task_actions_edit.textContent = "Edit";


 task_actions_element.appendChild(task_actions_edit);
 task_actions_element.appendChild(task_actions_delete);

 task_element.appendChild(task_actions_element);


task_actions_edit.addEventListener("click", () => {
  if (task_actions_edit.textContent.toLowerCase() === "edit") {
    task_input_element.removeAttribute("readonly");
    task_input_element.focus();
    task_actions_edit.textContent = "Save";
  }else {
    task_input_element.setAttribute("readonly", "true");
    task_actions_edit.textContent = "Edit";
    return
  }

})
task_actions_delete.addEventListener("click", (e) => {
  let target = e.target
   let parent = target.parentElement.parentElement;
   console.log(parent);

   task_actions_element.removeChild(task_actions_delete);
   task_element.removeChild(task_actions_element);
   list_element.removeChild(task_element);


})
   
    });
});

