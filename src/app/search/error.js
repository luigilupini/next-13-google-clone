'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';

// https://beta.nextjs.org/docs/routing/error-handling#how-errorjs-works
export default function Error({ error, reset }) {
  useEffect(() => {
    console.log('Error: ', error);
  }, [error]);
  return (
    <div className="flex items-center justify-center gap-8 text-gray-700 mt-28">
      <div className="flex flex-col gap-2">
        <h1 className="mb-2 text-5xl font-bold">Oops!</h1>
        <p>Something went wrong :(</p>
        <button
          className="px-4 py-2 mt-4 font-bold text-white bg-gray-500 rounded hover:bg-red-400 w-fit"
          onClick={() => reset()}
        >
          Reset
        </button>
      </div>
      <Image
        className="hidden object-contain md:block"
        src="https://i.gifer.com/DKke.gif"
        width={140}
        height={140}
        alt="Error"
      />
    </div>
  );
}
