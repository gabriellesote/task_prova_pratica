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

      tr.appendChild(nomeTd);
      tr.appendChild(quantidadeTd);
      tr.appendChild(valorTd);

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
