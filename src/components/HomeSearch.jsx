'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { AiOutlineSearch } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';

export default function HomeSearch() {
  const [input, setInput] = useState('');
  const [searchSpinner, setSearchSpinner] = useState(false);
  const router = useRouter();
  const handleSubmit = (e) => {
    // If you need interactivity consider converting to a Client Component.
    e.preventDefault();
    if (!input.trim()) return; // exit logic if input is empty
    console.log(input);
    router.push(`/search/web?searchTerm=${input}`);
  };
  const randomSearch = async () => {
    setSearchSpinner(true);
    const response = await fetch(
      'https://random-word-api.herokuapp.com/word'
    );
    if (!response.ok) throw new Error('Oops, something went wrong.');
    const data = await response.json();
    router.push(`/search/web?searchTerm=${data[0]}`);
    setSearchSpinner(false);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center w-full mx-auto mt-5 border border-gray-200 max-w-[90%] py-3 px-5 rounded-full hover:shadow-md transition-shadow duration-300 focus-within:shadow-md sm:max-w-lg md:max-w-2xl"
      >
        <AiOutlineSearch className="mr-3 text-xl text-gray-500" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <BiMicrophone className="mr-3 text-xl text-gray-500" />
      </form>
      <div className="flex flex-col justify-center gap-2 mt-8 sm:gap-4 sm:flex-row">
        <button className="btn" onClick={handleSubmit}>
          Google Search
        </button>
        <button
          disabled={searchSpinner}
          className="flex items-center justify-center btn disabled:opacity-80"
          onClick={randomSearch}
        >
          {searchSpinner ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="loading.svg"
              alt="loading"
              className="h-6 text-center"
            />
          ) : (
            'I am Feeling Lucky'
          )}
        </button>
      </div>
    </>
  );
}
