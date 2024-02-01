import Product from '@/components/Product'
import ProductsFilter from '@/components/ProductsFilter'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className='w-full h-[350px] my-10 overflow-hidden rounded-lg relative' >
                <Image src='/adults-banner.jpg' fill objectFit='cover' className='' />
            </div>
            <h1 className='text-4xl'>Pour Les Enfants</h1>
            <p className='text-gray-400 my-8' >(20) Produits</p>
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
        </div>
    )
}

export default page