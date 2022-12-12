// // document.getElementById("root").innerText = "Hello World";
// // // document.getElementById("rot").innerHTML = "Hello World";
// // document.getElementsByClassName("dummy")[0].innerHTML = "Hello World";
// // // document.getElementsByTagName("div")[2].innerText = "Hello pinecone";
// // document.getElementsByClassName("root")[0].innerHTML = "HELOO WORLD";
// // // document.getElementsByName("img")[0].scr = "2";
// // document.getElementsByClassName("root")[0].style.backgroundColor = "blue";

// const newDiv = document.createElement("h1");
// const newContent = document.createTextNode("Манай сайтад тавтай морил");
// newDiv.appendChild(newContent);
// const main = document.getElementsByTagName("main");
// main[0].appendChild(newDiv);

// let listElement = document.getElementsByClassName("list")[0];
// let ulElement = document.createElement("ul");
// listElement.appendChild(ulElement);

// for (let i = 0; i <= 100; i++) {
//   let liElement = document.createElement("li");
//   liElement.innerText = i;
//   ulElement.appendChild(liElement);
// }

// let ches = document.getElementsByClassName("ches")[0];
// ches.style.display = "flex";
// ches.style.flexWrap = "wrap";
// ches.style.width = "850px";

// for (let i = 0; i < 8; i++) {
//   for (let j = 0; j < 8; j++) {
//     let newDiv = document.createElement("div");
//     ches.appendChild(newDiv);
//     newDiv.style.width = "100px";
//     newDiv.style.height = "100px";
//     newDiv.style.border = "1px solid black";
//     if ((i + j) % 2 == 0) {
//       newDiv.style.backgroundColor = "grey";
//     }
//   }
// }
// }
// }
// }
const clock = document.getElementById("clock");
let h = 0,
  m = 0,
  s = 0;
let output = "";
let time = setInterval(function () {
  s++;

  if (s == 59) {
    s = 0;
    m++;
  } else if (m == 59) {
    m = 0;
    h++;
  } else if (h == 23) {
    h = 0;
  }
  clock.innerText = `${h < 10 ? "0" : ""}${h}:${m < 10 ? "0" : ""}${m}:${
    s < 10 ? "0" : ""
  }${s}`;
}, 0);
let i = 10;
let wiDiv = document.getElementById("wDiv");
wiDiv.style.height = "100px";

wiDiv.style.border = "1px solid black";

let width = setInterval(function () {
  i++;
  wiDiv.style.width = `${i}px`;
  if (i == 1000) {
    i = 0;
  }
}, 1);
