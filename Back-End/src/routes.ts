import { Router } from "express";
import { auth, login, register } from "./controller/user-controller.js";

export const router = Router();

// Rotas de autenticação
router.post("/login", login);
router.post("/register", register);
router.get("/me", auth);
