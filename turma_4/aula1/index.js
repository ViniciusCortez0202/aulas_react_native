// Para declarar variáveis no JS (JavaScript) temos 3 maneiras utilizando palavras reservadas
// const: Você declara a variável e tem de atribuir um valor e esse valor não pode ser alterado
// var: É uma variável que pode ser utilizada dentro de todo um bloco de código
// let: É uma variável que NÃO pode ser utilizada dentro de todo um bloco de código

// const a = "Ola mundo";
// //a = "mundo ola"

// var b = 2.56;
// let c = 'c';

// console.log(a);
// console.log(b);
// console.log(c);

let a = 60;
const b = 40;
const c = 20;

//As instruções de condição são duas: o if e o operador ternário (?)
// No caso dessas instruções elas vão executar um bloco de código ou retornar algum valor 
// caso a expressão seja verdadeira ou falsa

// if(a > b){
//     console.log("a é maior que b");
// } else if(a == b){
//     console.log("a === b")
// } else {
//     console.log("b e maior que a");
// }

// const valor = a > b ? "a é maior que b" : "b e maior que a";
// const valor = a > b ? a : b;
// const valor = a > b ? true : false;
// const valor = a > b;
// console.log(valor)

//Os laços de repetição são instruções necessárias para não ficarmos repetindo código
//os dois principais laços são o while e o for
//O  while fica repetindo enquanto a expressão dentro dos parenteses for verdadeira
//Já o for tem um conjunto de três parâmetros, o primeiro você cria uma variável, o segundo a condição 
//e o terceiro o incremento

// while(a >= b){
//     console.log(a);
//     a = a - 1;
// }

// console.log("SAIU")

for(let i = 0; i < 10; i++){
    console.log(i);
}
// let i = 0;
// while(i < 10){
//     console.log(i);
//     i++;
// }

// do{
//     console.log(b);
// }while(b > a);