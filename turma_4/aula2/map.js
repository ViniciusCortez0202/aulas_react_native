import { frutas } from "./frutas.js";

const resultado = frutas.map((fruta, index) => {
    return {
        fruta,
        index
    }
});

const resultado2 = frutas.map((fruta, index) => {
    if(index % 2 === 0){
        return {
            fruta,
            index
        }
    } else {
        return '';
    }
        
});

const resultado3 = frutas.map((fruta) => {
    return fruta.toUpperCase();
});

// console.log(resultado)
// console.log(resultado2)
console.log(resultado3)