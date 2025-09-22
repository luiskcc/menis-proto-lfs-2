'use client';

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
      title: "Nuevo Proyecto de Arquitectura Volcánica en Tenerife",
      year: "2024",
      image: "/magma/section-2/Fernando Alda_057.jpg",
      category: "2024/23"
    },
    {
      id: 2,
      title: "Complejo Deportivo Innovador con Tecnología Sostenible", 
      year: "2024",
      image: "/magma/section-2/Hisao Suzuki_04.jpg",
      category: "2024/23"
    },
    {
      id: 3,
      title: "Intervención Urbana en el Puerto de Las Palmas",
      year: "2024", 
      image: "/magma/section-2/Fernando Alda_032.jpg",
      category: "2024/23"
    }
  ];

  const filteredArticles = activeFilter === 'Todo' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeFilter);

  return (
    <section className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-6xl font-roboto font-light tracking-wider text-white text-center mb-4">
            NOTICIAS
          </h2>
          <h3 className="text-2xl lg:text-4xl font-roboto font-light tracking-wider text-white text-center mb-8">
            DESTACADAS
          </h3>
          <div className="w-full h-0.5 bg-white mb-12"></div>
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

        {/* News Grid */}
        <div className="space-y-8">
          {filteredArticles.map((article, index) => (
            <div 
              key={article.id}
              className="group cursor-pointer border-b border-gray-800 pb-8 hover:border-red-600 transition-colors duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                
                {/* Image */}
                <div className="lg:col-span-3 relative">
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                      sizes="(max-width: 768px) 100vw, 75vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
                  </div>
                  
                  {/* Overlay Text on Image */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-lg font-roboto">
                      Añade aquí el título de tu artículo
                    </p>
                  </div>
                </div>

                {/* Year */}
                <div className="lg:col-span-1 flex justify-center lg:justify-end">
                  <span className="text-4xl lg:text-6xl font-roboto font-light text-gray-500 group-hover:text-white transition-colors duration-300">
                    {article.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More News Link */}
        <div className="flex justify-end mt-16">
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

