"use client";
import { Checkbox } from "@heroui/react";
import Image from "next/image";
import Logo from "@/assets/logo_EACB.png";
import React from "react";
import CustomButton from "../ui/Button";
import CustomInput from "../ui/Input";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import CustomPhoneInput from "../ui/PhoneField";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const router = useRouter();
  const t = useTranslations("Register");

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    origin: "",
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const handleChange = (field: any, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^[+\d\s]*$/.test(phone);
  };

  const handleSubmit = async () => {
    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!validatePhone(formData.phone)) {
      alert("Phone number can only contain '+', numbers, and spaces.");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({} as any));
      if (res.ok) {
        console.log("User created", data);
        router.push("/");
      } else {
        const message =
          (data && (data.error || data.message)) ||
          `Request failed (${res.status})`;
        alert(message);
      }
    } catch (err: any) {
      alert(err?.message || "Registration failed");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center py-5 px-4 min-h-screen">
      <div className="desktop:max-w-[400px] tablet:w-full mobile:w-full">
        <div className="flex justify-center">
          <Image src={Logo} alt="Logo" width={176} height={148} />
        </div>
        <div className="mt-[66px] flex flex-col gap-[22px]">
          <div>
            <h1 className="mb-2 text-primary">{t("field1")}*</h1>
            <CustomInput
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
            />
          </div>
          <div>
            <h1 className="mb-2 text-primary">{t("field2")}*</h1>
            <CustomInput
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
            />
          </div>
          <div>
            <h1 className="mb-2 text-primary">{t("field3")}*</h1>
            <CustomInput
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
          <div>
            <h1 className="mb-2 text-primary">{t("field4")}*</h1>
            <div className="relative">
              <CustomInput
                value={formData.password}
                type={showPassword ? "text" : "password"}
                onChange={(e) => handleChange("password", e.target.value)}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 cursor-pointer text-primary"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div>
            <h1 className="mb-2 text-primary">{t("field5")}*</h1>
            {/* <CustomPhoneInput
              value={formData.phone}
              onChange={(e) => {
                const value = e.target ? e.target.value : e;
                if (validatePhone(value)) {
                  handleChange("phone", value);
                }
              }}
            /> */}
          </div>
          <div>
            <h1 className="mb-2 text-primary">{t("field6")}*</h1>
            <CustomInput
              value={formData.origin}
              onChange={(e) => handleChange("origin", e.target.value)}
            />
          </div>
        </div>
        <div className="mt-[47px] flex flex-col gap-7">
          <div className="flex">
            <Checkbox color="success" />
            <h1 className="text-primary">{t("check1")}</h1>
          </div>
          <div className="flex">
            <Checkbox color="success" />
            <h1 className="text-primary">
              {t("check21")}{" "}
              <span className="text-red-500">{t("check22")}</span>
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-[45px]">
          <CustomButton onClick={handleSubmit}>{t("button1")}</CustomButton>
          <CustomButton className="bg-secondary">{t("button2")}</CustomButton>
        </div>
        <button
          onClick={() => signIn()}
          className="flex w-full items-center justify-center gap-2 rounded-[8px]
           bg-white py-2 font-semibold text-[20px] text-black mt-[16px]"
        >
          <FcGoogle size={20} /> Continue with Google
        </button>
        <button
          onClick={() => signIn()}
          className="flex w-full items-center justify-center gap-2 rounded-[8px]
           bg-blue-600 py-2 font-semibold text-[20px] text-white mt-[16px]"
        >
          <FaFacebook size={20} /> Continue with Facebook
        </button>
      </div>
    </div>
  );
};

export default Register;
