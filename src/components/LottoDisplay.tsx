import React from "react";
import LottoBall from "./LottoBall";

interface LottoDisplayProps {
  numbers: number[];
}

const LottoDisplay = ({ numbers }: LottoDisplayProps) => {
  const mainNumbers = [...numbers.slice(0, 6)].sort((a, b) => a - b);
  const bonusNumber = numbers[6];

  return (
    <div className="flex space-x-4 mt-6">
      {mainNumbers.map((number, index) => (
        <LottoBall key={index} number={number} />
      ))}

      <div className="flex items-center">
        <span className="text-xl font-bold mx-2">+</span>
      </div>

      <LottoBall number={bonusNumber} />
    </div>
  );
};

export default LottoDisplay;
