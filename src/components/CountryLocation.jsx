'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

async function getCountryData() {
  const response = await fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.NEXT_PUBLIC_IP_API_KEY}`,
    {
      next: { revalidate: 8600 }, // 1 day
    }
  );
  if (!response.ok) {
    throw new Error('Something went wrong!');
  }
  const data = await response.json();
  return data;
  s;
}

export default function CountryLocation() {
  const [country, setCountry] = useState('United Kingdom');
  const [flag, setFlag] = useState(
    'https://ipgeolocation.io/static/flags/gb_64.png'
  );
  useEffect(() => {
    getCountryData().then((data) => {
      setCountry(data.country_name);
      setFlag(data.country_flag);
    });
  }, []);
  return (
    <div className="flex items-center gap-2">
      {country}
      <Image
        src={flag}
        className="object-cover w-4 h-4 border-2 border-gray-100 rounded-full opacity-75"
        width={16}
        height={16}
        priority="true"
        alt="logo"
      />
    </div>
  );
}
