/* Crie um script js em que o usuário entre com o ano de nascimento e também pergunte ao usuário se ele foi aprovado na prova prática de direção. Caso cumpram-se os requisitos o site deve retornar a informação de que ele está apto ou inapto para obter a CNH. Caso seja inapto, dizer em qual resito está reprovado. */

var data_nasc = prompt('Digite seu ano de nascimento: ');
var idade = new Date().getFullYear() - data_nasc;

console.log(idade);
if (idade >= 18) {
    var aprovado = prompt('Foi aprovado na prova prática de direção? ').toLowerCase;
    if (aprovado == 'sim' || aprovado == 's') {
        alert('Você pode receber o CNH, pois foi aprovado na prova prática de direção e tem idade suficiente! :)');
    } else {
        alert('Você não pode receber o CNH, pois não foi aprovado na prova prática de direção! :(');
    }
} else {
    alert('Você não tem idade suficiente');
}