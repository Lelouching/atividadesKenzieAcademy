const pessoa = {
    nome: "Marlena",
    idade: 22,
    cidade: "Juiz de Fora",
    andar: function () {
        console.log("Andou")
    },
    falar: function(){
        console.log("estou falando")
    }
}

pessoa.andar()
pessoa.falar()

const calculadora = {
    somar: function(valueA, valueB){
        return valueA + valueB;
    },
    subtrair: function(valueA, valueB){
        if(valueA > valueB){
            return valueA - valueB;
        }else{
            return valueB - valueA
        }
    },
    multiplicar: function(valueA, valueB){
        return valueA * valueB;
    }

}

calculadora.multiplicar(2,3)

calculadora.subtrair(9,10)

calculadora.subtrair(10,5)

calculadora.somar(5,5)