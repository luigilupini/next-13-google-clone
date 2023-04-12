'use client';

import {
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import React from 'react';
import { IoSearchSharp, IoImagesOutline } from 'react-icons/io5';

export default function SearchHeaderOptions() {
  const router = useRouter();
  const searchParams = useSearchParams().get('searchTerm');
  console.log({ searchParams });
  // 👇🏻 We use `usePathname` hook to get the pathname from the URL and use it
  // to determine which option is active and which is not active.
  const pathname = usePathname();
  console.log({ pathname });
  const selectTab = (tab) => {
    router.push(`/search/${tab}?searchTerm=${searchParams}`);
  };
  return (
    <div className="flex justify-center gap-4 text-sm text-gray-700 border-b-2 select-none md:justify-start">
      <div
        onClick={() => selectTab('web')}
        className={`option-icon ${
          pathname === '/search/web' &&
          'text-blue-600 border-blue-600'
        }`}
      >
        <IoSearchSharp /> All
      </div>
      <div
        onClick={() => selectTab('image')}
        className={`option-icon ${
          pathname === '/search/image' &&
          'text-blue-600 border-blue-600'
        }`}
      >
        <IoImagesOutline /> Images
      </div>
    </div>
  );
}
