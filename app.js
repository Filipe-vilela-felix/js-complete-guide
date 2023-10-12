// RESUMO DA SEÇÃO 7 ATÉ A AULA 10:

const h1 = document.getElementById('main-title');   // Selecionando o elemento HTML a partir de seu id e armazenando-o na constante h1. 

// A partir de seu armazenamento, podemos ter acesso a certas propriedades:

h1.textContent = 'Some new title';      // A propriedade .textContent representa o conteúdo do texto de um nó e seus descendentes, que no momento, está sendo alterado.
h1.style.color = 'white';       // A propriedade style retorna um objeto que representa os atributos de estilo do elemento, que nesse momento, está sendo alterado.
h1.style.backgroundColor = 'black';     // Similarmente, estamos definindo a propriedade backgroundColor do objeto de estilo como ‘black’, o que muda a cor de fundo do elemento.

const li = document.querySelector('li:last-of-type');       // O método querySelector retorna o primeiro elemento que corresponde a um ou mais seletores CSS especificados no documento. Neste caso, estamos selecionando o último elemento ‘li’.
li.textContent = li.textContent + (' (Changed!)');      // Novamente, estamos usando a propriedade textContent para alterar o conteúdo de texto do elemento ‘li’, adicionando ’ (Changed!)’ ao final.

const body = document.body;     //  Esta propriedade retorna o elemento <body> ou <frameset> do documento atual.

// const listItemElements = document.querySelectorAll('li');
const listItemElements = document.getElementsByTagName('li');       // Este método retorna uma coleção HTML ao vivo de elementos com o nome da tag especificada, neste caso, ‘li’.

for (const listItemEl of listItemElements) {
    console.dir(listItemEl);
}   // Aqui, estamos usando um loop for…of para iterar sobre cada item na coleção listItemElements. 
// Para cada item, usamos console.dir() para exibir uma lista interativa das propriedades do objeto JavaScript fornecido 
//     (neste caso, o elemento da lista).