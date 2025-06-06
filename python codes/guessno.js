<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Guess Number</title>
  </head>
  <link rel="stylesheet" href="guess.css" />

  <body>
    <h1>Guses Number</h1>
    <h3 id="h3">Enter the Gussing number between 1-5</h3>
    <input type="text" id="t1" />
    <button type="button" id="btn">submit</button>
    <h1 id="h"></h1>

    <script src="guess.js"></script>
  </body>
</html>
********************************
* {
  padding: 0px;
  margin: 0px;
}
body {
  background-color: rgb(241, 125, 164);
}
h1 {
  margin-left: 600px;
}
#t1 {
  margin-left: 400px;
  margin-top: 40px;
}
#t1 {
  width: 200px;
  height: 30px;
  border-radius: 3px;
  border: solid 1px rgb(138, 124, 129);
}
h3 {
  margin-left: 400px;
  margin-top: 40px;
  font-size: 24px;
}
#btn {
  margin-left: 5px;
  font-size: 26px;
  font-weight: 20;
  border: solid 1px rgb(138, 124, 129);
  border-radius: 5px;
  width: 150px;
  height: 35px;
}
********************************
const min = 1;
const max = 5;
let attmpt = 0;
const ans = Math.floor(Math.random() * max) + 1;

document.getElementById("btn").onclick = function () {
  let text = document.getElementById("t1").value;

  const gues = parseInt(text);
  attmpt++;
  if (isNaN(gues)) {
    window.alert("plese enter a correct value");
  } else if (gues < min || gues > max) {
    window.alert(`plese enter a value between ${min} to ${max}`);
  } else {
    if (gues == ans) {
      window.alert(`correct! you guessed number${gues} ${attmpt} attempts`);
    } else {
      window.alert("wrong guess! try again!");
    }
  }
};
