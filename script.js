let btn = document.querySelector("button");
let inner = document.querySelector(".inner");
let h2 = document.querySelector("h2");
let p = document.querySelector("p");
let grow = 0;

btn.addEventListener("click", function () {
  btn.style.pointerEvents = "none";
  btn.style.opacity = 0.7;

  let num = 50 + Math.floor(Math.random() * 50);

  let interval = setInterval(() => {
    grow++;

    inner.style.width = grow + "%";
    h2.innerText = grow + "%";
  }, num);

  setTimeout(() => {
    p.innerHTML = `Your file was downloaded in <span> ${num / 10}</span> seconds`;
    clearInterval(interval);
  }, num * 100);
});
