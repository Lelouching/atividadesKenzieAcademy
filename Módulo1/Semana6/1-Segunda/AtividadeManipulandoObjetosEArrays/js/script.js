const listDepartment = [
    {
      departamentName: 'Financial',
      employees:
      [
        {
          name: 'Rose',
          age: 26,
          responsibility: 'Financial director',
          salary: 5600
        },
        {
          name: 'Stevem',
          age: 32,
          responsibility: 'Financial manager',
          salary: 4200
        },
        {
          name: 'Beca',
          age: 26,
          responsibility: 'Financial analyst',
          salary: 2800
        }
      ],
      working: true
    },
    {
      departamentName: 'expedition',
      employees:
      [
        {
          name: 'Rooper',
          age: 35,
          responsibility: 'Expedition director',
          salary: 5600
        },
        {
          name: 'Maggie',
          age: 22,
          responsibility: 'Expedition manager',
          salary: 4200
        },
        {
          name: 'Thompson',
          age: 41,
          responsibility: 'Expedition analyst',
          salary: 2800
        }
      ],
      working: true
    },
    {
      departamentName: 'capitation',
      employees:
      [
        {
          name: 'Saory',
          age: 35,
          responsibility: 'Capitation director',
          salary: 5600
        },
        {
          name: 'Silvia',
          age: 22,
          responsibility: 'Capitation manager',
          salary: 4200
        },
        {
          name: 'Sonem',
          age: 41,
          responsibility: 'Capitation analyst',
          salary: 2800
        },
        {
          name: 'Havi',
          age: 41,
          responsibility: 'Trainee Capitation manager',
          salary: 1500
        },
        {
          name: 'Margie',
          age: 25,
          responsibility: 'Capitation analyst',
          salary: 2800
        },
        {
          name: 'Victoria',
          age: 18,
          responsibility: 'Trainee Capitation analyst',
          salary: 1500
        }
      ],
      working: false
    },
  ]

function howManyDepartments(lista) {
    
    for(let i = 0; i < lista.length; i++) {
        lista[i].departamentName
        console.log(`Existem: ${i + 1} departamentos`)
    }
}

howManyDepartments(listDepartment)

function ChangeDepartmentName(lista, nomeAtual, novoNome) {

    let auxiliar = false

    for(let i = 0; i < lista.length; i++) {
        if (lista[i].departamentName == nomeAtual) {
            lista[i].departamentName = novoNome
            auxiliar = true
        }
    }
    if (!auxiliar) {
        return "Nome não encontrado"
    }

    return "Nome mudado com sucesso"
    // array.includes

}

console.log(ChangeDepartmentName(listDepartment, "capitation", "Capitação"))

function giveTheDepartmentABreak(lista, departamento) {

    let auxiliar = false

    for(let i = 0; i < lista.length; i++) {
        for(let j = 0; j < departamento.length; j++){
            if (lista[i].departamentName == departamento[j]) {
                if (lista[i].working == true) {
                    lista[i].working = false
                } else {
                    lista[i].working = true
                }
                auxiliar = true
            }
        }
    }
    if (!auxiliar) {
        return console.log("Nome não encontrado")
    }
}

giveTheDepartmentABreak(listDepartment, ["Capitação", "expedition"])

function insertNewDepartament(atualizarLista, lista) {
    listDepartment.push(atualizarLista)
}

insertNewDepartament({departamentName: 'Marketing', employees: [], working: true}, listDepartment)

function inserNewEmployeeInDepartament(departamento, pessoa, lista) {

    for(let i = 0; i < lista.length; i++) {
        if (lista[i].departamentName == departamento) {
            lista[i].employees.push(pessoa)
        }
    }
}

inserNewEmployeeInDepartament( 'Financial', {name:'Rosemary', age:44, responsibility: 'Financial expedition director', salary: 15600}, listDepartment)

function howManyEmployeesInDepartament(departamento, lista) {

    let quantosEmployees = 0

    for(let i = 0; i < lista.length; i++) {
        for(let j = 0; j < lista[i].employees.length; j++) {
            if (departamento == lista[i].departamentName) {
                quantosEmployees = j + 1
            }
        }
    }

    let frase = `Tem ${quantosEmployees} funcionários no ${departamento}`

    return frase
}

console.log(howManyEmployeesInDepartament("expedition", listDepartment))

function departamentPayrollCalculation(departamento, lista) {

    let somaSalarios = 0
    let auxiliar = false

    for(let i = 0; i < lista.length; i++) {
        for(let j = 0; j < lista[i].employees.length; j++) {
            if (departamento == lista[i].departamentName) {
                somaSalarios += lista[i].employees[j].salary
                auxiliar = true
            }
        }
    }
    if (!auxiliar) {
        return console.log(`Nome ${departamento} não foi encontrado`)
    }

    return `Salário total do ${departamento} é de: ${somaSalarios}`
}

console.log(departamentPayrollCalculation("expedition", listDepartment))

function isTheDepartamentYoungOrOld(departamento, lista) {

  let somaIdade = 0
  let quantidadePessoas = 0
  let auxiliar = false

  for(let i = 0; i < lista.length; i++) {
    for(let j = 0; j < lista[i].employees.length; j++) {
      if(departamento == lista[i].departamentName) {
        somaIdade += lista[i].employees[j].age
        quantidadePessoas = lista[i].employees.length
        auxiliar = true
      }
    }
  }

  if(!auxiliar) {
    return `O nome ${departamento} não existe`
  }

  let mediaIdade = somaIdade / (quantidadePessoas)

  if(mediaIdade < 35) {
    return `O ${departamento} é jovem`
  } else {
    return `O ${departamento} é experiente`
  }

}

console.log(isTheDepartamentYoungOrOld("Financial", listDepartment))

function departamentAverageSalary(departamento, lista) {

  let somaSalarios = 0
  let quantidadePessoas = 0
  let auxiliar = false

  for(let i = 0; i < lista.length; i++) {
    for(let j = 0; j < lista[i].employees.length; j++) {
      if (departamento == lista[i].departamentName) {
        somaSalarios += lista[i].employees[j].salary
        quantidadePessoas = lista[i].employees.length
        auxiliar = true
      }
    }
  }

  let mediaSalario = parseFloat(somaSalarios / quantidadePessoas)

  if (!auxiliar) {
    return `O ${departamento} não existe ou foi digitado incorretamente`
  }

  return `A média de salário do ${departamento} é de: ${mediaSalario.toFixed(2)}`
}

console.log(departamentAverageSalary("Financial", listDepartment))