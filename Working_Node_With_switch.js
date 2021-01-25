var data = new Date() //Criação do objeto data de tipo Date
var dataAtual = data.getDay(); //Chamada de metodo para capturar dia  da semana pelo sistema *Retorna em inteiro*

switch(dataAtual){  //Condicional switch, usar com valores fixos ou caracteres
    case 0:
        console.log('Domingo'); //Comando para escrever no console 
        break;
    case 1:
        console.log('Segunda-Feira');
        break;
    case 2:
        console.log('Terça-Feira');
        break;
    case 3:
        console.log('Quarta-Feira');
        break;
    case 4:
        console.log('Quinta-Feira'); 
        break;
    case 5:
        console.log('Sexta-Feira');
        break;
    case 6:
        console.log('Sábado');
        break;
    default:
        console.log('Valor inválido!');
        break;
}