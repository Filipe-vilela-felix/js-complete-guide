// 1)
const numbers = [1, 2, 3];
console.log('1)', numbers);

// 2)
const moreNumbers = Array(5); // ou new Array(5);
console.log('2)', moreNumbers);

// 3)
const yetMoreNumbers = Array.of(1, 2);
console.log('3)', yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

// 4)
const otherNumbers = Array.from(listItems);
console.log('4)', otherNumbers);

const hobbies = ['Cooking', 'Sports'];
// 5)
const personalData = [30, 'Max', {moreDetail: []}];
console.log('5)', personalData);

// 6)
const analyticsData = [[1, 2, 3], [4, 5, 6], 5];
console.log('6)', analyticsData);

for (const data of analyticsData) {   // Para percorrer todos o índices. (linha 26);
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}

/* 
  1)
  Estamos usando a sintaxe literal do array para criar um array com três elementos: os números 1, 2 e 3. O resultado será [5]. (linhas 2 e 3);

  2)
  O construtor Array() cria um array com um comprimento de 5, mas sem nenhum valor definido. 
    Isso é chamado de array “vazio” ou “esparso”. O resultado será [ , , , , ]. (linhas 6);

  3)
  Existe um método especial no objeto de Array disponível globalmente e, novamente, podemos passar argumentos. (linhas 10);

  4)
  No exemplo do Array.from(), não devemos usar vários argumentos. Ao invés disso, ele pega um objeto iterável ou semelhante a um array 
    que ainda não é um array em um array. (linha 17);

  5)
  Podemos ter como índice de um array, e dentro desse objeto, ter um outro array. (linha 22);
    Podemos ter matrizes uniformes ou com diferentes tipos de dados. 

  6)
  Podemos ter matrizes aninhadas ou matrizes multidimensionais, como também são chamadas. (linha 26);
    Em outras palavras, podemos ter dados analíticos que são, no final, uma matriz de matrizes 

*/