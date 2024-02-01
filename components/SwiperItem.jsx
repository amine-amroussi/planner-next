import Image from 'next/image'
import React from 'react'

export const SwiperItem = () => {
  return (
    <div className=' flex gap-3 w-full items-center' >
      <Image src='https://m.media-amazon.com/images/I/816eA58NCEL.__AC_SX300_SY300_QL70_FMwebp_.jpg' alt='planner' width={150} height={200} />

      <div className=''>
        <h1 className='text-xl line-clamp-2 font-bold' >AT-A-GLANCE 2024 Weekly Planner & Appointment Book.</h1>
        <h2 className='text-md font-medium mt-2 mb-4 text-gray-400'>Category</h2>
        <h2>250 DH</h2>
      </div>

    </div>
  )
}
