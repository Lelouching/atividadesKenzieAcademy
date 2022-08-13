//let a   = parseInt(prompt("Insira um valor para A"));
//let b   = parseInt(prompt("Insira um valor para B"));
//let aux = 0;

//aux = a;
//a = b;
//b = aux;
//alert(`Os valores originais de ${b}, ${a}. Após a troca são: ${a} e ${b}`);

//let number = 5.555;

//alert(`O ${number.toFixed(2)}`);

//let number1 = 5;
//let number2 = 6;
//let number3 = 10;

//alert(number1 + number2 + number3);

//let nota1 = 10;
//let nota2 = 8;

//alert(`A média anual é: ${(nota1 + nota2) / 2}`);

let quiloWatts      = 100;
let salarioMinimo   = 1200;
let valorQuiloWatts = salarioMinimo / 7;
let valorPorWatts   = valorQuiloWatts / quiloWatts;
let desconto        = valorQuiloWatts - (valorQuiloWatts / 10);

alert(`O valor de cada quiloWatts: R$ ${valorPorWatts.toFixed(2)} e o valor de 100 QuiloWatts: R$ ${valorQuiloWatts.toFixed(1)}
e se a residência for nova, o valor será de R$ ${desconto.toFixed(1)}`)