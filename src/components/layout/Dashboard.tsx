"use client";
import React from "react";
import Image from "next/image";
import Map from "@/assets/icon_map 2.svg";
import Profile from "@/assets/icon_profile 2.svg";
import Amics from "@/assets/icon_amics 2.svg";
import Axe from "@/assets/icon_knowmore 2.svg";
import Faq from "@/assets/icon_faqs 2.svg";
import Direction from "@/assets/icon_recomanations 2.svg";
import Logo from "@/assets/tactica.jpg";
import Card from "../ui/Card";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const Dashboard = () => {
  const router = useRouter();
  const t = useTranslations("Dashboard");

  return (
    <div className="pb-10">
      <div className="mix-blend-normal">
        <Image src={Logo} alt="Logo" width={430} priority />
      </div>
      <div className="flex justify-between mt-[33px] px-4 gap-4">
        <Card
          onClick={() => {
            router.push("/map");
          }}
        >
          <Image src={Map} alt="Map Icon" />
          <h1 className="text-primary text-center w-full break-words px-1 text-sm">
            {t("card1")}
          </h1>
        </Card>
        <Card>
          <Image src={Profile} alt="Profile Icon" />
          <h1 className="text-primary text-center w-full break-words px-1 text-sm">
            {t("card2")}
          </h1>
        </Card>
        <Card>
          <Image src={Amics} alt="Friends Icon" />
          <h1 className="text-primary text-center w-full break-words px-1 text-sm">
            {t("card3")}
          </h1>
        </Card>
      </div>
      <div className="flex justify-between mt-5 px-4 gap-4">
        <Card>
          <Image src={Axe} alt="Know More Icon" />
          <h1 className="text-primary text-center w-full break-words px-1 text-sm">
            {t("card4")}
          </h1>
        </Card>
        <Card
          onClick={() => {
            router.push("/faqs");
          }}
        >
          <Image src={Faq} alt="FAQs Icon" />
          <h1 className="text-primary text-center w-full break-words px-1 text-sm">
            {t("card5")}
          </h1>
        </Card>
        <Card>
          <Image src={Direction} alt="Recommendations Icon" />
          <h1 className="text-primary text-center w-full break-words px-1 text-sm">
            {t("card6")}
          </h1>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
