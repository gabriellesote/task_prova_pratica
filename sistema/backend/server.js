import express from "express";
import cors from "cors";
import produtosRoutes from "./routes/produtosRoutes.js";
const app = express();

const port = 2002;

app.use(express.json());
app.use(cors())

app.use("/produtos", produtosRoutes)
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))