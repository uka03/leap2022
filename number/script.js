let inNumber = document.getElementsByClassName('guess')[0];
let guessNumber = 0;
let checkBtn = document.getElementsByClassName('check')[0];
let againBtn = document.getElementsByClassName('again')[0];
let randomNumber;
againBtn.innerHTML = 'Эхлэх';

function gameStart() {
  randomNumber = Math.floor(Math.random() * 20) + 1;

  console.log(randomNumber);
  // let guessNumber = 0;
  // // document.getElementsByClassName('message')[0].innerHTML = 'Тааж эхлээрэй...';
  // // document.getElementsByClassName('number')[0].innerHTML = '?';
  // // inNumber.value = '';
  // // againBtn.style.display = 'none';
  checkBtn.addEventListener('click', () => {
    guessNumber = inNumber.value;

    if (randomNumber == guessNumber) {
      document.getElementsByClassName('number')[0].innerHTML = randomNumber;
      console.log('start game');
      document.getElementsByClassName('message')[0].innerHTML =
        'Таньд баяр хүргье!!! ';
      againBtn.innerHTML = 'Шинээр Эхлэх';
      againBtn.style.display = 'block';
    } else if (randomNumber > guessNumber) {
      document.getElementsByClassName('message')[0].innerHTML =
        'Тоо бага байна';
    } else {
      document.getElementsByClassName('message')[0].innerHTML = 'Тоо их байна';
    }
  });
}
againBtn.addEventListener('click', () => {
  gameStart();
  randomNumber;
  document.getElementsByClassName('message')[0].innerHTML;
  againBtn.style.display = 'none';
  inNumber.value = '';
  console.log('daragdlaa');
  document.getElementsByClassName('number')[0].innerHTML = '?';
  document.getElementsByClassName('message')[0].innerHTML =
    document.getElementsByClassName('message')[0].innerHTML =
      'Тааж эхлээрэй...';
});
