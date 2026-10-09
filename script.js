const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = todoInput.value.trim();

  if (taskText === "") {
    return;
  }

  // Create the task
  const li = document.createElement("li");

  // Create a checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Create the task text
  const span = document.createElement("span");
  span.textContent = taskText;

  // Create a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.type = "button";

  // Mark task as completed
  checkbox.addEventListener("change", function () {
    span.classList.toggle("completed", checkbox.checked);
  });

  // Delete task
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // Add elements to the task
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Add task to the list
  todoList.appendChild(li);

  // Clear input
  todoInput.value = "";
});
