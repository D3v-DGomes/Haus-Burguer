import express, { type Request, type Response } from "express";
import { connection, prisma } from "./src/db.js";
import cors from "cors";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());
app.use(cors());
connection();

app.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "E-mail e senha são obrigatórios." });
      return;
    }

    // consulta ao banco de dados usando Prisma
    const user = await prisma.user.findFirst({
      where: { email: email },
    });

    if (!user) {
      res.status(404).json({ message: "Usuário não encontrado." });
      return;
    }

    // Comparar a senha fornecida com a senha armazenada
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      res.status(401).json({ message: "E-mail ou senha incorretos." });
      return;
    }

    // Resposta para o front-end
    res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      cep: user.cep,
    });
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor." });
    return;
  }
});

app.post("/register", async (req: Request, res: Response) => {
  try {
    const { name, email, password, cep } = req.body;

    if (!name || !email || !password || !cep) {
      res
        .status(400)
        .json({ message: "Todas as informações são obrigatórias" });
      return;
    }

    // Hashear a senha:
    const codHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.findFirst({
      where: { email: email },
    });

    if (user?.email) {
      res.status(409).json({ message: "E-mail já cadastrado" });
      return;
    }

    const newUser = await prisma.user.create({
      data: { name: name, email: email, password: codHash, cep: cep },
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor" });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
