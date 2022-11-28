//task1 "Comment can make code readable"
// task2"Javascript lesson begin"
/* task3 "Comments can make code readable" */
//task 3 and 5
let firstName = "uka";
let lastName;
let maritalStatus = true;
let country = null;
let age = 18;
alert(
  "task 3 and 5 " +
    typeof firstName +
    " " +
    typeof lastName +
    " " +
    typeof maritalStatus +
    " " +
    typeof country +
    " " +
    typeof age
);

//task 6 and 7
let utgatai = "utgatai";
let utgagvi;
alert("task 6 and 7 " + utgatai + " " + utgagvi);
//task8 and 9
let fName = "uka";
let lName;
let mStatus = true;
let city = null;
let number1 = 18;
let serialNumber = 20102034,
  phoneName = "iphone 14 pro ",
  lapptopName = "macbook air 2020";
//task11 gurwaljingiin p oloh
let aside = parseFloat(prompt(" enter triangle A side"));
let bside = parseFloat(prompt(" enter triangle b side"));
let cside = parseFloat(prompt(" enter triangle c side"));
alert("Task-11 " + "gurwaljingiiin hureenii urt ni " + (aside + bside + cside));

// task12 toirgiin talbaig oloh
let roundR = parseFloat(prompt(" enter radius "));
let roundS = roundR * roundR * 3.14;
alert("Task-12 " + "toirgiin talbai ni " + roundS);

//task13 m = y2-y1/x2-x1 хариуг олох
let y2 = 10;
let y1 = 5;
let x1 = 2;
let x2 = 7;
let m = (y2 - y1) / (x2 - x1);
alert("task 13" + "(y2 - y1) / (x2 - x1) iin hariu   " + m);

// task14 15gb heden bite we

let gb = 15;
let bite = gb * 1073741824;
alert("Task-14 " + " 15gb ni " + bite + "bitetei tentsuu");

//task15 15mb 3s to bps

let mb = 15;
let sec = 3;
let mbs = mb / sec;
let mbps = mbs * 8;
let bps = mbps * 1000000;
alert("Task-15 " + mb + "mb " + sec + "sec" + " to bps " + "=" + bps + "bps");

// Task16 triangle area
let side1 = parseFloat(prompt("enter triangle A side"));
let side2 = parseFloat(prompt("enter triangle B side"));
let side3 = parseFloat(prompt("enter triangle C side"));

let triangleP = (side1 + side2 + side3) / 2;
let triangleS = Math.sqrt(
  triangleP * (triangleP - side1) * (triangleP - side2) * (triangleP - side3)
);

alert("Task-16 " + "gurwaljingiin talbai " + triangleS);

//task17 C to F
let Celsius = parseFloat(prompt("enter Celsius"));
let Fahrenheit = (Celsius * 9) / 5 + 32;
alert("Task-17 " + Celsius + "C to " + Fahrenheit + "F");

//task18 F to C
let far = parseFloat(prompt("enter Fahrenheit "));
let cels = ((far - 32) * 5) / 9;
alert("Task-18 " + far + "F to " + cels + "C");

//task19 number math
let num1 = 15;
let num2 = 10;
let sum = num1 + num2;
let def = num1 - num2;
let multi = num1 * num2;
let depo = num1 / num2;
let res = num1 % num2;
alert(
  "(Task-19)" +
    "\nӨгөгдсөн 2 тооны нийлбэр нь " +
    sum +
    "\nӨгөгдсөн 2 тооны ялгавар нь " +
    def +
    "\nӨгөгдсөн 2 тооны үрживэр нь " +
    multi +
    "\nӨгөгдсөн 2 тооны ноогдвор нь " +
    depo +
    "\nӨгөгдсөн 2 тооны үлдэгдэл нь " +
    res
);

//task20 cm to inch icn to cm
let cm = parseFloat(prompt("enter cm "));
let cmToInch = cm / 2.54;
alert("task20" + " cm ni " + cmToInch + "inch");
let inch = parseFloat(prompt("enter inch"));
let inchToCm = inch * 2.54;
alert("task20" + " inch ni " + inchToCm + "cm");

//task 21 circle area and perimeter
let circleR = parseFloat(prompt("enter circle radius"));
let circleS = circleR * circleR * 3.14;
let circleP = circleR * 2 * 3.14;
alert(
  "task-21 " +
    "Дугуйн радиус нь " +
    circleR +
    " үед " +
    "\nДугуйн периметр нь " +
    circleP +
    "\nДугуйн талбай нь " +
    circleS
);

//task 22
let number = parseFloat(prompt("3 оронтой тоо оруулна уу"));
let zOron = (number - (number % 100)) / 100;
alert("task-22 " + "ehnii too ni " + zOron);

//task23 baby shark song lyrics
let baSh = "Baby Shark";
let moSh = "Mommy Shark";
let daSh = "Daddy Shark";
let gmSh = "Grandma Shark";
let gpSh = "Grandpa Shark";
let leGoHu = "Let's go hunt";
let ruAw = "Run away";
let saAtLa = "Safe at last";
let itTeEd = "It's the end";
let doo = "doo-doo";

console.log(
  "Baby Shark lyrics" + "\n"+
  "\n" + baSh+ ", "+doo+", "+doo+
  "\n" + baSh+ ", "+doo+", "+doo+
  "\n" + baSh+ ", "+doo+", "+doo+
  "\n" + baSh + "\n" +
  "\n" + moSh+ ", "+doo+", "+doo+
  "\n" + moSh+ ", "+doo+", "+doo+
  "\n" + moSh+ ", "+doo+", "+doo+
  "\n" + moSh + "\n" +
  "\n" + daSh+ ", "+doo+", "+doo+
  "\n" + daSh+ ", "+doo+", "+doo+
  "\n" + daSh+ ", "+doo+", "+doo+
  "\n" + daSh + "\n" +
  "\n" + gmSh+ ", "+doo+", "+doo+
  "\n" + gmSh+ ", "+doo+", "+doo+
  "\n" + gmSh+ ", "+doo+", "+doo+
  "\n" + gmSh + "\n" +
  "\n" + gpSh+ ", "+doo+", "+doo+
  "\n" + gpSh+ ", "+doo+", "+doo+
  "\n" + gpSh+ ", "+doo+", "+doo+
  "\n" + gpSh + "\n" +
  "\n" + leGoHu+ ", "+doo+", "+doo+
  "\n" + leGoHu+ ", "+doo+", "+doo+
  "\n" + leGoHu+ ", "+doo+", "+doo+
  "\n" + leGoHu + "\n" +
  "\n" + ruAw+ ", "+doo+", "+doo+
  "\n" + ruAw+ ", "+doo+", "+doo+
  "\n" + ruAw+ ", "+doo+", "+doo+
  "\n" + ruAw + "\n" +
  "\n" + saAtLa+ ", "+doo+", "+doo+
  "\n" + saAtLa+ ", "+doo+", "+doo+
  "\n" + saAtLa+ ", "+doo+", "+doo+
  "\n" + saAtLa + "\n" +
  "\n" + itTeEd+ ", "+doo+", "+doo+
  "\n" + itTeEd+ ", "+doo+", "+doo+
  "\n" + itTeEd+ ", "+doo+", "+doo+
  "\n" + itTeEd + "\n" 
  );
