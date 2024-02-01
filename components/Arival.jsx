import React from 'react'
import Product from './Product'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";


const Arival = () => {
  return (
    <section>
      <div className='w-full flex justify-between items-center p-4'>
        <h1 className='text-2xl'>Nouvelle Arivage</h1>
        <Link href='/products' className='primary-crl flex gap-2 items-center' >Decouvrir touts <FaArrowRight /> </Link>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </section>

    </section>
  )
}

export default Arival