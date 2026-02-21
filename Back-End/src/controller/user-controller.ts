import type { Request, Response } from "express";
import { prisma } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
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

    const userInfos = {
      id: user.id,
      name: user.name,
      email: user.email,
      cep: user.cep,
    };

    // Gerar um token JWT
    if (!process.env.JWT_SECRET) {
      return;
    }

    const token = jwt.sign(userInfos, process.env.JWT_SECRET);
    console.log("Token JWT:", token);

    // Inserindo cookies:
    res.cookie("user", token, {
      maxAge: 1800000, // 5 horas
    });

    // Resposta para o front-end
    res.status(200).json(userInfos);
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor." });
    return;
  }
};

export const register = async (req: Request, res: Response) => {
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
};

export const auth = async (req: Request, res: Response) => {
  try {
    const { user } = req;
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor" });
    return;
  }
};

export const logout = async (req: Request, res: Response) => {
  const { user } = req.cookies;

  if (user) {
    res.clearCookie("user");
    res.json({ message: "Logout realizado com sucesso" });
  }
  console.log(user);
};
