const nameData = ['Max', 'Schwarz', 'Mr', 30];
// const firstName = nameData[0];
// const lastName = nameData[1];

const [firstName, lastName, ...otherInformation] = nameData;  // Usamos o operador spread para que ele possa "copiar" o resto dos índices no array.
console.log(firstName, lastName, ...otherInformation);  // Os elementos em ...otherInformation serão apresentados apenas como elementos.
console.log(firstName, lastName, otherInformation); // Os elementos em otherInformation serão apresentados como array.

/* 
  A desestruturação do array é um recurso importante se desejarmos dividir um array em variáveis ou constantes que podemos usar em todo o código.
*/