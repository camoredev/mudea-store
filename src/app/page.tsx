'use client'

import { useSession } from 'next-auth/react';
import Header from '../components/ui/Header'

export default function Home() {
  const { data } = useSession()

  return (
    <>
      <Header />
      <h1>{data?.user?.name}</h1>
    </>
  );
}
