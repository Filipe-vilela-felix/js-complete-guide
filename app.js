const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];

console.log(testResults.includes(10.99));
console.log(testResults.indexOf(10.99) !== -1);

/* 
  O includes() é um método útil para descobrir se um elemento faz parte de um array ou não, retornando verdadeirou ou falso.
  Este método é uma ótimoa opção se não estivermos interessados no índice e também no valor, 
    mas apenas quisermos saber se ele faz parte da matriz ou não. (linha 3);

  É importante ter em mente que o índice retornará -1 se algo não for encontrado.
  Portanto, isso é essencialmente o mesmo que executar o índice e compará-lo com não ser igual a -1. (linha 4);
*/