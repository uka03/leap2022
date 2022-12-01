//tas
let text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
let numberOfA = 0;
let count = 0;

while (text.length >= count) {
  if (text[count] == "a" || text[count] == "A") {
    numberOfA = numberOfA + 1;
  }
  count = count + 1;
}

console.log(numberOfA);

let num = 100;
let count3 = 0;
while (num > 0) {
  if (num % 3 === 0) {
    count3++;
  }
  num--;
}
console.log(count3);

let numb = 1;
let sum = 0;

while (numb <= 100) {
  sum = numb + sum;
  numb = numb + 1;
}
console.log(sum);

let x = 10;
count = 1;
let output = "";

while (x > 0) {
  let y = 10;
  while (y > 0) {
    output = output + count + " \t";
    if (count % 10 == 0) output += "\n";
    y--;
    count++;
  }
  x--;
}

console.log(output);
x = 8;
count = 1;
output = "";

while (x > 0) {
  let y = 20;
  while (y > 0) {
    output = output + count + "\t";
    if (count % 20 == 0) output += "\n";
    y--;
    count++;
  }
  x--;
}

console.log(output);
