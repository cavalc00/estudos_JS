/* Um ambiente de hospedagem da JavaScript possui, nativamente instalado, um interpretador da linguagem. Toda vez que se inicia um desses ambientes, ele cria um objeto global contendo todas as propriedades e métodos da linguagem e do ambiente de hospedagem.*/

/* Um exemplo de ambiente de hospedagem é o navegador web, assim que iniciado ele cria seu objeto global, que no caso do navegador é o objeto window, fora do escopo de qualquer função window também pode ser referenciado pela palavra this. */

var MeuObj = {
     x: 65,
     y: 123

}

console.log("x" in MeuObj? MeuObj.x : "nop") // O operador in serve para procurar uma propriedade detro de algum objeto, o valor a ser passado deve ser uma string ou uma expressão que retorne uma string;

