// const 'first name' = 'Max';  É gerado um erro por conta do nome da constante, ao contrário da linha 3.
const person = {
    'first name': 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    greet: function() {     
        alert('Hi there!');
    }       
};
console.log(person);

console.log(person['first name']);

const movieList = document.getElementById('movie-list');
// movieList.style.backgroundColor = 'red';
movieList.style['background-color'] = 'red';
movieList.style['display'] = 'block';

/* 
    Tudo o que podemos usar em uma variável/constate, pode ser usado em uma chave. 
        Mas nem tudo o que podemos usar como um nome de chave, pode ser usado como uma variável/constante. (linhas 1 e 4);

    Para darmos um nome separado a uma chave ou qualquer outro tipo de nome basta o incluirmos em aspas. (linha 3);
    Agora, chamar essa propriedade é possível através de uma notação de colchetes. (linha 12);
        Vale ressaltar que a notação de colchetes com aspas também está presente na alteração de um elemento através do DOM. (linha 3);
        Tal característica nos permite alterar inlcusive o nome da propriedade do elemento DOM. (linha 3);
*/