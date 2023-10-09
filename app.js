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

const sumUp = (resultHandler, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  }

  let sum = 0;
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  resultHandler(sum);
};

const subtractUp = function() {
  let sum = 0;
  for (const num of arguments) {  // Não use isso!
    sum -= num;
  }
  return sum;
};

const showResult = (result) => {
  alert('The result after adding all numbers is: ' + result);
}

sumUp(showResult, 1, 5, 'fdsa', 10, -3, 6, 10);
console.log(subtractUp(1, 10, 15, 20));

/*
  Ao examinarmos novamente a função addEventListnner(), podemos notar que como segundo argumento, criamos uma função anônima. (linha 62);
  Uma função de callback é uma função que passamos para outra função como argumento, e então, 
    a função "externa" chama a função de callback em algum momento.
  As funções de callback são úteis quando temos algum código que precisa ser executado após algo acontecer, 
    mas não sabemos exatamente como o código será. Ao usar uma função de callback, podemos tornar o código mais flexível e reutilizável.

CONTEXTUALIZANDO O CÓDIGO:
  - A função sumUp() agora aceita um argumento adicional chamado resultHandler, que é esperado ser uma função 
      (isso é o que chamamos de função de callback). (linha 92);
    
  - A função sumUp() ainda soma todos os números fornecidos (validando-os primeiro), mas em vez de retornar a soma diretamente, 
      ela chama a função resultHandler e passa a soma para ela. (linha 101);

  - A função showResult() é a função de callback que você passa para sumUp(). 
      Ela recebe um resultado (neste caso, a soma dos números) e exibe um alerta com esse resultado. (linhas 112 a 113);

  - Quando você chama sumUp(), agora você passa a função showResult() como o primeiro argumento, seguido pelos números que deseja somar. 
      A função sumUp então faz sua coisa, somando os números, e quando termina, chama showResult com a soma.

SIMPLIFICANDO PARA ESTUDO:
  function sumUp(callback, ...numbers) {
    let sum = 0;
    for (let num of numbers) {
      sum += num;
    }
    callback(sum);
  }

  function showResult(result) {
    console.log('O resultado é: ' + result);
  }

  sumUp(showResult, 1, 2, 3, 4);
*/
