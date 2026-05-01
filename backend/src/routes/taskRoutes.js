import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} from "../controllers/taskController.js";

import { protect } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/", protect, isAdmin, createTask);
router.get("/", protect, getTasks);
router.patch("/:id", protect, updateTask);
router.delete("/:id", protect, isAdmin, deleteTask);

export default router;