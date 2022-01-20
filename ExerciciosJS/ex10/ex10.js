/* 10. Crie um script com um jogo em que o usuário digite seu nome e um valor e o
programa diga se acertou ou errou. Se o usuário errou deve ser dadas 3 dicas para
que ele tente acertar. Ex:
Digite seu nome: Fulano
Digite um numero : 1 . Fulano você errou o número está entre 2 e 10.
Digite um numero : 8 . Fulano você errou o número está entre 2 e 8.
Digite um numero : 5 . Fulano você errou o número está entre 5 e 8.
Digite um numero : 7 . Fulano você acertou.
Obs: Caso o usuário errasse a 4a vez deveria exibir uma mensagem dizendo
que ele errou e mostrar qual é o valor correto. */

var nome = prompt('Digite seu nome de usuário: ');
if (nome == null) { nome = 'Usuario' }
var randomFloor, randomCeiling, numDigitado, maiorNumeroPossivel = 20, acertou = false;
var randomNumber = Math.round(Math.random() * maiorNumeroPossivel)

// Tentativa 1 de 4
numDigitado = parseInt(prompt('Tente advinhar o número, você tem 4 tentativas: '));
if (numDigitado == randomNumber) {
    alert('Parabéns '+nome+', você acertou!!! O número era '+randomNumber+'');
    document.write('<h2>Parabéns '+nome+', você acertou!!! O número era '+randomNumber+'</h2>');
    acertou = true;
} else {
    randomFloor = Math.round(Math.random() * 4 + 5);
    randomCeiling = Math.round(Math.random() * 4 + 5);
    if (randomNumber - randomFloor < 0) {
        randomFloor = 0;
    }
    if (randomNumber + randomCeiling > maiorNumeroPossivel) {
        randomCeiling = 0;
    }
}

// Tentativa 2 de 4
if (acertou == false) {
    numDigitado = parseInt(prompt(`${nome}, você errou, o número está entre ${randomNumber - randomFloor} e ${randomNumber + randomCeiling}, você tem 3 tentativas: `));
    if (numDigitado == randomNumber) {
        alert('Parabéns '+nome+', você acertou!!! O número era '+randomNumber+'');
        document.write('<h2>Parabéns '+nome+', você acertou!!! O número era '+randomNumber+'</h2>');
        acertou = true;
    } else {
        randomFloor = Math.round(Math.random() * 4 + 3);
        randomCeiling = Math.round(Math.random() * 4 + 3);
        if (randomNumber - randomFloor < 0) {
            randomFloor = 0;
        }
        if (randomNumber + randomCeiling > maiorNumeroPossivel) {
            randomCeiling = 0;
        }
    }
}

// Tentativa 3 de 4
if (acertou == false) {
    numDigitado = parseInt(prompt(`${nome}, você errou, o número está entre ${randomNumber - randomFloor} e ${randomNumber + randomCeiling}, você tem 2 tentativas: `));
    if (numDigitado == randomNumber) {
        alert('Parabéns '+nome+', você acertou!!! O número era '+randomNumber+'');
        document.write('<h2>Parabéns '+nome+', você acertou!!! O número era '+randomNumber+'</h2>');
        acertou = true;
    } else {
        randomFloor = Math.round(Math.random() * 2 + 1);
        randomCeiling = Math.round(Math.random() * 2 + 1);
        if (randomNumber - randomFloor < 0) {
            randomFloor = 0;
        }
        if (randomNumber + randomCeiling > maiorNumeroPossivel) {
            randomCeiling = 0;
        }
    }
}

// Tentativa 4 de 4
if (acertou == false) {
    numDigitado = parseInt(prompt(`${nome}, você errou, o número está entre ${randomNumber - randomFloor} e ${randomNumber + randomCeiling}, você tem 1 tentativas: `));
    if (numDigitado == randomNumber) {
        alert('Parabéns '+nome+', você acertou!!! O número era '+randomNumber+'');
        document.write('<h2>Parabéns '+nome+', você acertou!!! O número era '+randomNumber+'</h2>');
        acertou = true;
    } else {
        alert('Que pena '+nome+', você errou em todas as tentativas. O número era '+randomNumber)
        document.write('<h2>Que pena '+nome+', você errou em todas as tentativas. O número era '+randomNumber+'</h2>')
    }
}