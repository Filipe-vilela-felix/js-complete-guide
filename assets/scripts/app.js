const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
    const result = num1 + num2;
    alert(`The result is ${result}`);
}

add(1, 2);
add(5, 5);

currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);

/*
INTRODUZINDO FUNÇÕES:
    - Funções são como código sob demanda. 
    - Uma função é uma construção de linguagem que permite que vc defina algum código que vc execute podeteriormente.
    - Primeiro, vc define uma função, a qual pode receber algo que é chamado de parâmetro.
    - Segundo, vc tem o corpo da função entre chaves com o intuito de executar o código eventualmente.
    - Após a criação da função, vc chama uma função usando seu nome e, em seguida, adiciona parenteses. E se essa função recebe parâmetros, vc passa valor
      para esses parâmetros.
    - Em seguida, esse código é executado com os dados inseridos como parâmetros, e vc pode chamar tal função qunatas vezes quiser e com parâmetros diferentes.
    EXEMPLO:
        linhas 4 a 10;
*/