import express from "express";
import bodyParser from "body-parser";
import { connect } from "mongoose";
import labyrinthRoutes from "./routes/labyrinth.route.js";
import { configDotenv } from "dotenv";
configDotenv();

const app = express();

const port = process.env.PORT;
const databaseURL = process.env.DATABASE_URL;

// connect to MongoDB
connect(databaseURL)
  .then(() => console.log("Mongoose connected successfully"))
  .catch((err) => {
    console.log("mongooseErr=> ", err);
  });

app.use(bodyParser.json());
app.use("/labyrinth", labyrinthRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
