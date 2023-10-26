const nameFragments = ['Max', 'Schwarz'];
const name = nameFragments.join(' ');
console.log(name);

const copiedNameFragments = [...nameFragments];
nameFragments.push('Mr');

console.log(nameFragments, copiedNameFragments) // Note que a string 'Mr' não estará presente na contante que contém  o spread.

console.log('---------------------');

const prices = [1.99, 5.99, 3.99, 6.59];

console.log(Math.min(...prices));
console.log(Math.min(prices)); // Note que sem o spread, o resultado é NaN.

console.log('---------------------');

const persons = [{name: 'Max', age: 30}, {name: 'Manuel', age: 31}];
const copiedPersons = [...persons.map(person => ({
  name: person.name, 
  age: person.age
}))];

persons.push({name: 'Anna', age: 29});  
persons[0].age = '31'; // Para que essa linha de código não altere a contante que tem o spread, usamos o .map() nela. (linhas 20 a 23);

console.log(persons, copiedPersons);

/* 
  Spread Operator (Operador de Propagação):
    O operador spread extrai todos os elementos de um array e os fornece como uma lista independente de elementos.
    O operador spread (...) no JavaScript é como uma ferramenta que pega coisas agrupadas, como uma lista de itens ou letras em uma palavra, 
      e as espalha para que possam ser usadas individualmente. 
    Ele é útil quando você quer usar itens de uma lista um por um, ou quando quer combinar coisas de diferentes grupos em um só.
*/