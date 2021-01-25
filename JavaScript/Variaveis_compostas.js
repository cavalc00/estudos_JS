/* Uma variavel composta nada mais é do que um array(vetor) abaixo um exemplo como se trabalha em js com esse tipo de variavel.em POO array são variaveis do tipo objeto *//* dentro de um vetor podem ser gravadas variaveis de tipos diferente, inclusive outros vetores */


var vetorExemplo = [3, 5]; /* Um vetor em js pode ser declarado assim, e já iniciado em sua declaração ou colocado elementos dinamicamente dentro dele */
var vetorDentro = [1, 'dentro', 4.56]; /* Um vetor com 3 tipos diferentes de dados */
var vetorOrganizar = [2, 1, 5, 654, 1, 7, 67, 98];

vetorExemplo[0] = 2; /* numero 2 foi gravado em cima do numero alocado na posição do vetor de indice 0 */
vetorExemplo.push('merda'); /* Metodo de vetores que adiciona um elemento ao vetor e o coloca em ultima posição */
console.log(vetorExemplo.length); /* retona o tamanho do vetor em um numero inteiro. Length não é uma função, mas sim uma propriedade de arrays  */

vetorExemplo.push(vetorDentro); /* Aqui adicionei o vetorDentro como na ultima posição do vetor exemplo */
console.log(vetorExemplo.indexOf('merda')); /* função de um array que retorna a posição do valor passado como argumento */

for(var c = 0; c < vetorExemplo.length; c++){ 
    console.log(`Indice de número ${c}, se encontra o valor ${vetorExemplo[c]}`);
}

console.log(typeof vetorExemplo[3]) /* typeof é um operador que retorna uma string informando o tipo do elemento a sua frente. Pode ser escrito com ou sem parentes */

vetorOrganizar.sort(function compararNumeros(a, b){return a-b;}) /* Função sort para organizar elementos em forma crescente ou decrescente, dependendo do resultado da função interna */
console.log(vetorOrganizar);

