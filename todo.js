function addItem() {
  var task = document.createElement("div");
  task.innerHTML = document.getElementById("task").value;
  taskItem = document.createElement("div");
  taskItem.innerHTML = '<span>' + task.innerHTML + '</span>' + '<button onClick="removeItem()">Remove</button>';
  taskItem.className = 'task';
  document.getElementById("taskList").appendChild(taskItem);
  saveList();
}

function removeItem() {
  if (confirm("Czy na pewno chcesz usunąć?")) {
   var removeTask = document.getElementById("taskList");
   removeTask.removeChild(this);
   saveList();
 }
}

function saveList() {
  localStorage.storedList = document.getElementById("taskList").innerHTML;
}

function loadList() {
  let taskListElement = document.getElementById('taskList');
  taskListElement.innerHTML = localStorage.storedList;
  for (let i = 0; i<taskListElement.children.length; i++) {
    taskListElement.children[i].onclick = removeItem;
  }
}

if(localStorage.storedList) {
   loadList();
}
