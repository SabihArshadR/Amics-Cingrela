"use client"
import Header from "@/components/layout/Header";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import React from "react";

interface DashboardWrapperProps {
  children: React.ReactNode;
}

const DashboardWrapper = ({ children }: DashboardWrapperProps) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="desktop:max-w-[400px] tablet:w-full mobile:w-full">
        <Header />
        <div className="ml-3 mb-2">

        <LanguageSwitcher />
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashboardWrapper;
