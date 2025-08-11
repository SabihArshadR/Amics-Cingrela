"use client";
import Image from "next/image";
import React, { useState } from "react";
import Stone from "@/assets/icon_level_stone.svg";
import Magma from "@/assets/magma.png";
import Volcano from "@/assets/icon_volcano 1.svg";
import Score from "@/assets/Ellipse 5.svg";
import CheckIcon from "@/assets/check.svg";
import CustomButton from "../ui/Button";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const Progress = () => {
  const [activeTab, setActiveTab] = useState<"progress" | "nivell">("progress");
  const t = useTranslations("Progress");
  const t2 = useTranslations("Level");
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <h1 className="text-[22px] font-semibold text-secondary mt-10">
        {t("title1")}
      </h1>

      <div>
        <Image
          src={activeTab === "nivell" ? Magma : Stone}
          alt="Level Icon"
          width={96}
          height={96}
        />
      </div>

      <h1 className="text-2xl font-bold text-primary mt-[2px]">
        {activeTab === "nivell" ? t2("title2") : t("title2")}
      </h1>

      <h1 className="text-2xl font-bold text-lightgreen mt-3">
        100 {t("title3")}
      </h1>

      {/* Tabs */}
      <div className="mt-[30px] flex w-full justify-center">
        <CustomButton
          onClick={() => setActiveTab("progress")}
          className={`rounded-none w-full ${
            activeTab === "progress" ? "" : "bg-transparentt"
          }`}
        >
          {t("button1")}
        </CustomButton>
        <CustomButton
          onClick={() => setActiveTab("nivell")}
          className={` rounded-none w-full ${
            activeTab === "nivell" ? "" : "bg-transparentt"
          }`}
        >
          {t2("button")}
        </CustomButton>
      </div>

      {/* Tab Content */}
      {activeTab === "progress" ? (
        <>
          <div className="mt-5">
            <Image src={Score} alt="score" />
          </div>
          <div className="flex flex-col justify-center items-center gap-2 mt-5">
            <h1 className="text-secondary text-[20px]">{t("title4")}</h1>
            <h1 className="text-lightgreen text-2xl font-bold">
              65 {t("title5")}
            </h1>
            <h1 className="text-secondary text-[20px]">0 / 3 {t("title6")}</h1>
          </div>
          <div className="mt-[17px] w-full px-4 pb-5">
            <CustomButton onClick={()=>{router.push("/quiz")}} className="w-full">{t("button2")}</CustomButton>
          </div>
        </>
      ) : (
        <div className="w-full px-6 mt-5 flex flex-col gap-4">
          {/* VOLCANO LEVEL */}
          <div className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-4">
              <Image src={Volcano} alt="Volcano" width={72} />
              <div>
                <h2 className="text-primary font-semibold">{t2("row1")}</h2>
                <p className="text-sm text-secondary">{t2("rowtitle")}</p>
              </div>
            </div>
          </div>

          {/* MAGMA LEVEL */}
          <div className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-4">
              <Image src={Magma} alt="Magma" width={72} />
              <div>
                <h2 className="text-primary font-semibold">{t2("row2")}</h2>
                <p className="text-sm text-secondary">{t2("rowtitle")}</p>
              </div>
            </div>
            <Image src={CheckIcon} alt="Completed" />
          </div>

          {/* ROCK LEVEL */}
          <div className="flex items-center justify-between border-b mb-30">
            <div className="flex items-center gap-4">
              <Image src={Stone} alt="Stone" width={72} />
              <div>
                <h2 className="text-primary font-semibold">{t2("row3")}</h2>
                <p className="text-sm text-secondary">{t2("rowtitle")}</p>
              </div>
            </div>
            <Image src={CheckIcon} alt="Completed" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Progress;
