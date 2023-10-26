const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

// let sum = 0;
// prices.forEach((price) => {
//   sum += price
// })

// console.log(sum);

let sum = prices.reduce((prevValue, curValue, idx, prices) => prevValue + curValue, 0);
console.log(sum)


/* 
  Esse método é uma função que executa uma função de redução (fornecida por você) em cada elemento do array, 
    resultando em um único valor de retorno.
*/