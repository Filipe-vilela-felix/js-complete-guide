const ATACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function monsterAttack(mode) {
    let maxDamage;
    if(mode === 'ATTACK') {
        maxDamage = ATACK_VALUE;
    } else if(mode === 'STRONG_ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    const playerDamage = dealPlayerDamage(MONSTER_ATACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won');
    } else if(currentPlayerHealth <= 0 && currentPlayerHealth > 0) {
        alert('You lost');
    } else if(currentMonsterHealth <= 0 && currentPlayerHealth <=0) {
        alert('You have a draw');
    }
}

function attackHandler() {
    monsterAttack('ATTACK');
}

function strongAttackHandler() {
    monsterAttack('STRONG_ATTACK');
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);

/*
CONTEXTUALIZANDO O CÓDIGO:
    A diferença do commit anterior para essse, é que ao criarmos a função de "ataque forte", o código ficou muito redundante, pois era só alterar o valor
        de uma variável e pronto. Portanto, ao invés de repetirmos tantas linhas de código, cogitamos em criar uma função que pudesse ser reutilizavel 
        tanto na função de ataque quanto na de ataque forte.
    Para isso, foi necessário criarmos uma variável e um parâmetro que de acordo com o tipo de ataque, mudasse seu valor, e assim resultando na mudança 
        de todo o código. (linhas 2, 11 a 18, 31 a 40);
*/