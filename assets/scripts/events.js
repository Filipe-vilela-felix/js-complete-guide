const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(event);
});

const div = document.querySelector('div');
const button = document.querySelector('button');

div.addEventListener('mouseenter', event => {
    console.log('CLICKED DIV');
    console.log(event);
});

button.addEventListener('mouseenter', event => {
    event.stopPropagation();
    console.log('CLICKED BUTTON');
    console.log(event);
});

/* 
    Assistir aula teórica (312).
*/