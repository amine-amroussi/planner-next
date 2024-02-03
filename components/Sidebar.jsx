'use client'
import { useAppContext } from '@/context/app_context'
import { urls } from '@/utils/constaint'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {

    const { isSidebarActive, closeSidebar } = useAppContext()

    const classes = isSidebarActive ? 'sm:hidden h-screen w-screen bg-[#00000070] fixed left-0 top-0 z-[1000] transition ease-in-out delay-100' : 'sm:hidden translate-x-[-320px] h-screen w-screen bg- fixed left-0 top-0 z-[1000] transition ease-in-out delay-100'

    return (
        <aside className={classes} >
            <div className='max-w-80  h-full bg-white  p-3 flex flex-col ' >
                <div className='flex justify-between border-b py-2'  >
                    <Image src='/logo.svg' alt='Logo' width={90} height={40} />
                    <button onClick={closeSidebar}>
                        <Image src='/close.svg' alt='Close' width={20} height={20} />
                    </button>
                </div>
                <div className='my-3'>
                    <ul>
                        {urls.map(url => (
                            <li className='my-2 w-full' key={url.link}>
                                <Link href={url.link} className='block bg-gray-100 p-3 rounded-md transition ease-in-out delay-100 hover:bg-gray-200' >{url.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </aside>
    )
}

export default Sidebar 