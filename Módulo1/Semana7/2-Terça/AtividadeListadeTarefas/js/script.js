let listaTarefas = []

let botao      = document.getElementById("botao-submit")
let select     = document.getElementById("tipo")
let nomeTarefa = document.getElementById("titulo-tarefa")
let ul         = document.getElementsByClassName("ul-listas")[0]

function listaTarefasUsuario(event) {

    let selectValue = select.options[select.selectedIndex].value

    let envio = {
        nome: nomeTarefa.value,
        tipo: selectValue
    }

    listaTarefas.push(envio)

    adicionarTarefa(event)

    event.preventDefault()
    
}

function adicionarTarefa(event) {

        let li         = document.createElement("li")
        let div        = document.createElement("div")
        let spanStatus = document.createElement("span")
        let div2       = document.createElement("div")
        let spanNome   = document.createElement("span")
        let img        = document.createElement("img")

        if (listaTarefas.at(-1).tipo == "normal") {
            spanStatus.classList.add("status-green")
        } 
        else if (listaTarefas.at(-1).tipo == "prioritario") {
            spanStatus.classList.add("status-yellow")
        } 
        else if(listaTarefas.at(-1).tipo == "urgente") {
            spanStatus.classList.add("status-red")
        } 
        else {
            event.target.preventDefault()
        }

        if (listaTarefas.at(-1).nome == "") {
            event.target.preventDefault()
        }

        div.classList.add("posicao-status")
        div2.classList.add("div-li")
        spanNome.classList.add("nome-tarefa")
        img.classList.add("excluir")
        img.src            = "./asserts/img/download (1).png"
        img.alt            = "Excluir"
        img.id             = listaTarefas.at(-1).nome
        spanNome.innerText = listaTarefas.at(-1).nome


        ul.appendChild(li)
        li.appendChild(div)
        div.appendChild(spanStatus)
        li.appendChild(div2)
        div2.append(spanNome, img)

        event.preventDefault()
}

function remover() {

    let ul2 = document.querySelector(".ul-listas")
    ul2.addEventListener("click", (event) =>{
        if (event.target.tagName == "IMG") {
            for(let i = 0; i < listaTarefas.length; i++) {
                if (listaTarefas[i].nome == event.target.id) {
                    listaTarefas.splice(i, 1)
                    event.target.parentElement.parentElement.remove()
                }
            } 
        }
    })
}

remover()

botao.addEventListener("click", listaTarefasUsuario)