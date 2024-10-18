let secretNumber;
let attemptsLeft = 20;
let highscore = 0;

// Funció per inicialitzar el joc
function initGame() {
    secretNumber = Math.floor(Math.random() * 10) + 1;
    attemptsLeft = 20;
    document.getElementById("secretNumber").textContent = '?';
    document.getElementById("message").textContent = "Comencem la partida...";
    document.getElementById("attempts").textContent = attemptsLeft;
    document.getElementById("guessInput").value = '';
    document.getElementById("resetBtn").disabled = true;
    document.getElementById("resetBtn").style.cursor = 'not-allowed';
    document.body.style.backgroundColor = ''; // Reiniciar color de fons
}

// Funció per processar l'intent
function checkGuess() {
    const userGuess = Number(document.getElementById("guessInput").value);
    if (!userGuess || userGuess < 1 || userGuess > 10) {
        alert("El número introduït no és correcte");
        return;
    }

    attemptsLeft--;
    document.getElementById("attempts").textContent = attemptsLeft;

    if (userGuess === secretNumber) {
        document.getElementById("message").textContent = `Correcte! El número és ${secretNumber}`;
        document.getElementById("secretNumber").textContent = secretNumber;
        document.body.style.backgroundColor = 'green'; // Canvi de color a verd
        checkHighscore();
        endGame();
    } else if (attemptsLeft === 0) {
        document.getElementById("message").textContent = `Partida acabada! El número era ${secretNumber}`;
        document.getElementById("secretNumber").textContent = secretNumber;
        document.body.style.backgroundColor = 'red'; // Canvi de color a vermell
        endGame();
    } else if (userGuess < secretNumber) {
        document.getElementById("message").textContent = "El número és més gran!";
    } else {
        document.getElementById("message").textContent = "El número és més petit!";
    }
}

// Comprovar i actualitzar el millor resultat
function checkHighscore() {
    const currentScore = 20 - attemptsLeft;
    if (highscore === 0 || currentScore < highscore) {
        highscore = currentScore;
        document.getElementById("highscore").textContent = highscore;
    }
}

// Finalitzar el joc
function endGame() {
    document.getElementById("guessBtn").disabled = true;
    document.getElementById("resetBtn").disabled = false;
    document.getElementById("resetBtn").style.cursor = 'pointer';
}

// Iniciar un nou joc al clic del botó "Reinicia"
document.getElementById("resetBtn").addEventListener("click", function() {
    initGame();
    document.getElementById("guessBtn").disabled = false;
});

// Processar el clic al botó "Prova"
document.getElementById("guessBtn").addEventListener("click", function() {
    checkGuess();
});

// Inicialitzar el joc quan es carrega la pàgina
initGame();
