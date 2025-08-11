"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Volcano from "@/assets/icon_volcano 1.svg";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const Amics = () => {
  const t = useTranslations("Amics");
  const router = useRouter();

  const [volcanoStates, setVolcanoStates] = useState<boolean[]>(
    Array(9).fill(false)
  );

  useEffect(() => {
    const unlocked = Number(localStorage.getItem("unlockedVolcano") || 1);
    const states = Array(9)
      .fill(false)
      .map((_, idx) => idx < unlocked);
    setVolcanoStates(states);
  }, []);

  const handleClick = (index: number) => {
    if (volcanoStates[index]) {
      router.push(`/volcano/${index + 1}`);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-white pb-[124px]">
      <div className="bg-lightgreen w-full flex h-[100px] items-center justify-center">
        <h1 className="text-[26px] font-semibold text-white text-center">
          {t("title")}
        </h1>
      </div>
      <div className="mt-[30px] flex flex-col items-center justify-center">
        <h1 className="text-secondary px-8">{t("description")}</h1>
        <div className="grid grid-cols-3 gap-[51px] mt-[45px] px-[42px]">
          {volcanoStates.map((isUnlocked, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              disabled={!isUnlocked}
              className={`transition-all ${
                !isUnlocked
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:scale-105"
              }`}
            >
              <Image src={Volcano} alt={`Volcano ${index + 1}`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amics;
