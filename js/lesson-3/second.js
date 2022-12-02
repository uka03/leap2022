let bby = "baby shark baby shark";
let full = bby.concat(" ", " doo-doo");
console.log(bby.toUpperCase());
console.log(bby.toLowerCase());
console.log(full);
console.log(bby.length);
console.log(bby.charAt(3));
console;
console.log(bby.substring(3, 4));
console.log(bby.substr(3, 4));
console.log(bby.indexOf("shark"));
console.log(bby.substring(0));

let str = "this is substring ";
let firstPart = str.substring(0, str.indexOf("is"));
console.log(firstPart);
let lastpart = str.substring(str.indexOf("is") + "is".length, str.length);

str = firstPart.concat(lastpart);
firstPart = str.substring(0, str.indexOf("is"));
lastpart = str.substring(str.indexOf("is") + "is".length, str.length);

console.log(firstPart.concat(lastpart));
