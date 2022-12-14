const input = document.querySelector("#inputField");
const addBtn = document.querySelector("#addBtn");
const toDoContainer = document.querySelector("#toDoContainer");
const taskDone = document.querySelector("#task-done");
const wrongMessageText = document.querySelector("#wrongMessageText");
const rubrik = document.querySelector("#rubrik");

const array = [];

addBtn.addEventListener("click", function () {
  if (input.value === "") {
    wrongMessageText.innerText = "Input must not be empty";
    wrongMessageText.classList.remove("wrongMessageError");
    wrongMessageText.scrollBy(0, 0);
    wrongMessageText.classList.add("wrongMessageError");
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

    if (taskObject.status == "Not Completed") {
      taskObject.status = "Completed";

      setTimeout(function () {
        taskDone.innerHTML++;
      }, 900);
      textlabel.removeEventListener();
    }
    if (taskObject.status == "Completed") {
      taskObject.status = "Not Completed";
      taskDone.innerHTML--;
    }
  });

  trashBtn.addEventListener("click", function () {
    taskObject.status = "Not Completed";

    toDoContainer.removeChild(task);
    array.pop(taskObject);
  });

  rubrik.addEventListener("click", function () {
    taskDone.innerHTML = 0;
  });
});
