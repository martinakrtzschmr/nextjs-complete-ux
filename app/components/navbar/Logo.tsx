// FIXME: Remove use client and useState so NextJs can render this files on the server

'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt='Logo'
      className='hidden md:block cursor-pointer'
      height={100}
      width={100}
      src='/images/logo.png'
    />
  );
};

export default Logo;
