import React from "react";
import Image from "next/image";

type HeaderProps = {
  isPropertyDetails?: boolean;
};

export const Header = ({ isPropertyDetails = false }: HeaderProps) => {
  return (
    <div className="flex justify-center items-center pt-1 border-b border-gray-200">
      <Image src="/logo.avif" alt="logo" width={220} height={52} priority />
      {
        isPropertyDetails && (
          <div className="flex items-center gap-4 absolute right-10">
            <button className="text-sm text-gray-500">Find Comps</button>
            <button className="text-sm text-gray-500">Print</button>
            <button className="text-sm text-gray-500">Download</button>
            <button className="text-sm text-gray-500">Previous</button>
            <button className="text-sm text-gray-500">Next</button>
          </div>
        )
      }
    </div>
  );
};
