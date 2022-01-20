/* 9. Crie um script que diga se um número é múltiplo de 3 ou 7. */

var num = parseInt(prompt('Digite um número: '));

if (num%3==0 && num%7==0) {
    document.write(`<h2>${num} é múltiplo de 3 e 7.</h2>`);
} else if (num%3==0) {
    document.write(`<h2>${num} é múltiplo de 3.</h2>`);
} else if (num%7==0) {
    document.write(`<h2>${num} é múltiplo de 7.</h2>`);
} else {
    document.write(`<h2>${num} não é nem múltiplo de 3 nem de 7.</h2>`);
}