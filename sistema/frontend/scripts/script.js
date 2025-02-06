import { adicionarProduto } from "./modulos/criarProduto.js"
import { exibirProdutos } from "./modulos/exibirProdutos.js"
export const apiURL = "http://localhost:2002/produtos/"

adicionarProduto()

exibirProdutos()