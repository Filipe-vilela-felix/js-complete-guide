const person1 = {name: 'Max'};
const person2 = {name: 'Manuel'};

const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);

personData.set(person2, [{date: 'two weeks ago', price: 100}]);

console.log(personData);
console.log(personData.get(person1));

console.log('---------------------');

// for (const entry of personData.entries())  Como cada entry é uma estrutura de chave e valor, podemos usar a desestruturação de array. (linha 14); 
for (const [key, value] of personData.entries()) {
    console.log(key, value);
}

console.log('---------------------');

for (const key of personData.keys()) {
    console.log(key);
}

console.log('---------------------');

for (const value of personData.values()) {
    console.log(value);
}

console.log('---------------------');

console.log(personData.size)

/*
    A vantange do Map() é que podemos usar um objeto como uma chave e anexar informações extras nele, sem afetar o objeto principal.
    Ou seja, o Map() usa uma estrutura de chave e valor. (linha 4);

    .set() é usado para adicionar um novo elemento ou atualizar um elemento existente no Map. (linha 6);
    
    .get() serve apenas para obter um valor por chave, inserindo a chave desejada ou o objeto usado no Map(). (linha 9);

    Podemos enviar todas as informações para um mapa de três maneiras diferentes (sempre usando um for loop):
        1ª) Estrutura de chave e valor. (linhas 13 a 16);
        2ª) Apenas com chaves. (linhas 20 a 22);
        3ª) Apenas com valores. (linhas 26 a 28);

    Algumas propriedades extras, como a .size. (linha 32);

OBSERVAÇÃO:
    Essa estrutura pode evitar o incômodo de ter que, por exemplo, adicionar um ID a cada objeto criado, pois o próprio objeto pode ser a chave.
    Quando criamos uma estrutua Map() com o new Map(), podemos passar uma array de arrays, onde cada array interno é uma estrutura de chave e valor.
    Contudo, quando usamos o método .set(), estamos adicionando pares de chave e valor individualmente ao Map. 
        Portanto, não precisa de um array de arrays.
*/