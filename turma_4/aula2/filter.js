import { frutas } from "./frutas.js";

const resultado = frutas.filter((fruta) => {
    if(fruta === "kiwi"){
        return true;
    } else {
        return false;
    }
});

const resultado2 = frutas.filter((fruta) => {
    if(fruta.charAt(0) === 'z'){
        return true;
    } else {
        return false;
    }
});

const resultado3 = frutas.filter((fruta) => {
    if(fruta.charAt(0) === 'f'){
        return true;
    } else {
        return false;
    }
});

const resultado4 = frutas.filter((fruta) => {
   
    return (fruta.charAt(0) === 'f');
});

const resultado5 = frutas.filter((fruta) => (fruta.charAt(0) === 'f'));

const resultado6 = frutas.filter((fruta, index) => (index % 2 === 0));

console.log(resultado);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
console.log(resultado5);
console.log(resultado6);
