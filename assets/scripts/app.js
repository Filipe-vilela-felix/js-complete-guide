const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
    return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor field
}

function writeToLog(
    operationIdentifier, 
    prevResult, 
    operationNumber, 
    newResult) {
        const logEntry = {
            operation: operationIdentifier,
            prevResult: prevResult,
            number: operationNumber,
            result: newResult
        };
        logEntries.push(logEntry);
        console.log(logEntry.operation);
        console.log(logEntries);
        console.log(typeof logEntry);
    }

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if(calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if(calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if(calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DEVIDE');
}



addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

/*
IF, ELSE, ELSE-IF:
    Note que em relação ao commit anterior, com o objetivo de "limpar" e tornar o código mais "ágil", 
        ao invés de em cada função operacional (add(), subtract(), multiply(), divide()) possuir suas respectivas variáveis e funções que alterem seus
        valores, fizemos uma função geral, que em seu corpo, possui todas as variáveis que se repetiam nas funções e tb o operador condicinal "if-else",
        com o intuito de com a mudança gerada por meio do método da função calculateResult(), através das respectivas intrings inseridas em cada função,
        o valor final era alterado.
*/