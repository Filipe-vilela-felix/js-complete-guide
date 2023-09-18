const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
    const result = num1 + num2; // Calcula a soma;
    return result;  // Retorna o resultado; 
    alert('Hello World'); // Este alert não será apresentado na tela, pois o código depois de return não é executado;
}

const additionResult = add(1, 2);   // Chama a função e armazena o resultado retornado;
add(5, 5);

currentResult = additionResult;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);

/*
RETURN:
    O return é necessário para que o resultado de soma, nesse caso, seja acessível fora da função.
*/