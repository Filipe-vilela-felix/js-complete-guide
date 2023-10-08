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
    return DEFAULT_USER_CHOICE;
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

const getWinner = (cChoice, pChoice) =>
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
  const winner = getWinner(computerChoice, playerChoice);
  console.log(winner);
  let message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you `;
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
CONTEXTUALIZANDO O CÓDIGO:
    - A variável gameIsRunning é usada para verificar se o jogo já está em execução. 
        Se o jogo já estiver em execução, a função retorna imediatamente e não executa o restante do código. (linha 63 a 65);
        - Quando o jogo começa, gameIsRunning é definido como true. (linha 66);

    - Criamos uma mensagem que informa ao usuário a escolha do jogador, a escolha do computador e o resultado do jogo.
        Se o resultado for um empate, a palavra ‘DRAW’ é adicionada à mensagem.
        Se o jogador ganhar, ‘WON’ é adicionado à mensagem. Se o computador ganhar, ‘LOST’ é adicionado à mensagem. (linhas 72 a 80);
    
    - A mensagem é exibida ao usuário usando o alert().

    - Finalmente, gameIsRunning é definido como false para indicar que o jogo terminou.
*/
