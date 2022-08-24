// for(inicio; condicao; incremento) {
//     //código
// }

// while(condicao) {
//     //código
//     incremento
// }

const produto = ["banana", "maçã", "uva"];
let indice = 0;

while(indice < produto.length) {

    console.log(produto[indice])
    indice++
}

console.log("Fim do while")

const codigo = parseInt(prompt("Digite o seu código aqui"))

while(codigo != 123) {
    alert("O seu código não está correto")
    parseInt(prompt("Digite o seu código aqui novamente"))
}

alert("Finalmente o código está correto")