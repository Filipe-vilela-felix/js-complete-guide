const personData = [{name: 'Max'}, {name: 'Manuel'}];
console.log(personData.indexOf({name: 'Manuel'}));  // Gera um erro estranho de resultado -1.

const manuel = personData.find((person, idx, persons) => {
  return person.name === 'Manuel';
});

console.log(manuel);

const manuelIndex = personData.findIndex((person, idx, persons) => {
  return person.name === 'Manuel';
});

console.log(manuelIndex);

/* 
  O indexOf() ou lastIndexOf() não funciona como deveria em valores de referência, como por exemplo em objetos. (linhas 8 e 9);
  E por esse motivo, usamos o método find(). São métodos de array em JavaScript que são usados para encontrar um elemento em um array.

  O método find() retorna o primeiro elemento do array que satisfaz a função de teste fornecida. Caso contrário, ele retorna undefined.
  O método findIndex(), por outro lado, retorna o índice do primeiro elemento do array que satisfaz a função de teste fornecida. 
    Caso contrário, ele retorna -1.

  Em ambos os métodos necessitam de uma função de seta.
    O primeiro argumento sempre será um primeiro objeto desse array.
    O segundo argumento sempre será o índice daquele único elemento.
    O terceiro argumento sempre será o array completo

CONTEXTUALIZANDO O CÓDIGO:
  Usamos o método find() para encontrar a pessoa cujo nome é ‘Manuel’ no array personData. 
  A função de teste que passamos para o método find() verifica se o nome da pessoa é ‘Manuel’. 
  O resultado dessa operação é armazenado na variável manuel e então impresso no console.

  Usamos o método findIndex() para encontrar o índice da pessoa cujo nome é ‘Manuel’ no array personData. 
  A função de teste que você passou para o método findIndex() é a mesma que usamos com o método find(). 
  O resultado dessa operação é armazenado na variável manuelIndex e então impresso no console.
*/