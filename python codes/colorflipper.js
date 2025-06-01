const colorText = document.getElementById("colorText");

// Function to change background color
function changeColor(color) {
  document.body.style.backgroundColor = color;
  colorText.innerText = "Current color: " + color;
}

// Add click listeners to each button
document.getElementById("redBtn").onclick = () => changeColor("red");
document.getElementById("greenBtn").onclick = () => changeColor("green");
document.getElementById("blueBtn").onclick = () => changeColor("blue");
document.getElementById("yellowBtn").onclick = () => changeColor("gold");
document.getElementById("purpleBtn").onclick = () => changeColor("purple");
document.getElementById("pink").onclick = () => changeColor("pink");
