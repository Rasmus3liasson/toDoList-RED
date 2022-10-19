const input = document.querySelector("#inputField");
const addBtn = document.querySelector("#addBtn");
const toDoContainer = document.querySelector("#toDoContainer");
const taskDone = document.querySelector("#task-done");
const wrongMessageText = document.querySelector("#wrongMessageText");

const array = [];

addBtn.addEventListener("click", function () {
  while (input.value === "") {
    wrongMessageText.innerText = "Input must not be empty";
    wrongMessageText.classList.toggle("wrongMessageError");

    task.removeChild(trashBtn);
  }
  if (input.value != "") {
    wrongMessageText.innerText = null;
  }

  let task = document.createElement("ul");
  toDoContainer.appendChild(task);

  let textlabel = document.createElement("span");
  textlabel.classList.add("textLabel");
  textlabel.innerText = input.value;
  task.appendChild(textlabel);

  let trashBtn = document.createElement("img");
  trashBtn.classList.add("trashBtn");
  trashBtn.src = "trashcan.png";
  task.appendChild(trashBtn);

  input.value = "";

  const taskObject = {};
  taskObject.todo = textlabel.innerText;
  taskObject.status = "Not Completed";
  array.push(taskObject);

  textlabel.addEventListener("click", function () {
    textlabel.classList.toggle("textLabelOpacity");

    while (taskObject.status == "Not Completed") {
      taskObject.status = "Completed";
      taskDone.innerHTML++;
      textlabel.removeEventListener();
    }
    taskObject.status == "Not Completed";
    taskDone.innerHTML--;
  });

  trashBtn.addEventListener("click", function () {
    taskObject.status = "Not Completed";

    toDoContainer.removeChild(task);
    array.pop(taskObject);
  });
});
