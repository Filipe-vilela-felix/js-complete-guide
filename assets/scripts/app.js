const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector("header button");
// const startAddMovieButton = document.querySelector('button').lastElementChild;
const backdrop = document.getElementById("backdrop");
// const background = document.body.childre[0];
// const background = document.body.firstElementChild;
const cancelAddMovieButton = addMovieModal.querySelector(".btn.btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
// const userInputs = addMovieModal.getElementsByTagName('input');

const movies = [];

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const clearMovieModal = () => {
  for (const usrInput of userInputs) {
    usrInput.value = "";
  }
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearMovieModal();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid values (rating between 1 and 5)");
    return;
  }

  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearMovieModal();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);

/* 
    Ao criarmos uma matriz de nome "movies", desejamos adicionar a cada índice um fime (objeto). Mas vale ressaltar que não o tornará visível
        na tela, pois o intuito será para o gerenciamento de dados em JS e não apenas como elementos HTML. 
    E trabalhar com dados dessa forma não há a necessidade de trabalharmos com DOM (nesse caso).

CONTEXTUALIZANDO O CÓDIGO:
    Neste commit, quando o botão de confirmação é clicado,a função addMovieHandler é chamada.
        Esta função além de validar os inputs (commit anterior), armazena-nos em um objeto, que por sua vez, se torna um índice em um array.
        E por fim, criamos uma função com o intuito de "limpar" os dados inseridos em cada imput.

    - Criação da lista de filmes: Uma nova variável chamada movies foi adicionada, 
        que é uma lista vazia onde os filmes adicionados pelo usuário serão armazenados. (linha 14);

    - Função para limpar o modal de filme: Uma nova função chamada clearMovieModal foi criada. 
        Esta função percorre todos os campos de entrada do usuário e limpa seus valores. (linhas 31 a 34);

    - Adição de um novo filme à lista de filmes: Dentro da função addMovieHandler, 
        um novo objeto newMovie é criado com os valores dos campos de entrada do usuário. 
        Este objeto é então adicionado à lista de filmes. (linhas 52 a 58);

    - Limpeza do modal após a clicagem no botão de cancelar modal. (linha 33);
    
    - Limpeza do modal após a adição de um filme: Após a adição de um filme à lista, a função clearMovieModal é chamada para limpar os 
        campos de entrada. (linha 61);
*/