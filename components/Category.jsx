import Image from 'next/image'
import React from 'react'
import SectionTitle from './SectionTitle'

function Category() {
    return (
        <>
        <SectionTitle title='Choisir vous category' />
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 p-3">
                <div className="flex items-center justify-center flex-col rounded-lg border bg-blue-100 text-center relative category overflow-hidden h-[310px]">

                    <h2 className='uppercase absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-5xl font-extrabold w-96 z-10 transition-colors' >Pour les enfents</h2>

                    <div>
                        <Image src='/kids.svg' alt='kids planner' className='m-x-auto image transition-all ease-out delay-100 translate-y-[290px]' width={400} height={300} />
                    </div>
                </div>
                <div className="flex items-center justify-center flex-col rounded-lg border bg-yellow-100 text-center relative category overflow-hidden h-[310px]">

                    <h2 className='uppercase absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-5xl font-extrabold w-96 z-10 transition-colors' >Pour les adults</h2>

                    <div>
                        <Image src='/adults.svg' alt='kids planner' className='m-x-auto image transition-all ease-out delay-100 translate-y-[290px]' width={400} height={300} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category