import { X, Y } from "./sampleData.js";
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

function generateRandomInput() {
  const numbers = new Set();
  while (numbers.size < 6) {
    const randomNum = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNum);
  }

  const mainNumbers = Array.from(numbers);

  let bonusNumber;

  do {
    bonusNumber = Math.floor(Math.random() * 45) + 1;
  } while (numbers.has(bonusNumber));

  return [...mainNumbers, bonusNumber];
}

export async function predictNumbers(inputNumber = null) {
  const randomInput = generateRandomInput();
  const inputTensor = tf.tensor([inputNumber || randomInput]);
  const prediction = model.predict(inputTensor);
  const result = Array.from(prediction.dataSync()).map((num) => {
    const roundedNum = Math.round(num);
    return Math.min(Math.max(roundedNum, 1), 45);
  });

  const uniqueResult = Array.from(new Set(result));

  while (uniqueResult.length < 7) {
    uniqueResult.push(Math.floor(Math.random() * 45) + 1);
  }

  return uniqueResult.slice(0, 7);
}
