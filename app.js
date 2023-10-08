const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
    console.log('Game is starting...');
}

const person = {
    name: 'Max',
    greet: function greet() {
        console.log('Hello there!');
    }
}

person.greet();

startGameBtn.addEventListener('click', startGame);

/*
    Este código é um exemplo de como usar funções e métodos em JavaScript, especialmente em relação a objetos e manipulação de eventos do navegador.

    1. Objetos em JavaScript: 
        Objetos em JavaScript são coleções de propriedades, e uma propriedade é uma associação entre chave e valor. 
        No exemplo, person é um objeto com uma propriedade name. (linha 8);
            e um método greet. (linha 9);

    2. Métodos em JavaScript:
       O valor de uma propriedade pode ser uma função, que é então chamada de método. (linha 9);
       Isso é muito útil para organizar seu código e criar interações entre dados (propriedades do objeto) e comportamentos (métodos do objeto).

    3. O Modelo de Objeto do Documento (DOM): 
        O DOM permite que o JavaScript interaja com o HTML. 
        No exemplo, document.getElementById('start-game-btn') está usando o DOM para obter uma referência ao botão HTML. (linha 1);

    4. Execução Direta vs Indireta: 
        A aula também destaca a diferença entre a execução direta de uma função (chamando-a imediatamente, como startGame()). (linha 3);
            e a execução indireta (passando-a como uma referência, como no caso do ouvinte de eventos). (linha 16);

    OBSERVAÇÃO:
        O objeto assim como sua chamada serão commitados pois não precisamos deles para o jogo. Foram usados apenas para fins de conhecimento.
*/