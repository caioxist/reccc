//foi criado um array de objetos, denominado como "produtos", que contém as informações: ID, nome, professor, preço, descrição e imagem.
const produtos = [
    {
        id: "1",
        nome: "Quadro Poster Decorativo Com Vidro Mona Lisa Pop",
        prof: 'Item',
        preco_de: 50,
        preco_por: 40,
        descricao: "R$40,00",
        imagem: "./img/monalisa.png",
       },
       {
        id: "2",
        nome: "Telefone Antigo Vintage Retro Nelphone Lord Pink",
        prof: 'Item',
        preco_de: 400,
        preco_por: 300,
        descricao: "R$300,00",
        imagem: "./img/tel.webp",
       },

       {
        id: "3",
        nome: "Bicicleta Praiana Retro Feminina 6v. Aro 26 Aero - 1367",
        prof: 'Item',
        preco_de: 1400,
        preco_por: 1000,
        descricao: "Antique Retro Phonograph Shape Music Box",
        imagem: "./img/xe.png",
    },

    {
        id: "4",
        nome: "Enfeite Bomba De Gasolina Porta Objetos O Retrô Vintage",
        prof: 'Item',
        preco_de: 400,
        preco_por: 250,
        descricao: "Enfeite Bomba",
        imagem: "./img/gas.png",
    },
    {
        id: "5",
        nome: "Placa Decorativa Quadro Bicicleta Antiga Decoração Retro",
        prof: 'Item',
        preco_de: 70,
        preco_por: 50,
        descricao: "Antique Retro Phonograph Shape Music Box",
        imagem: "./img/c.webp",
    },
    ];

    // foi criado função chamada renderizaProdutos().
    function renderizaProdutos(){
        // foi declarado uma variavel para armazenar o HTML gerado.
        let html = "";

        // itera sobre o array de produtos.
        for (let i = 0; i < produtos.length; i++) {

            // a função `criaProduto()` foi chamada para gerar o HTML para um unico produto.
            html = html + criaProduto(produtos[i], i);
        }

        // retornou o HTML gerado.
        return html;
    }

    // uma função chamada criaProduto(produto, index) foi chamada, assim criando uma representação HTML para um único produto.
    function criaProduto(produto, index) {

        // retornou uma string que contém HTML.
        // uma div foi criada com uma classe chamada "curso".
        // criou-se uma imagem com a classe "inicio", um título "t" e a fonte da imagem (src) chamando a propriedade imagem do objeto produto.
        //criou-se uma div com uma classe chamada curso-info chamando as propriedades nome, prof e descricao do objeto.

        // uma div foi criada com uma classe chamada "curso-preco".
        // uma classe chamada "preco-de" foi criada, e a mesma está chamando a propriedade "preco_de" do obejeto produto.
        // uma classe chamada "preco-por" foi criada, e a mesma está chamando a propriedade preco_por do obejeto produto.
        // criou-se um botão com a classe "btncar" e a classe "btn-add". o atributo data-index foi definido como o valor do índice index passado como argumento para a função. 
        return `
        
        <div class="curso">
        <img class='inicio' title="t" src="${produto.imagem}" />
        <div class="curso-info">
            <p>${produto.nome}</p>
            <p>${produto.prof}</p>
            <p>${produto.descricao}</p>
        </div>
        
        <div class="curso-preco">
           <p> <span class="preco-de">R$${produto.preco_de}</span></p>
            <span class="preco-por">R$${produto.preco_por}</span>
      

                <ion-icon name="heart" class="like-btn">
                </ion-icon>
         
          
                <button class="btncar btn-add" data-index="${index}"></button>
            </div>
        </div>
       
        `;
    }

    // criou-se um objeto denominado por "container" que chama o id container da pagina HTML.
    const container = document.querySelector('#container')

    // atribuiu-se o resultado da função renderizaProdutos() ao innerHTML do elemento com o ID "container". 
    container.innerHTML = renderizaProdutos();

    // criou-se um objeto chamado carrinhoItens.
    const carrinhoItens = {}

    // criou-se uma função chamada renderizaCarrinho().
    function renderizaCarrinho(){

        // declarou uma variavel para armazenar o HTML gerado.
        let html = '';

        //deu inicio a um loop for in com a variavel produtoId que percorre as propriedades do produto carrinhoItens.
        for (let produtoId in carrinhoItens) {

            // para cada chave no objeto carrinhoItens, esta chamando a função criaItemCarrinho() com o valor associado à chave.
            html = html + criaItemCarrinho(carrinhoItens[produtoId]);
        }

        // selecionou o elemento HTML com a classe "carrinho_itens", e em seguida atualizou o innerHTML com o valor da variável html.
        document.querySelector('.carrinho_itens').innerHTML = html;
    }

    // criou-se uma função chamada criaItemCarrinho chamando a variavel produto.
    function criaItemCarrinho(produto) {

        // retornou uma string que contém HTML.
        // foi criado uma div com uma classe chamada "carrinho_compra".
        // inseriu o nome do produto com a tag h4.
        // inseriu o preço da unidade e a quantidade.
        // realizou a multiplicação do valor pela quantidade.
        // criou um botão que permitiu remover o item do carrinho. 
        return `
        <div class="carrinho_compra">
            <h4>${produto.nome}</h4>
            <p>Preço unidade:${produto.preco_por}| Quantidade:${produto.quantidade}</p>
            <p>Valor: R$:${produto.preco_por*produto.quantidade}</p>
            <button data-produto-id="${produto.id}" class="btn-remove"></button>
        </div>
        `;
    }

    
    // criou-se uma função chamada criaCarrinhoTotal.
    function criaCarrinhoTotal() {

        // criou-se uma variavel local com o valor de 0.
        let total = 0;

        //deu inicio a um loop for in com a variavel produtoId que percorreu as propriedades do produto carrinhoItens.
        for (let produtoId in carrinhoItens) {

            // calculou o valor total de cada produto no carrinho, multiplicou o preço da unidade do produto (preco_por) pela quantidade desse produto no carrinho (quantidade), e o resultado desta conta foi adicionado ao valor total na variável total.
            total = total + carrinhoItens[produtoId].preco_por *carrinhoItens[produtoId].quantidade;
        }

        // selecionou o elemento HTML com a classe "carrinho_total" usando o document.querySelector(), e atualizou o innerHTML com uma string de HTML.
        // inseriu o valor total dos produtos ao carrinho.
        // criou um link com um href vazio e abriu em uma nova aba.
        // inseriu um icone de cartão de crédito.
        // adicionou o texto "Comprar Agora" em negrito.
        document.querySelector('.carrinho_total').innerHTML = `
        <h4>Total: <strong> R$${total}</strong></h4>
        <a href="#" target="_blank">
        <ion-icon name="card-outline"></ion-icon>
        <strong>Comprar Agora</strong>
              </a>
        `;}

    // criou-se uma função chamada adicionaItemNoCarrinho chamando o obejeto produto.
    function adicionaItemNoCarrinho(produto) {

        // verificou se o produto ainda não existe no carrinho e está verificou se a propriedade produto.id não estava presente no objeto carrinhoItens.
        // caso o produto não estiver no carrinho, o código dentro do bloco do if é executado.
        if (!carrinhoItens[produto.id]) {

            // adicionou o produto ao carrinho de compras
            carrinhoItens[produto.id] = produto;

            // deu inicio a propriedade quantidade para 0 no objeto do produto no carrinho, mostrando a quantidade do produto no carrinho.
            carrinhoItens[produto.id].quantidade = 0;

        // aumentou de 1 em 1 a quantidade do produto no carrinho.    
        }++carrinhoItens[produto.id].quantidade;

        // chamou a função renderizaCarrinho() para atualizar os itens no carrinho na página.
        renderizaCarrinho();

        // chamou a função criaCarrinhoTotal() para atualizar o valor total na página.
        criaCarrinhoTotal();}

    // registrou um ouvinte de evento de clique, quando o documento for clicado, a função é executada.
    document.body.addEventListener('click', function (event) {

        // obteve o elemento que foi clicado e o armazenou na variável elemento. o event.target é o elemento que ocorreu o clique.
        const elemento = event.target;

        //verificou se o elemento clicado possuía a classe "btn-add", usando o método classList.contains(), caso o elemento tivesse essa classe, significa que o botão "Adicionar ao Carrinho" foi clicado.
        if (elemento.classList.contains('btn-add')) {

            // caso o botão "Adicionar ao Carrinho" for clicado, esta linha obtém o valor do atributo data-index desse botão, transformando em um numero inteiro pelo parseInt.
            const index = parseInt(elemento.getAttribute('data-index'), 10);

            // acessou o objeto do produto no array produtos e o armazenou na variável produto.
            const produto = produtos[index];

            // a função adicionaItemNoCarrinho() chamou os valores do objeto produto, e adicionou esse produto ao carrinho de compras.
            adicionaItemNoCarrinho(produto);
        }

        // Verificou se o elemento clicado possuía a classe CSS "btn-remove", e caso tivesse essa classe,  o loop seria executado.
        if (elemento.classList.contains('btn-remove')){

            // Obtve o valor do atributo data-produto-id do botão para saber qual produto devia ser removido do carrinho.
            const produtoId = elemento.getAttribute('data-produto-id');
            
            // verificou se a quantidade desse produto no carrinho era menor ou igual a 1, e caso fosse, o produto é removido do carrinho usando delete carrinhoItens[produtoId]. se contrário, a quantidade é decrementada em 1.
            if (carrinhoItens[produtoId].quantidade <= 1) {
                delete carrinhoItens[produtoId];
            }   else {
                --carrinhoItens[produtoId].quantidade;
            }

            // chamou a propriedade renderizaCarrinho() para atualizar a exibição dos itens do carrinho.
            renderizaCarrinho();

            // chamou a propriedade criaCarrinhoTotal() para recalcular e atualizar o valor total do carrinho.
            criaCarrinhoTotal();
        }
    });
    
    function toggleMode() {
        // Seleciona o elemento HTML 
        let html = document.documentElement;
      
        // Adiciona ou remove a classe 'light' do elemento HTML 
        html.classList.toggle('light');
    }



   // Seleciona todos os elementos HTML com a classe "like-btn" e armazena na variável "curtir"
var curtir = document.querySelectorAll(".like-btn");

// Itera sobre cada elemento value dentro de "curtir"
curtir.forEach((value) => {
    // Adiciona um evento de clique a cada elemento
    value.addEventListener("click", () => {
        // Alterna a classe "liked" no elemento
        value.classList.toggle("liked");
    });
});