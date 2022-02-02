// Função sem retorno
function somar(n1, n2) {
    let resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`);
}

// Função com retorno
function subtrair(n1, n2) {
    let resultado = n1 - n2;
    return resultado;
}

// Execução
somar(10,5);
alert('resultado subtrair: '+subtrair(10, 5));