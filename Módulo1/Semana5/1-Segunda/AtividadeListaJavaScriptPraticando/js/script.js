let numeros = [93, -81, -47, -65, -30, 7, 4, -72, -7, -46, 11];

function numerosNegativos(array) {

    let numerosNegativos = [];

    for(let i = 1; i < array.length; i++) {
        if (array[i] < 0) {
            numerosNegativos.push(array[i])
        }
    }
    return console.log(numerosNegativos.length)

}

numerosNegativos(numeros)

function somaNumerosNegativos(array) {

    let numerosNegativos = [];
    let somaNumerosNegativos = 0;

    for(let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            numerosNegativos.push(array[i])
        }
    }
    for(let i = 0; i < numerosNegativos.length; i++) {
        somaNumerosNegativos += numerosNegativos[i]
    }
    return console.log(somaNumerosNegativos)
}

somaNumerosNegativos(numeros)

function numerosNegativosPares(qualquerNumero) {

    let numerosNegativosPares = [];

    for(let i = 0; i >= qualquerNumero; i--) {
        if (i % 2 === 0 && i < 0) {
            numerosNegativosPares.push(i)
        }
    }
    return console.log(numerosNegativosPares)
}

numerosNegativosPares(-20)

function retornarNumeroNegativo(array) {

    let numerosNegativos = [];

    for(let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            numerosNegativos.push(array[i])
        }
    }
    return console.log(numerosNegativos)
}

retornarNumeroNegativo(numeros)

function somaElementos(array) {
    let somaNumeros = 0;

    for(let i = 0; i < array.length; i++) {
        somaNumeros += array[i]
    }
    if (somaNumeros > array.length) {
        return true
    } else {
        return false
    }
}

somaElementos(numeros)

function somaMaisCinco(array) {

    let somaDosNumeros = [];

    for(let i = 0; i < array.length; i++) {
        let somarNumeros = array[i] + 5
        somaDosNumeros.push(somarNumeros)
    }
    return console.log(somaDosNumeros)
}

somaMaisCinco(numeros)

function mediaValores(array) {

    let somaNumeros = 0;

    for(let i = 0; i < array.length; i++) {
        somaNumeros += array[i]
    }

    let mediaNumeros =  somaNumeros / array.length + 1;
    let maiorQueMedia = [];

    for(let i = 0; i < array.length; i++) {
        if (array[i] > mediaNumeros) {
            maiorQueMedia.push(array[i])
        }
    }

    return console.log(maiorQueMedia)
}

mediaValores(numeros)

let string = "Abacate, abacaxi, ana, anaconda, ataque"
let stringComArray = ["Ana", "Abacate", "Abacaxi", "Anaconda", "Ataque"]

function QuantidadeA(stringVariante) {

    let quantidadeDosA = 1;

    for(let i = 0; i < stringVariante.length; i++) {
        if (stringVariante[i] === "a") {
            quantidadeDosA += 1
        }
    }
    return console.log(quantidadeDosA)
}

QuantidadeA(string)

function somaComprimentoStrings(stringArray) {

    let somaComprimento = 0;

    for(let i = 0; i < stringArray.length; i++) {
        let palavra = stringArray[i];
        somaComprimento += palavra.length
    }
    return somaComprimento
}

console.log(somaComprimentoStrings(stringComArray))