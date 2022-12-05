let numbers = [10, 20, 30, 40]; //0, 1, 2, 3, 4, 5 ...
let nas = " ";
for (let i = 1; numbers.length > i; i++) {
  numbers[i]++;
}
console.log(numbers);

let studentnames = ["boldo", "dorjo", "tstesgee", "dulmaa"];
let i = 0;

while (i <= studentnames.length) {
  if (studentnames[i] && studentnames[i][0] === "t") {
    console.log(studentnames[i]);
  }
  i++;
}

let names = [
  "boldoo",
  "tsetsgee",
  "uka",
  "yunchir",
  "tuga",
  "jamiyanpurew",
  "enhtuul",
  "batnym",
  "sharawnymbuu",
  "yalalt",
  "naran",
  "baynaa",
];
let urtner = "";
i = 0;

while (i < names.length) {
  if (names[i].length > urtner.length) {
    urtner = names[i];
  } else {
    urtner = urtner;
  }
  i++;
}

console.log(urtner);

// for (let i = 0; i < x.length; i++) {
//   for (let j = 0; j < x[o].length; j++) {}
// }

let now = new Date();
console.log(now);

let Jan01_1970 = new Date(1);
console.log(Jan01_1970);
