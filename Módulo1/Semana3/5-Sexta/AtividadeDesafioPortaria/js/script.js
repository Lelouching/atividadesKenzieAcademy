let nome  = prompt("Seu nome?")
let idade = prompt("Sua idade?")

if (idade >= 18 ) {
    alert("Ok")
} else {
    alert(`Entrada não permitida para ${nome}:Menor de idade`)
}

let acompanhado = prompt("Está acompanhado?")

if (acompanhado == "n") {
    acompanhado = false

    if (acompanhado = false) {
        alert(`Desconto não concedido ${nome}`)
    }
} if (acompanhado == "s") {
    acompanhado = true

    if (acompanhado = true) {
        alert(`Desconto concedido ${nome}`)
    }
}