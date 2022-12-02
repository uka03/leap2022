let output = "";

// for (let i = 1; i < 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     output = output + j + " ";
//   }
//   output = output + "\n";
//   debugger;
// }

let output1 = "";
// let n = parseFloat(prompt("toogoo oruula uu"));
let n = 5;

for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= n; col++) {
    if (row == 1 || row == n || col == 1 || col == n) {
      output = output + "*";
    } else {
      output = output + " ";
    }
  }
  output = output + "\n";
  debugger;
}
console.log(output + "\n \n \n ");

for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= n; col++) {
    output = output + "*";
  }
  output = output + "\n";
  debugger;
}
console.log(output);

let number = "123456765432";
console.log(number.charAt(number.length - 3));
console.log(number.substring(1, 3));
number =
  number.substring(0, number.length - 3) +
  "_" +
  number.substring(number.length - 3, number.length);
console.log(number);

let password = 123456789;
let yourPass;
while (password != Number(yourPass)) {
  yourPass = prompt("enter your password");
}

alert("welcome");
