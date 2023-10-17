const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];

const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('button').lastElementChild;

const backdrop = document.getElementById('backdrop');
// const background = document.body.childre[0];
// const background = document.body.firstElementChild;

const cancelAddMovieButton = addMovieModal.querySelector('.btn.btn--passive');

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
}

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible'); 
    toggleBackdrop();
}

const cancelAddMovie = () => {
    toggleMovieModal();
}

const backdropClickHandler = () => {
    toggleMovieModal();
}

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);

/* 
    Em comparação ao commit anterior, onde o objetivo era apenas tornar o modal funcional alterando uma classe css no proprio js. Nesse commit,
        permitimos que o usuário feche o modal clicando no plano de fundo ou no botão de cancelar. Melhorando na usuabilidade da interface. 

CONTEXTUALIZANDO O CÓDIGO:
    - Adicionado o botão de cancelar: Foi adicionada uma nova variável chamada cancelAddMovieButton, 
        que seleciona o botão de cancelar no modal de adicionar filme. (linha 12);

    - Função para alternar o plano de fundo: Foi criada uma nova função chamada toggleBackdrop, 
        que alterna a visibilidade do plano de fundo quando chamada. (linhas 14 a 16);

    - Atualização da função toggleMovieModal: A função toggleMovieModal foi atualizada para chamar a nova função toggleBackdrop, 
        fazendo com que o plano de fundo alterne junto com o modal. (linhas 18 a 21);

    - Função para cancelar a adição do filme: Foi criada uma nova função chamada cancelAddMovie, 
        que chama a função toggleMovieModal para fechar o modal. (linhas 23 a 25);

    - Manipulador de clique no plano de fundo: Foi criada uma nova função chamada backdropClickHandler, 
        que chama a função toggleMovieModal quando o plano de fundo é clicado. (linha 27 a 29);

    - Novos ouvintes de eventos: Foram adicionados novos ouvintes de eventos para o plano de fundo e para o botão de cancelar. 
        Quando o plano de fundo é clicado, o modal é fechado. Quando o botão de cancelar é clicado, a adição do filme é cancelada. (linhas 32 e 33);
*/