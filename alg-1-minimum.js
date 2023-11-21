function getMin(numbers) { // [3, 1, 2]
    if (!numbers.length) { // 1 execution
        throw new Error('Should not be an ampty array!');
    }
    let currentMinimum = numbers[0]; // 1 execution

    for (let i = 1; i < numbers.length; i++) { // 1 execution
        if (numbers[i] < currentMinimum) { // 2 executions
            currentMinimum = numbers[i]; // 1 execution
        }
    }

    return currentMinimum; // 1 execution
}

// T = n => Linear Time Complexity => O(n)

function getMin2(numbers) {
    if (!numbers.length) {
        throw new Error('Should not be an ampty array!');
    }

    for (let i = 0; i < numbers.length; i++) {
        let outerElement = numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
            let innerElement = numbers[j];

            if (outerElement > innerElement) {
                // swap
                numbers[i] = innerElement;
                numbers[j] = outerElement;

                outerElement = numbers[i];
                innerElement = numbers[j];
            }
        }
    }

    return numbers[0];
}

const testNumbers = [3, 1, 2];

const min = getMin2(testNumbers);

console.log(min); // should be 1