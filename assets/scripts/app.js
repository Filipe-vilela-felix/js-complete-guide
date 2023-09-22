const ATACK_VALUE = 10;

let chosenMaxLife = 50;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function atackHandler() {
    const damage = dealMonsterDamage(ATACK_VALUE);
    currentMonsterHealth -= damage;
}

attackBtn.addEventListener('click', atackHandler);

/*
CONTEXTUALIZANDO O CÓDIGO:
    - Primiero, declaramos uma constante chamada ATACK_VALUE e atribuindo a ela o valor 10. Isso representa a quantidade de dano que um ataque irá causar. (linha 1);
    
    - Declaramos uma variável chamada choseMaxLife, e atribuimos a ela o valor de 50. (linha 3);
    
    - Declaramos uma variável chamada currentMonsterHealth, e atribuimos a ela o valo de choseMaxLife. Representando a quantidade atual de vida que o mostro tem. (linha 4);
    
    - Chamamos uma função chamada adjustHealthBars e passando para ela o valor de chosenMaxLife. Essa função ajusta as barras de vida na interface do 
        usuário para refletir a quantidade máxima de vida. (linha 7);
    
    - A função atackHandler() é declarada. Esta função será executada quando o jogador atacar. (linha 9);
    
    - Dentro da função atackHandler(), a constante damage é declarada e atribuída ao valor retornado pela função dealMonsterDamage(ATACK_VALUE). 
        A função dealMonsterDamage() provavelmente calcula a quantidade de dano que um ataque causa ao monstro. (linha 10);
    
    - Ainda dentro da função atackHandler(), o valor de currentMonsterHealth é reduzido pelo valor de damage. 
        Isso simula o monstro recebendo dano do ataque. (linha 11);
    
    - Finalmente, um ouvinte de evento é adicionado ao botão de ataque. Quando o botão de ataque é clicado, a função atackHandler() é chamada, 
        fazendo com que o jogador ataque o monstro. (linha 14);
*/