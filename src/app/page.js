import Image from 'next/image';

import HomeHeader from '@/components/HomeHeader';
import HomeSearch from '@/components/HomeSearch';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main className="flex flex-col items-center mt-24">
        <Image
          src={'/logo.png'}
          width="0"
          height="0"
          sizes="100vw"
          className="h-auto w-72"
          alt="logo"
        />
        <HomeSearch />
      </main>
    </>
  );
}
