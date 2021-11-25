
const criarTarefa = document.getElementById('criar-tarefa');
const apagarTudo = document.getElementById('apaga-tudo');
//console.log(mudarCorTarefa);
//console.log(criarTarefa)
criarTarefa.addEventListener('click', getTextInput);
apagarTudo.addEventListener('click', clearAll);

function getTextInput() {
    //criar uma variavel que guarde o valor do texto
    let cliqueBotao = document.getElementById('texto-tarefa');
    //criar variavel que guarde o elemento que quero criar
    let itemLista = document.createElement('li');
    //adiciona uma classe a todos os itens da lista
    itemLista.className = 'item-lista'
    //chama função p tornar clicavel e mudar cor
    itemLista.addEventListener('click', changeColor);
    //criar variavel que guarde onde quero criar o elemento
    let posItem = document.getElementById('lista-tarefas');
    //atribuir o valor do texto ao elemento que criei
    itemLista.innerHTML = cliqueBotao.value
    //adicionar o item ao html
    posItem.appendChild(itemLista);
    //limpar campo input
    cliqueBotao.value = '';
}


//cria elemento
//let mudarCorTarefa = document.querySelector('.selected-item')

//criar variavel que guarde os itens que o usuario adicionou à lista
let listaPronta = document.querySelector('#lista-tarefas').children;
console.log(listaPronta)

//ref: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/contains
//https://www.w3schools.com/jsref/met_element_remove.asp
function changeColor(event) {
    //criar variavel que guarde os itens que o usuario adicionou à lista
    let listaPronta = document.querySelector('#lista-tarefas').children;

    //fazer com que o clique mude a classe do item clicado
    //event.target.className = 'selected-item'
    for (let i = 0; i < listaPronta.length; i += 1) {
        
        if (listaPronta[i].classList.contains('selected-item')) {
        listaPronta[i].classList.remove('selected-item')    
        }
        
    }
    event.target.classList.add('selected-item')
    //adicionar a classe selected sem remover a anterior
    //event.target.classList.add('selected-item')     
}

//https://stackoverflow.com/questions/67769790/how-do-i-delete-list-items-with-clear-button-javascript
function clearAll() {
    /* let listaToda = document.getElementById('lista-tarefas').children;
    for (let c = 0; c < listaToda.length; c += 1) {
        listaToda[c].remove();
    } */
    document.getElementById('lista-tarefas').innerHTML = '';
}

/* if (itemSelected !== null) {
        itemSelected.classList.remove('selected-item');
        itemSelected.style.backgroundColor = ''
    } */
    //fazer com que outro clique desmarque
    //event.target.className = 'item-lista'

/* function mudaCor() {
    let listaPronta = document.querySelector('#lista-tarefas').children;
    console.log(listaPronta)
    for (let i = 0; i < listaPronta.length; i += 1) {
        console.log(listaPronta[i]);
        listaPronta[i].addEventListener('click') 
            listaPronta[i].classList.add('selected-item')
        }
}   

console.log(mudaCor) */

