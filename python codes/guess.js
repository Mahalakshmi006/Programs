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
