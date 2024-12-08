import { useQuery } from "@tanstack/react-query";

const fetchPredictedNumbers = async () => {
  const response = await fetch("http://localhost:8080/api/predict");
  if (!response.ok) {
    throw new Error("Failed to fetch predicted numbers");
  }

  const data = await response.json();
  return data;
};

export const usePredictNumbers = () => {
  return useQuery({
    queryKey: ["predict"],
    queryFn: fetchPredictedNumbers,
  });
};
