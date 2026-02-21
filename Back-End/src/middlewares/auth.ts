import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { user } = req.cookies;

  if (!process.env.JWT_SECRET) {
    return res.status(500).json({ message: "JWT_SECRET not configured" });
  }

  try {
    const decoded = jwt.verify(user, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Usuario nao atenticado" });
  }
};
