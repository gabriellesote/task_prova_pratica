import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const criarProduto = async (req, res) => {
  const { nome_produto, quantidade, valor } = req.body;
  try {
    const novoProduto = await prisma.produtos.create({
      data: {
        nome_produto,
        quantidade,
        valor,
      },
    });

    res.status(201).json(novoProduto);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Erro ao criar produto ${nome_produto}` + error.message });
  }
};

export const editarProduto = async (req, res) => {
  const { id } = req.params;
  const { nome_produto, valor, quantidade } = req.body;

  try {
    const produtoAtualizado = await prisma.produtos.update({
      where: { id: parseInt(id) },
      data: {
        nome_produto,
        valor,
        quantidade,
        modified_at: new Date(),
      },
    });

    res.json(produtoAtualizado);
  } catch (error) {
    res.status(500).json({ error: `Erro ao atualizar o produto ${id}` });
  }
};

export const listarProdutos = async (req, res) => {
  try {
    const listar = await prisma.produtos.findMany();
    res.status(200).json(listar);
  } catch (error) {
    res.status(400).json({ message: "Erro ao listar produtos" }, message.error);
  }
};

export const deletarProduto = async (req, res) => {
  const { id } = req.params;
  try {
    const deletar = await prisma.produtos.delete({
      where: { id: parseInt(id) },
    });
    res
      .status(200)
      .json({ message: "Produto deletado com sucesso!" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Erro ao deletar produto!" } + error.message);
  }
};
