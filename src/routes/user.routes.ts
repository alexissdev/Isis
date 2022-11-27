import { Router } from "npm:express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller.ts";
import userMiddleware from "../middlewares/user.middleware.ts";

const router = Router();

router.get("/api/user", getUsers);
router.get("/api/user/:id", getUser);
router.delete("/api/user/:id", deleteUser);
router.put("/api/user/:id", userMiddleware, updateUser);
router.post("/api/user", userMiddleware, createUser);

export default router;
