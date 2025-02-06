import { exibirProdutos } from "./exibirProdutos.js";

// Função que abre o pop-up com os dados do produto
export function abrirPopupEdicao(produto) {
  const popup = document.querySelector("#popup-edicao");
  const nomeInput = document.querySelector("#nome-editar");
  const quantidadeInput = document.querySelector("#quantidade-editar");
  const valorInput = document.querySelector("#valor-editar");

  // Preencher os campos do pop-up com os dados do produto
  nomeInput.value = produto.nome_produto;
  quantidadeInput.value = produto.quantidade;
  valorInput.value = produto.valor;

  // Exibe o pop-up
  popup.classList.add("open");

  // Função que será associada ao botão de salvar
  const salvarEdicao = async () => {
    const novoNome = nomeInput.value;
    const novaQuantidade = quantidadeInput.value;
    const novoValor = valorInput.value;

    // Validação simples para garantir que os campos não estão vazios
    if (!novoNome || !novaQuantidade || !novoValor) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    try {
      const response = await axios.put(`http://localhost:2002/produtos/editar/${produto.id}`, {
        nome_produto: novoNome,
        quantidade: novaQuantidade,
        valor: novoValor
      });

      console.log("Produto editado:", response.data);
      exibirProdutos(); // Atualiza a tabela com os dados editados
      popup.classList.remove("open"); // Fecha o pop-up após salvar
    } catch (error) {
      console.error("Erro ao editar o produto:", error);
    }
  };

  // Garantir que o evento de salvar não seja duplicado
  const salvarBotao = document.querySelector("#salvar-edicao");

  // Remover todos os event listeners antes de adicionar o novo
  const cloneBotao = salvarBotao.cloneNode(true); // Clona o botão para remover o evento anterior
  salvarBotao.parentNode.replaceChild(cloneBotao, salvarBotao); // Substitui o botão original pelo clonado

  // Adiciona o novo evento de salvar
  cloneBotao.addEventListener("click", salvarEdicao);

  // Fechar o pop-up sem salvar
  document.querySelector("#cancelar-edicao").addEventListener("click", () => {
    popup.classList.remove("open"); // Apenas fecha o pop-up sem salvar alterações
  });
}
