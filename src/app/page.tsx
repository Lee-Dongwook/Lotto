"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import LottoDisplay from "@/components/LottoDisplay";
import AnimatedGenerateButton from "@/components/AnimatedGenerateButton";
import { usePredictNumbers } from "@/hooks/usePredictNumbers";
import BuyMeACoffeeButton from "@/components/BuyMeACoffeeButton";

export default function Home() {
  const router = useRouter();
  const [manualTrigger, setManualTrigger] = useState(0);
  const { data, isPending, error, refetch } = usePredictNumbers(manualTrigger);

  const handleGenerateNumbers = async () => {
    setManualTrigger((prev) => prev + 1);
    await refetch();
  };

  const handleBuyMeACoffee = () => {
    router.push("/payment");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-extrabold mb-6">🎱 Lotto Predictor 🎱</h1>
      <AnimatedGenerateButton
        onClick={handleGenerateNumbers}
        loading={isPending}
      />
      {error && <p className="text-red-500 mt-4">Failed to fetch data</p>}
      {data && <LottoDisplay numbers={data.predictedNumbers || []} />}

      <h1 className="text-3xl font-extrabold mt-20 mb-6">🎉 Support Me! 🎉</h1>
      <p className="mb-4 text-gray-700">
        If you like this app, consider supporting me!
      </p>
      <BuyMeACoffeeButton onClick={handleBuyMeACoffee} />
    </main>
  );
}
