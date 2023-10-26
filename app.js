const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const filteredArray = prices.filter((price, idx, prices) => {
  return price < 6;
});
console.log(filteredArray);


/* 
  O método .filter() é uma função JavaScript que permite filtrar elementos de um array. 
  Ele cria um novo array com todos os elementos que passam em um teste implementado por uma função fornecida.
*/