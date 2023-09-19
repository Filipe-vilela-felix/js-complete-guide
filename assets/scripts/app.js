const defaultResult = 0;
let currentResult = defaultResult;

// Gets input from input field
function getUserNumberInput() {
    return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor field
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
}



addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

/*
OPERADORES:
    + -> soma dois números;
    - -> subtrai dois números;
    * -> multiplica dois números;
    / -> divide dois números;    
    % -> o resto da divisão de dois números;
    ** -> exponenciação;s

OPERADORES ABREVIADOS:
    = -> atribuir valor à variável;
    +=, -=, ... -> executar cálculo e reatribuir resultado à variável;
    ++, -- -> valor da variável incremento/decremento + reatribuição;

    Ex: Ao invés de, por exemplo, currentResult = currentResult + enteredNumber, podemos fazer: currentResult += enterdNumber. 
        Isso em todos os operadores. E também ao invés de currentResult = currentResult + 1, podemos fazer: currentResult++. 
 */