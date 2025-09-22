'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

const obras = [
  {
    id: 1,
    location: "SANTA CRUZ DE TENERIFE, SPAIN",
    title: "Parque Cultural Viera y Clavijo",
    image: "/magma/hero/RH1539-23.jpg",
    description: "Cultural park and architectural complex"
  },
  {
    id: 2,
    location: "SANTA CRUZ DE TENERIFE, SPAIN", 
    title: "Twin Buildings: The Essential Services",
    image: "/magma/section-2/Fernando Alda_057.jpg",
    description: "Modern cylindrical architecture"
  },
  {
    id: 3,
    location: "SANTA CRUZ DE TENERIFE, SPAIN",
    title: "Jardín del Espacio Cultural El Tanque",
    image: "/tanque.png",
    description: "Cultural space and garden design"
  },
  {
    id: 4,
    location: "LAS PALMAS DE GRAN CANARIA, SPAIN",
    title: "Magma Arts & Congress",
    image: "/magma/section-2/Hisao Suzuki_04.jpg",
    description: "Contemporary arts and congress center"
  },
  {
    id: 5,
    location: "LA LAGUNA, TENERIFE, SPAIN",
    title: "Iglesia Santísimo Redentor",
    image: "/magma/section-2/RH1539-30.jpg",
    description: "Religious architecture with volcanic materials"
  }
];

export default function ObrasCarousel() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-6xl font-roboto font-light tracking-wider text-white mb-4">
            PROYECTOS
          </h2>
          <div className="w-24 h-0.5 bg-red-600"></div>
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
            {obras.map((obra) => (
              <SwiperSlide key={obra.id}>
                <div className="flex flex-col">
                  
                  {/* Location Text Above Image */}
                  <div className="mb-4">
                    <p className="text-white text-sm font-roboto tracking-wider uppercase">
                      {obra.location}
                    </p>
                  </div>

                  {/* Main Image - Taller Vertical Rectangle */}
                  <div className="relative w-full aspect-[2/3] bg-black group cursor-pointer">
                    <Image
                      src={obra.image}
                      alt={obra.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={obra.id <= 3}
                    />
                  </div>

                  {/* Title Text Below Image */}
                  <div className="mt-4">
                    <h3 className="text-white text-base md:text-lg font-roboto font-light tracking-wide">
                      {obra.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Projects Link */}
        <div className="flex justify-end mt-12">
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="transform group-hover:translate-x-2 transition-transform duration-300">
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="text-white group-hover:text-red-600 transition-colors duration-300"
              >
                <path 
                  d="M7 17L17 7M17 7H7M17 7V17" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-right">
              <h3 className="text-2xl lg:text-4xl font-roboto font-light tracking-wider text-white group-hover:text-red-600 transition-colors duration-300">
                VER TODAS
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}