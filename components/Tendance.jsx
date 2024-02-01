'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
import 'swiper/css';
import Link from 'next/link';

import { FaArrowRight } from "react-icons/fa";
import { SwiperItem } from './SwiperItem';


const Tendance = () => {
  return (
    <div className='my-6'>

      <div className='w-full flex justify-between items-center my-7'>
        <h1 className='text-2xl'>Produit en Tandence</h1>
        <Link href='/products' className='primary-crl flex gap-2 items-center' >Decouvrir touts <FaArrowRight /> </Link>
      </div>


      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={4}
        navigation
        autoplay={true}
        
        className='h-full'
      >
        <SwiperSlide className=''>
          <SwiperItem />
        </SwiperSlide>
        <SwiperSlide className=''>
          <SwiperItem />
        </SwiperSlide>
        <SwiperSlide className=''>
          <SwiperItem />
        </SwiperSlide>
        <SwiperSlide className=''>
          <SwiperItem />
        </SwiperSlide>
        <SwiperSlide className=''>
          <SwiperItem />
        </SwiperSlide>
       


      </Swiper>
    </div>
  )
}

export default Tendance