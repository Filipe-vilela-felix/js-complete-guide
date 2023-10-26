const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

prices.forEach((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjustedPrices: price * (1 - tax) };
  taxAdjustedPrices.push(priceObj);
});

console.log(taxAdjustedPrices);

/* 
  O método forEach() é uma maneira de iterar (ou percorrer) todos os elementos de um array. Ele executa uma função para cada elemento do array. 

  Recebe até tres argumentos:
    O primeiro argumento é o valor que está olhando no momento.
    O segundo argumento é o ídice que deseja ser nomeado.
    O terceiro argumento é o array completo (opcional).
*/