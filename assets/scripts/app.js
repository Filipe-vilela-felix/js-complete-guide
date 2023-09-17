const defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';

outputResult(currentResult, calculationDescription);

/*
VARIÁVEIS E CONSTANTES:
    Uma variável é um contêiner para armazenar dados. 
    Uma constante é semelhante a uma variável, exceto que não pode ser alterada depois de ser declarada. 
    Embora a variável currentresult receba uma constante, na linha 4 ela é reatribuída atrávés de uma nova expressão.

NOMEANDO VARIÁVEIS:
    Permitido:
        let userName -> camelCase (melhor prática);
        let ageGroup5 -> Apenas letras e dígitos;
        let $kindOfSpecial -> Começando com "$" é permitido;
        let _intervalName -> Começando com "_" é permitido;
    
    Não permitido/Não recomendado:
        let user_name -> Permitdo, mas não é uma boa prática;
        let 21Players -> Começar com digitos não é permitido;
        let user-b -> Sem caracteres especiais;
        let let -> Palavras-chave não é permitido;
*/