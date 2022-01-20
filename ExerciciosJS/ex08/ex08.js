/* 8. Crie um script que gere o fatorial de um número. Ex: 3! = 3x2x1 = 6 */

var num = parseInt(prompt('Digite um número para calcular o fatorial: '));
var fatorial = num;

document.write(`<h1>Fatorial de ${num}</h1><p>${num}! = ${num}`);
for (var i=num-1; i>0; i--) {
    fatorial *= i;
    document.write(` * ${i}`);
}
document.write(` = ${fatorial}</p>`);