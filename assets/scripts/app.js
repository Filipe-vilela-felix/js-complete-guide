const userName = 'Max';
const altName = '';
console.log(userName === 'Max'); // gera e imprime um booleano => true
console.log(userName); // não foi tocado, ainda é uma string => 'Max'
 
console.log(userName || null); // userName é verdadeiro e, portanto, retornado por || => 'Máx'
console.log(altName || 'Max'); // altName é falsy (cadeia de caracteres vazia), portanto, 'Max' é retornado => 'Max'
console.log(altName || ''); // tanto altName quanto '' são falsos, mas se o primeiro operando é falso, o segundo é sempre retornado => ''
console.log(altName || null || 'Anna'); // altName e null são falsos, 'Anna' é retornado => 'Anna'
 
console.log(userName && 'Anna'); // userName é verdadeiro, portanto, o segundo (!) valor é retornado => 'Anna'
console.log(altName && 'Anna'); // altName é falsy, portanto, o primeiro valor é retornado => ''
console.log(userName && ''); // userName é verdadeiro, portanto, o segundo valor é retornado => ''

/*
TENHA SEMPRE EM MENTE: 
  Operador ( ===, > etc. nem && ou ||) altera a variável que você pode estar usando na comparação. 
  Nos exemplos acima, os valores armazenados em userName e altName NUNCA são alterados.

  ===, > etc. apenas geram novos valores booleanos que são usados na comparação. || e && não geram booleanos,
    eles apenas tratam os valores antes e depois deles como condições (que, portanto, precisam produzir valores booleanos e são coagidos a booleanos se necessário).

  Devido aos comportamentos descritos acima, você costuma usar || em JavaScript para atribuir valores padrão/fallback a variáveis/constantes:
    const enteredValue = ''; // let's assume this is set based on some input provided by the user, therefore it might be an empty string
    const userName = enteredValue || 'PLACEHOLDER'; // will assign 'PLACEHOLDER' if enteredValue is an empty string
*/