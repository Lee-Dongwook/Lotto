import express from "express";
import cors from "cors";
import { trainModel, predictNumbers } from "./trainModel.js";

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

app.get("/api/predict", async (req, res) => {
  try {
    console.log("Starting Model training...");
    await trainModel();
    console.log("Model Training Successful!");

    const predictedNumbers = await predictNumbers();

    res.json({ predictedNumbers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
