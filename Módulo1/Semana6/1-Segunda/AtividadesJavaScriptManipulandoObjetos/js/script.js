const listaAlunos = [
    {
        nome: 'João',
        curso: 'Ciencia da Computação',
        turno: 'Noturno',
        mediaCorte: 7,
        materias: [
            {
                nome: 'Calculo I',
                avaliacoes: [6, 8, 10, 8]
            },
            {
                nome: 'Pensamento Computacional',
                avaliacoes: [6, 8, 6, 8]
            },
            {
                nome: 'Linguagem Orientada a Objetos',
                avaliacoes: [7, 8, 9, 10]
            },
            {
                nome: 'Arquitetura de Organização de Computadores',
                avaliacoes: [6, 8, 7, 8]
            }
        ]
    },
]

function calculaMedia() {

    let nomeAluno = ""

    let statusCalculo = false
    let statusPensamento = false
    let statusLinguagem = false
    let statusArquitetura = false

    let somaCalculo = 0
    let somaPensamento = 0
    let somaLinguagem = 0
    let somaArquitetura = 0

    for(let i = 0; i < listaAlunos.length; i++) {
        let lista = listaAlunos[i]
        nomeAluno = lista.nome
        for(let j = 0; j < lista.materias.length; j++) {
            let materia = lista.materias[j]
            for(h = 0; h < materia.avaliacoes.length; h++) {
                let avaliar = materia.avaliacoes[h]
                if (materia.nome == 'Calculo I') {
                    somaCalculo += avaliar
                }
                else if (materia.nome == 'Pensamento Computacional') {
                    somaPensamento += avaliar
                }
                else if (materia.nome == 'Linguagem Orientada a Objetos') {
                    somaLinguagem += avaliar
                }
                else if (materia.nome == 'Arquitetura de Organização de Computadores') {
                    somaArquitetura += avaliar
                }
            }
        }
    }

    let mediaCalculo = somaCalculo / 4
    let mediaPensamento = somaPensamento / 4
    let mediaLinguagem = somaLinguagem / 4
    let mediaArquitetura = somaArquitetura / 4

    let materiasAprovadas = 0

    if (mediaCalculo >= 7) {
        statusCalculo = true
        materiasAprovadas += 1
    }
    if (mediaPensamento >= 7) {
        statusPensamento = true
        materiasAprovadas += 1
    }
    if (mediaLinguagem >= 7) {
        statusLinguagem = true
        materiasAprovadas += 1
    }
    if (mediaArquitetura >= 7) {
        statusArquitetura = true
        materiasAprovadas += 1
    }

    return `O status do aluno ${nomeAluno} nas matérias está: \nCalculo I: ${statusCalculo}\nPensamento Computacional: ${statusPensamento}\nLinguagem Orientada a Objetos: ${statusLinguagem}\nArquitetura de Organização de Computadores: ${statusArquitetura},\nou seja, foi aprovado em ${materiasAprovadas} matérias`

}

console.log(calculaMedia())