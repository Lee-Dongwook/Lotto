import React from "react";

interface BuyMeACoffeeButtonProps {
  onClick: () => void;
}

const BuyMeACoffeeButton = ({ onClick }: BuyMeACoffeeButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg shadow-md hover:bg-yellow-600"
    >
      ☕ Buy Me a Coffee
    </button>
  );
};

export default BuyMeACoffeeButton;
