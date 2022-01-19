/* 2. Crie um script em que seja possível converter o valor digitado para dólar ou real de
acordo com a escolha do usuário */

var resposta = prompt('Para converter de real para dolar digite "1"\nPara converter de dolar para real digite "2"');
var valor = prompt('Digite o valor a ser convertido: ');
var valorConvertido;

// real --> dolar
if (resposta == 1) {
    valorConvertido = valor / 5.46;
    valorConvertido = valorConvertido.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2});
    alert(`O valor de BRL ${valor} equivale USA ${valorConvertido}`);
    document.write(`O valor de BRL ${valor} equivale USA ${valorConvertido}`);
}

// dolar --> real
else if (resposta == 2) {
    valorConvertido = valor * 5.46;
    valorConvertido = valorConvertido.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2});
    alert(`O valor de USA ${valor} equivale BRl ${valorConvertido}`);
    document.write(`O valor de USA ${valor} equivale BRL ${valorConvertido}`);
}

// resposta inválida
else {
    alert('Você digitou um valor/resposta inválido');
}
