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

document.write(`<p>Números: ${num}</p>`);
document.write(`<p>Maior número: ${numMaior}</p>`);
document.write(`<p>Menor número: ${numMenor}</p>`);