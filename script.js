const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");
const resultElement = document.querySelector("#result");
const preGuessElement = document.querySelector("#preGuess");
const remGuessElement = document.querySelector("#remGuess");

const randomNumber = (Math.random() * 100).toFixed(0);
let chances = 10;
let previousGuesses = [];

buttonElement.addEventListener("click", () => {  
  let userNumber = inputElement.value;
  if (userNumber === "" || isNaN(userNumber) || userNumber > 100) {
    resultElement.classList.remove("text-green-500");
    resultElement.classList.add("text-red-500");
    resultElement.innerHTML = "⚠️Invalid Number";
  } else {
    previousGuesses.push(userNumber);
    guessNumber(userNumber, randomNumber);
  }
})
inputElement.addEventListener('keypress', (e) => {  
  if (e.key === 'Enter') {
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
})

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




