import express from "express";
import { UserController } from "../controllers/UserController";

const router = express.Router();
const userController = new UserController();

// Rota para buscar todos os usuários
router.get("/users", async (req, res) => {
  try {
    const users = await userController.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

// Rota para buscar um usuário por ID
router.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userController.findById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuário" });
  }
});

// Rota para criar um novo usuário
router.post("/users", async (req, res) => {
  const { name, surname, email } = req.body;
  try {
    const newUser = await userController.create(name, surname, email);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});

// Rota para excluir um usuário por ID
router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await userController.destroy(id);
    if (deleted) {
      res.json({ message: "Usuário excluído com sucesso" });
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir usuário" });
  }
});

export default router;
