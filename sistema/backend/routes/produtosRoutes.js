import express from "express";
import { criarProduto, editarProduto, listarProdutos, deletarProduto} from "../controllers/produtosController.js";
const router = express.Router();
router.post("/criar", criarProduto)
router.put("/editar/:id", editarProduto)
router.get("/listar", listarProdutos)
router.delete("/deletar/:id", deletarProduto)



export default router;

