const ATACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATACK_VALUE = 14;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound() {
    const playerDamage = dealPlayerDamage(MONSTER_ATACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won');
    } else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost');
    } else if(currentMonsterHealth <= 0 && currentPlayerHealth <=0) {
        alert('You have a draw');
    }
}

function monsterAttack(mode) {
    let maxDamage;
    if(mode === 'ATTACK') {
        maxDamage = ATACK_VALUE;
    } else if(mode === 'STRONG_ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    endRound();
}

function attackHandler() {
    monsterAttack('ATTACK');
}

function strongAttackHandler() {
    monsterAttack('STRONG_ATTACK');
}

function healPlayerHandler() {
    let healValue;
    if(currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("You can't heal to more than your max intial health");
        healValue = chosenMaxLife - currentMonsterHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);

/*
CONTEXTUALIZANDO O CÓDIGO:
    A diferença do commit anterior para essse, é que ao criarmos a função de cura. 
    
    - Criamos uma variável que mantém o valor de cura fixo. (linha 4);
    
    - A função endRound() é definida. Ela lida com o final de cada rodada, calculando o dano ao jogador, atualizando a saúde do jogador e 
        verificando as condições de vitória ou derrota. (linhas 12 a 22);
    
    - A função monsterAttack(mode) é modificada para chamar a função endRound() após causar dano ao monstro. (linha 54);
    
    - A função healPlayerHandler() é definida. Ela permite ao jogador curar durante o jogo, verificando se a saúde do jogador excederá a saúde máxima 
        inicial após a cura e ajustando o valor de cura de acordo. Em seguida, ela aumenta a saúde do jogador e chama a função endRound(). (linhas 44 a 55);
    
    - Um novo EventListener é adicionado ao botão de cura para chamar a função healPlayerHandler() quando o botão é clicado. (linha 69);
*/