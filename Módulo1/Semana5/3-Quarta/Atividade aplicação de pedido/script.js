// Pedido de um cliente que montaremos conforme id dos itens
let pedido = {
  nomes: [],
  precoTotal: 0,
  pesos: {
    gramas: 0,
    mililitros: 0
  },
}

let ids = [1, 3, 7];

// Função será responsável por atualizar a variável nomes
function definirNome(minhaListaDeProdutos){
  for(let i = 0; i < minhaListaDeProdutos.length; i++) {
    pedido.nomes.push(minhaListaDeProdutos[i].nome)
  }
}

// Função será responsável por atualizar a variável precoTotal
function definirPrecoTotal(minhaListaDeProdutos){
  for(let i = 0; i < minhaListaDeProdutos.length; i++) {
    pedido.precoTotal += minhaListaDeProdutos[i].preco
  }
}

// Função será responsável por atualizar a variável pesos
function definirGramasEMililitros(produtos){

  let pesosGouMl = pedido.pesos

  for(let i = 0; i < produtos.length; i++) {
      if (produtos[i].peso.at(-1) == 'g') {
        pesosGouMl.gramas += parseInt(produtos[i].peso)
    } else {
      pesosGouMl.mililitros += parseInt(produtos[i].peso)
    }
  }
}

// Função será responsavel por atualizar a variavel minhaListaDeProdutos 
function encontrarItensPeloId(idList){

  let listaDoPedido = [];

  for(let i = 0; i < idList.length; i++) {
    let listaId = idList[i];
    for(let j = 0; j < cardapio.length; j++) {
      let listaCardapio = cardapio[j]
      if (listaId == listaCardapio.id) {
        listaDoPedido.push(listaCardapio)
      }
    }
  }
  return listaDoPedido;
  //eu vou ter que ver se o id aqui é igual ao id do cardapio para dar push ou concatenar os valores e nomes
}

// Função será responsável pela apresentação do pedido. Obs: usar console.log() invés return na string criada.
function apresentacao() {
  console.log(pedido)
}

// Função principal da nossa aplicação, será responsável por chamar as funções.
function principal(idDosProdutosComprados){


  // objetos que serão filtrados conforme o id dos itens. Obs: esse sera nosso array de objetos.
  const minhaListaDeProdutos = encontrarItensPeloId(idDosProdutosComprados);

  // atualizar nomes
  definirNome(minhaListaDeProdutos);

  // atualiar pesos
  definirGramasEMililitros(minhaListaDeProdutos);

  // atualizar precoTotal
  definirPrecoTotal(minhaListaDeProdutos);

  // apresentação do pedido
  apresentacao()
}

principal(ids)