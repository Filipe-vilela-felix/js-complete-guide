/*FUNÇÃO PURA*/

function add(num1, num2) {
    return num1 + num2;
}

console.log(add(1, 5));
console.log(add(12, 15));

console.log('----------------------');

/*FUNÇÃO IMPURA*/

function addRandom(num1) {
    return num1 + Math.random();
}

console.log(addRandom(5));

console.log('----------------------');

let previousResult = 0;

function addMoreNumbers(num1, num2) {
    const sum = num1 + num2;
    previousResult = sum;   // Função impura pois apresenta efeito colatera.
    return sum;
}

console.log(addMoreNumbers(1, 5));

console.log('----------------------');

const hobbies = ['Sports', 'Cooking'];

function printHobbies(h) {
    h.push('NEW HOBBIE');
    console.log(h);
}

printHobbies(hobbies);