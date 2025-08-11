"use client";
import React from "react";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: string; // allow passing input type
}

const CustomInput: React.FC<CustomInputProps> = ({
  className = "",
  type = "text", // default to text if not provided
  ...props
}) => {
  return (
    <input
      type={type}
      className={`border-2 border-primary rounded-[8px] bg-white px-3 py-2 
        text-base focus:outline-none w-full ${className}`}
      {...props}
    />
  );
};

export default CustomInput;
