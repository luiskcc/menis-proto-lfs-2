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
      location: "SANTA CRUZ DE TENERIFE, SPAIN",
      title: "Nuevo Proyecto de Arquitectura Volcánica en Tenerife",
      year: "2024",
      image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/matriz/first-row/first-row-05.png",
      category: "2024/23"
    },
    {
      id: 2,
      location: "LAS PALMAS DE GRAN CANARIA, SPAIN",
      title: "Complejo Deportivo Innovador con Tecnología Sostenible",
      year: "2024",
      image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/matriz/second-row/second-row-08.png",
      category: "2024/23"
    },
    {
      id: 3,
      location: "SANTA CRUZ DE TENERIFE, SPAIN",
      title: "Intervención Urbana en el Puerto de Las Palmas",
      year: "2024",
      image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/matriz/third-row/third-row-12.png",
      category: "2024/23"
    },
  ];

  const filteredArticles = activeFilter === 'Todo' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeFilter);

  return (
    <section className="bg-black text-white py-20">
      <div className="mx-auto px-20">
        
        {/* Section Title */}
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-4xl lg:text-6xl font-roboto font-light tracking-wider text-white mb-4">
            NOTICIAS
          </h2>
          <h3 className="text-2xl lg:text-4xl font-roboto font-light tracking-wider text-white mb-4">
            DESTACADAS
          </h3>
          <hr class="h-px w-2/3 bg-white border-0 my-8" />
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

        {/* Grid */}
        <div className="grid grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div key={article.id} className="flex flex-col">

              {/* Location Text Above Image */}
              <div className="mb-4">
                <p className="text-white text-sm font-roboto tracking-wider uppercase">
                  {article.location}
                </p>
              </div>

              {/* Main Image - Square */}
              <div className="relative w-full aspect-square bg-black group cursor-pointer">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="33vw"
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
          ))}
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
          </div>
        </div>
      </div>
    </section>
  );
}