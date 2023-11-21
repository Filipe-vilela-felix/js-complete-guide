function getMin(numbers) {
    if (!numbers.length) {
        throw new Error('Should not be an ampty array!');
    }
    let currentMinimum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < currentMinimum) {
            currentMinimum = numbers[i];
        }
    }

    return currentMinimum;
}

const testNumbers = [];

const min = getMin(testNumbers);

console.log(min); // should be 1