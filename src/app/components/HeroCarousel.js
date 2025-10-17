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
    image: '/hero-carousel-landing/DRAGO.tif',
    title: 'Drago',
  },
  {
    id: 2,
    image: '/hero-carousel-landing/MAGMA.tif',
    title: 'Magma Arts & Congress',
  },
  {
    id: 3,
    image: '/hero-carousel-landing/PRESIDENCIA.tif',
    title: 'Presidencia',
  },
  {
    id: 4,
    image: '/hero-carousel-landing/TANQUE.tif',
    title: 'Tanque',
  },
  {
    id: 5,
    image: '/hero-carousel-landing/TORUN 3.tif',
    title: 'Torun',
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