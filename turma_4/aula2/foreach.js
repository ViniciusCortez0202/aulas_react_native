import { frutas } from "./frutas.js";

frutas.forEach((fruta, index) => {
    if (fruta.charAt(0) === 'a') {
        console.log({
            fruta, index
        })
    }
})

// for (let i = 0; i < frutas.length; i++) {
//     console.log({
//         fruta: frutas[i],
//         index: i
//     })
// }