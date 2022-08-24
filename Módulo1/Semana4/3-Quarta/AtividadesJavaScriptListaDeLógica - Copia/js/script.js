let idade = parseInt(prompt("Qual a sua idade?"));

if (idade >= 18 ) {
    console.log("Você é maior de idade.")
} if (idade < 18 && idade > 0){
    console.log("Você é menor de idade.")
} if (idade < 0){
    console.log("Você não pode digitar um número negativo!")
} else {
    console.log("Você não digitou um número!")
}