import calcula from 'readline-sync' //importa o readline-sync pro projeto

console.log("Aplicação de Juros: \n"); //informação sobre a aplicação

let divida = calcula.question('Informa o valor devido: R$ '); //solicita e guarda o valor da divida
let atraso = calcula.question('Informe quantos dias se passaram desde o vencimento do boleto: '); //solicita e guarda quantos dias de atraso tem o boleto
let juros = null; //guardará o valor do juros proporcional ao tempo de atraso

if(atraso >= 15){ //caso o tempo de atraso for maior ou igual a 15 será cobrado 10% de juros sobre o valor da divida
    juros = 10
}
else{ //caso contrário será cobrado 5% de juros sobre o valor da divida
    juros = 5
}

let total = Number((juros/100)*divida) + Number(divida); //irá realizar o calculo do juros com o valor da divida

console.log('\nValor original da dívida: R$' + divida); //imprimi o valor da divida atual
console.log('Dias atrasados: ' + atraso); //imprimi a quantidade de dias em atraso
console.log('Taxa de Juros: ' + juros + '%'); //informa qual a porcentagem de juros será cobrada
console.log('Valor total com juros: R$ ' + total); //imprime o resultado total