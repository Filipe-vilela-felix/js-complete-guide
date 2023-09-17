const defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
let errorMessage = 'An erro \n' +
                   'ocurred';

outputResult(currentResult, errorMessage);

/*
LITERAL DE MODELO:
    Ao invés da concatenação de strings usando o operador '+', podemos usar um literal de modelo, através da sintaxe ${...}, iserir variáveis ou expressões
    diretamente de uma string.
*/