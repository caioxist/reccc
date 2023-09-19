const images = [
    { 'id': '1', 'url':'./img/1a.png'}, // Primeiro objeto
    { 'id': '2', 'url':'./img/h.png'}, // Segundo objeto
    { 'id': '3', 'url':'./img/2a.png'}, // Terceiro objeto
]
 // Seleciona o elemento HTML com a classe "container-items" e o armazena na constante container1
const container1 = document.querySelector('.container-items');

// Loop que itera sobre o array images
for (const image of images) {
    // Adiciona um novo elemento HTML ao conteúdo de container1
    container1.innerHTML+= `
    <div class='item'>
        <img src= '${image.url}'
    </div>
    `;
}

// Seleciona todos os elementos HTML com a classe "item" e os armazena na variável items
let items = document.querySelectorAll('.item');

// Adiciona um evento de clique ao elemento HTML com o ID "next"
document.querySelector('#next').addEventListener('click',()=>{
    // Move o primeiro elemento dentro de `container1` para o final
    container1.appendChild(items[0]);
    // Atualiza a variável items para armazenar todos os elementos HTML com a classe "item"
    items=document.querySelectorAll('.item');
});

// Adiciona um evento de clique ao elemento HTML com o ID "previous"
document.querySelector('#previous').addEventListener('click',()=>{
    // Armazena o último elemento dentro de `items` na constante lastItem
    const lastItem = items[items.length - 1];
    // Move o último elemento para a posição inicial dentro de container1
    container1.insertBefore(lastItem, items[0]);
    // Atualiza a variável `items` para armazenar todos os elementos HTML com a classe "item"
    items = document.querySelectorAll('.item');
});