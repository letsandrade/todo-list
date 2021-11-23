
const criarTarefa = document.getElementById('criar-tarefa')

console.log(criarTarefa)
criarTarefa.addEventListener('click', getTextInput);


function getTextInput() {
    //criar uma variavel que guarde o valor do texto
    let cliqueBotao = document.getElementById('texto-tarefa');
    //criar variavel que guarde o elemento que quero criar
    let itemLista = document.createElement('li');
    //criar variavel que guarde onde quero criar o elemento
    let posItem = document.getElementById('lista-tarefas');
    //atribuir o valor do texto ao elemento que criei
    itemLista.innerHTML = cliqueBotao.value
    //adicionar o item ao html
    posItem.appendChild(itemLista);
    //limpar campo input
    cliqueBotao.value = '';
}

function mudaCor() {
    
}