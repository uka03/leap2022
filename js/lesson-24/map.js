let foods = [
  {
    name: "baked beans",
    price: 0.4,
    image: "beans.jpg",
    type: "vegetables",
  },
  {
    name: "hot dogs",
    price: 1.99,
    image: "hotdogs.jpg",
    type: "meat",
  },
  {
    name: "spam",
    price: 2.85,
    image: "spam.jpg",
    type: "meat",
  },
  {
    name: "refried beans",
    price: 0.99,
    image: "refried.jpg",
    type: "vegetables",
  },
  {
    name: "kidney beans",
    price: 0.58,
    image: "kidney.jpg",
    type: "vegetables",
  },
  {
    name: "garden peas",
    price: 0.52,
    image: "gardenpeas.jpg",
    type: "vegetables",
  },
  {
    name: "mushy peas",
    price: 0.58,
    image: "mushypeas.jpg",
    type: "vegetables",
  },
  {
    name: "corned beef",
    price: 2.39,
    image: "cornedbeef.jpg",
    type: "meat",
  },
  {
    name: "tomato soup",
    price: 1.4,
    image: "tomatosoup.jpg",
    type: "soup",
  },
  {
    name: "chopped tomatoes",
    price: 0.45,
    image: "tomato.jpg",
    type: "vegetables",
  },
  {
    name: "chicken noodle soup",
    price: 1.89,
    image: "chickennoodle.jpg",
    type: "soup",
  },
  {
    name: "carrot and coriander soup",
    price: 1.49,
    image: "carrotcoriander.jpg",
    type: "soup",
  },
];
let orcuulga = foods.map((food) => ({
  ner: food.name,
  une: food.price,
}));
console.log(orcuulga);

let names = ["boldoo", "dorjoo", "bataa", "altanaa", "yunchir", "uka"];
let sortNames = names.sort((name) => {
  if (name == "b") {
    return 10;
  } else {
    return -10;
  }
});
console.log(sortNames);
