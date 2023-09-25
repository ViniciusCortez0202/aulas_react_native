// Os objetos literais são uma maneira de agruparmos informações que têm uma relação lógica entre si
// no caso abaixo vemos o uso de um objeto literal pessoa, onde agrupamos informações de uma pessoa.
//É importante observar que um objeto literal é formado por um conjunto de chave e valor
// onde acessamos esse valores utilizando a: nomeDoObjetoLiteral.nomeDaChave

const pessoa = {
    nome: "Vinicius",
    altura: 1.8
}
const pessoa2 = {
    nome: "Jose",
    altura: 1.8
}
const pessoa3 = {
    nome: "Maria",
    altura: 1.8
}

const pessoa4 = pessoa;
pessoa4.nome = "mateus"

// console.log(pessoa)

// pessoa.nome = "Jose";
// pessoa.idade = 35;
// delete pessoa.altura
// console.log(pessoa)

const listaPessoas  = [pessoa, pessoa2, pessoa3];

console.log(listaPessoas)
