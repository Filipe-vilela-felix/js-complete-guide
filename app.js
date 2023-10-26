const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const storeResults = testResults.slice(0, 2); // Nesse exemplo, o slice vai até o terceiro índice mas não o conclui, ou seja, apenas os índices 0 e 1 aparecem.

testResults.push(5.91);

console.log(testResults, storeResults);

/* 
  O método splice() é usado para selecionar uma parte de um array e criar uma cópia desse array. 
  Ele recebe dois argumentos: o índice inicial e o final da parte que queremos copiar. 
  O array original não é modificado pelo método splice().

CONTEXTUALIZANDO O CÓDIGO:
  Criamos um array chamado testResults com seis números. 
  Depois, usamos o método splice() para copiar os dois primeiros elementos desse array (índices 0 e 1) e 
    armazená-los em outro array chamado storeResults. 
  Em seguida, adicionamos outro número ao final do array testResults usando o método push(). 
  Por fim, imprimimos os dois arrays no console.
*/