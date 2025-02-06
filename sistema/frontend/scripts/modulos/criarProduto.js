import { exibirProdutos } from "./exibirProdutos.js";

const nome = document.getElementById("nome")
const quantidade = document.getElementById("quantidade")
const valor = document.getElementById("valor")

export async function adicionarProduto(event) {
  event.preventDefault();

  const nomeProduto = nome.value.trim();
  const quantidadeProduto = quantidade.value.trim();
  const valorProduto = parseFloat(valor.value);

  console.log(nomeProduto, quantidadeProduto, valorProduto);

  if (!nomeProduto || !quantidadeProduto || isNaN(valorProduto)) {
    alert("Preencha todos os campos!");
    return;
  }

  if (!Number.isInteger(Number(quantidadeProduto))) {
    alert("A quantidade deve ser um número inteiro!");
    return;
  }

  try {
    const response = await axios.post("http://localhost:2002/produtos/criar", {
      nome_produto: nomeProduto,
      quantidade: parseInt(quantidadeProduto),
      valor: valorProduto,
    });

    console.log("Sucesso:", response.data);
    alert("Produto adicionado com sucesso!");

    nome.value = ""
    quantidade.value = ""
    valor.value = ""
    exibirProdutos();
  } catch (error) {
    console.error("Um erro ocorreu:", error);
    alert("Erro ao adicionar o produto!");
  }



}

document.querySelector(".formulario").addEventListener("submit", adicionarProduto);
