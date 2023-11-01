const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
    console.log('Clicked');
}

button.addEventListener('click', trackUserHandler);

let result = 0;
for (let i = 0; i < 100000000; i++) {
    result += i;
}

console.log(result);

/* 
    Quando você clica no botão enquanto o loop for está sendo executado, você pode notar que nada acontece até que o loop for termine. 
    Isso ocorre porque o loop for está bloqueando o restante do código de ser executado - incluindo a função do ouvinte de eventos do botão.

    Isso é chamado de ‘blocking code’. O JavaScript tem uma ‘fila de eventos’ onde armazena todos os eventos que precisam ser processados. 
    No entanto, ele só pode chegar a esses eventos quando terminar de executar todo o resto do código.
*/