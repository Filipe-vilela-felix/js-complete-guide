const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('button').lastElementChild;
const backdrop = document.getElementById('backdrop');
// const background = document.body.childre[0];
// const background = document.body.firstElementChild;
const cancelAddMovieButton = addMovieModal.querySelector('.btn.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
// const userInputs = addMovieModal.getElementsByTagName('input');

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible'); 
    toggleBackdrop();
};

const cancelAddMovieHandler = () => {
    toggleMovieModal();
};

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (
        titleValue.trim() === '' || 
        imageUrlValue.trim() === '' || 
        ratingValue.trim() === '' || 
        +ratingValue < 1 || 
        +ratingValue > 5) {
            alert('Please enter valid values (rating between 1 and 5)');
            return;
        }
};

const backdropClickHandler = () => {
    toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);

/* 
    .trim() serve para remover os espaços em branco no início e no fim de uma string.

    Ao invés de usarmos parseInt() para converter uma string em um número inteiro, podemos usar o "+" no lugar. (linhas 36 e 37) 

CONTEXTUALIZANDO O CÓDIGO:
    Neste commit, Quando o botão de confirmação é clicado, a função addMovieHandler é chamada. 
        Esta função recupera os valores dos campos de entrada do usuário. Se algum dos valores não for válido 
        (por exemplo, se estiver vazio ou se a classificação não estiver entre 1 e 5), uma mensagem de alerta será exibida e 
        a função será interrompida. Se todos os valores forem válidos, a função continuará a execução. 
        No entanto, atualmente, mesmo que os valores sejam válidos, a função não faz nada além disso.

    - Adicionado o botão de confirmação: Foi adicionada uma nova variável chamada confirmAddMovieButton, 
        que seleciona o botão de confirmação no modal de adicionar filme. (linha 10);
    
    - Adicionado os campos de entrada do usuário: 
        Foi adicionada uma nova variável chamada userInputs, que seleciona todos os campos de entrada no modal de adicionar filme. (linha 11);

    - Função para adicionar um filme: Foi criada uma nova função chamada addMovieHandler. 
        Esta função recupera os valores dos campos de entrada do usuário e verifica se eles são válidos. 
        Se algum dos valores não for válido (por exemplo, se estiver vazio ou se a classificação não estiver entre 1 e 5), 
        uma mensagem de alerta será exibida e a função será interrompida. 
        Se todos os valores forem válidos, a função continuará a execução. (linhas 27 a 41 e 50);

    - Manipulador de clique no botão de confirmação: Foi adicionado um novo ouvinte de evento para o botão de confirmação. 
        Quando o botão de confirmação é clicado, a função addMovieHandler é chamada. (linha 50);

OBSERVAÇÃO:
    Com finalidade de padronização, adicionamos a palavra ...Handler às funções que apenas são chamadas através de um ouvinte de evento.
*/