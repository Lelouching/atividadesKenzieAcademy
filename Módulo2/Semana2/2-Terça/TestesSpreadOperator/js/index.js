const patrick = {
    name: "Patrick",
    age: 23
 }
 
 //Agora vamos criar um novo objeto
 const samuel = {...patrick}
 //Vamos mudar as propriedades do objeto patrick
 
 samuel.name = "Samuel"
 samuel.age = 26

console.log(samu) // {name: "samu", age: 26}
console.log(patrick) // {name: "Patrick", age 23}

const meio= [3, 4]
const array = [1, 2, ...meio, 5, 6]

console.log(array)
// [1, 2, 3, 4, 5, 6]

const dadoNovo = 5
const array2 = [1, 2, 3, 4]

array = [...array2, dadoNovo]

console.log(array2)
// [ 1, 2, 3, 4, 5]

const usuario = {
    name: "Samuel",
    age: 26,
  };
  
  const endereco = {
    rua: "Quintino",
    cidade: "Timbó",
    estado: "SC",
  };
  
  const usuarioCompleto = { ...usuario, ...endereco };
  
  console.log(usuarioCompleto);
  // { name: 'Samuel', age: 26, rua: 'Quintino', cidade: 'Timbó', estado: 'SC'}

  const usuario2 = {
    name: "Samuel",
    age: 26,
  };
  
  const endereco2 = {
    rua: "Quintino",
    cidade: "Timbó",
    estado: "SC",
  };
  
  const usuarioCompleto2 = {
    ...usuario2,
    ...endereco2,
    age: 20,
    cidade: "blumenau",
  };
  
  console.log(usuarioCompleto2);
  
  // { name: 'Samuel', age: 20, rua: 'Quintino', cidade: 'blumenau', estado: 'SC'}

  const usuario3 = {
    name: "Samuel",
    age: 26,
    cidade: "Timbó",
    estado: "SC",
  };
  
  const usuarioAtualizado3 = {
    name: "Samuel",
    age: 20,
    cidade: "Blumenau",
    estado: "SC",
  };
  
  const usuarioCompleto3 = {
    ...usuario3,
    ...usuarioAtualizado3,
  };
  
  console.log(usuarioCompleto3)
  
  // { name: 'Samuel', age: 20, cidade: 'Blumenau', estado: 'SC' }

const inputs = document.getElementsByClassName("formulario")

const array4 = [...inputs]
// Perceba que colocamos o operador dentro de um array [], afinal ele precisa de um receptor

console.log(inputs)
// HTMLCollection [ input.formulario, input.formulario]

console.log(array4)
// Array [ input.formulario, input.formulario ]

const inputs2 = document.querySelectorAll("input");

console.log(inputs2);
// NodeList [input, input]

const inputs3 = document.querySelectorAll("input");

console.log(inputs3);
// NodeList(2) [input, input]

const data = [...inputs3];

console.log(data);
// Array [input, input]
/* Se você expandir o input no console vai encontrar todas as
propriedades do elemento html, como a propriedade name que definimos na criação da tag */

const login = data.map((e) => e.value);
const email = data.find((e) => e.name === "email");

console.log(login);
// ['samu@kenzie.com', '1234']

console.log(email)
// samu@kenzie.com