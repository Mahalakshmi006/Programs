const button = document.getElementById("b1");
const p1 = document.getElementById("p1");

button.onclick = function () {
  let text = document.getElementById("t1").value;
  if (text != 0) {
    let reveresd = text.split("").reverse().join("");

    if (text == reveresd) {
      document.getElementById("p1").innerText = `"${text}" is a palindrome`;
    }
  } else {
    document.getElementById("p1").innerText = `"${text}" is not  a palindrome`;
  }
};
