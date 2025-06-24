<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="addlst.css" />
    
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    <title>Addlist</title>
  </head>
  <body>
    
      <body>
        <!-- Fullscreen Gradient Background -->
        <div
          class="container-fluid min-vh-100 d-flex justify-content-center align-items-center"
          style="background: linear-gradient(to right, #00c6ff, #0072ff)">
        
          <!-- Centered White Box -->
          <div
            class="p-5 bg-white text-dark rounded-3 shadow"
            style="width: 100%; max-width: 600px; margin-right: 50px; margin-bottom: 300px;"
          >
            <h2 class="text-center mb-5">Add Task</h2>
           <!---- #0d6efd;---   me-5 margin end-e m-margin space5-
           rounded-end na end la round apdi start yop bottom> 
           <!-- Input and Buttons Row -->
            <div class="input-group mb-3">
              <input
                type="text"
                id="taskInput"
                class="form-control me-5"
                placeholder="Enter your task" 
              />  
              <button class="btn btn-success me-5 rounded-end	" onclick="addTask()">Add</button>
              <button class="btn btn-danger" onclick="clearTasks()">
                Delete
              </button>
            </div>

            <!-- Task List HTML la namma empty div vaichirundha podhum.
➡ JS la create panna tags athu kulla inject agum.-->
            <div id="taskList"></div>
          </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <script src="addlst.js"></script>
  </body>
</html>
########################################################################

/new full hh bootstrab use pani
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
######################################################
#taskInput {
  border: 2px solid rgb(78, 146, 241);
  border-radius: 6px;
  transition: border 0.2s ease;
}

#taskInput:focus {
  border: 2px solid rgb(6, 174, 6) !important; /* Focus pannumbothu border blue */
  box-shadow: none !important;      /* Bootstrap glow remove */
  outline: none;
}
