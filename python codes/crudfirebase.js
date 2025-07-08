<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>loginpage</title>

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    <!----------csss link---------------------->

    <link rel="stylesheet" href="crud.css" />

    <!-----------iconic ions----------------------------->

    <script
      type="module"
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
    ></script>

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
    />
  </head>
  <body><!----ithu vanthu outer white box ku------------------>
    <!-----
    Property	Behavior
height	Fixed height, auto grow illa.
min-height	Minimum height irukum, content perusa aana auto grow agum.
max-height + overflow-y:auto	Maximum height limit, scroll bar varum.


Property	Behavior
height	Fixed height, auto grow illa.
min-height	Minimum height irukum, content perusa aana auto grow agum.
max-height + overflow-y:auto	Maximum height limit, scroll bar varum.

Must important min height
#############################
max-height:300px; overflow-y:auto; na:
Box max 300px height.
Content mella poyna scroll varum.

    ----->
  <div class="p-5 bg-white text-dark rounded-3 shadow"
  style="
    width: 100%;
    max-width: 900px;
    margin-top: 50px;
    min-height: 120px;
    margin-right: 80px;
    margin-left: 300px;
  ">

  
      <!----------------
    Part	Meaning
m	margin
p	padding
t	top
b	bottom
s	start (LEFT in LTR language)
e	end (RIGHT in LTR language)
x	left and right (X axis)
y	top and bottom (Y axis)
(nothing)	all 4 sides
    -->

<!---------------nav bar-------------------------------->
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent " style="color: blue;">
       <h2>Contact Manger</h2>
    </div>
  </div>
</nav>

<!--------frm---------------------->

<div class="container mt-3"><!-----konjam meal povum----->
  <div class="card shadow">
    <div class="card-header bg-dark text-white mb-3;">
      <h4 class="mb-0 d-flex align-items-center gap-2"><ion-icon name="person-add-outline"style="font-size:30px;"></ion-icon>Add new Contact</h4>
    </div><!------display felx  center gap 2 na b/w two------------>
    <div class="card-body">
      <form id="userForm">
           <!----hidden hh iruku ---------------->
        <input type="hidden" id="id"/>
        <div class="mb-3">
          <label for="firstname" class="form-label">First Name</label>
          <input
            type="text"
            class="form-control"
            id="firstname"
            
            required
          />
        </div>
        <div class="mb-3">
          <label for="lastname" class="form-label">Last Name</label>
          <input
            type="text"
            class="form-control"
            id="lastname"
           
            required
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
           
            required
          />
        </div>
        <div class="mb-3">
          <label for="mobile" class="form-label">Mobile Number</label>
          <input
            type="tel"
            class="form-control"
            id="mobile"
            
            required
          />
        </div>
        <button type="submit" class="btn btn-success">Submit</button><!----type must submit---->
      </form>
    </div>
  </div>
</div>
      <!-----table format------  mt-margin top--->
      <div class="table mt-5">
        <table
          class="table table-striped table-light me-5 table-bordered"
          style="border: 2px solid #7f7f7e; text-align: center"
        >
          <!---------border ku color kuduthruom ithula-----    text algn center ku vaum ----->

          <!-----stripped na color chnage agum border na outline table light na athula uila uila color ---->
          <tr class="table-dark">
            <!----ithu  head ku mattumthu antha table row ku -->
            <!-----tbl row---->
            <th>s.no</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          <tbody id="tblbdy"> <!----- <th colspan="2" style="margin-right: 30px">Actions</th>-->
       
        </tbody> 
        </table>
      </div>
    </div>
  </div>  
    <!-------------------alretet------>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <script src="crud.js" type="module"></script>
  </body>
</html>
########################################
//firebase db link  itula db sila function hh add panumom

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
  set,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";
//firebase db link  itula db sila function hh add panumom then db name .js lam kudukanuom D mut

// Firebase config
//kela uila link athu oru varabile crudstting
const crudstting = {
  databaseURL: "https://jscrud-9175e-default-rtdb.firebaseio.com/",
};

// Initialize app and database
// app oru var athula crudstting pass panuthom function call panuthom particular db link agum itha kudtha
const app = initializeApp(crudstting);
//ithu mulama namo db la uila tbl la eduka muduim
const database = getDatabase(app);
//ref function mulama edukalam  ithula db name um tbl name um kukom
const usrcruddb = ref(database, "cntctbl");

// Select all elements
const fstnmeele = document.querySelector("#firstname");
const lstnmeele = document.querySelector("#lastname");
const mailele = document.querySelector("#email");
const mblele = document.querySelector("#mobile");
const frm = document.querySelector("#userForm");
const tblbdyele = document.querySelector("#tblbdy");
//must to be select the id then chnage the content
const idele = document.querySelector("#id");

//frm use pani submit paniu use panuthom

// Handle form submit
//frm use pani submit paniu use panuthom

