<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Form</title>
    <link rel="stylesheet" href="form.css" />

    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <script
      type="module"
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
    ></script>
  </head>
  <body>
    <div class="card">
      <div class="card-body">
        <!----- name ------->
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>

          <input
            type="text"
            class="form-control"
            id="name"
            name="name"
            autocomplete="off"
            required
          />
        </div>
        <!----- uname ------->

        <div class="mb-3">
          <!----  <ion-icon name="mail-outline"></ion-icon>-->
          <label for="uname" class="form-label">Email</label>

          <div class="input-group has-validation">
            <div class="ume">
              <span class="input-group-text" id="eml">@</span>

              <input
                type="email"
                class="form-control"
                name="email"
                autocomplete="off"
                required
              />
            </div>
          </div>
        </div>
        <!---required--->
        <!----- phone ------->
        <div class="mb-3">
          <label for="phone" class="form-label">Phone</label>
          <input
            type="text"
            class="form-control"
            id="phone"
            name="phone"
            autocomplete="off"
            required
          />
        </div>
        <!----- address ------->
        <div class="mb-3">
          <label for="address" class="form-label">Address</label>
          <input
            type="text"
            class="form-control"
            id="address"
            name="address"
            autocomplete="off"
            required
          />
        </div>
        <!----- city ------->
        <div class="mb-3">
          <label for="city" class="form-label">City</label>
          <input
            type="text"
            class="form-control"
            id="city"
            name="city"
            autocomplete="off"
            required
          />
        </div>

        <!----- pincode ------->
        <div class="mb-3">
          <label for="pincode" class="form-label">Pincode</label>
          <input
            type="text"
            class="form-control"
            id="pincode"
            name="pincode"
            autocomplete="off"
            required
          />
        </div>
        <!----- select ------->
        <div class="mb-3">
          <label for="state" class="form-label">State</label>
          <select
            class="form-select"
            id="state"
            name="state"
            autocomplete="off"
            required
          >
            <option selected disabled value="">choose</option>
            <option>Tamil Nadu</option>
            <option>Kerala</option>
            <option>Karanataka</option>
            <option>maharasahta</option>
          </select>
        </div>

        <!----- datretime ------->
        <div class="mb-3">
          <label for="dtetme" class="form-label">Date-time</label>
          <input
            type="datetime-local"
            class="form-control"
            id="dtetme"
            name="dtetme"
            autocomplete="off"
            required
          />
        </div>

        <!------ buttton ------->
        <div class="">
          <button
            type="submit"
            class="btn btn-outline-danger"
            id="btn1"
            required=""
          >
            payment
          </button>
        </div>
      </div>
      <!---body card--->
    </div>
    <div id="op"></div>
    <script src="form.js"></script>
  </body>
</html>
****************************
btn1 = document.getElementById("btn1");

btn1.onclick = function () {
  let inputs = document.querySelectorAll("input");
  let allFilled = true;
  for (let input of inputs) {
    if (input.value.trim() === "") {
      allFilled = false;
      break;
    }
  }
  if (!allFilled) {
    alert("please fill all feilds");
    return;
  }

  n = document.getElementById("name").value;
  em = document.getElementById("eml").value;
  mbl = document.getElementById("phone").value;
  adrs = document.getElementById("address").value;
  cty = document.getElementById("city").value;
  pcde = document.getElementById("pincode").value;
  ste = document.getElementById("state").value;
  dte = document.getElementById("dtetme").value;

  document.getElementById("op").innerHTML = `<h2>Register details</h2>
    <p>
      <b>Name:</b>${n}
    </p>
    <p>
      <b>Email:</b>${em}
    </p>
    <p>
      <b>Mobile:</b>${mbl}
    </p>
    <p>
      <b>Adress:</b>${adrs}
    </p>
    <p>
      <b>City:</b>${cty}
    </p>
    <p>
      <b>Pincode:</b>${pcde}
    </p>

    <p>
      <b>State:</b>${ste}
    </p>
    <p>
      <b>Date:</b>${dte}
    </p>

  `;
};
***************************
.card {
  width: 600px;
  margin-left: 500px;
  margin-top: 50px;
  border: solid 1px #f92288;
}
.card-header {
  background-color: #f92288;
  height: 60px;
  color: white;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}
.b1 {
  margin-left: 250px;
  margin-top: 30px;
}
.form-label {
  font-size: 24px;
  font-weight: medium;
}

.card-footer {
  background-color: #f92288;
  height: 40px;
  color: white;
}
.input-area {
  margin-bottom: 20px;
}
.form-select {
  width: 560px;
  height: 50px;
  outline: none;
  border: 1px solid rgb(207, 205, 207);
  font-size: 28px;
  border-radius: 3px;
}
.col-md-3 {
  margin-left: 0px;
}
.ume {
  display: flex;
}

.ume input {
  width: 520px;
}
ion-icon {
  font-size: 30px;
}

.popup {
  width: 400px;
  background: #fff;
  border-radius: 6px;
  border: solid 2px #f92288;
  position: absolute;
  top: 0%;
  left: 40%;
  transform: translate(-50%, -50%) scale(0.1);
  text-align: center;
  padding: 0 30px 30px;
  color: #333;
  visibility: hidden;
  transition: transform 0.4s, top 0.4s;
}
.open-popup {
  visibility: visible;
  top: 60%;
  transform: translate(-50%, -50%) scale(1.1);
}
.popup img {
  width: 150px;
  margin-top: -50px;
  border-radius: 50%;
  box-shadow: 0 2px 5px (rgb(0, 0, 0, 0.2));
}
.popup button {
  width: 100%;
  margin-top: 50px;
  padding: 10px 0;
  background: #6fd649;
  color: #fff;
  border: 0;
  outline: none;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 5px 5px (rgb(0, 0, 0, 0.2));
}
.submit {
  height: 40px;
  width: 100px;
  outline: none;
  color: #fff;
  background: #ff3091;
  border: 1px solid #ff3091;
  border-radius: 5px;
  font-size: 18px;
  margin-right: 20px;
  margin-top: 30px;
}
