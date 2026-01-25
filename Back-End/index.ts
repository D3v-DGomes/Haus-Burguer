import express from "express";
import { connection, prisma } from "./src/db.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
connection();

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "E-mail e senha são obrigatórios." });
      return;
    }

    // consulta ao banco de dados usando Prisma
    const user = await prisma.user.findFirst({
      where: { email: email, password: password },
    });

    if (!user) {
      res.status(404).json({ message: "Usuário não encontrado." });
      return;
    }

    // Resposta para o front-end
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor." });
    return;
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
