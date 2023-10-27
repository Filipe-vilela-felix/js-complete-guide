const addMovieButton = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const addMovieHandler = () => {
    const title = document.getElementById('title').value;   // .value indica que não estou interessado no DOM completo, mas somente no valor dele.
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    // Adicionando validações:
    if (
        title.trim() === '' || 
        extraName.trim() === '' || 
        extraValue === ''
    ) {
        return;
    }

    const newMovie = {
        info: {
            title,
            [extraName]: extraValue // Os colchetes são necessários quando queremos usar uma variável para definir o nome de uma propriedade de um objeto.
        },
        id: Math.random()
    };

    movies.push(newMovie);
    console.log(newMovie);
}

addMovieButton.addEventListener('click', addMovieHandler);

/* 
CONTEXTUALIZANDO O CÓDIGO:
    Adicionando o botão 'ADD MOVIE'.
*/