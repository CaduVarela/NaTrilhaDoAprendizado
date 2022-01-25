var n = parseInt(prompt('Digite um valor para gerar a tabuada:'));
var i;
var t;

for (i=0; i<11; i++) {
    t = n * i;
    document.write('<h2>'+n+' &times; '+i+' = '+t+'<h2>')
}