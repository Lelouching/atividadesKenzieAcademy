// const tiposDiversos =[1.5,"String",false,10];
// const tiposDiversos2 =[true,"String","boolean",'10'];

// function qualTipo(lista) {
//     for(let i = 0; i < lista.length; i++) {
//         let contagem = lista[i];
//         if (typeof contagem === "number") {
//             return true
//         } else {
//             return false
//         }
//     }

// }

// console.log(qualTipo(tiposDiversos));
// console.log(qualTipo(tiposDiversos2));

let nomes = ["passageiro1", "passageiro2", "passageiro3"];

function assento(ganhador) {
    let random = Math.floor(Math.random() * (4 - 1) + 1);
    let numero = random - 1;
    return ganhador[numero]
}

console.log(assento(nomes))