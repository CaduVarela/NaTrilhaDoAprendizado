var numDiaSemana = prompt('Digite um número correspondente a um dia da semana (entre 1 e 7): ');
var dia;

switch (parseInt(numDiaSemana)) {
    case 1: 
        dia = 'Domingo';
        break;
    case 2: 
        dia = 'Segunda-feira';
        break;
    case 3: 
        dia = 'Terça-feira';
        break;
    case 4: 
        dia = 'Quarta-feira';
        break;
    case 5: 
        dia = 'Quinta-feira';
        break;
    case 6: 
        dia = 'Sexta-feira';
        break;
    case 7: 
        dia = 'Sabado';
        break;
    default:
        alert ('O número digitado não está entre 1 e 7!!!');
}

if (dia != null) {
    alert('O dia da semana correspondente a '+numDiaSemana+' é '+dia);
}