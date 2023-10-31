let multiplier = 1.1;

function createTaxCalculator(tax) {
    function calculateTax(amount) {
        console.log(multiplier);
        return amount * tax;
    }

    return calculateTax;
}

const calculateValAmount = createTaxCalculator(0.19);   // Esse é o valor de 'tax' na função createTaxCalculator().
const CalculateIncomeTaxAmount = createTaxCalculator(0.25);     // Esse é o valor de 'tax' na função createTaxCalculator().

multiplier = 1.2;   // NO console do navegador, o valor é alterado para 1.2 pois a função createTaxCalculator() ainda n foi chamada.

console.log(calculateValAmount(100));   // Esse é o valor de 'amount' na função calculateTax().
console.log(calculateValAmount(200));   // Esse é o valor de 'amount' na função calculateTax().