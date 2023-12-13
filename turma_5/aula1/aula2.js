const notaAlunos = [5.6, 9, 8, 7, 1, 8.5, 7, 10, 1.5]

/* 
      0   1  2 3 4 ...
    [6.8, 5, 9 ...]
*/

/* notaAlunos.push(5)
notaAlunos.push(9)

console.log(notaAlunos[1])

notaAlunos.push(6, 8, 10, 4)

console.log(notaAlunos)

notaAlunos.pop()

console.log(notaAlunos) */

/* find */

/* const nota = notaAlunos.find(
    (value) => {
        if(value < 6) {
            return  true;
        } else {
            return false;
        }
    }
    )

console.log(nota) */

/* filter */

/* const notas = notaAlunos.filter(
    (value) => {
        return value > 6; true/false
    }
)

console.log(notas)
console.log(notaAlunos) */

/* map */

/* const alunos = notaAlunos.map(
    (nota) => {
        return nota >= 6 ? "Aprovado" : "Reprovado";
    }
)

console.log(alunos)
console.log(notaAlunos) */

/* foreach */

/* notaAlunos.forEach(
    (nota) => {
        if(nota >= 6){
            console.log("Aprovado")
        } else {
            console.log("Reprovado")
        }
    }
) */

/* Loop */
/* let i = 10
while(i > 0){
    console.log(i)
    // i = i - 1;
    // i -= 1;
    i--;
} */

/* for(let i = 0; i < 10; i++){
    console.log(i)
} */

/* for(let i = 0; i < notaAlunos.length; i++){
    console.log(notaAlunos[i])
} */

