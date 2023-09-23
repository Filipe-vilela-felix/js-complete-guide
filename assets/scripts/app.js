const ATACK_VALUE = 10;
const MONSTER_ATACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function atackHandler() {
    const damage = dealMonsterDamage(ATACK_VALUE);
    currentMonsterHealth -= damage;
    const playerDamage = dealPlayerDamage(MONSTER_ATACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if(currentMonsterHealth <= 0 && currentMonsterHealth > 0) {
        alert('You won');
    } else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost');
    } else if(currentMonsterHealth <= 0 && currentPlayerHealth <=0) {
        alert('You have a draw');
    }
}

attackBtn.addEventListener('click', atackHandler);

/*
CONTEXTUALIZANDO O CÓDIGO:
    Além do desenvolvimento presente no commit anterior, onde adicionanmos uma funcionalidade de ataque ao "monstro", nesse adicionamos uma funcionalidade
     onde recebemos um dano aleatório a partir do momento em que atacamos. (linha 2, 13 a 21);
*/