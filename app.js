const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSOR';
const DEFAULT_USER_CHOICE = ROCK;

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

startGameBtn.addEventListener('click', function() {
    if (gameIsRunnig) {
        return;
    }
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
});

/*
CONTEXTUALIZANDO O CÓDIGOA:
    - Criamos a função getPlayerChoice:
        Esta função solicita ao usuário que faça uma escolha entre pedra, papel ou tesoura. 
        Se a escolha do usuário não for válida (ou seja, não for nem pedra, nem papel, nem tesoura),
        a função alerta o usuário de que sua escolha foi inválida e define a escolha como ‘Pedra’ por padrão. (linhas 10 a 21);
    
    - Em seguida definimos algumas constantes globais:
        ROCK, PAPER, SCISSORS e DEFAULT_USER_CHOICE. Essas constantes representam as possíveis escolhas no jogo. (linhas 3 a 6);
    
    - Definimos uma variável global gameIsRunning e a inicializa como false. 
        Esta variável é usada para verificar se o jogo já está em execução. (linha 8);

    - Por fim, o adicionamos um ouvinte de evento ao botão ‘startGameBtn’.
        Quando o botão é clicado, a função anônima dentro do ouvinte de evento é executada. Esta função verifica se o jogo já está em execução. 
        Se não estiver, define gameIsRunning como true, imprime uma mensagem no console indicando que o jogo está começando e 
        chama a função getPlayerChoice para obter a escolha do jogador. (linhas 23 a 30);

OBSERVAÇÃO:
    JavaScript permite que você acesse propriedades e métodos (como toUpperCase() para strings) em valores primitivos como se fossem objetos. (linha 11);
        Isso acontece porque, quando você tenta acessar uma propriedade ou método em um valor primitivo, 
        JavaScript cria temporariamente um objeto wrapper para esse valor primitivo e então acessa a propriedade ou método nesse objeto wrapper. 
        Isso é feito apenas temporariamente e o valor primitivo original permanece inalterado.
*/