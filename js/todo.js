const form = document.querySelector(".form");
const list = document.querySelector(".main__list");
const mainSpan = document.querySelector(".main__span");
const inputAdd = document.querySelector(".form__inputAdd");
const inputSearch = document.querySelector(".form__inputSearch");

const listElements = [...document.querySelectorAll("li")];
const buttonElements = [...document.querySelectorAll(".task button")];

// document.getElementById("e").addEventListener("click", function(e) {
//   var index = Array.prototype.indexOf.call(this.parent, e.target);
//   console.log(index);
// });

const removeTask = (e) => {
  let btnActive = e.target.parentNode.textContent.toLowerCase();
  console.log(btnActive);
  let index = listElements.indexOf(btnActive);
  
  if (index > - 1) {
  listElements.splice(index, 1);
  e.target.parentNode.remove();
  mainSpan.textContent = listElements.length;
  }
};

const addTask = (e) => {
  e.preventDefault();
  const taskName = inputAdd.value;
  if (taskName === "") return;
  const task = document.createElement("li");
  task.className = "task";
  task.innerHTML = taskName;
  list.appendChild(task);
  const button = document.createElement("button");
  button.className = "remove";
  button.innerHTML = "";
  task.appendChild(button);
  inputAdd.value = "";
  listElements.push(task);
  buttonElements.push(button);
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
  mainSpan.textContent = listElements.length;
};

inputSearch.addEventListener("input", searchTask);