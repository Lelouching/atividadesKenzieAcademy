const carros = [
    {
    modelo:"Ka",
    marca:"Ford",
    ano:"2000",
    cor:"Branco",
    completo: false,
    acessorios: ['Vidro Elétrico'],
    preco: 'R$ 6.799,33'
    },
    {
    modelo:"Gol",
    marca:"VW",
    ano:"1996",
    cor:"Preto",
    completo: false,
    acessorios: ['Trava'],
    preco: 'R$ 12.199,13'
    },
    {
    modelo:"Palio",
    marca:"Fiat",
    ano:"1995",
    cor:"Verde",
    completo: false,
    acessorios: [],
    preco: 'R$ 11.099,11'
    },
    {
    modelo:"Monza",
    marca:"Chevrolet",
    ano:"1993",
    cor:"Vinho",
    completo: false,
    acessorios: [],
    preco: 'R$ 14.578,25'
    },
    {
    modelo:"Saveiro",
    marca:"VW",
    ano:"2013",
    cor:"Prata",
    completo: false,
    acessorios: [],
    preco: 'R$ 28.399,13'
    },
    {
    modelo:"Gol",
    marca:"VW",
    ano:"1996",
    cor:"Preto",
    completo: true,
    acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
    preco: 'R$ 14.350,45'
    },
    {
    modelo:"Gol",
    marca:"VW",
    ano:"2013",
    cor:"Preto",
    completo: true,
    acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
    preco: 'R$ 22.109,21'
    },
    {
    modelo:"Montana",
    marca:"Chevrolet",
    ano:"2011",
    cor:"Azul",
    completo: false,
    acessorios: [],
    preco: 'R$ 15.999,13'
    },
    {
    modelo:"Stilo",
    marca:"Fiat",
    ano:"2000",
    cor:"Preto",
    completo: false,
    acessorios: [],
    preco: 'R$ 17.251,36'
    }
  ]

function contaTotal(listaCarros){
    
    let quantidadeCarros = 0

    for(let i = 0; i < listaCarros.length; i++) {
        quantidadeCarros = i + 1
    }

    return `Tem: ${quantidadeCarros} carros no estoque`
}

console.log(contaTotal(carros))

function precoTotal(listaCarros){
    
    let somaValor = 0

    for(let i = 0; i < listaCarros.length; i++) {
        let precoCarro = parseFloat(listaCarros[i].preco.replace("R$ ", "").replace(".", "").replace(",", "."))
        somaValor += precoCarro
    }

    return `A soma do preço de todos veículos é R$ ${somaValor.toFixed(2)}`
}

console.log(precoTotal(carros))

function filtraPorMarca(marca, listaCarros){

    let carrosFiltrados = []
    
    for(let i = 0; i < listaCarros.length; i++) {
        if(marca == listaCarros[i].marca) {
            carrosFiltrados.push(listaCarros[i])
        }
    }

    return carrosFiltrados  
}

console.log(filtraPorMarca("VW", carros))

function filtraPorAcessorio(acessorios, listaCarros){

    let carrosFiltrados = []
    
    for(let i = 0; i < acessorios.length; i++) {
        for(let j = 0; j < listaCarros.length; j++) {
            for(let h = 0; h < listaCarros[j].acessorios.length; h++) {
                if (acessorios[i] == listaCarros[j].acessorios[h]) {
                    carrosFiltrados.push(listaCarros[j])
                }
            }
        }
    }

    return carrosFiltrados

}

console.log(filtraPorAcessorio(["Alarme"], carros))

function eCarroCompleto(listaCarros){
    
    let carrosFiltrados = []

    for(let i = 0; i < listaCarros.length; i++) {
        if(listaCarros[i].completo == true) {
            carrosFiltrados.push(listaCarros[i])
        }
    }

    return carrosFiltrados
}

console.log(eCarroCompleto(carros))

function adicionaCarro(modelo, marca, ano, cor, completo, acessorios, preco){
    
    let carroAdicionar = {
        modelo: modelo,
        marca: marca,
        ano: ano,
        cor: cor,
        completo: completo,
        acessorios: acessorios,
        preco: preco
    }

    carros.push(carroAdicionar)

}

adicionaCarro("Ferrari V8", "Frrari", "2018", "Vermelho", true, ["Alarme", "Trava", "Segurança Extra", "Rastreador"], "R$ 230.000,15")

function removeCarro(listaCarros, indice){

    let verificarIndice = false

    for(let i = 0; i < listaCarros.length; i++) {
        if(indice == i) {
            listaCarros.splice(i, 1)
            verificarIndice = true
        }
    }

    if (!verificarIndice) {
        return console.log("Esse índice não existe ou está incorreto")
    }

}

removeCarro(carros, 0)

function contaCarrosNovos(listaCarros){
    
    let carrosNovos = []

    for(let i = 0; i < listaCarros.length; i++) {
        let idadeCarro = 2022 - parseInt(listaCarros[i].ano)
        if (idadeCarro <= 10) {
            carrosNovos.push(listaCarros[i])
        }
    }
    
    return carrosNovos
}

console.log(contaCarrosNovos(carros))

function contaCarrosVelhos(listaCarros){
    
    let carrosVelhos = []

    for(let i = 0; i < listaCarros.length; i++) {
        let idadeCarro = 2022 - parseInt(listaCarros[i].ano)
        if (idadeCarro > 10) {
            carrosVelhos.push(listaCarros[i])
        }
    }

    return carrosVelhos
}

console.log(contaCarrosVelhos(carros))

function insereDono(list, position, person){
    
    list[position].antigoDono = person

}

insereDono(carros, 1, {nome: 'Jhon Dhoe', cpf: '122-133-144-55'})

console.log(carros[1])