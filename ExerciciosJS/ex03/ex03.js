/* 3. Crie um script em que seja possível digitar 4 notas de um aluno calcule sua média e
converta para conceitos.
9 a 10 – Conceito A
8 a 8.9 – Conceito B
7 a 7.9 – Conceito C
Nota < 7 – Conceito D */

var nota = Array(4);
var total = 0, media, conceito;
console.log(nota);

for (var i=0; i<4; i++) {
    nota[i] = parseInt(prompt('Digite o valor da nota '+(i+1)+': ', 0));
    total += nota[i];
}
media = total / nota.length;

if (media >= 9 && media <= 10) {
    conceito = 'A';
} else if (media >= 8 && media < 9) {
    conceito = 'B';
} else if (media >= 7 && media < 8) {
    conceito = 'C';
} else if (media < 7) {
    conceito = 'D';
} else {
    alert('Algo de errado não está certo, valor de média menor que 0, maior que 10 ou valor de nota inválido!');
    conceito = 'indefinido';
}

document.write('<h1>Notas</h1>');
for (var i=0; i<4; i++) {
    document.write(`<p><span class="negrito">Nota ${i+1}</span>: ${nota[i]}</p>`);
}
document.write(`<p><span class="negrito">Media</span>: ${media}</p>`);
document.write(`<h2>Coceito ${conceito}</h2>`);