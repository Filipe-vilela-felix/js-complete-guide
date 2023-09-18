const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);


/*
CONVERTENDO STRING EM NÚMERO:
    Se essa linha...
        currentResult = currentResult + userInput.value; 
    ...ficar desse jeito com o intuito de incrementar o valor inicial '0' com o valor a ser inserido pelo usuário, ao invés de incrementar, 
    o código fará uma concatenação. E isso acontece porque o javaScipt entende userInput.value como uma string e não como um número.
    E para que isso seja corrigido...
        currentResult = currentResult + parseInt(userInput.value); (linha 5);

CONVERTENDO NÚMERO EM STRING:
    Para converter um número em string, basta...
        currentResult = currentResult.toString()
    ... (o que seria a linha 5);
*/