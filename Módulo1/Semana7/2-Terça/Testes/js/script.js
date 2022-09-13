let buttonToggle = document.querySelector(".button-toggle")
let body = document.querySelector("body")
let style = "dark-mode"

// buttonToggle.addEventListener("click", function(){
//     body.classList.contains(style) 
//     ? body.classList.remove(style) 
//     : body.classList.add(style)
// })

buttonToggle.addEventListener("click", function(){
    body.classList.toggle(style)
})