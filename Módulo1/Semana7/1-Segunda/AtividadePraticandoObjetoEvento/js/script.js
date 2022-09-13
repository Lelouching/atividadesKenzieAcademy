let produto = {
    nome: 'Notebook',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'
}

const body = document.querySelector("body")
const ul = document.createElement("ul")
const li = document.createElement("li")
const span = document.createElement("span")
const span1 = document.createElement("span")
const span2 = document.createElement("span")
const span3 = document.createElement("span")
const anchor = document.createElement("a")


span.innerText = produto.nome
li.appendChild(span)

span1.innerText = produto.valor
li.appendChild(span1)

span2.innerText = produto.liquidacao
li.appendChild(span2)

span3.innerText = produto.distribuidor
anchor.href = produto.distribuidor
anchor.appendChild(span3)
li.appendChild(anchor)

function anchorPrevent(event) {
    if(produto.liquidacao === true) {
        event.preventDefault()
    }
}

anchor.addEventListener("click", anchorPrevent)

function produtoValor (event) {

    let valorReal = produto.valor - produto.valor * 0.3

    alert(`O valor real do produto é: R$ ${valorReal.toFixed(2)}`)
}

span2.addEventListener("click", produtoValor)

ul.appendChild(li)
body.appendChild(ul)