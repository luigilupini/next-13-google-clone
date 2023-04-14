// 'force-dynamic': Force dynamic rendering and dynamic data fetching of a
// layout or page by disabling all caching of fetch requests and always
// revalidating. > https://github.com/vercel/next.js/issues/43191
export const dynamic = 'force-dynamic';

import React from 'react';
import ImageSearchResults from '@/components/ImageSearchResults';

async function getData(query, index) {
  // 👇🏻 This is a hack to simulate/test slow API response for React Suspense.
  // await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 seconds
  // console.log({ query, index });
  const url = 'https://www.googleapis.com/customsearch';
  const response = await fetch(
    `${url}/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${query.searchTerm}&searchType=image&start=${index}`
  );
  if (!response.ok) {
    throw new Error('Oops! something went wrong.');
  }
  const data = await response.json();
  return data;
}

export default async function ImageSearchPage({ searchParams }) {
  console.log('search/image/page.js ᗌ', { searchParams });
  // 👇🏻 We default to 1 if no start query param is provided.
  const startIndex = searchParams.start || 1;
  const results = await getData(searchParams, startIndex);
  // console.log(searchParams);
  if (!results) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-bold">No results found</h1>
        <p>Try searching something else...</p>
      </div>
    );
  }
  return (
    <main className="text-gray-700 wrapper">
      {results && <ImageSearchResults results={results} />}
    </main>
  );
}
