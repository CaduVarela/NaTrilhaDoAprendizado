/* 
7. Elabore um script em que seja possível entrar com dados de idade e sexo de 5
pessoas. Exiba:
    a. Quantas pessoas são do sexo masculino e quantas pessoas são do sexo
    feminino.
    b. Quantas pessoas são maiores e menores de idade
    c. Qual o homem mais velho e mais novo
    d. Qual a mulher mais velha e mais nova
    e. Quantos homens e quantas mulheres são maiores de idade.
*/

var pessoa = [];
var numMulheres=0, numHomens=0, numPessoasMaiorIdade=0, numPessoasMenorIdade=0, maisVelho = 'nenhum', maisNovo = 'nenhum', maisVelha = 'nenhuma', maisNova = 'nenhuma', numHomensMaiorIdade=0, numMulheresMaiorIdade=0;

for (var i=0; i<5; i++) {
    pessoa[i] = new Pessoa();
    pessoa[i].id = i;
    pessoa[i].idade = parseInt(prompt(`Digite a idade da pessoa ${i+1}: `));
    pessoa[i].sexo = prompt(`Digite o sexo da pessoa ${i+1}: \n(Use "M" para Masculino e "F" para Feminino)`).toLowerCase();
}

for (var i=0; i<pessoa.length; i++) {
    if (pessoa[i].sexo == 'm') {
        numHomens++;

        if (maisNovo == 'nenhum' || pessoa[i].idade < maisNovo.idade) {
            maisNovo = pessoa[i];
        }
        
        if (maisVelho == 'nenhum' || pessoa[i].idade > maisVelho.idade) {
            maisVelho = pessoa[i];
        }

        if (pessoa[i].idade >= 18) {
            numPessoasMaiorIdade++;
            numHomensMaiorIdade++;
        } else {
            numPessoasMenorIdade++;
        }
    } 
    
    else if (pessoa[i].sexo == 'f') {
        numMulheres++;

        if (maisNova  == 'nenhuma' || pessoa[i].idade < maisNova.idade) {
            maisNova = pessoa[i];
        }
        
        if (maisVelha == 'nenhuma' || pessoa[i].idade > maisVelha.idade) {
            maisVelha = pessoa[i];
        }

        if (pessoa[i].idade >= 18) {
            numPessoasMaiorIdade++;
            numMulheresMaiorIdade++;
        } else {
            numPessoasMenorIdade++;
        }
    }
}

document.write('<h1>Pessoas</h1>');
for (var i=0; i<pessoa.length; i++) {
    document.write(`<div class="pessoa"><h2>Pessoa ${i+1}</h2><p><span class="negrito">id</span>: ${pessoa[i].id}</p><p><span class="negrito">idade</span>: ${pessoa[i].idade}</p><p><span class="negrito">sexo</span>: ' ${pessoa[i].sexo} '</p></div>`);
}

document.write('<h1>Outras Informações</h1>');
document.write(`<ul><li><p><span class="negrito">Pessoas do sexo masculino</span>: ${numHomens}</p></li>`)
document.write(`<li><p><span class="negrito">Pessoas do sexo feminino</span>: ${numMulheres}</p></li>`);
document.write(`<li><p><span class="negrito">Pessoas maiores de idade</span>: ${numPessoasMaiorIdade}</p></li>`)
document.write(`<li><p><span class="negrito">Pessoas menores de idade</span>: ${numPessoasMenorIdade}</p></li>`);
// Se não houverem homens geraria um problema
if (numHomens == 0) {
    document.write(`<li><p><span class="negrito">Homem mais velho</span>: não há homens</p></li>`);
    document.write(`<li><p><span class="negrito">Homem mais novo</span>: não há homens</p></li>`);
} else {
    document.write(`<li><p><span class="negrito">Homem mais velho</span>: Pessoa ${maisVelho.id+1} (id: ${maisVelho.id})</p></li>`);
    document.write(`<li><p><span class="negrito">Homem mais novo</span>: Pessoa ${maisNovo.id+1} (id: ${maisNovo.id})</p></li>`);
}
// Se não houverem mulheres geraria um problema
if (numMulheres == 0) {
    document.write(`<li><p><span class="negrito">Mulher mais velha</span>: não há mulheres</p></li>`);
    document.write(`<li><p><span class="negrito">Mulher mais nova</span>: não há mulheres</p></li>`);
} else {
    document.write(`<li><p><span class="negrito">Mulher mais velha</span>: Pessoa ${maisVelha.id+1} (id: ${maisVelha.id})</p></li>`);
    document.write(`<li><p><span class="negrito">Mulher mais nova</span>: Pessoa ${maisNova.id+1} (id: ${maisNova.id})</p></li>`);
}
document.write(`<li><p><span class="negrito">Homens maior de idade</span>: ${numHomensMaiorIdade}</p></li>`);
document.write(`<li><p><span class="negrito">Mulheres maior de idade</span>: ${numMulheresMaiorIdade}</p></li></ul>`);

function Pessoa () {
    var id, idade, sexo;
}