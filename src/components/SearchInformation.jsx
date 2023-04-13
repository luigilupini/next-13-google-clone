import React from 'react';

export default function SearchInformation({ searchInformation }) {
  return (
    <p className="pb-3 text-sm text-gray-500">
      About {searchInformation?.formattedTotalResults} results (
      {searchInformation?.formattedSearchTime} seconds)
    </p>
  );
}
