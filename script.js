const secretNumber = Math.floor(Math.random() * 100) + 1;
const inputGuess = document.getElementById("guess");
const buttonCheck = document.getElementById("check");
const message = document.getElementById("message");

inputGuess.addEventListener("input", () => {
  updateMessage("", "");
});

buttonCheck.addEventListener("click", checkGuess);

function checkGuess() {
  const userGuess = parseInt(inputGuess.value);

  if (userGuess < 1 || userGuess > 100) {
    console.log("Привет");
    updateMessage("Пожалуйста введите чиcло от 1 до 100", "incorrect");
    return;
  }

  if (secretNumber === userGuess) {
    updateMessage("Вы угадали", "correct");
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

function updateMessage(text, className) {
  message.textContent = text;
  message.className = className;
}
