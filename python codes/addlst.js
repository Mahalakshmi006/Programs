//const b1 = document.getElementById("b1");

//const t1 = document.getElementById("t1");
//const list = document.getElementById("aditm");

/* key function t1 .addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    if (t1.value.trim() !== "") {
      const li = document.createElement("li");
      li.textContent = t1.value;
      list.appendChild(li);
      t1.value = "";
    } else {
      alert("Please type something first!");
    }
  }
/*


intha code eppdi enalam use pana nu soluthu

  /*button,div,span,img,<h1>, <h2>/*
/*Tab,Shift,Control,ArrowRight,	" "/*
});



/*ithu vanthu input hh add pani tahrum const t1 = document.getElementById("t1");
const boxlist = document.getElementById("boxlist");

t1.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && t1.value.trim() !== "") {
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.value = t1.value; // Set the value from main input
    boxlist.appendChild(newInput); // Add it to the page
    t1.value = ""; // Clear main input
  } else if (event.key === "Enter") {
    alert("Please type something first!");
  }
});*/
/*
const t1 = document.getElementById("t1");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const aditm = document.getElementById("aditm");

function addTask() {
  const text = t1.value.trim();
  if (text === "") {
    alert("Please enter a task!"); // ✅ Alert message if empty
    return;
  }

  const con = document.createElement("div");
  con.classList.add("task");
  //h3 is created in to display the item
  const h3 = document.createElement("h3");
  h3.textContent = text;

  const delBtn = document.createElement("button");
  delBtn.innerHTML = "❌";
  //ithu style add pana use agum
  delBtn.classList.add("delete-btn");

  // ithu vanthu bootsrab style delBtn.classList.add("delete-btn", "btn", "btn-secondary");

  //shorcut arrow function
  delBtn.onclick = () => aditm.removeChild(con);
  //all in append in containert
  con.appendChild(h3);
  con.appendChild(delBtn);
  aditm.appendChild(con);

  t1.value = "";
}

b1.addEventListener("click", addTask);

/*

Method	Use
element.classList.add("className")	Class add pannum
element.classList.remove("className")	Class remove pannum
element.classList.toggle("className")	On/Off switch madiri toggle pannum
element.classList.contains("className")

t1.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
  
  }

  b2.addEventListener("click", function () {
  aditm.innerHTML = "";
});
});*/
////////////////////////////////////////////////////////////////////////////////////
//new full hh bootstrab use pani
//taklist var
const taskList = document.getElementById("taskList");

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  //ipt vangi trim panuthom no space

  //include panunom sweetealeret in html la empty na ithu  allret print agum
  if (text === "") {
    // SweetAlert warning show pannum
    Swal.fire({
      title: "Alert!",
      text: "Please enter a task!!!",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return; // Empty na task add panna vendaam  add pana kuduthu
  }
  //suceessfully added
  /*swal.fire({
    title: "success!",
    text: "Your task is added",
    icon: "success",
    showCancelButton: false,
    confirmButtonColor: "#3085d6", //blue colur
    confirmButtonText: "ok",
  });*/

  //row var oru div hh create panuthom <div>   <h1>,btn;</>
  const row = document.createElement("div");
  row.className =
    "d-flex align-items-center justify-content-between mb-2 p-2 border rounded";
  //name oru vaer text content poi text la storer agum span input hh display pana

  /*<div id="taskList">
  <div>
    <span>My Task 1</span>
    <button>❌</button>
  </div>
</div>;*/

  const name = document.createElement("span");
  name.textContent = text;
  // btn create
  const delBtn = document.createElement("button");
  delBtn.className = "btn btn-sm btn-outline-danger";
  delBtn.innerHTML = "&#10060;";
  delBtn.onclick = () => taskList.removeChild(row); //remiove child
  //ithu vanthu div la append panuthom ellauthum
  row.appendChild(name);
  row.appendChild(delBtn);
  taskList.appendChild(row);

  input.value = "";
}

function clearTasks() {
  Swal.fire({
    title: "Are you sure?",
    text: "Surely delete all items?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, keep it",
  }).then((result) => {
    if (result.isConfirmed) {
      taskList.innerHTML = "";
      Swal.fire("Deleted!", "All items have been deleted.", "success");
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire("Cancelled", "Your items are safe.", "info");
    }
  });
}
//User cancel, close button, or escape press pannalum true aagum
//Neenga SweetAlert la showCancelButton: true kuduthaa podhum. Cancel click panna automatic-a dismiss: "cancel" varum.
