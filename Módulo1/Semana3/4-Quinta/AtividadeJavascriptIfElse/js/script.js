let usuarioAutenticado = true;

if (usuarioAutenticado) {
    console.log("Seja bem vindo")
};

let usuario     = "Ana";
let autenticado = false;

if (!autenticado) {
    console.log(`${usuario}, você conseguiu se autenticar`)
} else {
    console.log(`${usuario}, você não conseguiu se autenticar`)
};

let produto                         = "maçã";
let quantidadeDoProduto             = 2;
let quantidadeDoProdutoParaPromocao = 5 - quantidadeDoProduto;
let quantidadeRestante              = 5 - quantidadeDoProduto;

if (produto == "maçã" && quantidadeDoProduto >= 5) {
    console.log("Você recebeu uma promoção, o valor do produto será R$ 5.00.")
} else {
    console.log(`Se você adicionar mais ${quantidadeRestante} maçãs, o valor sairá por R$ 5.00.`)
};