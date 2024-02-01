'use client'

import Arival from '@/components/Arival'
import Banner from '@/components/Banner'
import Category from '@/components/Category'
import Hero from '@/components/Hero'
import Tendance from '@/components/Tendance'
import Testemonials from '@/components/Testemonials'
import Writing from '@/components/Writing'
import { useAppContext } from '@/context/app_context'
import Image from 'next/image'

export default function Home() {

  console.log(useAppContext());

  return (
    <main className="container">
      <Hero />
      <Banner />
      <Category />
      <Arival />
      <Tendance />
      <Writing />
      <Testemonials />
    </main>
  )
}
