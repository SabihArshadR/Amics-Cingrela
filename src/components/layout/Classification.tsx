import { useTranslations } from "next-intl";
import React from "react";

const Classification = () => {
  const t = useTranslations("Classification");
  const users = [
    { name: "Craig", surname: "Bloemsma", points: 1000 },
    { name: "Albert", surname: "Mozé Fàbregas", points: 654 },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-lightgreen w-full flex h-[100px] items-center justify-center">
        <h1 className="text-[26px] font-semibold text-white text-center">
          {t("title")}
        </h1>
      </div>
      <div className="w-full">
        <div
          className="grid grid-cols-3 bg-transparentt border-b
         border-secondary text-primary font-semibold py-3 pl-[13px] text-lg"
        >
          <div>{t("tablehead1")}</div>
          <div>{t("tablehead2")}</div>
          <div className="text-right pr-[26px]">{t("tablehead3")}</div>
        </div>
        {users.map((user, index) => (
          <div
            key={index}
            className="grid grid-cols-3 border-b border-secondary pl-[16px] text-secondary text-lg py-[22px]"
          >
            <div>{user.name}</div>
            <div className="truncate">{user.surname}</div>
            <div className="text-lightgreen font-bold text-right pr-[26px]">
              {user.points}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classification;
