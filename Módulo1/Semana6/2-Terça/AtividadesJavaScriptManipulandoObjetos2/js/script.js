const pessoa = {
    nome: "",
    anoDeNascimento: 0,
    cidade: "",

    criarPessoa(dados) {

        this.nome = dados.nome
        this.anoDeNascimento = dados.anoDeNascimento
        this.cidade = dados.cidade
        let idade = 2022 - this.anoDeNascimento

        return this
    },

    apresentar() {
        return `${this.nome} possui ${idade} anos de idade e atualmente está morando em ${this.cidade}.`
    }
}

pessoa.criarPessoa({nome: "João", anoDeNascimento: 2003, cidade: "João pessoa"})
pessoa.apresentar()

const elevador = {
    andarAtual: 0,
    totalDeAndares: 10,
    capacidadeDoElevador: 15,
    ocupacaoAtual: 7,

    entrar(elevador) {

        for(let i = elevador.ocupacaoAtual; i < elevador.capacidadeDoElevador; i++) {
            elevador.ocupacaoAtual++
        }
    },

    sair(elevador) {

        for(let i = elevador.ocupacaoAtual; i > 0; i--) {
            elevador.ocupacaoAtual -= 1
        }
    },

    subir(elevador) {

        for(let i = elevador.andarAtual; i < elevador.totalDeAndares; i++) {
            elevador.andarAtual += 1
            console.log(`Estamos no andar ${elevador.andarAtual}`)   
        }
        return console.log("Erro")
    },

    descer(elevador) {

        for(let i = elevador.andarAtual; i > 0; i--) {
            elevador.andarAtual -= 1
            console.log(`Estamos no andar: ${elevador.andarAtual}`)
        }

        return console.log("Estamos no térreo")
    }
}

elevador.entrar(elevador)
elevador.sair(elevador)
elevador.subir(elevador)
elevador.descer(elevador)