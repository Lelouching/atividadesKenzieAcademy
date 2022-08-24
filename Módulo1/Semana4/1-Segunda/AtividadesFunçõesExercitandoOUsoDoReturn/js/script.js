function somaNota(nota1, nota2, nota3, nota4) {
    let somaNotas = nota1 + nota2 + nota3 + nota4;
    return somaNotas;
}

function mediaNota(materias) {
    let media = somaNotas2 / materias;
    return media;
}

let somaNotas2 = somaNota(10, 8, 7, 5);
let mediaNota2 = mediaNota(4)

console.log(`A média do aluno Lothus é: ${mediaNota2}`)

function convertToCelsius(convert, temp) {
    if (convert == "Fahrenheit") {
        let convertFtoC = (temp-32) / 1.8;
        return convertFtoC;
    }
    if (convert == "Kelvin") {
        let convertKtoC = temp - 273;
        return convertKtoC;
    }
}

function convertToFahrenheit(convert, temp) {
    if (convert == "Celsius") {
        let convertCtoF = (temp-32) / 1.8;
        return convertCtoF;
    }
    if (convert == "Kelvin") {
        let convertKtoF = (temp-273) * 1.8 + 32;
        return convertKtoF;
    }
}

function convertToKelvin(convert, temp) {
    if (convert == "Celsius") {
        let convertCtoK = temp + 273;
        return convertCtoK;
    }
    if (convert == "Fahrenheit") {
        let convertFtoK = (temp-32) * 5/9 + 273;
        return convertFtoK;
    }
}

console.log(convertToCelsius("Fahrenheit", 100))