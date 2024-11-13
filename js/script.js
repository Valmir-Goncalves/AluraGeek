// Array para armazenar os produtos no carrinho
let carrinho = [];

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nome, preco, imagem) {
  const novoProduto = {
    nome,
    preco,
    imagem
  };

  carrinho.push(novoProduto);

  // Salvar o carrinho no localStorage
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  // Atualizar a lista de produtos no carrinho (implementar essa parte)
  atualizarCarrinho();
}

// Função para atualizar a lista de produtos no carrinho
function atualizarCarrinho() {
  // Selecionar o elemento que irá exibir os produtos no carrinho
  const listaCarrinho = document.getElementById('lista-carrinho');

  // Limpar a lista antes de adicionar os novos itens
  listaCarrinho.innerHTML = '';

  // Percorrer o array do carrinho e criar um elemento li para cada produto
  carrinho.forEach(produto => {
    const li = document.createElement('li');
    li.textContent = `${produto.nome} - R$ ${produto.preco}`;
    listaCarrinho.appendChild(li);
  });
}


const botaoGuardar = document.querySelector('.btn-guardar');
botaoGuardar.addEventListener('click', () => {
  const nome = document.getElementById('input-nome').value;
  const preco = document.getElementById('input-preco').value;
  const imagem = document.getElementById('input-imagem').value; // Ou pegar o caminho da imagem

  adicionarAoCarrinho(nome, preco, imagem);
});

// Adicionar um event listener ao formulário
const form = document.getElementById('formCadastro');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = document.getElementById('input-nome').value;
  const preco = document.getElementById('input-preco').value;
  const imagem = document.getElementById('input-imagem').files[0];
  const novoProduto = {
    nome,
    preco,
    // ... outros dados
  };
  produtos.push(novoProduto);

  // Atualizar a lista de produtos na tela
  // ... (código para atualizar a interface)

  // Limpar o formulário
  form.reset();


  // Enviar os dados para o servidor (implemente aqui a lógica para enviar os dados)
  adicionarProduto(nome, preco, imagem.name); // Assumindo que você quer usar o nome do arquivo como URL da imagem
});







// server.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Conectar ao banco de dados
mongoose.connect('mongodb://localhost/minha_loja', { useNewUrlParser: true });

// Esquema do produto no carrinho
const cartItemSchema = new mongoose.Schema({
  productId: String,
  productName: String,
  price: Number,
  quantity: Number
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

// Rota para adicionar um produto ao carrinho
app.post('/cart', async (req, res) => {
  const { productId, productName, price, quantity } = req.body;
  const cartItem = new CartItem({ productId, productName, price, quantity });
  await cartItem.save();
  res.json(cartItem);
});

// ... outras rotas para obter, atualizar e remover itens do carrinho

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});


// script.js
async function adicionarAoCarrinho(productId, productName, price) {
  const response = await fetch('/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ productId, productName, price, quantity: 1 })
  });

  const data = await response.json();
  // Atualizar a lista de produtos no carrinho
}