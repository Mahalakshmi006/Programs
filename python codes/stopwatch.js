<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>timer</title>
    <link rel="stylesheet" href="ex3.css" />
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
    <h1>Stop Watch</h1>
    <label id="number">00</label><br />
    <div class="blk">
      <button type="button" class="btn btn-primary" id="strt">increases</button>
      <button type="button" class="btn btn-primary" id="stop">Decreases</button>
      <button type="button" class="btn btn-primary" id="reset">Reset</button>
    </div>
    <script src="ex3.js"></script>
  </body>
</html>

***********************
* {
  margin: 0px;
  padding: 0px;
}
h1 {
  margin-left: 600px;
}
.blk {
  margin-left: 600px;
  margin-top: 40px;
}
#number {
  margin-left: 660px;
  margin-top: 70px;
  font-size: 6em;
}

******************************
let strt = document.getElementById("strt");
let stpt = document.getElementById("stop");
let rst = document.getElementById("reset");
let c = 0;
let label = document.getElementById("number");

strt.onclick = function () {
  c++;
  label.textContent = c;
};

stpt.onclick = function () {
  c--;
  label.textContent = c;
};

rst.onclick = function () {
  c = 0;
  label.textContent = c;
};
