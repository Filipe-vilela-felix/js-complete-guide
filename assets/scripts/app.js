const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];

const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('button').lastElementChild;

const backdrop = document.getElementById('backdrop');

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');  // Se a classe "visible" já estiver em existência quando a for lida, não é executada. Caso contrário, é.
}

startAddMovieButton.addEventListener('click', toggleMovieModal);