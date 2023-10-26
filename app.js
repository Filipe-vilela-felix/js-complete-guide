const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];

testResults.push(5.91);

console.log(testResults.indexOf(1.5));  // Identificar o índice do número presente no array. Contudo, ele irá mostrar o valor da esquerda pra direita que aparecer.
console.log(testResults.lastIndexOf(1.5));  // Identificar o índice do número presente no array. Contudo, ele irá mostrar o valor da direita pra esquerda que aparecer.

const personData = [{name: 'Max'}, {name: 'Manuel'}];
console.log(personData.indexOf({name: 'Manuel'}));  // Gera um erro estranho de resultado -1.

/* 
  O indexOf() ou lastIndexOf() não funciona como deveria em valores de referência, como por exemplo em objetos. (linhas 8 e 9);
*/