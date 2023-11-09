const fs = require('fs');   // A função require() é usada para importar módulos em Node.js. Neste caso, está importando o módulo ‘fs’.

fs.readFile('user-data.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

fs.writeFile('user-data.txt', 'username=Max', err => {
    if (err) {
        console.log(err); 
    } else {
        console.log('wrote to file!');
    }
});