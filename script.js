const inputElement = document.querySelector("input");
const submitBtnElement = document.querySelector("#submitBtn");
const restartBtnElement = document.querySelector("#restartBtn");
const resultElement = document.querySelector("#result");
const preGuessElement = document.querySelector("#preGuess");
const remGuessElement = document.querySelector("#remGuess");

let randomNumber;
let chances;
let previousGuesses;

newValues();

function newValues() {
  randomNumber = (Math.random() * 100).toFixed(0);
  chances = 10;
  previousGuesses = [];  
  resultElement.innerHTML = "";
  preGuessElement.innerHTML = "";
  remGuessElement.innerHTML = "";
  inputElement.value = "";
}

submitBtnElement.addEventListener("click", () => {  
  inputValidation();
})

restartBtnElement.addEventListener("click", () => {
  newValues();
})

inputElement.addEventListener('keypress', (e) => {  
  if (e.key === 'Enter') {
    inputValidation()
  } 
})

function inputValidation() {
  let userNumber = inputElement.value;
  if (userNumber === "" || isNaN(userNumber) || userNumber > 100) {
    resultElement.classList.remove("text-green-500");
    resultElement.classList.add("text-red-500");
    resultElement.innerHTML = "⚠️Invalid Number";
  } else {
    previousGuesses.push(userNumber);
    guessNumber(userNumber, randomNumber);
  }  
}

function guessNumber(userNumber, randomNumber) {
  if (chances == 0) {
    resultElement.classList.remove("text-green-500");
    resultElement.classList.add("text-red-500");
    resultElement.innerHTML = "⚠️you have no chances";
    return;
  } else {
    if (userNumber === randomNumber) {
      resultElement.classList.remove("text-red-500");
      resultElement.classList.add("text-green-500");
      resultElement.innerHTML = "✅number has matched successfully";
    } else {
      resultElement.classList.remove("text-green-500");
      resultElement.classList.add("text-red-500");
      resultElement.innerHTML = "❌sorry try again";
    }
    chances--;
    preGuessElement.innerHTML = `Previous Guesses: ${previousGuesses}`;
    remGuessElement.innerHTML = `Guesses Remaining: ${chances}`;
  }
}




