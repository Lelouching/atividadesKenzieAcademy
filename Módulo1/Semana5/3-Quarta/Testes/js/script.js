function criarAluno(nome, idade, email, modulos) {

    let aluno = {
        nome: nome,
        idade: idade,
        email: email,
        modulos: modulos,
    }
    return aluno
}

let teste = [{
    nome: "Jhonata",
    idade: 18,
    módulo: "M1"
}, {
    nome: "Lothus",
    idade: 20,
    módulo: "M2"
}, {
    nome: "Yukino",
    idade: 15,
    módulo: "Nenhum"
}]

console.log(teste[2])

teste.push(
    criarAluno("Natália", 19, "aaaa@gmail.com", "M5")
)

console.log(teste)

const produto = {
    nome: "Camiseta",
    preco: 29.99,
    categorias: ["Esporte", " Casual"],
    tamanho: ["PP", " P", " M", " G", " GG"],
    estoque: true
}

function mostrarProduto(produto) {

    if(produto.estoque == true) {
        console.log(`Nome do produto: ${produto.nome}`)
        console.log(`Preço: ${produto.preco}`)
        console.log(`Categorias: ${produto.categorias}`)
        console.log(`Tamanhos: ${produto.tamanho}`)
    }
}

mostrarProduto(produto)