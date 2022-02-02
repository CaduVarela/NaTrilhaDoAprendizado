var vetor = [4, 8, 7, 6];

//alert(vetor);
//alert(vetor[1]);
vetor[2] = 3;
//alert(vetor);
var soma = vetor[0] + vetor[3];
//alert(soma);

var lista = ['Juquinha', 1910, 'Rua A', 'Irati', 'PR', 80.5];
//alert(lista[0]);

for (var i=0; i<lista.length; i++) {
    document.write(`<p style="margin: 0;">${lista[i]}</p>`);
}
lista.push('84500-000'); // push insere um elemento na última posição do array
lista.push('teste');
//alert(lista);
lista.pop(); // remover o último elemento da lista
//alert(lista);
lista.shift();
a//lert(lista);
lista.unshift('Zequinha');
//alert(lista);

var posicao;
posicao = lista.indexOf('Irati');
alert(posicao);