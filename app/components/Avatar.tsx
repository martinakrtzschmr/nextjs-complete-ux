// FIXME: Remove use client and useState so NextJs can render this files on the server

'use client';

import Image from 'next/image';

const Avatar = () => {
  return (
    <Image
      className='rounded-full'
      height={30}
      width={30}
      alt='Avatar'
      src='/images/placeholder.jpg'
    />
  );
};

export default Avatar;
