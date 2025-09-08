'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: '/magma/hero/RH1539-23.jpg',
    title: 'Magma Arts & Congress',
  },
  {
    id: 2,
    image: '/tanque.png',
    title: 'Project Tanque',
  },
  {
    id: 3,
    image: '/magma/section-2/Fernando Alda_057.jpg',
    title: 'Architectural Detail',
  },
  {
    id: 4,
    image: '/magma/section-2/Hisao Suzuki_04.jpg',
    title: 'Interior Space',  
  },
]

export default function HeroCarousel() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        speed={1500}
        autoplay={{ delay: 6000, disableOnInteraction: true }}
        className="w-full h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image 
                src={slide.image} 
                alt={slide.title} 
                fill
                className="object-cover"
                priority={slide.id === 1}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}