function addItem() {
   var newItem = document.createElement("div");
   newItem.innerHTML = document.getElementById("task").value;
   document.getElementById("taskList").appendChild(newItem);

   removeButton = document.createElement("button");
   newItem.innerHTML = document.getElementById("task").value;
   removeButton.innerHTML = "Remove";
   document.getElementById("taskList").appendChild(removeButton);
   saveList();
  }


  function removeItem() {
   document.getElementById("taskList").removeChild(this);
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
