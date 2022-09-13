let pessoa = {
    nome: "clara",
    anoNascimento: 1996,
    nomeDeUsuario: "CLARA_GOMES",
    temCarro: true,
    valeCombustivel: "R$ 0,00",
    distanciaDoTrabalho: "120km",
    endereco: []
}

function qualIdade(listaPessoa) {
    let idade = 2022 - listaPessoa.anoNascimento

    return `A idade de ${listaPessoa.nome} é ${idade} anos`
}

console.log(qualIdade(pessoa))

function normalizaDado(listaPessoa) {

    let primeiraLetra = listaPessoa.nome.at(0)

    return `A primeira letra em maiúsculo de ${listaPessoa.nome} é: ${primeiraLetra.toUpperCase()}`
}

console.log(normalizaDado(pessoa))

function criandoListaDeUsuarios(listaPessoa) {

    let listaDeUsuario = []

    listaDeUsuario.push(listaPessoa)

    for(let i = 0; i < listaDeUsuario.length; i++) {
        listaDeUsuario[i].nomeDeUsuario = listaDeUsuario[i].nomeDeUsuario.toLowerCase()
    }

    return listaDeUsuario

}

console.log(criandoListaDeUsuarios(pessoa))

function direitoVale(listaPessoa) {

    let enderecoPessoa = {
        cidade: 'Curitiba',
        logradouro: 'Rua Dali',
        numero: 10,
        tipo:[]
    }

    listaPessoa.endereco.push(enderecoPessoa)

    if(listaPessoa.temCarro == true) {
        let distanciaTrabalho = parseInt(listaPessoa.distanciaDoTrabalho)
        let valorVale = (distanciaTrabalho * 6.99) * 0.7
        listaPessoa.valeCombustivel = `R$ ${valorVale}`
    }
    
}

direitoVale(pessoa)

function adicionarTipo(listaPessoa){

    for(let i = 0; i < listaPessoa.endereco.length; i++) {
        let tipo = listaPessoa.endereco[i]
        tipo.tipo = "Casa"
    }
    
}

adicionarTipo(pessoa)