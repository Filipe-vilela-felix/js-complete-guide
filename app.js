const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
    console.log('Game is starting...');
}

// const person = {
//     name: 'Max',
//     greet: function greet() {
//         console.log('Hello there!');
//     }
// }

// person.greet();

console.dir(startGame);

startGameBtn.addEventListener('click', startGame);

/*
FUNÇÕES SÃO OBJETOS:
    Funções são um tipo especial de objeto. Isso significa que elas tem propriedades e métodos.

PROPRIEDADES DE FUNÇÕES:
    Quando usamos console.dir() em uma função, podemos ver suas propriedades internas. Algumas dessas propriedades incluem 'name' (o nome da função), 
        'length' (o número de argumentos que uma função espera) e  'prototype' (um objeto que contém propriedades e métodos que estão para 
        instâncias de um objeto). (linha 16);

FUNÇÕES E TIPOS DE REFERÊNCIA:
    Como funções são objetos, elas são tipos de referência. Isso significa que quando passamos uma função para outra função ou a atribui a uma 
        variável, está passando/atribuindo uma referência aquela função, não uma cópia dela.
*/