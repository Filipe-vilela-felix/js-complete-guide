const startGameBtn = document.getElementById('start-game-btn');

// const start = function() {
//     console.log('Game is starting...');
// };

// const person = {
//     name: 'Max',
//     greet: function greet() {
//         console.log('Hello there!');
//     }
// }

// person.greet();

// console.dir(startGame);

startGameBtn.addEventListener('click', function() {
    console.log('Game is starting...');
});

/*
FUNÇÕES ANÔNIMAS:
    - Funções anônimas são funções sem nome.

    - Podemos armazenar funções anônimas em uma variável e usar o nome da variável para chamar a função. (linhas comentadas 3 a 5);

    - Funções anônimas são útei quando não preciso usa-las em outro lugar do código.

    - Um exemplo comum de seu uso, é quando adicionamos um ouvinte de evento. 
        Podemos definir a função diretamente no local onde ela é necessária. (linha 18 a 20);

    - Se a função anônima for usada apenas uma vez e não for necessária em nenhum outro lugar do código, 
        usar função anônima pode economizar umas linhas de código e torna-lo mais fácil de ler.

    - No entanto, se a função anônima gerar um error, pode ser útil dar um nome a função para fins de depuração. Em outras palavras, 
        podemos usar uma função declarada.

    - Contudo, se vc sabe que seu código está correto e não está gerando erro, pode não ser necessário dar um nome a sua função anônima. (linha 18);
*/