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

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach(listItem => {
//     listItem.addEventListener('click', event => {
//         event.target.classList.toggle('hightlight');
//     });
// })

list.addEventListener('click', event => {
    // console.log(event.currentTarget);
    // event.target.classList.toggle('hightlight');
    event.target.closest('li').classList.toggle('hightlight');  
});