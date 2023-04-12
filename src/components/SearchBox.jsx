'use client';

import React, { useState } from 'react';

import { RxCross2 } from 'react-icons/rx';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchBox() {
  // 👇🏻 We use `useSearchParams` hook to get the search params from the URL
  // and set the initial value of the `input` to the value of the params
  const searchParams = useSearchParams();
  // 👇🏻 Ensure this is controlled component when using the `form`
  const [term, setTerm] = useState(
    searchParams.get('searchTerm') || ''
  );
  // 👇🏻 We use `useRouter` hook to navigate to the new `search/web` page
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return; // 👈🏻 `if` term is empty we exit the function
    router.push(`/search/web?searchTerm=${term}`);
  };

  return (
    <form
      className="flex items-center justify-center flex-grow max-w-3xl px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-full focus:outline-none"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
      />
      <RxCross2
        className="text-gray-500 option-link"
        onClick={() => setTerm('')}
      />
      <BiMicrophone className="hidden border-l-2 border-gray-100 option-link sm:inline-flex" />
      <AiOutlineSearch
        className="hidden option-link sm:inline-flex"
        onClick={handleSubmit}
      />
    </form>
  );
}
