const btn = document.getElementById("btn1");

btn.onclick = function () {
  let x = Math.floor(Math.random() * 10) + 1;
  let y = Math.floor(Math.random() * 10) + 1;
  let z = Math.floor(Math.random() * 10) + 1;
  document.getElementById("t1").innerHTML = "the first number is:" + x;
  document.getElementById("t2").innerHTML = "the Second number is:" + y;
  document.getElementById("t3").innerHTML = "the third number is:" + z;
};
