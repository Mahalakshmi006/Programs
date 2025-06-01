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
