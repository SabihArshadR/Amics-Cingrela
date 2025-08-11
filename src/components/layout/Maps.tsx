"use client";
import Image from "next/image";
import React from "react";
import Map from "@/assets/map.png";
import CustomButton from "../ui/Button";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const Maps = () => {
  const t = useTranslations("Map");
  const router = useRouter();
  return (
    <div className="pb-5 px-3.5 bg-white">
      <div className="flex justify-center">
        <Image src={Map} alt="Map" className="mt-[66px]" />
      </div>
      <h1 className="text-2xl font-bold text-center text-primary mt-[42px]">
        {t("title1")}
      </h1>
      <h1 className="text-4xl font-medium text-center text-secondary mt-[15px]">
        {t("title2")}
      </h1>
      <div className="flex flex-col mt-[222px]">
        <CustomButton
          onClick={() => {
            router.push("/progress");
          }}
        >
          {t("button")}
        </CustomButton>
      </div>
    </div>
  );
};

export default Maps;
