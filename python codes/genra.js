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
