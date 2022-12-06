// // "Hello there" text heweldeg

// function greet() {
//   console.log("Hello there");
// }
// //функ дуудах
// greet();

// function myFunction(p1, p2, p3) {
//   return p1 + p2 + p3;
// }

// let result = myFunction(1, 2, 3);
// console.log(result);

// let number1 = 3.4;
// let number2 = 4;

// function add(number1, number2) {
//   return number1 + number2;
// }

// result = add(number1, number2);

// console.log("the sum is " + result);

// let a = function (name) {
//   return "hello " + name;
// };
// console.log(a("yunchir"));
// //uurchiluh bolomjgvi
// const b = (name) => {
//   return "hello " + name;
// };
// console.log(b("uka"));
const input = "Hello Worl";

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const other = " ";
output = "";

function converter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let k = 0; k < upper.length; k++)
      if (input[i] == upper[k]) {
        output = output + lower[k];
      } else if (input[i] == lower[k]) {
        output = output + upper[k];
      } else if (input[i] == other[k]) {
        output = output + other[k];
      }
  }
  return output;
}

console.log(converter(input));
let pay = 27500;

function tulbur(number) {
  if (number > 5000 && number < 30000) {
    return (number * 15) / 100 + number;
  } else {
    return (number * 20) / 100 + number;
  }
}

console.log(tulbur(pay));

function addedPayment(number) {
  if (number > 5000 && number < 30000) {
    return (number * 15) / 100;
  } else {
    return (number * 20) / 100;
  }
}
console.log(addedPayment(pay));
