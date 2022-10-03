const funcionarios = [
    {
     nome: "Jorge",
     setor: "Marketing",
     salario: 2200
    },
    {
     nome: "Ana",
     setor: "TI",
     salario: 6100
    },
    {
     nome: "Emanoel",
     setor: "Design",
     salario: 5200
    },
    {
     nome: "Maria",
     setor: "TI",
     salario: 8500
    },
    {
     nome: "Cleiton",
     setor: "Em treinamento",
     salario: 1100
    },
 ]

const map = funcionarios.map((data) => {data.salario = data.salario * 1.01; return data})

console.log(map)