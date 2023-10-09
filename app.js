const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSOR";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunnig = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We choice ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const ramdomValue = Math.random();
  if (ramdomValue < 0.34) {
    return ROCK;
  } else if (ramdomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// const add = (a, b) => a + b;
// const add2 = function(a, b) {
//     return a + b;
// }

const getWinner = (
    cChoice, 
    pChoice = DEFAULT_USER_CHOICE
) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

// if (cChoice === pChoice) {
//     return RESULT_DRAW;
// } else if (
//     (cChoice === ROCK && pChoice === PAPER) ||
//     (cChoice === PAPER && pChoice === SCISSORS) ||
//     (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//     return RESULT_PLAYER_WINS;
// } else {
//     return RESULT_COMPUTER_WINS;
// }

startGameBtn.addEventListener("click", () => {
  if (gameIsRunnig) {
    return;
  }
  gameIsRunnig = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }
  let message = `You picked ${playerChoice ? playerChoice : DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `;
  if (winner === RESULT_DRAW) {
    message = message + 'had a DRAW';
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + 'WON.';
  } else {
    message = message + 'LOST.';
  }
  alert(message);
  gameIsRunnig = false;
});

/*
    Um argumento padrão é um valor que é atribuído a um parâmetro de função quando nenhum argumento é fornecido durante a chamada da função.
    O argumento padrão é usado em getWinner(). (linha 41);


CONTEXTUALIZANDO O CÓDIGO:
    Neste caso, pChoice é o parâmetro que tem um valor padrão de DEFAULT_USER_CHOICE. (linha 43);
    Isso significa que se a função getWinner for chamada com apenas um argumento (a escolha do computador), (linha 77);
        o segundo argumento (a escolha do jogador) será automaticamente definido como DEFAULT_USER_CHOICE.
*/
