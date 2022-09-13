let element          = document.getElementsByClassName("container")[0]
let elementInfomacao = document.getElementsByClassName("infomacao")[0]

function teste(event) {
    let elementCapture = event.target.className

    if (elementCapture == "aqui_dispara") {
        if (elementInfomacao.children.length === 0) {
            elementInfomacao.innerHTML = "Sou um toggle"
        } else {
            elementInfomacao.innerHTML = ""
        }
    }
}

element.addEventListener("click", teste)