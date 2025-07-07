'use client';
import React from 'react';
import Image from 'next/image';
import { BuildingIcon } from '../icons/BuildingIcon';
import Link from 'next/link';
import { PrintIcon } from '../icons/PrintIcon';
import { NextPrevIcon } from '../icons/NextPrevIcon';

type HeaderProps = {
  isPropertyDetails?: boolean;
};

export const Header = ({ isPropertyDetails = false }: HeaderProps) => {

  const handleNext = () => {
    alert('Next property');
  };

  const handlePrev = () => {
    alert('Previous property');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex justify-center items-center pt-1 border-b border-gray-200">
      <Image src="/logo.avif" alt="logo" width={220} height={52} priority />
      {isPropertyDetails && (
        <div className="flex items-center gap-4 absolute right-10">
          <Link
            href="/"
            className="text-sm flex items-center gap-1 text-gray-500 hover:text-gray-700"
          >
            <BuildingIcon />
            Find Comps
          </Link>
          <button
            onClick={handlePrint}
            className="text-sm flex items-center gap-2 cursor-pointer text-gray-500 hover:text-gray-700"
          >
            <PrintIcon />
            Print
          </button>
          {/* <button className="text-sm text-gray-500">Download</button> */}
          <button
            onClick={handlePrev}
            className="text-sm flex items-center gap-1 cursor-pointer text-[#156082] hover:text-[#233C48]"
          >
            <NextPrevIcon className="h-3 w-3 rotate-180" />
            Prev
          </button>
          <button
            onClick={handleNext}
            className="text-sm flex items-center gap-1 cursor-pointer text-[#156082] hover:text-[#233C48]"
          >
            Next
            <NextPrevIcon className="h-3 w-3" />
          </button>
        </div>
      )}
    </div>
  );
};
