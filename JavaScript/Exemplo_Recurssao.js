function fat(n){
    var count = n; //criada nova variavel para segurar o valor do parametro passado 
    if(count!=1){   // enquanto a variavel for diferente de 1 entrara no bloco de execução
        count--;    //decremento da variavel
        n *= fat(count); //chamando a propria função para multiplicar pelo numero que esta em n, só que agora com uma unidade a menos. E enquanto a variavel count for diferente de 1 esse bloco se repetira. Quando count chegar a 1, teremos o retorno de todas funções que ficaram esperando pelo caso base.
    }
    return n;
}

console.log(fat(6))