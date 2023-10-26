// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjustedPrices: price * (1 - tax) };
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjustedPrices: price * (1 - tax) };
  return priceObj;
});

console.log(prices, taxAdjustedPrices);


/* 
  O método map() é usado para criar um novo array a partir de um array existente, aplicando uma função a cada um dos seus elementos.s

CONTEXTUALIZANDO O CÓDIGO:
  O método .map() está sendo usado para criar um novo array chamado taxAdjustedPrices a partir do array prices. 
  A função passada para o .map() pega cada price do array prices, 
    calcula o preço ajustado pelo imposto e retorna um objeto com o índice do preço no array original (idx) e o preço ajustado (taxAdjustedPrices). 
*/