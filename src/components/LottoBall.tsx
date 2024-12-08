import React from "react";
import { LottoBallColors } from "@/lib/LottoBallcolors";

interface LottoBallProps {
  number: number;
}

const getColorByNumber = (number: number): string => {
  if (number <= 10) return LottoBallColors["red"];
  if (number <= 20) return LottoBallColors["orange"];
  if (number <= 30) return LottoBallColors["yellow"];
  if (number <= 40) return LottoBallColors["green"];
  return LottoBallColors["blue"];
};

const LottoBall = ({ number }: LottoBallProps) => {
  return (
    <div
      className="w-12 h-12 flex items-center justify-center rounded-full text-white font-bold"
      style={{ backgroundColor: getColorByNumber(number) }}
    >
      {number}
    </div>
  );
};

export default LottoBall;
