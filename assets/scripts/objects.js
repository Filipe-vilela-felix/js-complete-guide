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
    console.log(this);
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
};

addMovieButton.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);

/* 
    Para entender essa aula, deve-se assistir a aula 234, pois a maior parte do contúdo foi explicada no console do navegador.
*/