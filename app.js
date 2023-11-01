const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
    navigator.geolocation.getCurrentPosition(posData => {
        console.log(posData);
    }, error => {
        console.log(error);
    });
    console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

/* 
    Como mencionei antes, JavaScript é uma linguagem de programação de thread única, o que significa que só pode fazer uma coisa de cada vez. 
    No entanto, quando se trata de operações assíncronas como getCurrentPosition, 
        JavaScript não espera que a operação seja concluída antes de passar para a próxima linha de código. 
    Em vez disso, ele continua executando o restante do código e volta para lidar com o resultado da operação assíncrona quando estiver pronto.
*/