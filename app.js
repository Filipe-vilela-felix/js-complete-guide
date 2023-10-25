let hobbies = ['Sports', 'Cooking'];
console.log(hobbies);

hobbies.splice(1, 0, 'Good food');
console.log('1)', hobbies);

hobbies = ['Sports', 'Cooking'];
hobbies.splice(0, 1);
console.log('2)', hobbies);

hobbies = ['Sports', 'Cooking'];
hobbies.splice(0);
console.log('3)', hobbies);

hobbies = ['Sports', 'Cooking'];
hobbies.splice(1);
console.log('4)', hobbies);

hobbies = ['Sports', 'Cooking'];
hobbies.splice(-1, 1);  // Exclusivo do .splice()
console.log('5)', hobbies);

/* 
  O método .splice() é extremamtente útil, pois nos permite fazer todos os tipos de coisas com matrizes.
  Obs: É um método que só está disponível em matrizes reais. Não em iteráveis, não em objetos do tipo array.

  Esse método leva pelo menos dois argumentos, contudo, há outra versão para mais argumentos. 
    1) Inserir elementos dentro de um array: (linhas );
        O primiero argumento é o índice em que desejo inserir o elemento. 
        O segundo argumento é a quantidade de índices que desejo excluir (nesse caso: 0).
        A partir do terceiro argumento são os elementos que desejo inserir no array.

    2) Excluir elementos dentro de um array: (linhas );
        O primeiro argumento é o índice em que desejo excluir.
        O segundo argumento é a quantidade de índices que desejo excluir.

    3) Excluir todos os índices da matriz: (linha );
        Para isso, basta digitar um único argumento, como 0.

    4) Excluir todos os ítem exceto um: (linha );
        Basta informar qual índice deseja que permaneça.

    5) Excluir através de um índice negativo. (linha );
        Inserir um índice negativo pode funcionar para exluir um elemento de trás pra frente.
*/