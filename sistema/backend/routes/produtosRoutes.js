import express from "express";
import { criarProduto, editarProduto, listarProdutos } from "../controllers/produtosController.js";
const router = express.Router();
router.post("/criar", criarProduto)
router.put("/editar/:id", editarProduto)
router.get("/listar", listarProdutos)



export default router;

