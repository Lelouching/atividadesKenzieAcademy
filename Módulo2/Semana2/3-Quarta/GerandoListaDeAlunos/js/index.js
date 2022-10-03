const alunos = [
    {
     nome: "Felipe",
     nota: 9.2
    },
    {
     nome: "João",
     nota: 5.5
    },
    {
     nome: "Julia",
     nota: 8.2
    },
    {
     nome: "Maria",
     nota: 4.9
    },
    {
     nome: "Marcos",
     nota: 6
    },
 ]

const alunosFilter = alunos.filter((data) => data.nota >= 6)

console.log(alunosFilter)