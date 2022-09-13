const button   = document.querySelector("button")
const somar    = document.querySelector("p")

let contador = 0

function adicionarMaisUm() {

    contador++
    somar.innerText = contador
}

button.addEventListener("click", adicionarMaisUm)