type iType = "sum" | "sub"
let phrase = "Valor: "

const operation = (a: number, b: number, operationType: iType) => {
    if(operationType === "sum") {
        return `${phrase} ${a + b}`
    } else if(operationType === "sub") {
        return `${phrase} ${a - b}`
    }
}

console.log(operation(14, 25, "sum"))

const teste = (): number => {
    return 5;
    // return "a" esse tipo de retorno vai dar erro, já que tem que ser um número
}

const fruitList = [] as string[]

fruitList.push("a")
// fruitList.push(2) aqui já dá erro pq tem q ser um array de string

interface iPet{
    petName: string,
    age: number,
    color: string
}

interface iPerson{
    name: string,
    age: number,
    pet?: iPet
}

// o pet é opicional, caso a pessoa não queria colocar ou não tenha, só colocar name e age

const me: iPerson = {
    name: "John",
    age: 19,
    pet: {
        petName: "Spyke",
        age: 2,
        color: "brown"
    }
}

const friend: iPerson = {
    name: "Lelou",
    age: 17
}

let anything: string | number

anything = "a"
anything = 1