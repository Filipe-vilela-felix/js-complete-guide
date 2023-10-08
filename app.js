const startGameBtn = document.getElementById('start-game-btn');

const start = function() {
    console.log('Game is starting...');
};

// const person = {
//     name: 'Max',
//     greet: function greet() {
//         console.log('Hello there!');
//     }
// }

// person.greet();

// console.dir(startGame);

startGameBtn.addEventListener('click', start);

/*
    Neste commit aprendemos que é possível armazenar funções em variáveis. 
    E quando isso é feito, deixa de ser uma declaração de função e passa a ser uma expressão de função.
    E quando uma função passa a ser uma expressão, não precisamos de dar um nome expecífico para a função, 
        deixando apenas como function().... (linha 3);
    
    Por fim, o ponto e vírgula no final da função é necessário porque estamos fazendo uma atribuição - 
        estamos atribuindo uma função anônima à variável 'start'. (linha 5);

*/