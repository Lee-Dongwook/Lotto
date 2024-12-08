import { X, Y } from "./sampleData";
import * as tf from "@tensorflow/tfjs";

const trainX = tf.tensor(X);
const trainY = tf.tensor(Y);

const model = tf.sequential();
model.add(tf.layers.dense({ units: 64, inputShape: [7], activation: "relu" }));
model.add(tf.layers.dense({ units: 64, activation: "relu" }));
model.add(tf.layers.dense({ units: 7, activation: "linear" }));

model.compile({
  optimizer: "adam",
  loss: "meanSquaredError",
});

export async function trainModel() {
  console.log("Training model...");
  await model.fit(trainX, trainY, {
    epochs: 100,
    verbose: 1,
  });
  console.log("Training completed!");
}

export async function predictNumbers(inputNumber) {
  const inputTensor = tf.tensor([inputNumber]);
  const prediction = model.predict(inputTensor);
  return Array.from(prediction.dataSync()).map((num) => Math.round(num));
}
