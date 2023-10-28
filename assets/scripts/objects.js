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
        const { info, ...otherProps } = movie;
        console.log(otherProps);
        // const { title: movieTitle } = info;
        let { getFormattedTitle } = movie;
        getFormattedTitle = getFormattedTitle.bind(movie);
        let text = movie.getFormattedTitle.call(movie) + ' - ';
        for (const key in info) {
            if (key !== 'title') {
                text = text + `${key}: ${info[key]}`
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
        id: Math.random().toString(),
        getFormattedTitle() {
            console.log(this);
            return this.info.title.toUpperCase();
        }
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
    Os métodos .call() e .apply() no JavaScript são usados para invocar uma função diretamente, com um determinado contexto (this) e argumentos. (linha 27); 
    A principal diferença entre eles é a maneira como os argumentos são passados para a função:
        - call(): requer que os parâmetros sejam listados explicitamente. Por exemplo: funcao.call(valorParaThis, arg1, arg2, ...).
        - apply(): permite que você invoque a função com argumentos como um array. Por exemplo: funcao.apply(valorParaThis, [arg1, arg2, ...]).

    Diferentemente de .call() e .apply(), .bind() não invoca a função imediatamente. 
        Em vez disso, ele retorna uma nova função com o contexto e os argumentos iniciais vinculados.
*/