/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

import SearchInformation from './SearchInformation';

const example = {
  kind: 'customsearch#result',
  title: 'Watch The Challenge: Vendettas Season 31 | Prime Video',
  htmlTitle:
    'Watch The Challenge: <b>Vendettas</b> Season 31 | Prime Video',
  link: 'https://m.media-amazon.com/images/I/81aEio3y0-L._RI_.jpg',
  displayLink: 'www.amazon.com',
  snippet: 'Watch The Challenge: Vendettas Season 31 | Prime Video',
  htmlSnippet:
    'Watch The Challenge: <b>Vendettas</b> Season 31 | Prime Video',
  mime: 'image/jpeg',
  fileFormat: 'image/jpeg',
  image: {
    contextLink:
      'https://www.amazon.com/The-Challenge-Vendettas-Season-31/dp/B078FWTRS1',
    height: 1920,
    width: 2560,
    byteSize: 300125,
    thumbnailLink:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqc3Wln9t23pOfma7XJOtnNx0PJlsNSpOpEvdWzdkpP8Q6DvBW_oaAthY&s',
    thumbnailHeight: 113,
    thumbnailWidth: 150,
  },
};

export default function ImageSearchResults({ results }) {
  const { items, searchInformation } = results;
  // console.log(items);
  return (
    <main className="w-full pb-20 mx-auto sm:px-[5%] md:px-[10%]">
      <SearchInformation searchInformation={searchInformation} />
      <section className="grid items-center justify-between mt-4 mb-8 overflow-hidden gap-x-[2vw] gap-y-[1vw] md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {items.map((result) => (
          <article key={result.link} className="group min-w-[200px]">
            <Link href={result.image.contextLink}>
              <img
                src={result.link}
                alt={result.title}
                className="object-cover w-full rounded-sm h-52"
              />
            </Link>
            <Link href={result.image.contextLink}>
              <h2 className="mt-1 text-base font-medium text-blue-800 truncate group-hover:underline decoration-blue-800">
                {result.title}
              </h2>
            </Link>
            <Link
              href={result.image.contextLink}
              className="p-0 text-sm text-gray-600"
            >
              {result.displayLink}
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
