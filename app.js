/* 
A TRAVESSIA DO DOM:
    A travessia do DOM é um conceito que se refere à seleção de elementos no DOM e à navegação entre esses elementos, 
        como seus filhos, irmãos, pais, etc.

    Existem termos específicos usados na travessia do DOM:
        - Filho: Um nó filho direto de um elemento. Por exemplo, em <div><p><em></em></p></div>, a tag <p> é um filho da tag <div>.

        - Descendente: Um nó filho direto ou indireto de um elemento. No exemplo anterior, 
            tanto a tag <p> quanto a tag <em> são descendentes da tag <div>.
        
        - Pai: O nó ou elemento pai direto de outro elemento. No exemplo anterior, a tag <div> é pai da tag <p>.

        - Ancestral: Uma relação direta ou indireta dos pais. No exemplo anterior, a tag <div> é um ancestral tanto da tag <p> quanto da tag <em>.

    Você pode selecionar elementos filhos ou descendentes de um elemento. Para isso, você pode usar as propriedades childNodes e children. 
        childNodes seleciona todos os nós filhos, incluindo nós de texto, enquanto children seleciona apenas nós de elementos filhos, ou seja, 
        apenas objetos de elemento HTML.

    Você também pode usar o seletor de consulta e outros métodos semelhantes em qualquer nó de elemento selecionado para mergulhar mais fundo nos 
        descendentes.

    Existem propriedades especiais como firstChild, firstElementChild, lastChild e lastElementChild 
        que permitem selecionar o primeiro ou último nó filho ou nó de elemento filho de um determinado elemento.

    Para selecionar elementos irmãos no mesmo nível, você pode usar as propriedades previousSibling, previousElementSibling, 
        nextSibling e nextElementSibling. Essas propriedades permitem obter o irmão direto antes ou depois do elemento selecionado atualmente.
*/