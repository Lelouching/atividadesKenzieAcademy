function calculaIdade(anoNascimento) {
    let idade = 2022 - parseInt(anoNascimento);
    return idade;
}

console.log(calculaIdade(2000));

function calculaDiferencaAno(anoInicial, anoFinal) {
    let diferencaAno = anoFinal - anoInicial;
    return diferencaAno;
}

console.log(calculaDiferencaAno(2000, 3000));

function valorAPagar(quantidade) {
    let maca = 1.30 * quantidade;
    if (quantidade >= 12) {
        maca = 1 * quantidade;
    }
    return maca;
}

console.log(valorAPagar(11));

function calculaValorSalario(salarioFuncionario, vendaTotalFuncionario) {
    if (vendaTotalFuncionario <= 1500) {
        return salarioFuncionario + vendaTotalFuncionario * 0.03;
    } else if (vendaTotalFuncionario > 1500) {
        return salarioFuncionario + vendaTotalFuncionario * 0.05;
    }
}

console.log(calculaValorSalario(1200, 1800));

let notas = [5, 7, 10, 3, 9, 5, 5, 2, 1, 9, 8, 3, 4, 6, 7, 6, 7, 8, 10, 7];

function notaDaPosicao(lista, posicao) {
    let i = 0; i = lista.length
    for( ) {

    }
}

notaDaPosicao(notas, 2)