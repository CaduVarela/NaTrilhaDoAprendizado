/* 5. Crie um script que leia o primeiro termo, a razão e a quantidade de termos e gere uma
progressão geométrica */

var primeiroTermo = parseFloat(prompt('Digite o primeiro termo da prograssão aritimética: '));
var r = parseFloat(prompt('Digite a razão da prograssão aritimética: '));
var n = parseInt(prompt('Digite a quantidade de termos gerados pela progressão aritimética: '));
var termo = [];

for (var i=0; i<n; i++) {
    termo[i] = primeiroTermo + i * r;
}

document.write(`<p><span class="negrito">Progressão Aritimética</span>: ${termo[0]}`);
for (var i=1; i<termo.length; i++) {
    document.write(', '+termo[i]);
}
document.write('</p>');