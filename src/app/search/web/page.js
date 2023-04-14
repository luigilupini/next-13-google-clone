import React from 'react';
import WebSearchResults from '@/components/WebSearchResults';

async function getData(query, index) {
  // 👇🏻 This is a hack to simulate a slow API response.
  // await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 seconds
  // console.log({ query, index });
  const url = 'https://www.googleapis.com/customsearch';
  const response = await fetch(
    `${url}/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${query.searchTerm}&start=${index}`,
    {
      next: { revalidate: 86400 }, // 1 day
    }
  );
  if (!response.ok) throw new Error('Oops! something went wrong.');
  const data = await response.json();
  return data;
}

export default async function WebSearchPage({ searchParams }) {
  console.log('search/web/page.js ᗌ', { searchParams });
  // 👇🏻 We default to 1 if no start query param is provided.
  const startIndex = searchParams.start || 1;
  const results = await getData(searchParams, startIndex);
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
      {results && <WebSearchResults results={results} />}
    </main>
  );
}
