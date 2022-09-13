const container = document.getElementById("root")

const span = document.createElement("span")

span.innerText = "repetir e repetir..."

const ul = document.createElement("ul")
const li = document.createElement("li")

li.innerText = "repetir cada vez mais"

ul.appendChild(li)
container.appendChild(ul)

container.appendChild(span)