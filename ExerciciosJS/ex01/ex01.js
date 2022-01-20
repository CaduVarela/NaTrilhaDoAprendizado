/* 1. Crie um script em que seja possível digitar a temperatura em Celsius, e seja exibida a
temperatura convertida em Fahrenheit e Kelvin */

var celsius = parseFloat(prompt('Digite uma temperatura em graus Celsius: ', 0));
if (!celsius) {
    celsius = 0;
}
var kelvin = celsius + 273;
var fahrenheit = 9*celsius/5 + 32;

alert(`A temperatura de ${celsius}°C em Kelvin é ${kelvin}K`);
alert(`A temperatura de ${celsius}°C em Fahrenheit é ${fahrenheit}°F`);
document.write(`<h1>${celsius}C = ${kelvin}K = ${fahrenheit}F</h1>`);