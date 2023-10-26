const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const storeResults = testResults.concat([3.99, 2]);

testResults.push(5.91);

console.log(testResults, storeResults);

/* 
  Método útil para adicinar elementos a uma matriz e retornar uma nova matriz que, novamente, pode ser útil em situaççoes em que desejamos criar
    uma cópia de uma matrz.
  O método concat() é usado para combinar dois ou mais arrays. Ele não modifica os arrays originais, 
    mas retorna um novo array que contém todos os elementos dos arrays que foram concatenados.

CONTEXTUALIZANDO O CÓDIGO:
  No código que usamos, você criou um array chamado testResults com seis números. 
  Depois, usamos o método concat() para combinar testResults com outro array que contém os números 3.99 e 2. 
  O resultado dessa concatenação foi armazenado em um novo array chamado storeResults. 
  Em seguida, adicionamos outro número ao final do array testResults usando o método push(). 
  Por fim, imprimimos os dois arrays no console.

OBSERVAÇÃO:
  A principal diferença entre os métodos concat() e push() é que concat() retorna um novo array sem modificar os arrays originais, 
    enquanto push() adiciona um ou mais elementos ao final do array original e modifica esse array.
*/