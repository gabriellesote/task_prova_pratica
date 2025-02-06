import { excluirProduto } from "./excluirProdutos.js";

const lixo = ""

export async function exibirProdutos() {
  try {
    const response = await axios.get("http://localhost:2002/produtos/listar");

    const produtos = response.data;
    console.log(produtos);

    const tabela = document.querySelector(".tabela");

    const linhasExistentes = tabela.querySelectorAll("tr:not(.titulos)");
    linhasExistentes.forEach(linha => linha.remove());

    // Corrigido o loop - 'produto' representa cada item do array 'produtos'
    for (const produto of produtos) {
      const tr = criarTr();

      const nomeTd = criarTd(produto.nome_produto);
      const quantidadeTd = criarTd(produto.quantidade);
      const valorTd = criarTd(produto.valor.toFixed(2));

      const canetaImg = criarImg()
      canetaImg.src = "assets/pen2.png"
      canetaImg.alt = "Editar";
      canetaImg.classList.add("caneta")

      const excluirEditarTd = criarTd();
      const lixoImg = criarImg();
      lixoImg.src = "assets/trash.png";
      lixoImg.alt = "Excluir";
      lixoImg.classList.add("lixo");
      lixoImg.addEventListener("click", () => excluirProduto(produto.id));

      excluirEditarTd.appendChild(lixoImg);
      excluirEditarTd.appendChild(canetaImg);

      tr.appendChild(nomeTd);
      tr.appendChild(quantidadeTd);
      tr.appendChild(valorTd);
      tr.appendChild(excluirEditarTd);

      tabela.appendChild(tr);
    }

  } catch (error) {
    console.error("Deu erro", error);
  }
}

// Utilitários

function criarTd(texto) {
  const td = document.createElement("td");
  td.classList.add("estoque");
  td.textContent = texto;
  return td;
}

function criarTr() {
  const tr = document.createElement("tr");
  tr.classList.add("infos");
  return tr;
}

function criarImg(){
  const img = document.createElement("img");
  img.classList.add("imagem")
  return img
}