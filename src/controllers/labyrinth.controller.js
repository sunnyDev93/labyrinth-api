// Importing necessary dependencies
import Labyrinth from "../models/labyrinth.model.js";

// Utility function to handle server errors
const handleServerError = (res, error) => {
  console.error(error); // Log the error for debugging purposes
  res.status(500).send("Server Error");
};

// Retrieve all labyrinths associated with the current user
export async function getAllLabyrinths(req, res) {
  try {
    const labyrinths = await find({ userId: req.user.id });
    res.json(labyrinths);
  } catch (error) {
    handleServerError(res, error);
  }
}

// Retrieve a specific labyrinth by ID for the current user
export async function getLabyrinthById(req, res) {
  try {
    const labyrinth = await findOne({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!labyrinth) {
      return res.status(404).send("Labyrinth not found");
    }

    res.json(labyrinth);
  } catch (error) {
    handleServerError(res, error);
  }
}

// Create a new labyrinth for the current user
export async function createLabyrinth(req, res) {
  try {
    const labyrinth = new Labyrinth({ userId: req.user.id });
    await labyrinth.save();
    res.json(labyrinth);
  } catch (error) {
    handleServerError(res, error);
  }
}

// Set the type of a specific block in the labyrinth
export async function setBlockType(req, res) {
  try {
    const { x, y, type } = req.params;

    const labyrinth = await findOne({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!labyrinth) {
      return res.status(404).send("Labyrinth not found");
    }

    // Update the block type at the specified coordinates
    labyrinth.playfield[y][x] = type;
    await labyrinth.save();

    res.json(labyrinth);
  } catch (error) {
    handleServerError(res, error);
  }
}

// Set the starting point in the labyrinth
export async function setStartBlock(req, res) {
  try {
    const { x, y } = req.params;

    const labyrinth = await findOne({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!labyrinth) {
      return res.status(404).send("Labyrinth not found");
    }

    // Set the starting point coordinates
    labyrinth.start = { x, y };
    await labyrinth.save();

    res.json(labyrinth);
  } catch (error) {
    handleServerError(res, error);
  }
}

// Set the ending point in the labyrinth
export async function setEndBlock(req, res) {
  try {
    const { x, y } = req.params;

    const labyrinth = await findOne({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!labyrinth) {
      return res.status(404).send("Labyrinth not found");
    }

    // Set the ending point coordinates
    labyrinth.end = { x, y };
    await labyrinth.save();

    res.json(labyrinth);
  } catch (error) {
    handleServerError(res, error);
  }
}

// Solve the labyrinth - this is a mock solution and should be replaced with a proper pathfinding algorithm
export async function solveLabyrinth(req, res) {
  try {
    const labyrinth = await findOne({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!labyrinth) {
      return res.status(404).send("Labyrinth not found");
    }

    const mockSolution = ["left", "up", "right", "down", "down", "down"];
    res.json(mockSolution);
  } catch (error) {
    handleServerError(res, error);
  }
}
