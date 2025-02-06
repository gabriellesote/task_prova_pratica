import { exibirProdutos } from "./exibirProdutos.js";
export async function excluirProduto(idProduto) {
  try {

    const response = await axios.delete(`http://localhost:2002/produtos/deletar/${idProduto}`);

    console.log("Produto excluído:", response.data);

    exibirProdutos();
  } catch (error) {
    console.error("Erro ao excluir produto:", error);
  }
}
