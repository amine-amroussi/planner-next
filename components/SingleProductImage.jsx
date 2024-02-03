import Image from 'next/image'
import React from 'react'

const SingleProductImage = () => {
    return (
        <>
            <div className='w-full h-[400px]'>
                <div className='h-full w-full relative overflow-hidden rounded' >
                    <Image src='/product.jpg' alt='si' fill='true' />
                </div>

            </div>
            <div className='flex flex-wrap my-3 gap-3 justify-between ' >
                <div className='w-[23%] h-[100px] relative rounded overflow-hidden border-primary border-2 ' >
                    <Image src='/product.jpg' alt='si' fill={true} />
                </div>
                <div className='w-[23%] h-[100px] relative rounded overflow-hidden opacity-50 cursor-pointer'  >
                    <Image src='/product.jpg' alt='si' fill={true} />
                </div>
                <div className='w-[23%] h-[100px] relative rounded overflow-hidden opacity-50' >
                    <Image src='/product.jpg' alt='si' fill={true} />
                </div>
                <div className='w-[23%] h-[100px] relative rounded overflow-hidden opacity-50' >
                    <Image src='/product.jpg' alt='si' fill={true} />
                </div>
            </div>
        </>
    )
}

export default SingleProductImage