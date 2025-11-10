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
    image: 'https://demoairbnbbucket.s3.us-east-2.amazonaws.com/IMAGEN_PRINCIPAL_REAL/DRAGO+2.jpg',
    title: 'Drago',
  },
  {
    id: 2,
    image: 'https://demoairbnbbucket.s3.us-east-2.amazonaws.com/IMAGEN_PRINCIPAL_REAL/MAGMA+2.jpg',
    title: 'Magma Arts & Congress',
  },
  {
    id: 3,
    image: 'https://demoairbnbbucket.s3.us-east-2.amazonaws.com/IMAGEN_PRINCIPAL_REAL/PRESIDENCIA+3.jpg',
    title: 'Presidencia',
  },
  {
    id: 4,
    image: 'https://demoairbnbbucket.s3.us-east-2.amazonaws.com/IMAGEN_PRINCIPAL_REAL/TANQUE+2.jpg',
    title: 'Tanque',
  },
  {
    id: 5,
    image: 'https://demoairbnbbucket.s3.us-east-2.amazonaws.com/IMAGEN_PRINCIPAL_REAL/TORUM+3.jpg',
    title: 'Torun',
  },
  {
    id: 6,
    image: 'https://demoairbnbbucket.s3.us-east-2.amazonaws.com/IMAGEN_PRINCIPAL_REAL/TORUN+4.jpg',
    title: 'Torun',
  }
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
                sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, (max-width: 1536px) 1536px, 1920px"
                quality={90}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}