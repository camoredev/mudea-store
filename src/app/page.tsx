'use client'

import { useSession } from 'next-auth/react';
import Header from '../components/ui/Header'
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <Image 
        src={'/assets/banner-ofertas-desktop.png'}
        className='object-cover w-full h-72'
        width={0}
        height={0}
        sizes='100vw'
        alt='Até 55% de desconto esse mês'
      />
    </>
  );
}
