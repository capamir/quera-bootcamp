const form = document.getElementById("new-task-form");
const input = document.getElementById("new-task-input");
const submit = document.getElementById("new-task-submit");
const taskList = document.getElementById("todosContainer");
const deleteButton = document.getElementById("delete");
const error = document.getElementById("errorContainer");

// Task item scheme:
{
  /* <li class="todos__todo">
${newTask} <img src="../assets/trash.svg" class="todos__todo--trash" id="delete" alt="trash" />
</li> */
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTask = input.value;

  if (newTask === "") {
    error.style.setProperty("display", "block");
    error.style.setProperty("animation", "fadeIn 0.3s");
    error.style.setProperty("opacity", "100");
    setTimeout(() => {
      error.style.setProperty("display", "none");
    }, 2000);
    return;
  }

  // TODO: Add task to taskList
  taskList.innerHTML += ` <li class="todos__todo">
  ${newTask} <img src="./assets/trash.svg" class="todos__todo--trash" id="delete" alt="trash" />
</li>`;
  // TODO: Reset form input
  input.value = "";
});

taskList.addEventListener("click", (e) => {
  const targetElement = e.target;

  // TODO: Complete task when clicked on task item
  // Check if the clicked element is a task item
  if (targetElement.classList.contains("todos__todo")) {
    targetElement.style.setProperty("background-color", "#c9c8c8");
    targetElement.style.setProperty("text-decoration", "line-through");
  }

  // TODO: Delete task item
  // Check if the clicked element is the delete (trash) icon
  if (targetElement.classList.contains("todos__todo--trash")) {
    targetElement.parentElement.remove();
  }
});
