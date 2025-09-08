'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';


const slides = [
  {
    id: 1,
    image: '/magma.png',
    title: 'Slide 1',
  },
  {
    id: 2,
    image: '/tanque.png',
    title: 'Slide 2',
  },
  {
    id: 3,
    image: 'https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-1/santisimo_2.jpeg',
    title: 'Slide 3',
  },
  {
    id: 4,
    image: 'https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-3/santisimo_35.jpg',
    title: 'Slide 4',
  },
]

export default function HeroCarousel() {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        speed={3000}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: true }}

      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image src={slide.image} alt={slide.title} width={1000} height={1000} className="w-screen h-screen object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}