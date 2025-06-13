<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>password Generator</title>
    <link rel="stylesheet" href="pswd.css" />
  </head>
  <body>
    <label>Password Length: </label>
    <input type="number" id="length" value="" />
    <button type="button" id="btn1">Generate</button>

    <h1><strong>Generated Password:</strong> <span id="result"></span></h1>

    <script src="pswd.js"></script>
  </body>
</html>
********************************************
body {
  background-image: url("pwd1.png"); /* Ungal image file name */
  background-size: cover; /* screen full-a cover aagum */
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh; /* full height */
  margin: 0;
  font-family: Arial, sans-serif;
}

label {
  margin-left: 450px;
  margin-top: 50px;
  font-size: 3rem;
  color: rgb(6, 81, 147);
  font-weight: bolder;
}
input {
  font-size: 2rem;
  text-align: center;
  width: 150px;
  margin-top: 280px;
  border-radius: 3px;
  border: 1px solid grey;
  height: 30px;
}
h1 {
  margin-left: 450px;
  margin-top: 50px;
}
#btn1 {
  width: 100px;
  height: 30px;
  border-radius: 3px;
  background: #4d94ff;
  font-size: 20px;
  border: 1px solid #80b3ff;
  margin-left: 20px;
  color: azure;
}
strong {
  color: #ff66cc;
}

span {
  color: rgb(6, 81, 147);
  margin-left: 20px;
}
###################################################
/*generatebtn = document.getElementById("btn1");

const includeLowercase = true;
const includeUppercase = true;
const includeSymbols = true;
const includeNumbers = true;
const passwordLength = 12;

function generator(
  passwordLength,
  includeLowercase,
  includeuppercase,
  includeNumbers,
  includesymbols
) {
  if (passwordLength <= 0) {
    window.alert("please enter atlest 12 character");
  }

  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let symbols = "!@#$%^&*()_+{}<>?";

  let allChars = "";

  if (includeLowercase) allChars += lowercase;
  if (includeUppercase) allChars += uppercase;
  if (includeNumbers) allChars += numbers;
  if (includeSymbols) allChars += symbols;

  let pwrd = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * allChars.length);
    pwrd += allChars[randomIndex];
  }
  return pwrd;
}

const pwd = generatebtn(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);

console.log(`Generated Password: ${pwd}`);
*/

if (length.value == "") {
  window.alert("Please choose a valid number");
}
const generatePassword = document.getElementById("btn1");
generatePassword.onclick = function () {
  // declare the symbols
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let pwd = "";

  // User kudukkura length
  let length = document.getElementById("length").value;

  if (!length || length <= 0) {
    window.alert("Please enter a valid number");
    return;
  }

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    pwd += characters[randomIndex];
  }

  document.getElementById("result").textContent = pwd;
};

