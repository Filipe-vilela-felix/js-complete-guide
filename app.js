function createTaxCalculator(tax) {
    function calculateTax(amount) {
        return amount * tax;
    }

    return calculateTax;
}

const calculateValAmount = createTaxCalculator(0.19);   // Esse é o valor de 'tax' na função createTaxCalculator().
const CalculateIncomeTaxAmount = createTaxCalculator(0.25);     // Esse é o valor de 'tax' na função createTaxCalculator().

console.log(calculateValAmount(100));   // Esse é o valor de 'amount' na função calculateTax().
console.log(calculateValAmount(200));   // Esse é o valor de 'amount' na função calculateTax().