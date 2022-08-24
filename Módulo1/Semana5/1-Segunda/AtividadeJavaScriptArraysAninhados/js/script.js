let itensPorAmigo = [["Higiene", "Higiene", "Higiene", "Higiene", "Higiene"], ["Alimentação", "Alimentação", "Alimentação", "Alimentação", "Alimentação"], 
["Cuidados médicos", "Cuidados médicos", "Cuidados médicos", "Cuidados médicos", "Cuidados médicos"], ["Lazer", "Lazer", "Lazer", "Lazer", "Lazer"]]

function quantidadeIdeal(listaDeItens) {
    for(let i = 0; i < listaDeItens.length; i++) {
        let lista = listaDeItens[i];
            if (lista.length == 5) {
                console.log(`O amigo responsável pela linha ${i} de produtos trouxe 5 itens corretamente`)
            } 
            else if (lista.length < 5) {
                console.log(`O amigo responsável pela linha ${i} de produtos precisa pegar mais itens`)
            }
            else if (lista.length > 5) {
                console.log(`O amigo responsável pela linha ${i} de produtos tprecisa devolver itens`)
            }
    }
}

quantidadeIdeal(itensPorAmigo)