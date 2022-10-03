const people1 = { 
    name: "samuel", 
    age: 23, 
    address: {
        city: "Rio de Janeiro",
        state: "RJ"
    }
}

const name2 = people1.name

console.log(name2)

const cityPeople = people1.address.city
const statePeople = people1.address.state

console.log(`Nome: ${name2}, Cidade: ${cityPeople}, Estado: ${statePeople}`)

const { name, address: {city, state} } = people1;

function descriptionPeople(people) {
    return `Meu nome é ${people.name}, tenho ${people.age} anos, 
    resido na cidade do ${people.address.city} no estado do ${people.address.state}`;
}

console.log(descriptionPeople(people1))

function descriptionPeople2({ name, age, address: {city, state }}) {
    return `Meu nome é ${name}, tenho ${age} anos, 
    resido na cidade do ${city} no estado do ${state}`;
}

console.log(descriptionPeople2(people1))

const ranking = ["Júlia", "Samuel", "Larissa", "Carlos"];

// const [firstPlace, secondPlace ] = ranking;

// const [secondPlace, firstPlace ] = ranking;
// resultado do secondPlace seria a primeira posição do array e do firstPlace a segunda posição.

const [secondPlace, firstPlace, ...rest ] = ranking;

console.log(`Primeiro Lugar: ${firstPlace}, Segundo Lugar: ${secondPlace}, Outros Participantes: ${rest}`)

// const [secondPlace, , thirdPlace, ...rest ] = ranking;
// Vamos visualizar no navegador da mesma forma, porém exibindo o valor da terceira posição.

// console.log(`Primeiro Lugar: ${firstPlace}, Terceiro Lugar: ${thirdPlace}, Outros Participantes: ${rest}`)