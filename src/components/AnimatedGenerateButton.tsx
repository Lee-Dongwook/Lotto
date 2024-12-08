import React from "react";

interface AnimatedGenerateButtonProps {
  onClick: () => void;
  loading: boolean;
}

const AnimatedGenerateButton = ({
  onClick,
  loading,
}: AnimatedGenerateButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg shadow-lg transform transition-transform duration-300 ${
        loading ? "scale-90" : "hover:scale-105"
      }`}
    >
      {loading ? "Generating..." : "Generate Numbers"}
    </button>
  );
};

export default AnimatedGenerateButton;
