//function valor(valor1, valor2) {
//    let valor = valor1 + valor2;
//    return valor
//}

//console.log(valor(15, 876))

//function boolean() {
//    if (typeof 37 === "NaN") {
//        alert("o número é um NaN")
//    } else {
//        alert("A número não é um NaN")
//    }

//    if (typeof 50 === "number") {
//        alert("O 50 é um \"number\"")
//    } else {
//        alert("O 50 é um \"number\"")
//    }
//    return boolean
//}

//boolean()

function somaNota(nota1, nota2, nota3, nota4) {
    let notas = nota1 || nota2 || nota3 || nota4;
    let somaNotas = nota1 + nota2 + nota3 + nota4;

    if (typeof notas !== "number") {
        alert("Você só pode colocar números");
    } else {
        return somaNotas;
    }
}

console.log(somaNota(5, 10, 20, 30))