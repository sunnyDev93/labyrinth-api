import { Schema, model } from "mongoose";

const labyrinthSchema = new Schema({
  userId: Schema.Types.ObjectId,
  playfield: [[String]], // 2D array with 'empty' and 'filled' values
  start: { x: Number, y: Number },
  end: { x: Number, y: Number },
});

export default model("Labyrinth", labyrinthSchema);
