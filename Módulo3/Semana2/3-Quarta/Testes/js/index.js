let seriesPage = [
    {
        brooklyn: ['Brooklyn Nine-Nine', 'Brooklyn 99','Broklyn Nine-Nine', 'Broklyn 99']
    },
    {
        ck: ['CobraKai', 'Cobra Kai', 'Cobra Ca']
    },
    {
        rickmorty: ['Rick e Mortry', 'Rick and Mortry', 'Rick and More', 'Rick e More']
    },
    {
        st: ['Stranger Things']
    }
]

const button = document.querySelector(".button-teste")

button.addEventListener("click", () => {
    let pesquisa = "cobr"

    for (let j = 0; j < seriesPage[1].ck.length; j++) {
        let element = seriesPage[1].ck[j];
        let isTrue = element.toLowerCase().includes(pesquisa.toLowerCase())
        if(isTrue) {
            window.location.assign("../pages/teste/index.html")
        }
    }
})