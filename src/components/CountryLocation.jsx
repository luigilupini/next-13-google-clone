'use client';

import React, { useEffect, useState } from 'react';

export default function CountryLocation() {
  const [country, setCountry] = useState('United Kingdom');
  useEffect(() => {
    fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.NEXT_PUBLIC_IP_API_KEY}`,
      {
        next: { revalidate: 8600 }, // 1 day
      }
    )
      .then((response) => response.json())
      .then((data) => setCountry(data.country_name));
    setCountry(country);
  }, [country]);
  return <div>{country}</div>;
}
