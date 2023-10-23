// 1)
const numbers = [1, 2, 3];
console.log(numbers);

// 2)
const moreNumbers = Array(5); // ou new Array(5);
console.log(moreNumbers);

// 3)
const yetMoreNumbers = Array.of(1, 2);
console.log(yetMoreNumbers);

// 4)
const listItems = document.querySelectorAll('li');
console.log(listItems);

// 5)
const otherNumbers = Array.from(listItems);
console.log(otherNumbers);

/* 
  Estamos usando a sintaxe literal do array para criar um array com três elementos: os números 1, 2 e 3. O resultado será [5]. (linhas 2 e 3);

  O construtor Array() cria um array com um comprimento de 5, mas sem nenhum valor definido. 
    Isso é chamado de array “vazio” ou “esparso”. O resultado será [ , , , , ]. (linhas 6 e 7);

  Existe um método especial no objeto de Array disponível globalmente e, novamente, podemos passar argumentos. (linhas 10 e 11);

  No exemplo do Array.from(), não devemos usar vários argumentos. Ao invés disso, ele pega um objeto iterável ou semelhante a um array 
    que ainda não é um array em um array. (linhas 18 e 19);
*/