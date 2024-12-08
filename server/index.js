import express from "express";
import cors from "cors";

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

    const inputNumbers = [8, 15, 19, 21, 32, 36, 38];
    const predictedNumbers = await predictNumbers(inputNumbers);

    res.json({ predictedNumbers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
