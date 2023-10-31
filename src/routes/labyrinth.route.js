import { Router } from "express";
const labyrinthRoutes = Router();
import {
  getAllLabyrinths,
  getLabyrinthById,
  createLabyrinth,
  setBlockType,
  setStartBlock,
  setEndBlock,
  solveLabyrinth,
} from "../controllers/labyrinth.controller.js";
import auth from "../middleware/auth.js";

labyrinthRoutes.get("/", auth, getAllLabyrinths);
labyrinthRoutes.get("/:id", auth, getLabyrinthById);
labyrinthRoutes.post("/", auth, createLabyrinth);
labyrinthRoutes.put("/:id/playfield/:x/:y/:type", auth, setBlockType);
labyrinthRoutes.put("/:id/start/:x/:y", auth, setStartBlock);
labyrinthRoutes.put("/:id/end/:x/:y", auth, setEndBlock);
labyrinthRoutes.get("/:id/solution", auth, solveLabyrinth);

export default labyrinthRoutes;
