let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
const randomnb = Math.floor(Math.random() * 100) + 1;
console.log(randomnb);


var button = document.getElementById("turn"),
    nbturn = 1;


function checkGuess(){

    let guess = document.getElementById("inputnb").value;
    if (nbturn == 1) {
      guesses.textContent = 'Previous guesses : ';
    }
    guesses.textContent += guess + ' ';
  
    if (guess == randomnb) {
      lastResult.textContent = 'Number found';
      lowOrHi.textContent = '';
    } else if (nbturn == 10) {
       lastResult.textContent = 'You lost';
    } else {
       lastResult.textContent = 'False';
       if (guess < randomnb) {
        lowOrHi.textContent = 'Higher';
       } else if (guess > randomnb) {
        lowOrHi.textContent = 'Lower';
       }
    }
    nbturn += 1;
    button.innerHTML = "Turn: " + nbturn;
    guessField.value = '';
    guessField.focus();
  }