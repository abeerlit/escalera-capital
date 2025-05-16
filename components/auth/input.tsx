import React from "react";

type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

export const Input = ({ type, placeholder, value, onChange }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full py-2 border-b border-gray-300 focus:outline-none"
    />
  );
};
