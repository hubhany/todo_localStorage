function addItem() {
   var task = document.createElement("div");
   task.innerHTML = document.getElementById("task").value;
   taskItem = document.createElement("div");
   taskItem.innerHTML = '<span>' + task.innerHTML + '</span>' + '<button>Remove</button>';
   taskItem.className = 'task';
   document.getElementById("taskList").appendChild(taskItem);

   saveList();
  }


  function removeItem() {
   var removeTask = document.getElementById("taskList");
   removeTask.removeChild(this);
   saveList();
  }

  function saveList() {
   localStorage.storedList = document.getElementById("taskList").innerHTML;
  }
  function loadList() {
   document.getElementById("taskList").innerHTML = localStorage.storedList;
   for(var i = 0; i < list.children.length; i++) {
    list.children[i].onclick = removeItem;
   }
  }

  if(localStorage.storedList) {
   loadList();
  }
