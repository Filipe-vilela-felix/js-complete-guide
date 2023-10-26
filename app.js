const data = 'new yourk;10.99;2000';
console.log(data);

const transformedData = data.split(';');
transformedData[1] = +transformedData[1]; // Transformando uma string em number (Ja visto antes!).
console.log(transformedData);

const nameFragments = ['Max', 'Schwarz'];
const name = nameFragments.join(' ');
console.log(name);

/* 
  Método split(): Este método divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. 
    A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método. (linha 4);
  
  Método join(): Este método junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string. (linha 9);
*/