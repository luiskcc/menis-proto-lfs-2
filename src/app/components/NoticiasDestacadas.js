'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from "next/image";
import { useState } from "react";

export default function NoticiasDestacadas() {
  const [activeFilter, setActiveFilter] = useState('Todo');

  const filterOptions = [
    'Todo', '2024/23', '2022/21', '2020/19', '2018/17', '2014/13', '2012/11', '-2010'
  ];

  const newsArticles = [
    {
      id: 1,
      location: "SANTA CRUZ DE TENERIFE, SPAIN",
      title: "Nuevo Proyecto de Arquitectura Volcánica en Tenerife",
      year: "2024",
      image: "/magma/section-2/Fernando Alda_057.jpg",
      category: "2024/23"
    },
    {
      id: 2,
      location: "LAS PALMAS DE GRAN CANARIA, SPAIN",
      title: "Complejo Deportivo Innovador con Tecnología Sostenible", 
      year: "2024",
      image: "/magma/section-2/Hisao Suzuki_04.jpg",
      category: "2024/23"
    },
    {
      id: 3,
      location: "SANTA CRUZ DE TENERIFE, SPAIN",
      title: "Intervención Urbana en el Puerto de Las Palmas",
      year: "2024", 
      image: "/magma/section-2/Fernando Alda_032.jpg",
      category: "2024/23"
    },
    {
      id: 4,
      location: "LA LAGUNA, TENERIFE, SPAIN",
      title: "Centro Cultural con Materiales Locales Canarios",
      year: "2023",
      image: "/magma/section-2/RH1539-30.jpg",
      category: "2022/21"
    },
    {
      id: 5,
      location: "SANTA CRUZ DE TENERIFE, SPAIN",
      title: "Residencia de Investigación Arquitectónica",
      year: "2022",
      image: "/magma/section-2/RH1539-32.jpg",
      category: "2022/21"
    },
    {
      id: 6,
      location: "LAS PALMAS DE GRAN CANARIA, SPAIN",
      title: "Pavilión Experimental en Barcelona",
      year: "2021",
      image: "/magma/section-2/705-30.jpg",
      category: "2022/21"
    }
  ];

  const filteredArticles = activeFilter === 'Todo' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeFilter);

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Title */}
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-4xl lg:text-6xl font-roboto font-light tracking-wider text-white mb-4">
            NOTICIAS
          </h2>
          <h3 className="text-2xl lg:text-4xl font-roboto font-light tracking-wider text-white mb-4">
            DESTACADAS
          </h3>
          <div className="w-24 h-0.5 bg-red-600"></div>
        </div>

        {/* Filter Menu */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 text-gray-400">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-lg font-roboto tracking-wider transition-colors duration-300 hover:text-white ${
                activeFilter === filter ? 'text-white border-b border-red-600' : ''
              }`}
            >
              {filter}
            </button>
          ))}
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
            {filteredArticles.map((article) => (
              <SwiperSlide key={article.id}>
                <div className="flex flex-col">
                  
                  {/* Location Text Above Image */}
                  <div className="mb-4">
                    <p className="text-white text-sm font-roboto tracking-wider uppercase">
                      {article.location}
                    </p>
                  </div>

                  {/* Main Image - Taller Vertical Rectangle */}
                  <div className="relative w-full aspect-[2/3] bg-black group cursor-pointer">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={article.id <= 3}
                    />
                  </div>

                  {/* Title Text Below Image */}
                  <div className="mt-4">
                    <h3 className="text-white text-base md:text-lg font-roboto font-light tracking-wide">
                      {article.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* More News Link */}
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
                + NOTICIAS
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}