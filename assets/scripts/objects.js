const person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    greet: function() {     // Um método é simplesmente uma função atribuida a uma propriedade 
        alert('Hi there!');
    }       
};
console.log(person);

person.isAmdmin = true;
delete person.age;

console.log(person);

/* 
    Com a notação de pontos podemos adicionar propriedades em um objeto e atribuir valores a elas. 
        Não importando se ela fazia parte do objeto ou não. (linha 11);

    Podemos tb deletar propriedades de objetos. (linha 12);
*/