frm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Validation ethavthu null hh irutha  error varum
  if (
    !fstnmeele.value.trim() ||
    !lstnmeele.value.trim() ||
    !mailele.value.trim() ||
    !mblele.value.trim()
  ) {
    swal.fire({
      title: "Error!",
      text: "Error: Please fill all values",
      icon: "warning",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
    });
    return;
  }

  //updtae function
  if (idele.value) {
    //set function hh use pani athula ref um db name aprm tbl nameum pass pana porom
    set(ref(database, "cntctbl/" + idele.value), {
      fnme: fstnmeele.value.trim(),
      lnme: lstnmeele.value.trim(),
      eml: mailele.value.trim(),
      mbl: mblele.value.trim(),
    });

    return;
  }
  //ithula concatenate panirukom fstnme oda value va then set

  // Preoper data space hh kudutha accept pnama trim panum  newusr must obj case senstive
  //itha than tble formatbla kudukanum
  const newusr = {
    fnme: fstnmeele.value.trim(),
    lnme: lstnmeele.value.trim(),
    eml: mailele.value.trim(),
    mbl: mblele.value.trim(),
  };

  // Store in Firebase ithula push funct use pani ref hhum obj um uila pass panuthom
  push(usrcruddb, newusr)
    .then(() => {
      //then na ithu result check it
      // Success alert
      swal.fire({
        title: "Success!",
        text: "User added successfully.",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });

      // Clear form
      frm.reset();
    }) //error through panuom
    .catch((error) => {
      console.error("Error adding user:", error);
      swal.fire({
        title: "Error!",
        text: "Failed to add user. Check console.",
        icon: "error",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });
    });
});
//onvalue funt use pani  check panuthom must db ref

//  object creatae pani athula entries nu fun hh call pani athukula itha pass panumom 
onValue(usrcruddb, function (snapshot) {
  if (snapshot.exists()) {
    let usrArray = Object.entries(snapshot.val()); //val function must not value
    console.log(usrArray);
    tblbdyele.innerHTML = ""; // first ellathum clear panuthom

    //loop la atha print pana porom
    for (let i = 0; i < usrArray.length; i++) {
      let currentusr = usrArray[i]; //ithula curntusr apdigura var la usrarray odfa 1 elem irukuom
      let currentusrID = currentusr[0]; //athodaid
      let currentusrValue = currentusr[1]; //atghuoda value   //$ must to identify //ithula id set panikuduthom
      //td la kiuduthruka name namo tbl name use panirupom la athu ethu na newusr la kuduthrukom la athu name
      tblbdyele.innerHTML += ` 
      <tr>
      <td>${i + 1}</td>
      <td>${currentusrValue.fnme}</td>
      <td>${currentusrValue.lnme}</td>
      <td>${currentusrValue.eml}</td>
      <td>${currentusrValue.mbl}</td>
      
      <td>
        <button class="btn-edit rounded-end"style="background-color: #F39C12; border-color: #F39C12; "data-id="${currentusrID}">
          <ion-icon name="create-outline" style="font-size: 30px; color:rgb(228, 224, 223);"></"></ion-icon>
        </button>
      </td>
      <td>
        <button class="btn-delete rounded-end"style="background-color:rgb(240, 61, 12); border-color: rgb(240, 61, 12); " data-id="${currentusrID}">
          <ion-icon name="trash-outline" style="font-size: 30px;color:rgb(228, 224, 223);"></ion-icon>
        </button>
      </td>
    </tr>`;
    }
  } else {
    tblbdyele.innerHTML = "<tr><td colspan='7'>No record found</td></tr>";
  }
});
/*Line	Purpose
let currentusrID = currentusr[0];	Firebase-la store panna record-oda unique ID
let currentusrValue = currentusr[1];	Andha record-oda all fields (name, email, etc)
ID (currentusrID) venum update / delete panna (data-id ku pass panna)

Value (currentusrValue) venum table la display panna

irst array element [0] = ID / key

Second element [1] = actual user data


@@@@@@@@@@@@@2irst array element [0] = ID / key

Second element [1] = actual user data
firebase automatically does this “key + value” split.
firebase Realtime Database:

  if (btn.classList.contains("btn-edit")) {
    const id = btn.dataset.id;
    const tdel = e.target.closest("tr").children;
    //ithula id store agum
    idele.value = id;
    fstnmeele.value = tdel[1].textContent;
    lstnmeele.value = tdel[2].textContent;
    mailele.value = tdel[3].textContent;
    mblele.value = tdel[4].textContent;

    //ithulam mela mention panirukarathu nadukum
    // btn-delete class irundha, Delete button click aachu nu artham.
  } else if (btn.classList.contains("btn-delete")) {
    if (btn.classList.contains("btn-delete")) {
      Swal.fire({
        title: "Are you sure?",
        text: "Surely delete all items?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, keep it",
      }).then((result) => {
        if (result.isConfirmed) {
          tblbdyele.innerHTML = "";
          //confirmation keum
          const id = btn.dataset.id; // id var la  delete pana kudiya id irukom
          let data = ref(database, `cntctbl/${id}`);
          remove(data);
          Swal.fire("Deleted!", "All items have been deleted.", "success");
        }
      });
    }
  }
});
#########################
* {
  margin: 0px;
  padding: 0px;
}
body {
  background-color: #bebebc;
}
.btn-edit ion-icon,
.btn-dlete ion-icon {
  pointer-events: none;
}

Input:focus {
  border: 2px solid rgb(6, 174, 6) !important; /* Focus pannumbothu border blue */
  box-shadow: none !important; /* Bootstrap glow remove */
  outline: none;
}
