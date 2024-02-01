import AddToCard from '@/components/AddToCard'
import Amount from '@/components/Amount'
import SingleProductImage from '@/components/SingleProductImage'
import Image from 'next/image'
import React from 'react'

const page = ({ params: { id } }) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className=" rounded-lg ">
          <SingleProductImage />
        </div>
        <div className=" rounded-lg space-y-3">
          <h1 className='text-4xl font-semibold' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quia </h1>
          <p className='text-gray-400 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eos similique quae porro ducimus facere, quisquam dignissimos quaerat pariatur error illum molestiae vel minus optio?</p>
          <h3 className='text-xl' >SKU : 13544A20</h3>
          <h3 className='text-xl' >In Stock : <span className='bg-green-200 px-3 py-1 rounded text-green-600' >Availlable</span></h3>
          <div>
            <h3 className='text-xl mb-2'>Quantite </h3>
            <Amount />
          </div>
          <AddToCard />
        </div>
      </div>
    </div>
  )
}

export default page