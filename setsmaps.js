const ids = new Set(['Hi', 'from', 'set!']);
console.log('---------------');
console.log(ids[0]);    // O resultado será undefined.
console.log('---------------');
console.log(ids.has('from'));    // Para verificar ser o valor 1 está no conjunto, ou seja, retornar true ou false.
console.log('---------------');
console.log(ids.add(2));    // O valor 2 não será adicionado no conjunto como deveria, pois em um conjunto, um valor é garantido como único.

console.log('---------------');
// ids.entries() é um método que podemos executar e retornar um iterável, podendo user-lo em loops. Veja:
for (const entry of ids.entries()) {
    console.log(entry[1]);  // É necessário informar o índice para que o retorno de todos os elementos funcione.
}

console.log('---------------');
ids.delete('Hi');   // Deletando o elemento "Hi".
console.log(ids);

console.log('---------------');
// Faz necessário saber se o elemento a ser deletador existe, e para isso:
if (ids.has(2)) {
    ids.delete(2)
}
console.log(ids);

/*
    Os sets (conjuntos) são uma estrutura de daods que ajudam a gerenciar valores únicos. E em alguns casos, podem ser úteis.
    São ótimos quando se quer exclusividade entre os dados.
*/