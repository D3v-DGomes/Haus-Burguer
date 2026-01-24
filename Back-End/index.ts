import express from "express";
import { connection, prisma } from "./src/db.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
connection();

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // consulta ao banco de dados usando Prisma
  const user = await prisma.user.findFirst({
    where: { email: email, password: password },
  });

  // Resposta para o front-end
  res.json(user);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
