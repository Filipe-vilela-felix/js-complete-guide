const addMovieButton = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');

    if (movies.length === 0) {
        movieList.classList.remove('visible');
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';

    const filteredMovies = !filter 
        ? movies 
        : movies.filter(movie => movie.info.title.includes(filter));

        filteredMovies.forEach((movie) => {
        const movieEl = document.createElement('li');
        let text = movie.info.title + ' - ';
        for (const key in movie.info) {
            if (key !== 'title') {
                text = text + `${key}: ${movie.info[key]}`
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });
};

const addMovieHandler = () => {
    const title = document.getElementById('title').value;  
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
            [extraName]: extraValue
        },
        id: Math.random()
    };

    movies.push(newMovie);
    renderMovies();
}

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
};

addMovieButton.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);

/* 
CONTEXTUALIZANDO O CÓDIGO:
    - A função searchMovieHandler é uma nova função que obtém o valor do elemento ‘filter-title’ 
        e passa esse valor para a função renderMovies como o termo de filtro. Isso permite que você filtre os filmes por título. (linhas 59 a 62);
    
    - Adicionamos uma funcionalidade de filtro à função renderMovies. Agora a função aceita um argumento opcional chamado filter. 
        Se nenhum filtro for fornecido, a função irá renderizar todos os filmes na lista de filmes. 
        Se um filtro for fornecido, a função irá renderizar apenas os filmes cujo título inclui o termo de filtro. (linhas 6 e 16 a 20);
*/