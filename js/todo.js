const form = document.querySelector(".form");
const list = document.querySelector(".main__list");
const mainSpan = document.querySelector(".main__span");
const inputAdd = document.querySelector(".form__inputAdd");
const inputSearch = document.querySelector(".form__inputSearch");

const listElements = [...document.querySelectorAll("li")];

const removeTask = (e) => {
  e.target.parentNode.remove();
  listElements.pop(e.target.parentNode);
  mainSpan.textContent = listElements.length;
};

const addTask = (e) => {
  e.preventDefault();
  const taskName = inputAdd.value;
  if (taskName === "") return;
  const task = document.createElement("li");
  task.innerHTML = taskName + "<button class='remove'>-</button>";
  list.appendChild(task);
  inputAdd.value = "";
  listElements.push(task);
  mainSpan.textContent = listElements.length;

  task.querySelector("button").addEventListener("click", removeTask);
};

form.addEventListener("submit", addTask);

const searchTask = (e) => {
  const searchText = e.target.value.toLowerCase();
  let tasks = listElements;
  tasks = tasks.filter((li) =>
    li.textContent.toLowerCase().includes(searchText)
  );
  list.textContent = "";
  tasks.forEach((li) => list.appendChild(li));
  mainSpan.textContent = tasksElements.length;
};

inputSearch.addEventListener("input", searchTask);
