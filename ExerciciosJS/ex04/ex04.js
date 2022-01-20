/* 4. Crie um script que gere a série de Fibonacci de acordo com o quantidade de elementos
que o usuário desejar */

var serieFibonaci = Array();

var n = parseInt(prompt('Digite a quantidade de elementos da série de Fibonacci a serem gerados: '));

for (var i=0; i<n; i++) {
    if (i==0 || i==1) {
        serieFibonaci.push(1);
    } else {
        serieFibonaci.push(serieFibonaci[i-1]+serieFibonaci[i-2]);
    }
}

document.write('<h1>Serie de Fibonacci gerada</h1><p>'+serieFibonaci[0]);
for (var i=1; i<serieFibonaci.length; i++) {
    document.write(`, ${serieFibonaci[i]}`);
}
document.write('</p>');