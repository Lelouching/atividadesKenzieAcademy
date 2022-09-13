const alunoCurso = {
    nome: "João",
    idade: 31,
    curso: "FullStack",
    instituicao: "Kenzie Br",
    materias: ["Html", "Css", "JavaScript", "Python"],
    situacaoMatricula: true,
  };

function consulta() {

    let escolha = parseInt(prompt("Escolha um número de 1 à 4, com 1 sendo consultar os cursos que está fazendo, 2 consultar as matérias que está estudando, 3 consultar se está ativo ou inativo no curso e 4 para gerar sua carteirinha"))

    if(escolha < 1 || escolha > 4) {
        alert("Você só pode digitar número e que seja de 1 à 4.")
    } 
    else if (escolha === 1) {
        consultaCurso(alunoCurso)
    }
    else if (escolha === 2) {
        consultaMaterias(alunoCurso)
    }
    else if (escolha === 3) {
        consultaMatricula(alunoCurso)
    }
    else if (escolha === 4) {
        gerarCarteira(alunoCurso)
    }
}

consulta()

function consultaCurso(aluno) {
    return alert(aluno.curso)
}

function consultaMaterias(aluno) {
    return alert(aluno.materias)
}

function consultaMatricula(aluno) {
    if (aluno.situacaoMatricula == true) {
        return alert("Ativo")
    } else {
        return alert("Inativo")
    }
}

function gerarCarteira(aluno) {

    let nome = "";
    let idade = "";
    let curso = "";
    let instituicao = "";

    nome += aluno.nome
    idade += aluno.idade
    curso += aluno.curso
    instituicao += aluno.instituicao
    
    return alert(`Nome: ${nome}, idade: ${idade}, curso: ${curso} e instituição: ${instituicao}`)
}