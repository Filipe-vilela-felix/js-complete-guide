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
  let sum = 0;
  for (const num of numbers) {
    sum += num;
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

console.log(sumUp(1, 5, 10, -3, 6, 10));
console.log(subtractUp(1, 10, 15, 20));

/*
OPERADOR DE DESCANSO (REST OPERATOR) ->' ...': (linhas 92 a 98 e 108);
  O operador de descanso é usado para representar um número indefinido de argumentos como um array, no caso, ...numbers. 
  No exemplo, sumUp(), o operador de descanso é usado para coletar 
    todos os argumentos adicionais passados para a função em um array chamado 'numbers'.
  Neste caso, a e b capturam os dois primeiros argumentos passados para a função, e ...numbers captura todos os argumentos restantes.

OBJETO ARGUMENTS (não recomendado): (linhas 100 a 106 e 109);
  O objeto arguments é uma variável local disponível dentro de todas as funções não-arrow. 
  Você pode referir-se a ele na função para obter uma lista de todos os argumentos passados para essa função. 
  No exemplo subtractUp, arguments é usado para iterar sobre cada argumento passado para a função.

OBSERVAÇÃO:
  Não confunda operador de descanso com operador spread.
  Embora ambos usem a mesma sintaxe...

  - Operador Spread: Espalha elementos de um array (ou objeto) em elementos individuais.
      Ex: let arr1 = [1, 2, 3];
          let arr2 = [...arr1, 4, 5]; // arr2 agora é [1, 2, 3, 4, 5]
        
  - Operador de descanso: Coleta vários elementos em um array. Isso é útil em uma função que pode ter um número indefinido de argumentos.
      Ex: function minhaFuncao(...args) {
            console.log(args);
          }
          minhaFuncao(1, 2, 3); // Saída: [1, 2, 3]

    Então, embora a sintaxe seja a mesma, o operador spread “expande” um array em seus elementos individuais, 
      enquanto o operador de descanso coleta vários argumentos em um único array.
*/
