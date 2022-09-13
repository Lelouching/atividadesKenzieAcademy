const tagInput = document.createElement('input')

tagInput.placeholder = "Digite seu texto aqui"

const form = document.querySelector('form')

form.appendChild(tagInput)

const article = document.createElement("article")

const h1 = document.createElement("h1")

const p = document.createElement("p")

const a = document.createElement("a")

h1.innerText = "Título do Post"

p.innerText = "Descrição do Post"

a.innerText = "Ver post completo"

a.href = "https://www.google.com"

a.target = "blank_"

const body = document.querySelector("body")

body.appendChild(article)
article.appendChild(h1)
article.appendChild(p)
article.appendChild(a)