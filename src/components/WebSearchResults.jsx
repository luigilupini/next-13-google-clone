import Link from 'next/link';
import React from 'react';

import parse from 'html-react-parser';
import SearchInformation from './SearchInformation';
import PaginationButtons from './PaginationButtons';

export default function WebSearchResults({ results }) {
  const { items, searchInformation } = results;
  return (
    <main className="w-full pb-20 mx-auto">
      <SearchInformation searchInformation={searchInformation} />
      {items.map(({ link, formattedUrl, title, htmlSnippet }) => (
        <article className="max-w-2xl mt-4 mb-8" key={link}>
          <div className="flex flex-col gap-[2px] group">
            <Link
              href={link}
              className="text-[13px] no-underline truncate hover:no-underline"
            >
              {formattedUrl}
            </Link>
            <Link
              href={link}
              className="text-xl font-medium text-blue-800 truncate group-hover:underline decoration-blue-800"
            >
              {title}
            </Link>
            <p className="text-sm text-gray-600">
              {parse(htmlSnippet)}
            </p>
          </div>
        </article>
      ))}
      {/* We add pagination and adjust the URL to reflect the current page. */}
      <PaginationButtons />
    </main>
  );
}
