import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { RiSettings3Line } from 'react-icons/ri';
import { TbGridDots } from 'react-icons/tb';

import SearchBox from './SearchBox';
import SearchHeaderOptions from './SearchHeaderOptions';

export default function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex items-center justify-between w-full p-6">
        <Link href="/">
          <Image
            src={'/logo.png'}
            width="0"
            height="0"
            sizes="100vw"
            className="w-auto h-10"
            priority="true"
            alt="logo"
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden gap-2 md:inline-flex">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        <button className="px-4 py-2 ml-2 font-medium text-white transition-all duration-300 bg-blue-500 rounded-md shadow-sm hover:brightness-105">
          Sign in
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
