const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");
const resetButton = document.querySelector("resetButton");
let rodada = 1;
let humanScoreNumber = 0;
let machineScoreNumber = 0;

const GAME_OPTIONS = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
};

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine());
    console.log("retorno", +playMachine());
};

const playMachine = () => {
    const choices = [
        GAME_OPTIONS.PAPER,
        GAME_OPTIONS.ROCK,
        GAME_OPTIONS.SCISSORS,
    ];
    const randomNumber = Math.floor(Math.random() * 3);

    console.log(randomNumber);

    return choices[randomNumber];
};
const resetGame = () => {
    rodada = 1;
    humanScoreNumber = 0;
    machineScoreNumber = 0;
    humanScore.innerHTML = humanScoreNumber;
    machineScore.innerHTML = machineScoreNumber;
    result.innerHTML = "Jogo reiniciado!";

    if (resetButton) {
        resetButton.addEventListener("click", () => {
            console.log("jogo reiniciado");
        });
    } else {
        console.log("reseButton");
    }
};

const playTheGame = (human, machine) => {
    console.log("Humano:" + human + "Maquina: " + machine);

    if (human === machine) {
        result.innerHTML = "Deu empate ";
    } else if (
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
    ) {
        humanScoreNumber++;
        humanScore.innerHTML = humanScoreNumber;
        result.innerHTML = "tchê ganhou !";
    } else {
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;
        result.innerHTML = "vivente ganhou !";
    }
};
