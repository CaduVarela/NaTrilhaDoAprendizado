/* Fazer um programa que exiba se um valor é maior que outro */

var n1, n2;

n1 = prompt('Informe um valor para n1');
n2 = prompt('Informe um valor para n2');

if (n1 < n2) {
    alert(n1+' é menor que '+n2);
    console.log(n1+' é menor que '+n2);
} else if (n1 > n2) {
    alert(n1+' é maior que '+n2);
    console.log(n1+' é maior que '+n2);
} else {
    alert(n1+' é igual '+n2);
    console.log(n1+' é igual a '+n2);
}

console.log('Código Javascript finalizado!');