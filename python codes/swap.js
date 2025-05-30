<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>swap two values</title>
    <link rel="stylesheet" href="prac.css" />
    <!---botstab------>
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
    <h1>Swap Value</h1>
    <div class="whole">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Enter a value 1:</label
          >
          <input
            type="text"
            class="form-control"
            id="text1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label"
            >Enter a value 2:</label
          >
          <input type="text" class="form-control" id="text2" />
        </div>
        <div class="total">
        <button type="button" class="btn btn-primary" id="btn1">check me</button>
        <div class="b2">
        <button type="button" class="btn btn-primary" id="btn2">clear</button>
        <p id="r1"></p>
    </div>
</div>
      </form>
    </div>  
</div>
<script src="prac.js"></script>
  </body>
</html>

------------------------------
let temp;
let text1;
let text2;

document.getElementById("btn1").onclick = function () {
  text1 = document.getElementById("text1").value;
  text2 = document.getElementById("text2").value;

  temp = text1;
  text1 = text2;
  text2 = temp;

  document.getElementById("text1").value = text1;
  document.getElementById("text2").value = text2;
  console.log(text1, text2);
};

document.getElementById("btn2").onclick = function () {
  document.getElementById("text1").value = "";
  document.getElementById("text2").value = "";
};
