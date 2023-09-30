const palindromos = [
    "piano",
    "janela",
    "aba",
    "felicidade",
    "violino",
    "fruta",
    "nun",
    "radar",
    "osso",
    "tempo",
    "gato",
    "lua",
    "elefante",
    "ele",
    "computador",
    "pipoca",
    "solos",
    "ana",
    "ovo",
    "madam",
    "carro",
    "pop",
    "bolacha",
    "arara",
    "amor",
    "asa",
    "espelho",
    "sorriso",
    "cachorro"
];

function reverseString(str) {
    return str.split("").reverse().join("");
}

const resultado = palindromos.filter((palavra) => {
    return (palavra === reverseString(palavra))
});

console.log(resultado)