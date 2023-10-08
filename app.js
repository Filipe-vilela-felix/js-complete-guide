const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSOR';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunnig = false;

const getPlayerChoice = function() {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    if (
        selection !== ROCK && 
        selection !== PAPER && 
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! We choice ${DEFAULT_USER_CHOICE} for you!`);    
        return DEFAULT_USER_CHOICE;
    }
    return selection;
}

const getComputerChoice = function() {
    const ramdomValue = Math.random();
    if (ramdomValue < 0.34) {
        return ROCK;
    } else if (ramdomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const getWinner = function(cChoice, pChoice) {
    if (cChoice === pChoice) {
        return RESULT_DRAW;
    } else if (
        (cChoice === ROCK && pChoice === PAPER) || 
        (cChoice === PAPER && pChoice === SCISSORS) ||
        (cChoice === SCISSORS && pChoice === ROCK)
    ) {
        return RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTER_WINS;
    }
}

startGameBtn.addEventListener('click', function() {
    if (gameIsRunnig) {
        return;
    }
    console.log('Game is starting...');
    const PlayerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, PlayerChoice);
    console.log(winner);
});

/*
CONTEXTUALIZANDO O CÓDIGOA:
    - Adicionamos a função getComputerChoice() para calcular a escolha do computador. Esta função gera um número aleatório entre 0 e 1. 
        Se o número estiver entre 0 e 0.33, a escolha do computador é ROCK. 
        Se estiver entre 0.34 e 0.67, a escolha é PAPER. Para qualquer número acima de 0.67, a escolha é SCISSORS. (linhas 26 a 35);

    - O código adiciona outra função chamada getWinner para determinar o vencedor do jogo. 
        Esta função recebe a escolha do computador e a escolha do jogador como argumentos. (linha 37);

    - A função getWinner primeiro verifica se a escolha do computador é igual à escolha do jogador. 
        Se forem iguais, então é um empate e a função retorna RESULT_DRAW. Se não for um empate, a função verifica se o jogador ganhou. (linhas 38 a 48);

    - Finalmente, o código chama a função getWinner com as escolhas do computador e do jogador como argumentos e 
        armazena o resultado em uma constante chamada winner. O vencedor é então registrado no console. (linhas 58 e 59);
*/