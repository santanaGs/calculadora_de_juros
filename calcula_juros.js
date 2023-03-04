import calcula from 'readline-sync'

console.log("Aplicação de Juros: \n");

let divida = calcula.question('Informa o valor devido: R$ ');
let atraso = calcula.question('Informe quantos dias se passaram desde o vencimento do boleto: ');
let juros = null;

if(atraso >= 15){
    juros = 10
}
else{
    juros = 5
}

let total = Number((juros/100)*divida) + Number(divida);

console.log('\nValor original da dívida: R$' + divida);
console.log('Dias atrasados: ' + atraso);
console.log('Taxa de Juros: ' + juros + '%');
console.log('Valor total com juros: R$ ' + total);