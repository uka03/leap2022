let myAge = 22;

if (myAge >= 21) {
  console.log("orohiiig zuwshuurnu");
} else {
  console.log("orohiig horiglno");
}

let day = 9;
let dayName;

if (day === 1) {
  dayName = "Monday";
} else if (day === 2) {
  dayName = "tuesday";
} else if (day === 3) {
  dayName = "Wednesday";
} else if (day === 4) {
  dayName = "thursday";
} else if (day === 5) {
  dayName = "friday";
} else if (day === 6) {
  dayName = "saturday";
} else if (day === 7) {
  dayName = "sunday";
} else {
  dayName = "error";
}
if (day <= 8) {
  console.log("Day name is " + dayName);
} else {
  console.log("number is " + dayName);
}

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("not a day");
}

if (day == 1 || day == 2 || day == 3 || day == 4 || day == 5) {
  console.log("working day");
} else {
  console.log("week day");
}

let x = 100,
  y = 50,
  z = 30;
if (x > y) {
  if (x > z) {
    console.log(x, " n hamgiin ih");
  } else {
    console.log(z, " n hamgiin ih");
  }
} else {
  if (y > z) {
    console.log(y, " n hamgiin ih");
  } else {
    console.log(z, " n hamgiin ih");
  }
}

if (x > y && x > z) {
  console.log(x, " n hamgiin ig");
} else if (y > z) {
  console.log(y, " n hamgiin ig");
} else {
  console.log(z, " n hamgiin ig");
}
let age = 31;
if (age < 21) {
  console.log("your are not allowed to drink alchohol");
} else {
  console.log("you are allowed to drink alchohol");
}

// condition ? true : false;
age < 21
  ? console.log("your are not allowed to drink alchohol")
  : console.log("you are allowed to drink alchohol");

const myState = age >= 10 && age <= 18 ? "teenage" : "adult";
