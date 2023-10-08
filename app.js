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
  console.log("Game is starting...");
  const PlayerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, PlayerChoice);
  console.log(winner);
});

/*
FUNÇÃO DE SETA:
    Sempre que tivermos uma função anônima, podemos usar uma sintaxe diferente. 
    Nessa sintaxe, retiramos a nomenclatura "function" e adicionamos após os parênteses uma seta '=>'. Isso se chama FUNÇÃO DE SETA.

    Sintaxe geral: 
        (arg1, arg2) => {...}
        

    Sem argumentos / Parâmetros: 
        () => {...}
    
    Exatamente (1) argumento / Parâmetro: 
        arg => {...}

    Exatamente uma expressão no corpo da função: 
        (a, b) => a + b
    
    Mais de uma expressão no corpo da função: 
        (a, b) => { 
            a *= 2; 
            return a + b; 
        }

    A vantagem de usa-la é que ela apresenta alguns truques extras:
        Para demonstrar uma das vantagens, ao invés de deixarmos o corpo da função getWinner() como está (linhas comentadas 50 a 60), 
            vamos substitui-lo por uma condicional ternária. (linhas 42 a 48);
        Agora, como temos uma função de seta, onde há apenas uma expressão... 
            podemos omitir as chaves, o ';' no final da função, e omitir a palavra chave return.
        Para melhor entendimento, veja o exemplo comentado nas linha 36 a 39;

CONTEXTUALIZANDO O CÓDIGO:
    Alteramos todas as funções para funções de seta.
*/
