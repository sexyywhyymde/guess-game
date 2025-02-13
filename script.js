const inputGuess = document.getElementById("guess");
const buttonCheck = document.getElementById("check");
const message = document.getElementById("message");
const attemptsOutput = document.getElementById("attempts");
const restartButton = document.getElementById("restart");

let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

attemptsOutput.textContent = maxAttempts;

inputGuess.addEventListener("input", cleanMessage);
buttonCheck.addEventListener("click", checkGuess);
restartButton.addEventListener("click", restartGame);

function checkGuess() {
  const userGuess = parseInt(inputGuess.value);

  if (attempts >= maxAttempts) {
    updateMessage("У вас закончились попытки", "fail");
    disableGame();
    return;
  }

  attempts++;
  attemptsOutput.textContent = maxAttempts - attempts;

  if (userGuess < 1 || userGuess > 100) {
    updateMessage("Пожалуйста введите чиcло от 1 до 100", "incorrect");
    return;
  }

  if (secretNumber === userGuess) {
    updateMessage("Вы угадали", "correct");
    disableGame();
  } else if (secretNumber - 1 === userGuess) {
    updateMessage("Горячо немного больше", "warning");
  } else if (secretNumber + 1 === userGuess) {
    updateMessage("Горячо немного меньше", "warning");
  } else if (secretNumber > userGuess) {
    updateMessage("Число должно быть больше", "incorrect");
  } else {
    updateMessage("Число должно быть меньше", "incorrect");
  }
}

function cleanMessage() {
  message.textContent = "";
  message.className = "";
}

function updateMessage(text, className) {
  message.textContent = text;
  message.className = className;
}

function disableGame() {
  inputGuess.disabled = true;
  buttonCheck.disabled = true;
}

function restartGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  inputGuess.value = "";
  message.textContent = "";
  message.className = "";
  buttonCheck.disabled = false;
  inputGuess.disabled = false;
  attemptsOutput.textContent = maxAttempts;
}
