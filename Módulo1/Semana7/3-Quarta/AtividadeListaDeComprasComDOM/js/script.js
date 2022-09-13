const shoppingList = document.getElementById("list");
const input = document.getElementById("input");
const addButton = document.getElementById("add");
const resetButton = document.getElementById("reset");

addButton.innerText = "Adicionar"
resetButton.innerText = "Resetar"

let list = [];

function reloadList() {
    shoppingList.innerHTML = ""; // Limpa nosso Elemento HTML
    for (let index = 0; index < list.length; index++) {
      let currentElement = list[index];
      currentElement.id = index;
      shoppingList.appendChild(currentElement);
    }
}

function createRemoveButton() {
    const removeButton = document.createElement("button"); // Criamos um botão
    removeButton.innerText = "Remove";
    removeButton.addEventListener("click", (e) => { // Adicionamos um evento nele.

    list = list.filter((_, index) => index !== Number(e.path[1].id));
    reloadList(); // Chamamos a função para recarregar a lista.
});

return removeButton;
}

// O uso de "_" em um argumento de função é nada mais que uma convenção. Resumidamente, busca indicar que estamos ignorando aquele argumento da função. No método filter acima, estamos ignorando o primeiro argumento. Que é o elemento sendo processado no array, pois aqui precisamos apenas do índice dele (que é o segundo argumento da função), segundo a documentação.
// A propriedade e.path é um array contendo a árvore HTML no DOM a partir do elemento onde aconteceu o evento (e). Uma visualização básica:  A propriedade path retornaria algo como: [button, div, body, html]. onde todos os elementos do array são elementos no DOM.
// No código estamos acessando o elemento de índice 1 desta propriedade. Que no exemplo seria a div pai do nosso button.
// Estamos acessando o elemento pai do nosso Botão Remover de cada elemento da lista e verificando se o ID é diferente do índice do elemento que foi clicado. Assim, no final do processo temos uma nova lista com todos os produtos menos o que tem o ID igual ao do produto que foi clicado.

function onClickFunction() {
    let newItem = document.createElement("li");   //Criando um elemento html "li"
    let paragraph = document.createElement("p");  //Criando um elemento html "p"
    let removeButton = createRemoveButton();
            
    if (input.value) {
    paragraph.innerText = input.value; // Adicionamos o valor do input em nosso "p"
    
    newItem.appendChild(paragraph); // Colocamos nosso paragraph dentro de nossa li
    newItem.appendChild(removeButton);// Colocamos nosso button dentro de nossa li
    
    input.value = ""; // Limpamos nosso input
    list.push(newItem);
    
    reloadList();
    }
}
    
addButton.addEventListener("click", onClickFunction);

function onClickResetFunction() {
    shoppingList.innerHTML = "";
    list = [];
}

resetButton.addEventListener("click", onClickResetFunction);