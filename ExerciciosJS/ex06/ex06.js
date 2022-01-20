/* 6. Crie um script que leia 5 números e diga qual é o maior e qual o menor. */

var num = Array(5);
var numMenor, numMaior;

for (var i=0; i<5; i++) {
    num[i] = parseFloat(prompt('Digite um número: '));
    console.log(i);
    if (i==0) {
        numMaior = num[i];
        numMenor = num[i];
    } else {
        if (num[i] < numMenor) {
            numMenor = num[i];
        } else if (num[i] > numMaior) {
            numMaior = num[i];
        }
    }
}

document.write(`<p><span class="negrito">Números</span>: ${num}</p>`);
document.write(`<p><span class="negrito">Maior número</span>: ${numMaior}</p>`);
document.write(`<p><span class="negrito">Menor número</span>: ${numMenor}</p>`);