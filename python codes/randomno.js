<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Number</title>
    <link rel="stylesheet" href="random.css">
</head>
<body>
    <h1>Random number Generator in three digit</h1>
 
   
    <button id="btn1">generate</button>
    
    <h2 id="t1"></h2>
    <h2 id="t2"></h2>
    <h2 id="t3"></h2>
    <script src="random.js"></script>
  </body>
</html>

</body>
</html>
********************
body {
  background-color: rgb(246, 205, 152);
}
#btn1 {
  margin-left: 300px;
  width: 100px;
  height: 30px;
  border-radius: 3px;
  border: solid 1px rgb(246, 152, 30);
  background-color: rgb(246, 152, 30);
  font-size: 20px;
}
h1 {
  margin-left: 300px;
}
h2 {
  margin-left: 300px;
}
****************
const btn = document.getElementById("btn1");

btn.onclick = function () {
  let x = Math.floor(Math.random() * 10) + 1;
  let y = Math.floor(Math.random() * 10) + 1;
  let z = Math.floor(Math.random() * 10) + 1;
  document.getElementById("t1").innerHTML = "the first number is:" + x;
  document.getElementById("t2").innerHTML = "the Second number is:" + y;
  document.getElementById("t3").innerHTML = "the third number is:" + z;
};
