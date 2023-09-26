const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const enteredValue = prompt('Maximum life for you and the monster.', '100')

let chosenMaxLife = parseInt(enteredValue);

if(isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert('You would be dead but the bonus life saved you!');
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
    reset();
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    reset();
    alert('You lost!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    reset();
    alert('You have a draw!');
  }

  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function attackMonster(mode) {
  let maxDamage;
  if (mode === 'ATTACK') {
    maxDamage = ATTACK_VALUE;
  } else if (mode === 'STRONG_ATTACK') {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  endRound();
}

function attackHandler() {
  attackMonster('ATTACK');
}

function strongAttackHandler() {
  attackMonster('STRONG_ATTACK');
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal to more than your max initial health.");
    healValue = chosenMaxLife - currentPlayerHealth;
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
prompt():
    É uma função do JavaScript que permite inserir uma caixa de diálogo para o usuário.
    Vale ressaltar que o segundo argumento da função é o valor padrão que será exibido na caixa de diálogo. Este é um parâmetro opcional. 
        Se você não fornecer este parâmetro, a caixa de entrada de texto será exibida vazia para o usuário1. No entanto, 
        vale ressaltar que no Internet Explorer 7 e 8, se você não fornecer este parâmetro, a string “undefined” é o valor padrão1.

CONTEXTUALIZANDO O CÓDIGO:
    A diferença do commit anterior para essse é que decidimos criar uma caixa de diálogo que permitisse o usuario inserir o valor máximo do monstro 
        e o seu. O que antes era um valor fixo.

    - Criamos uma caixa de diálogo para o usuário com a mensagem ‘Maximum life for you and the monster.’ e um valor padrão de ‘100’. 
        O valor inserido pelo usuário é então armazenado na constante enteredValue. (linha 6);
    
    - Em seguida, precisavamos converter o valor inserido pelo usuário (que é uma string) em um número inteiro. O valor convertido é então armazenado na
        vairáve chosenMaxLife. (linha 8);

    - Por fim, precisávamos verificar se o valor inserido pelo usuário era um número inválido e ao mesmo tempo menor ou igual a zero, então a vairáve 
        chosenMaxLife é definida igual a 100.
        Obs: Note que na condicional usamo o || ao invés do &&, pois nesse caso, queremos verificar se qualquer uma das consições for verdadeira.
*/