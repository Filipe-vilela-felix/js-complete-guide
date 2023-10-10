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

const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  }

  let sum = 0;
  for (const num of numbers) {
    if (operation === 'ADD') {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum);
};

// const subtractUp = function(resultHandler, ...numbers) {
//   let sum = 0;
//   for (const num of numbers) {  // Não use isso!
//     sum -= num;
//   }
//   resultHandler(sum);
// };

const showResult = (messageText, result) => {
  alert(messageText + result);
}

combine(showResult.bind(this, 'The result after adding all numbers is: '), 'ADD', 1, 5, 'fdsa', 10, -3, 6, 10);
combine(showResult.bind(this, 'The result after subtracting all numbers is: '), 'SUBTRACT', 1, 10, 15, 20);

/*
  O método .bind() é usado para criar uma nova função que tem seu contexto this definido para o valor fornecido, 
    com uma sequência de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada.
  Em outras palavras, ele é usado quando você quer que uma função seja chamada mais tarde, 
    mas você quer que ela seja chamada com um contexto específico ou com alguns argumentos já definidos.

CONTEXTUALIZANDO O CÓDIGO:
  No commit anterior, você tinha duas funções separadas para somar e subtrair números (sumUp e subtractUp). 
  Cada uma dessas funções aceitava um número variável de argumentos, somava ou subtraía todos os números e 
    depois chamava uma função de callback com o resultado.

  No commit atual, você tem apenas uma função (combine) que pode tanto somar quanto subtrair números. (linhas 92, 99 a 103);
  Ela aceita um argumento adicional (operation) que determina se ela deve somar ou subtrair os números. (linhas 92 e 99);
  Além disso, em vez de chamar diretamente a função de callback com o resultado, 
    ela agora chama uma versão “ligada” da função de callback que inclui uma mensagem de texto.
*/
