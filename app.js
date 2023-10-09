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

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
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
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }
  let message = `You picked ${
    playerChoice ? playerChoice : DEFAULT_USER_CHOICE
  }, computer picked ${computerChoice}, therefore you `;
  if (winner === RESULT_DRAW) {
    message = message + "had a DRAW";
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + "WON.";
  } else {
    message = message + "LOST.";
  }
  alert(message);
  gameIsRunnig = false;
});

// NÃO REÇLACIONADO AO JOGO:

const sumUp = (a, b, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  }

  let sum = 0;
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  return sum;
};

const subtractUp = function() {
  let sum = 0;
  for (const num of arguments) {  // Não use isso!
    sum -= num;
  }
  return sum;
};

console.log(sumUp(1, 5, 'fdsa', 10, -3, 6, 10));
console.log(subtractUp(1, 10, 15, 20));

/*
  O que difere este código do commit anterior, é o aprendizado que nos permite inserir uma função dentro de uma função. (linhas 93 a 95);

CONTEXTUALIZANDO O CÓDIGO:
  A função sumUp() é uma função externa que aceita um número indeterminado de argumentos (através do operador de descanso). (linha 92); 
  Dentro dessa função sumUp(), temos outra função chamada validateNumber(). Essa é a nossa função aninhada. (linhas 93 a 95);
  
  A função aninhada validateNumber() é usada para verificar se o valor fornecido é um número. 
  Se o valor não for um número, ele retorna 0; caso contrário, retorna o próprio número. 
  Essa função aninhada é usada para garantir que estamos somando apenas valores numéricos.
*/
