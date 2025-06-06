<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Palindrome</title>
    <link rel="stylesheet" href="pali.css" />
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
    <h1>Palindrome Checker</h1>
    <div class="ttl">
      <label id="lbl">Enter the string</label>
      <input type="text" id="t1" />
      <button type="button" class="btn btn-primary" id="b1">check</button>
      <h1 id="p1"></h1>
    </div>
    <script src="pali.js"></script>
  </body>
</html>
***********************
* {
  margin: 0px;
  padding: 0px;
}
body {
  background-color: antiquewhite;
}
h1 {
  text-align: center;
  margin-top: 40px;
}
.ttl {
  margin-left: 500px;
  font-size: larger;
  font-size: 30px;
  font-weight: 100;
  margin-top: 40px;
}
#p1 {
  margin-top: 30px;
}
*********************
const button = document.getElementById("b1");
const p1 = document.getElementById("p1");

button.onclick = function () {
  let text = document.getElementById("t1").value.trim();

  if (text === "") {
    alert("Please enter a value.");
    return;
  }

  let reversed = text.split("").reverse().join("");

  if (text === reversed) {
    p1.innerText = `"${text}" is a palindrome`;
  } else {
    p1.innerText = `"${text}" is not a palindrome`;
  }
};
