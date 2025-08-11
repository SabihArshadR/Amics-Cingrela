"use client";
import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo_EACB.png";
import Vector from "@/assets/Vector.svg";
import User from "@/assets/user.svg";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const Header = () => {
  const t = useTranslations("Head");
  const router = useRouter();

  return (
    <div className="flex justify-between items-center w-full px-3">
      <div className="mt-4">
        <Image src={Vector} alt="Vector" className="ml-2" />
        <h1 className="text-secondary text-base font-bold mt-1">
          {t("title1")}
        </h1>
      </div>

      <div>
        <Image
          src={Logo}
          alt="Logo"
          width={176}
          height={148}
          className="py-5"
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="mt-2 text-center" onClick={() => router.push("/register")}>
          <Image src={User} alt="user" className="ml-5" />
          <h1 className="text-secondary text-base font-bold">{t("title2")}</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
