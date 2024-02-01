import Product from '@/components/Product'
import ProductsFilter from '@/components/ProductsFilter'
import React from 'react'

const page = () => {
  return (
    <section >
      <section>
        <h1 className='text-4xl mt-8 font-bold' >Tout les produits </h1>
        <p className='text-gray-400 mb-8' >(20) Produits</p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <ProductsFilter />
          <div className=" rounded-lg min-h-screen  lg:col-span-2 flex flex-wrap -m-4">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
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

export default page