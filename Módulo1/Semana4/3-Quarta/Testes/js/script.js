// const fruits = ['banana', 'maça', 'abacate']

// let i = 0
// while (i < fruits.length) {
//     console.log(fruits[i]) //valorconsole.log(i) //índice
//     i = i + 1
// }

// const list = [ 'a' , 'b' , 'c' ]
// let i = 0
// do {
//     console.log(list[i]) //valorconsole.log(i) //índice
//     i = i + 1
// } while (i < list.length)

// para fazer com que conte de 3 em 3 até chegar -30
// for (let i = 9; i >= -30; i -= 3) {
//     console.log(i)
// } 

let nomes = ["John", "Jhonata", "Pedo"]

function nomesPessoas(random) {
    for(let i = 0; i < random.length; i++) {
        console.log(random[i])
    }
}

nomesPessoas(nomes)