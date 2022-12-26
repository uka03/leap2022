// const { reject } = require("async");

// const { reject } = require("async");

// async function fryEgg() {
//   return 1;
// }
// console.log(fryEgg());

function coffee() {
  let coffe_promise = new Promise((resolve, reject) => {
    resolve("finished coffee");
  });
  return coffe_promise;
}

function egg() {
  let result;
  let egg_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      result = resolve("eggs done");
    }, 1000);
    result = resolve("eggs not done");
  });
  return result;
}
function bacon() {
  let bacon_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("bacon done");
    }, 2000);
  });
  return bacon_promise;
}

async function start() {
  let result = (await egg()) + " " + bacon() + " " + (await coffee());
  console.log(result);
}

start();
