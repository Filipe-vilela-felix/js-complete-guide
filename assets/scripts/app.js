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
const entryTextSection = document.getElementById('entry-text');

const movies = [];

const updateUi = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

const renderNewMovieElement = (title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}" />
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
};

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
  renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
  updateUi();
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
    Neste commit, nosso foco é renderizar os itens de filme na tela. Por exemplo, queremos atualizar a UI (Interface do uusário), 
        e remover a "caixa" que contém o texto ("Your personal movie database!") sempre que houver filme.

    - Atualização da Interface do Usuário (UI): Foi criada uma nova função chamada updateUi. Esta função verifica se há filmes na lista de filmes. 
        Se a lista estiver vazia, a seção de texto de entrada é exibida. Se houver filmes na lista, a seção de texto de entrada é ocultada. 
        Isso melhora a experiência do usuário, pois evita que eles vejam uma seção de texto de entrada desnecessária quando 
            já existem filmes na lista. (linhas 17 a 23);

    - Renderização de Novos Elementos de Filme: Foi criada uma nova função chamada renderNewMovieElement. 
        Esta função cria um novo elemento li com uma classe movie-element e preenche seu conteúdo HTML 
            com os detalhes do filme (título, imagem e classificação). 
            Em seguida, este novo elemento é anexado à lista de filmes na interface do usuário. (linhas 25 a 39 e 87);
*/