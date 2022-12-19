let customBtn = document.querySelector(".root");
customBtn.innerText = "click me";
let desktop = document.querySelector("body");
let scrollPo = 0;
let hol = document.querySelector(".huwi");

window.addEventListener("scroll", () => {
  let undur = window.scrollY;
  let huwiii = Math.round(
    (window.scrollY * 100) / (desktop.clientHeight - window.innerHeight)
  );
  hol.innerHTML = `${huwiii}%`;
});
