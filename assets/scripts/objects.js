// 'THIS' SUMMARY:

/* 
    A palavra-chave this pode levar a algumas dores de cabeça no JavaScript - este resumo esperançosamente funciona como um remédio.
    Isso se refere a coisas diferentes, dependendo de onde é usado e como (se usado em uma função) uma função é chamada.
    Geralmente, isso se refere à "coisa" que chamou uma função (se usada dentro de uma função). Isso pode ser o contexto global, 
        um objeto ou algum dado/objeto vinculado (por exemplo, quando o navegador vincula isso ao botão que acionou um evento de clique).
*/

// 1) 'this' no contexto global (ou seja, fora de qualquer função):

function something() {'...'}

console.log(this);  // Registra o objeto global (janela no navegador) - SEMPRE (também no modo estrito)!

// 2) 'this' em função (sem seta) - Chamado no contexto global:

function something() { 
    console.log(this);
}
 
something();    // Registra o objeto global (janela no navegador) no modo não estrito, indefinido no modo estrito.

// 3) 'this' em uma função de seta - Chamado no contexto global:

const something = () => { 
    console.log(this);
}
 
something();    // Registra o objeto global (janela no navegador) - SEMPRE (também no modo estrito)!

// 4) 'this' em um método (não-seta) - Chamado em um objeto:

const person = { 
    name: 'Max',
    greet: function() { // ou use a abreviação do método: greet() { ... }
        console.log(this.name);
    }
};

// 5) 'this' em um método (função de seta) - Chamado em um objeto:

const person2 = { 
    name: 'Max',
    greet: () => {
        console.log(this.name);
    }
};
 
person.greet();     // Registra nada (ou algum nome global no objeto de janela), "este" refere-se ao objeto global (janela), mesmo no modo estrito.