// let num1 = 10,
//   num2 = "uka",
//   num3 = null,
//   num4 = true,
//   num5;

// console.log(typeof num1);
// console.log(typeof num2);
// console.log(typeof num3);
// console.log(typeof num4);
// console.log(typeof num5);

let firstName = "uka";
let lastName = "yura";
let maritalStatus = true;
let country = "Mongolia";
let age = 18;

/* //gurwaljingiin p oloh
let aside = parseFloat(prompt(" enter A side"));
let bside = parseFloat(prompt(" enter b side"));
let cside = parseFloat(prompt(" enter c side"));
alert("gurwaljingiiin p ni " + (aside + bside + cside));

//toirgiin talbaig oloh
let circleR = parseFloat(prompt(" enter radius "));
let circleS = circleR * circleR * 3.14;
alert("toirgiin talbai ni " + circleS); */

// m = y2-y1/x2-x1 хариуг олох
let y2 = 10;
let y1 = 5;
let x1 = 2;
let x2 = 7;
let m = (y2 - y1) / (x2 - x1);
alert(m);

// 15gb heden bite we

let gb = 15;
let bite = gb * 1073741824;
alert(bite + "bite");

// 15mb 3s to bps

let mb = 15;
let sec = 3;
let mbs = mb / sec;
let mbps = mbs * 8;
let bps = mbps * 1000000;
alert(mb + "mb" + sec + "sec" + " to bps" + "=" + bps);

//triangle area
let side1 = parseFloat(prompt("enter A side"));
let side2 = parseFloat(prompt("enter B side"));
let side3 = parseFloat(prompt("enter C side"));

let triangleP = (side1 + side2 + side3) / 2;
let triangleS = Math.sqrt(
  triangleP * (triangleP - side1) * (triangleP - side2) * (triangleP - side3)
);

alert(triangleS);
