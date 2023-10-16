// RESUMO DOS MÉTODOS APRENDIDOS NA AULA 11 A 

/*
    - Métodos de Inserção e Remoção: Aprendemos sobre vários métodos de inserção e remoção.

    - Criação de Objetos DOM: Focamos nos métodos onde criamos um novo objeto DOM programaticamente em Javascript.

    - Métodos para Adicionar Objetos: Podemos adicionar tais objetos com appendChild(), insertAdjacentElement(), replaceChild() ou removeChild().

    - Métodos Modernos: Também exploramos alguns métodos mais modernos como append(), prepend(), before(), after(), replaceWith() e remove().

    - Suporte do Navegador: A principal diferença entre os métodos é o suporte do navegador. 
        Alguns navegadores não suportam todos os métodos, por exemplo, o Safari não suporta before() e after().
*/

/*
    appendchild(): 
        Este método é usado para adicionar um nó ao final da lista de filhos de elementos pai especificado. 
        Se o elemento já existir em outro lugar, ele será removido de sua posição atual antes de ser anexado ao novo local. 
        Exemplo:
            let node = document.createElement("p");  // Cria um novo elemento <p>
            node.innerHTML = "Novo parágrafo";  // Adiciona algum texto ao novo elemento
            document.body.appendChild(node);  // Adiciona o novo elemento ao final do corpo do documento
        Link: https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

    insertAdjacentElement():
         Este método insere um elemento em uma posição especificada relativa a um elemento existente. 
         Exemplo:
            let newElement = document.createElement("div");  // Cria um novo elemento <div>
            let existingElement = document.getElementById("existingElement");  // Seleciona um elemento existente
            existingElement.insertAdjacentElement("afterend", newElement);  // Insere o novo elemento após o elemento existente
        Link: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement

    replaceChild(): 
        Este método substitui um nó filho no elemento pai especificado por um nó novo.
        Exemplo:
            let newNode = document.createElement("div");  // Cria um novo elemento <div>
            let oldNode = document.getElementById("oldNode");  // Seleciona o nó a ser substituído
            oldNode.parentNode.replaceChild(newNode, oldNode);  // Substitui o nó antigo pelo novo nó
        Link: https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild

    removeChild():
        Este método remove um nó filho de um nó novo.
        Exemplo:
            let nodeToRemove = document.getElementById("nodeToRemove");  // Seleciona o nó a ser removido
            nodeToRemove.parentNode.removeChild(nodeToRemove);  // Remove o nó selecionado
        Link: https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild

    append():
        Este método insere um conjunto de objetos Node ou string após o último filho do Element.
        Exemplo:
            let parentElement = document.getElementById("parentElement");  // Seleciona o elemento pai
            let newElement = document.createElement("div");  // Cria um novo elemento <div>
            parentElement.append(newElement);  // Adiciona o novo elemento ao final do elemento pai
        Link: https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append

    prepend():
        Este método insere um conjunto de objetos Node ou string antes do primeiro filho do Element.
        Exemplo:
            let parentElement = document.getElementById("parentElement");  // Seleciona o elemento pai
            let newElement = document.createElement("div");  // Cria um novo elemento <div>
            parentElement.prepend(newElement);  // Adiciona o novo elemento antes do primeiro filho do elemento pai
        Link: https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend

    before():
        Este método insere um conjunto de objetos Node ou string na lista de filhos do pai deste Element, logo antes deste Element.
        Exemplo:
            let existingElement = document.getElementById("existingElement");  // Seleciona um elemento existente
            let newElement = document.createElement("div");  // Cria um novo elemento <div>
            existingElement.before(newElement);  // Insere o novo elemento antes do elemento existente
        Link: https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before
        
    after():
        Este método insere um conjunto de objetos Node ou string na lista de filhos do pai deste Element, logo após este Element. 
        Exemplo:
            let existingElement = document.getElementById("existingElement");  // Seleciona um elemento existente
            let newElement = document.createElement("div");  // Cria um novo elemento <div>
            existingElement.after(newElement);  // Insere o novo elemento após o elemento existente
        link: https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before

    replaceWith():
        Este método substitui este Element na lista de filhos de seu pai por um conjunto de objetos Node ou string. 
        Exemplo:
            let oldNode = document.getElementById("oldNode");  // Seleciona o nó a ser substituído
            let newNode = document.createElement("div");  // Cria um novo elemento <div>
            oldNode.replaceWith(newNode);  // Substitui o nó antigo pelo novo nó
        Link: https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/replaceWith

    remove(): 
        Este método remove o elemento do DOM. 
        Exemplo:
            let nodeToRemove = document.getElementById("nodeToRemove");  // Seleciona o nó a ser removido
            nodeToRemove.remove();  // Remove o nó selecionado
        Link: https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
*/