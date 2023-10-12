const section = document.querySelector('section');
const button = document.querySelector('button');

// section.style.backgroundColor = 'blue';

section.className = 'red-bg';

button.addEventListener('click', () => {    
    // if (section.className === 'red-bg visible') {
    //     section.className = 'red-bg invisible';   
    // } else {
    //     section.className = 'red-bg visible';
    // }
    section.classList.toggle('invisible');
});

/* 
    A função de callback faz uso do método toggle do objeto classList do elemento section. 
    Este método alterna entre adicionar e remover uma classe ao elemento, dependendo se a classe já existe ou não. 
    Neste caso, a classe que está sendo alternada é ‘invisible’. Provavelmente, essa classe altera a visibilidade do elemento section. (linhas 8 e 14);

    O método toggle usado é basicamente o que a estrutura condicional faria. (linhas 9 a 13);

CONTEXTUALIZANDO O CÓDIGO:
    O botão, quando clicado, aciona uma função que alterna a visibilidade do elemento de seção.
    Ele faz isso adicionando ou removendo a classe ‘invisible’ do elemento de seção. 
    Se a classe ‘invisible’ estiver definida nos estilos CSS para tornar um elemento invisível (por exemplo, display: none), 
        clicar no botão mostrará e ocultará o elemento de seção.
*/