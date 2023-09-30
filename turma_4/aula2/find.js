import { frutas } from "./frutas.js";

const resultado = frutas.find((fruta) => {
    if(fruta === "kiwi"){
        return true;
    } else {
        return false;
    }
});

const resultado2 = frutas.find((fruta) => {
    if(fruta.charAt(0) === 'z'){
        return true;
    } else {
        return false;
    }
});

const resultado3 = frutas.find((fruta) => {
    if(fruta.charAt(0) === 'f'){
        return true;
    } else {
        return false;
    }
});

const resultado4 = frutas.find((fruta) => {
   
    return (fruta.charAt(0) === 'f');
});

const resultado5 = frutas.find((fruta) => (fruta.charAt(0) === 'f'));

console.log(resultado);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
console.log(resultado5);
