<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Generate Quotes</title>
    <link rel="stylesheet" href="gen.css" />
  </head>
  <body>
    <div class="l1">
      <h1>Genrate Quotes</h1>
      <button id="btn1">Generate the quotes</button>
      <h2 id="h1"></h2>
    </div>
    <script src="genra.js"></script>
  </body>
</html>
************************************
* {
  padding: 0px;
  margin: 0px;
}
body {
  background-image: url("bkimg2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-left: 400px;
  width: 700px;
  height: 400px;
}
h1 {
  margin-left: 200px;
  font-size: 60px;
}
#btn1 {
  margin-left: 250px;
  margin-top: 40px;
  width: 250px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid rgb(241, 125, 164);
}
#h1 {
  margin-top: 50px;
}


*********************************
document.getElementById("h1");
btn = document.getElementById("btn1");
let quote = [
  "Just one small positive thought in the morning can change your whole day.",
  "Opportunities dont happen you create them.",
  "Love your family, work super hard, live your passion.",
  "It is never too late to be what you might have been",
  "We cannot solve problems with the kind of thinking we employed when we came up with them.",
  "Learn as if you will live forever, live like you will die tomorrow. ",
  "Success is not final; failure is not fatal: It is the courage to continue that counts.",
  "It is better to fail in originality than to succeed in imitation",
];

btn.addEventListener("click", function () {
  var randomquts = quote[Math.floor(Math.random() * quote.length)];
  h1.innerText = randomquts;
});
