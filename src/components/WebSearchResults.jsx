'use client';

import Link from 'next/link';
import React from 'react';

import parse from 'html-react-parser';

export default function WebSearchResults({ results }) {
  const { items, searchInformation } = results;
  // console.log(items);
  return (
    <div className="w-full pb-20 mx-auto sm:pl-[5%] md:pl-[10%]">
      <p className="pb-3 text-sm text-gray-500">
        About {searchInformation?.formattedTotalResults} results (
        {searchInformation?.formattedSearchTime} seconds)
      </p>
      {items.map((result) => (
        <div className="max-w-2xl mt-4 mb-8" key={result.link}>
          <div className="flex flex-col gap-[2px] group">
            <Link
              href={result.link}
              className="text-[13px] no-underline truncate hover:no-underline"
            >
              {result.formattedUrl}
            </Link>
            <Link
              href={result.link}
              className="text-xl font-medium text-blue-800 truncate group-hover:underline decoration-blue-800"
            >
              {result.title}
            </Link>
            <p className="text-sm text-gray-600">
              {parse(result.htmlSnippet)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
