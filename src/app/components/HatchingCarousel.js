'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

const hatchingImages = [
  {
    id: 1,
    image: '/menis-hatching/01_Sketch.jpg',
    title: 'Sketch 01'
  },
  {
    id: 2,
    image: '/menis-hatching/02_Sketch.jpg',
    title: 'Sketch 02'
  },
  {
    id: 3,
    image: '/menis-hatching/03_Sketch.jpg',
    title: 'Sketch 03'
  },
  {
    id: 4,
    image: '/menis-hatching/1.jpg',
    title: 'Sketch 04'
  },
  {
    id: 5,
    image: '/menis-hatching/2.jpg',
    title: 'Sketch 05'
  },
  {
    id: 6,
    image: '/menis-hatching/3.jpg',
    title: 'Sketch 06'
  }
];

export default function HatchingCarousel() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Title */}
        <div className="mb-8">
          <h2 className="text-xl lg:text-2xl font-roboto font-light tracking-wider text-white mb-2">
            MENIS HATCHING
          </h2>
          <div className="w-16 h-0.5 bg-red-600"></div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
            }}
            autoplay={{ delay: 8000, disableOnInteraction: true }}
            speed={1000}
            className="w-full"
          >
            {hatchingImages.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col">

                  {/* Main Image - Rectangular */}
                  <div className="relative w-full aspect-[4/3] bg-black group cursor-pointer">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={item.id <= 3}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
