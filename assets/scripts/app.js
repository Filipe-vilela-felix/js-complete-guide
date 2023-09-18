const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    currentResult = currentResult + userInput.value; 
    outputResult(currentResult, '');
}

addBtn.addEventListener('click', add); 


/*
AddEventListener():
    É uma função incorporada ao navegador, estando "ligada" ao botão.
    O primeiro parâmetro/argumento é uma string, que identifica o elemento que queremos ouvir. 
    O segundo, é uma função, pois queremos ter certeza de informar ao navegador, que informará ao js, qual função deve ser executada se o botão for cliclado.
    Note que a função add não apresneta '()'. Isso porque queremos que a função só seja executada quando o botão for cliclado. E ao fazer isso, estamos
    avisando ao mecanismo js: "Quando este botão for clicado, dê uma olhada na função com este nome e execute-a para mim".

Note que a função add() não apresenta mais um return como no commit anterior. Isso porque com a função 'click', o navegador sabe que com apenas um
clique, ele executa essa função, não se importando se há um retorno ou não.
E também alterar o 'const result' pelo 'currentResult', para garantir que mudamos imediatamente o resultado atual. (linha 5);

Obs: O código não está em pleno funcionamento. Segue os próximos commits;
*/