/* 5. Crie um script que leia o primeiro termo, a razão e a quantidade de termos e gere uma
progressão geométrica */

var primeiroTermo = parseFloat(prompt('Digite o primeiro termo da prograssão aritimética: '));
var n = parseInt(prompt('Digite a quantidade de termos gerados pela progressão aritimética: '));
var r = parseFloat(prompt('Digite a razão da prograssão aritimética: '));
var termo = [];

for (var i=0; i<n; i++) {
    termo[i] = primeiroTermo + i * r;
}

document.write(`<p>Progressão Aritimética: ${termo}</p>`);