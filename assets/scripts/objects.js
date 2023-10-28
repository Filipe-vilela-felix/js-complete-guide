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
        const { title: movieTitle } = info;
        let text = movieTitle + ' - ';
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
        id: Math.random().toString()    // Encadeando o método toString() no resultado de matemática.
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
    A desestruturação é uma funcionalidade do JavaScript que permite extrair dados de arrays, objetos, mapas e conjuntos em suas próprias variáveis. 
    Isso é extremamente útil quando você quer usar esses valores em seu código.

CONTEXTUALIZANDO O CÓDIGO:
    1) const { info, ...otherProps } = movie;: 
        Aqui você está desestruturando o objeto movie. Isso cria duas novas variáveis: info e otherProps. 
        A variável info contém o valor da propriedade info do objeto movie, e otherProps é um novo objeto que contém todas as outras propriedades 
            do objeto movie.

    2) const { title: movieTitle } = info;: 
        Aqui você está desestruturando o objeto info. Isso cria uma nova variável chamada movieTitle que contém o valor da propriedade title do 
            objeto info. 
        Isso é útil porque agora você pode se referir ao título do filme usando a variável movieTitle, em vez de ter que escrever info.title.

    3) Você também usou console.log(otherProps); para imprimir no console todas as outras propriedades do objeto movie que não são a propriedade 
        info. Isso pode ser útil para depuração ou para entender melhor quais outras propriedades estão presentes no objeto.
*/