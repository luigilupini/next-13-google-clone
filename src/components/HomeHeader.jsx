import Link from 'next/link';
import React from 'react';

import { TbGridDots } from 'react-icons/tb';

export default function HomeHeader() {
  return (
    <header className="p-5 text-sm">
      <div className="flex items-center justify-end gap-4">
        <Link href={'/'}>Gmail</Link>
        <Link href={'/'}>Images</Link>
        <TbGridDots className="header-icon" />
        <button className="px-4 py-2 font-medium text-white transition-all duration-300 bg-blue-500 rounded-md shadow-sm hover:brightness-105">
          Sign in
        </button>
      </div>
    </header>
  );
}
