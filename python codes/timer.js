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
