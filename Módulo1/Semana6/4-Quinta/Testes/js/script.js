const body = document.querySelector("body")

const card = document.createElement("div")

card.id = "div_card"

body.appendChild(card)

const container_photo = document.createElement("div")

container_photo.id = "div_photo"

const container_describe = document.createElement("div")

container_describe.id = "div_describe"

card.appendChild(container_photo)
card.appendChild(container_describe)

const text = document.createElement("p")

text.id = "p_text"

text.innerText = "Funcionário em treinamento"

container_describe.appendChild(text)