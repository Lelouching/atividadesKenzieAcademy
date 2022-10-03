function confirmAction() {
    let button = document.querySelectorAll(".button-toggle")
    for(let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", (event) => {
            document.querySelector(".div-body").classList.toggle("flex")
            event.preventDefault()
        })
    }
}

confirmAction()