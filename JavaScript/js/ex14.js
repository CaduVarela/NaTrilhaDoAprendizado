function somar() {
    var n1, n2, resultado;

    n1 = parseInt(document.getElementById('inputNumber01').value);
    n2 = parseInt(document.getElementById('inputNumber02').value);
    resultado = n1 + n2;
    document.getElementById('divResultado').innerHTML = `${n1} + ${n2} = ${resultado}`;
}