function passos(quantidadePassos) {

    let i = 1;
    let correcao = quantidadePassos + 1;

    if (quantidadePassos <= 0) {
        alert("Você não pode colocar 0 ou números negativos")
    }
    while (i < correcao) {
        console.log(`Visitei a casa: ${i}°`)
        i++
    }
}

passos(12)