'use client';

import React from 'react';
// `usePathname` and `useSearchParams` are used to get the current pathname and
// search params from the URL. This is useful for building links to other pages
// and updating the URL when the user clicks on a link.
import { usePathname, useSearchParams } from 'next/navigation';
// `Link` is used to build links to other pages.
import Link from 'next/link';

import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from 'react-icons/hi';

// Pagination is the process of separating content into discrete pages. It also
// refers to the automated process of adding consecutive numbers to identify the
// sequential order of pages. Pagination is used to "break up" large amounts of
// content into smaller, manageable "chunks" here that being range of pages. For
// example, if you have 100 pages of content, you can break it up into 10 pages.
export default function PaginationButtons() {
  // `usePathname` returns path of the current route.
  const pathname = usePathname(); // 👈🏻 `/search/web` or `/search/image`
  // `useSearchParams` returns the search params of the current page.
  const searchParams = useSearchParams();
  // 👇🏻 `searchTerm: 'tesla'` or `searchTerm: 'reactjs'`
  const searchTerm = searchParams.get('searchTerm');
  // 👇🏻 `start: '1'` or `start: '11'` or `start: '21'` etc...
  const startIndex = Number(searchParams.get('start')) || 1;
  // Important: `startIndex` needs to default to 1 if not defined as Google API
  // will return an error if the start is less than 1. The `startIndex` is used
  // to tell Google "Custom Search Engine" which page of results to return. For
  // example, if `startIndex` is 1, then we increment it by 10 in our `Link`.

  // prettier-ignore
  console.log('<PaginationButtons>', { pathname, searchTerm, startIndex });

  return (
    <div className="flex justify-between gap-20 pb-16 sm:pb-4 sm:justify-start">
      {/* This only appears when the index is greater than 10. */}
      {startIndex >= 10 && (
        <Link
          // 👇🏻 We decrement `startIndex` by 10 for the previous range.Affects
          // actual `search/web/page.js` or `search/image/page.js` file.
          href={`${pathname}?searchTerm=${searchTerm}&start=${
            startIndex - 10
          }`}
        >
          <div className="flex items-center justify-center cursor-pointer hover:text-blue-700">
            <HiOutlineChevronLeft /> Prev
          </div>
        </Link>
      )}
      {/* This always appears as are index is default 1 and less than 100. */}
      {startIndex <= 99 && ( // 👈🏻 100 is the max number of results.
        <Link
          // 👇🏻 We increment `startIndex` by 10 for the next range. Affects
          // actual `search/web/page.js` or `search/image/page.js` file.
          href={`${pathname}?searchTerm=${searchTerm}&start=${
            startIndex + 10
          }`}
        >
          <div className="flex items-center justify-center cursor-pointer hover:text-blue-700">
            Next
            <HiOutlineChevronRight />
          </div>
        </Link>
      )}
    </div>
  );
}
