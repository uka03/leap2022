let users = document.querySelector(".users");
let btn = document.querySelector("#submit");

fetch("http://localhost:3333/api/users/")
  .then((res) => res.json())
  .then((data) => {
    fetchUser(data);
  });

function fetchUser(data) {
  data.map((user) => {
    let h3;
    if (user.balance_type) {
      h3 = `<h3>balance type: hugatsaatai</h3>`;
    } else {
      h3 = `<h3>balance type: hugatsaagvi</h3>`;
    }
    let html = `<div class="user">
        <h3>name: ${user.name} ${user.surName}</h3>
        <h3>balance: ${user.balance}</h3>
        ${h3}
      </div>`;
    users.innerHTML += html;
  });
}

let input = document.querySelector("#input");

btn.addEventListener("click", () => {
  console.log(input.value);

  fetch("http://localhost:3333/api/users/")
    .then((res) => res.json())
    .then((data) => {
      balance(data);
    });
});

function balance(data) {
  users.innerHTML = "";
  data.map((user) => {
    let money = user.balance;
    for (let i = 0; i < input.value; i++) {
      let dollar = money;
      console.log(input.value);
      if (user.balance_type) {
        dollar = dollar * 0.1 + dollar;
      } else {
        dollar = dollar * 0.01 + dollar;
      }
      money = dollar;
    }
    let h3;
    if (user.balance_type) {
      h3 = `<h3>balance type: hugatsaatai</h3>`;
    } else {
      h3 = `<h3>balance type: hugatsaagvi</h3>`;
    }
    let html = `<div class="user">
        <h3>name: ${user.name} ${user.surName}</h3>
        <h3>balance: ${money}</h3>
        ${h3}
      </div>`;
    users.innerHTML += html;
  });
}
