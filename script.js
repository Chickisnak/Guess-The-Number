var number1 = Math.abs(Math.floor(Math.random() * 100) - 50);
const button2 = document.getElementById('button2')
button2.style.display = "none";
let container = document.getElementById('container');
container.style.display = 'none';
let card = document.getElementById('card');
var attempt = 1;
const start = new Audio('./start.mp3')

function playNow() {
  start.play();
  container.style.display = 'flex';
  card.style.display = 'none';
  document.getElementById("number").focus();
}
function check() {
  start.play();
  const result = document.getElementById('result')
  const button1 = document.getElementById('button1')
  let number2 = document.getElementById("number").value;
  document.getElementById("number").focus();
  const diff = number1 - number2;
  if (Math.abs(diff) == 0) {
    result.innerText = `Congratulations! You Won... and you took ${attempt} attempt`;
    button1.style.display = "none";
    button2.style.display = "flex";
    result.style.fontSize = "38px"
    document.getElementById("number").blur();
    document.getElementById("number").style.display = "none"
    document.getElementById("description").style.display = 'none';
  }
  else if (Math.abs(diff) > 20) {
    diff > 0 ? result.innerText = `You Guessed the number ${number2}.The Guessing Number is Too far from the number you guessed and guess the number above ${number2}` : result.innerText = `You Guessed the number ${number2}.The Guessing Number is Too Low from the number you guessed and guess the number below ${number2}`
    attempt += 1;
  }
  else if (Math.abs(diff) > 10) {
    diff > 0 ? result.innerText = `You Guessed the number ${number2}.The Guessing Number is far from the number you guessed and guess the number above ${number2}` : result.innerText = `You Guessed the number ${number2}.The Guessing Number is Low from the number you guessed and guess the number below ${number2}`
    attempt += 1;

  }
  else if (Math.abs(diff) <= 10) {
    diff > 0 ? result.innerText = `You Guessed the number ${number2}.The Guessing Number is Near from the number you guessed and guess the number above ${number2}` : result.innerText = `You Guessed the number ${number2}.The Guessing Number is Near from the number you guessed and guess the number below ${number2}`
    attempt += 1;
  }
}

function playAgain() {
  const result = document.getElementById('result')
  result.innerText = '';
  const button1 = document.getElementById('button1')
  button1.style.display = "";
  button2.style.display = "none";
  container.style.display = 'none';
  card.style.display = 'flex';
  result.style.fontSize = "20px"
  number1 = Math.abs(Math.floor(Math.random() * 100) - 50)
  document.getElementById("number").style.display = "flex"
  document.getElementById("description").style.display = 'flex';
}

