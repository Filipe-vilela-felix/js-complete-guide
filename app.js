const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading');
hobbies.unshift('Coding');
const poppedElement = hobbies.pop();
const shiftedElement = hobbies.shift();
console.log(hobbies);
console.log(poppedElement);
console.log(shiftedElement);

hobbies[1] = 'Coding';
console.log(hobbies);

/* 
  .push():
    Adiciona novos elementos no final do array.(linha 2);

  .unshift():
    Adiciona novos elementos no início do array. (linha 2);

  .pop():
    Remove o último elemento de um array. (linhas 4 e 6);
    Para que o mesmo retorne o elemento removido é necessário atribuir a uma nova variável. (linhas 4 e 7);

  .shift():
    Remove o primeiro elemento de um array. (linhas 5 e 6);
    Para que o mesmo retorne o elemento removido é necessário atribuir a uma nova variável. (linha 5 e 8);
    Esse método modifica o array original, removendo o primeiro elemento e deslocando todos os outros elementos para um índice inferior.

  Se precisarmos adicionar ou manipular itens em diferentes lugares de um array usamos o acesso direto ao índice. (linha 10);
*/