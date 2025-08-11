"use client";
import Image from "next/image";
import Logo from "@/assets/logo_EACB.png";
import React from "react";
import CustomButton from "../ui/Button";
import CustomInput from "../ui/Input";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const ManualLogin = () => {
  const router = useRouter();
  const t = useTranslations("Register");
  return (
    <div className="flex flex-col justify-center items-center py-5 px-4 min-h-screen">
      <div className="desktop:max-w-[400px] tablet:w-full mobile:w-full">
        <div className="flex justify-center">
          <Image src={Logo} alt="Logo" width={176} height={148} />
        </div>
        <div className="mt-[66px] flex flex-col gap-[22px]">
          <div>
            <h1 className="mb-2 text-primary">{t("field3")}*</h1>
            <CustomInput />
          </div>
          <div>
            <h1 className="mb-2 text-primary">{t("field4")}*</h1>
            <CustomInput />
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-[45px]">
          <CustomButton
            onClick={() => {
              router.push("/");
            }}
          >
            {t("button1")}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ManualLogin;
