import Image from 'next/image';

import HomeHeader from '@/components/HomeHeader';
import HomeSearch from '@/components/HomeSearch';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main className="flex flex-col items-center mt-24">
        <Image
          width="300"
          height="100"
          src={'/logo.png'}
          alt="logo"
        />
        <HomeSearch />
      </main>
    </>
  );
}
