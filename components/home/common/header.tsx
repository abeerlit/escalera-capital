import React from "react";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex justify-center items-center pt-1 border-b border-gray-200">
      <Image src="/logo.avif" alt="logo" width={220} height={52} priority />
    </div>
  );
};
