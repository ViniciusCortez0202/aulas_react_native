//No caso das funções temos três formas de criar elas
//as três formas estão descritas abaixo
//É importante observar que a forma como ela é criada não vai interferir nos seus resultados
//A função é criada para abstrair um código que se repete muito

// function soma(a, b){
//     return a + b;
// }
// function sub(a, b){
//     return a - b;
// }

// const soma = function(a, b){
//     return a + b;
// }
// const sub = function(a, b){
//     return a - b;
// }

// const soma = (a, b) => {
//     return a + b
// }
// const sub = (a, b) => a - b;

// function calculadora(a, b, op){
//     return op(a, b);
// }

// const sum = soma(10, 5);
// const dif = sub(20, sum);
// console.log(dif)

console.log( calculadora(10, 5, soma) );