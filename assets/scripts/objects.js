const person = {
    'first name': 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    greet: function() {     
        alert('Hi there!');
    },       
    1.5: 'hello'
};
console.log(person);

console.log(person[1.5]);

/* 
    Existem dois outros tipos de valores que podemos usar para os nomes de porpriedades: números e símbolos.

    Números: Podemos usar números como chaves. E para identifica-los ou chama-los usamos colchetes. (linhas )
        Obs: Tb é possível inseir aspas aoc chama-lo. Ex: console.log(person.['1.5']);

    Como as propriedades são ordenadas em um objeto?
        Assita a metade final da video aula kkkkk.
*/