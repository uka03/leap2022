let mainDIv = document.getElementById("boxs");
mainDIv.style.width = "450px";
mainDIv.style.height = "450px";
mainDIv.style.display = "flex";
mainDIv.style.flexWrap = "wrap";
mainDIv.style.justifyContent = "space-Between";

let a = Math.floor(Math.random() * 255);
let c = Math.floor(Math.random() * 255);
let rDiv = Math.floor(Math.random() * 16) + 1;
let b = Math.floor(Math.random() * c);
console.log(rDiv);

for (let i = 1; i <= 16; i++) {
  let newDiv = document.createElement("div");
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.border = "1px solid black ";
  newDiv.style.borderRadius = "50%";
  newDiv.style.backgroundColor = `rgb(${a},${b},${c})`;
  mainDIv.appendChild(newDiv);
  if (i == rDiv) {
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.border = "1px solid black ";
    newDiv.style.backgroundColor = `rgb(${a},${b - 5},${c})`;
    console.log(`${a},${b - 10},${c}`);
  }
}
