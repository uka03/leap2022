// let person = {
//   firstname: "Ууган-Эрдэнэ",
//   lastname: "Lkhagvajargal",
//   age: 18,
//   score: [34, 55, 12],
//   isMarried: false,
//   shout: () => {
//     return "woohoo";
//   },
// };
// let person2 = {
//   firstname: "dorj",
//   lastname: "bat",
//   age: 18,
//   score: [34, 55, 12],
//   isMarried: false,
//   shout: () => {
//     return "woohoo";
//   },
//   fullname: () => {
//     return this.firstname + " " + this.lastname;
//   },
//   address: {
//     country: "Mongolia",
//     city: "ulaanbaatar",
//   },
// };

// console.log(person2.fullname());

// let person1 = [10, 20, 30];
// person3 = [...person1];
// person3[0] = 100;
// console.log(Object.keys(person2));
// console.log(Object.values(person2));
// console.log(Object.toString(person2));

let athlets = [
  {
    name: "yunchir",
    age: 19,
    record: [10, 30, 50, 30],
  },
  {
    name: "uka",
    age: 18,
    record: [20, 50, 30],
  },
  {
    name: "batnym",
    age: 20,
    record: [86, 48, 93],
  },
  {
    name: "tuga",
    age: 38,
    record: [67, 47, 83, 90, 26],
  },
  {
    name: "sharwaa",
    age: 22,
    record: [87, 45, 63, 76, 56, 76],
  },
];
let mrecord = [],
  Aname = [],
  merge = [];
function getAvargeSpeed(AvRecord) {
  let aRecord = 0;
  for (i = 0; i < AvRecord.length; i++) {
    let eRecord = 0;
    for (j = 0; j < AvRecord[i].record.length; j++) {
      eRecord = eRecord + AvRecord[i].record[j];
    }
    Aname[i] = AvRecord[i].name;
    eRecord = eRecord / AvRecord[i].record.length;
    mrecord[i] = eRecord.toFixed(2);
    aRecord = aRecord + eRecord;
  }
  aRecord = aRecord / AvRecord.length;
  return aRecord;
}

function getAvargeAge(number) {
  let aAge = 0;
  for (i = 0; i < number.length; i++) {
    aAge = aAge + number[i].age;
  }
  aAge = aAge / number.length;
  return Math.round(aAge);
}

function getAtheletsInfo(mr, an) {
  let output = "";
  for (i = 0; i < mr.length; i++) {
    output = output + an[i] + ":" + "\t\t" + mrecord[i] + "sec" + "\n";
  }
  return output;
}
console.log(getAvargeSpeed(athlets));
console.log(getAvargeAge(athlets));
console.log(getAtheletsInfo(mrecord, Aname));

merge[0] = Aname[0];
merge[1] = mrecord[0];
console.log(merge);

let athletics = [
  {
    name: "gonchig",
    age: 15,
    country: "Mongolia",
    record: [10, 20, 30],
  },
  {
    name: "dorj",
    age: 25,
    country: "Mongolia",
    record: [100, 20, 30, 40],
  },
  {
    name: "dulmaa",
    age: 35,
    country: "USA",
    record: [100, 20, 30, 200],
  },
  {
    name: "Bat",
    age: 20,
    country: "USA",
    record: [100, 20],
  },
  {
    name: "Bold",
    age: 21,
    country: "Korea",
    record: [10, 20, 300],
  },
];

getAllInfo(athletics);

function getAllNames(list) {
  let names = [];
  for (i = 0; i < list.length; i++) {
    names.push(list[i].name);
  }

  return names;
}

// {
//     name: "gonchig",
//     age: 15,
//     country: "Mongolia",
//     record: [10, 20, 30],
//   },

function getAvgSec(list) {
  let avgList = [];
  for (i = 0; i < list.length; i++) {
    //list.length = 5 (hunii too)
    let sum = 0;
    for (j = 0; j < list[i].record.length; j++) {
      sum += list[i].record[j];
    }

    let personNewObj = {
      name: list[i].name,
      avg: sum / list[i].record.length,
    };
    avgList.push(personNewObj);
  }
  return avgList;
}

function getAvgAge(list) {
  let sum = 0;
  for (i = 0; i < list.length; i++) {
    sum += list[i].age;
  }
  return Math.round(sum / list.length);
}

function getAllInfo(list) {
  let names = getAllNames(list);
  let avgAge = getAvgAge(list);
  let avgSec = getAvgSec(list);
  let sum = 0;
  for (i = 0; i < avgSec.length; i++) {
    sum += avgSec[i].avg;
  }
  console.table(avgSec);
  console.log("Avarage Speed:\t", sum / avgSec.length);
  console.log("Avarage Age:\t", avgAge);
  console.log("All Names: \t", names);
  return;
}
