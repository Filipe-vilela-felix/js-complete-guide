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

// console.log(prices, taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1.
  }
});
console.log(sortedPrices.reverse());


/* 
  Existem duas outras maneiras de transformar uma matriz: sort() e reverse().
  
  O método .sort() em JavaScript é usado para ordenar os elementos de um array em ordem alfabética (para strings) ou numérica (para números). 
  Por padrão, o método .sort() converte todos os elementos do array em strings e os ordena de acordo com a ordem lexicográfica 
    (ou seja, como se fossem palavras em um dicionário).
  Para ordenar corretamente, usamos uma função de comparação para o método sort().

  O método .reverse() em JavaScript é usado para inverter a ordem dos elementos de um array. 

CONTEXTUALIZANDO O CÓDIGO:
  prices.sort((a, b) => {...}): Aqui, o método .sort() está sendo chamado no array prices. 
    A função passada para o .sort() recebe dois argumentos: dois elementos consecutivos do array (a e b). 
    Esta função de comparação determina a ordem dos elementos. Se a função retorna um número positivo, b é classificado antes de a. 
    Se a função retorna 0, a e b permanecem juntos. Se a função retorna um número negativo, a é classificado antes de b. 
    Neste caso, a função classifica os preços em ordem crescente.

  sortedPrices.reverse(): Depois que o array prices é ordenado, o método .reverse() é chamado para inverter a ordem dos elementos. 
    Isso resulta em um array de preços ordenados em ordem decrescente.
*/