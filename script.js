let secretNumber;
let attempts;

function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("message").textContent = "";
  document.getElementById("attempts").textContent = "";
  document.getElementById("guess").value = "";
}

function checkGuess() {
  const userGuess = parseInt(document.getElementById("guess").value);
  const message = document.getElementById("message");
  attempts++;

  if (isNaN(userGuess)) {
    message.textContent = "❌ Please enter a number!";
    message.style.color = "orange";
  } else if (userGuess === secretNumber) {
    message.textContent = `🎉 Correct! You guessed it in ${attempts} tries.`;
    message.style.color = "green";
  } else if (userGuess > secretNumber) {
    message.textContent = "📉 Too high! Try again.";
    message.style.color = "red";
  } else {
    message.textContent = "📈 Too low! Try again.";
    message.style.color = "red";
  }

  document.getElementById("attempts").textContent = `Attempts: ${attempts}`;
}

document.getElementById("submit").addEventListener("click", checkGuess);
document.getElementById("restart").addEventListener("click", startGame);

startGame(); // start on page load
