'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NoticiasPage() {
  const [activeFilter, setActiveFilter] = useState('Todo');

  const filterOptions = [
    'Todo', '2024/23', '2022/21', '2020/19', '2018/17', '2014/13', '2012/11', '-2010'
  ];

  const newsArticles = [
    {
      id: 1,
      slug: "premio-aga-khan-2024",
      title: "Primer Premio World's Best Mosque - Aga Khan Architecture Award 2024 - al Warqa'a Mosque - Dubai",
      location: "DUBAI, EMIRATOS ÁRABES UNIDOS",
      date: "Diciembre 2024",
      image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/matriz/first-row/first-row-01.png",
      category: "2024/23"
    },
    {
      id: 2,
      slug: "festival-arte-arquitectura-2024",
      title: "Instalación en el Festival de Arte y Arquitectura Multiples Faith + Form + Interfaith Design NfA",
      location: "LAS PALMAS DE GRAN CANARIA, SPAIN",
      date: "Noviembre 2024",
      image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/matriz/second-row/second-row-02.png",
      category: "2024/23"
    },
    {
      id: 3,
      slug: "transferir-norte-arquitectos",
      title: "Transferir en Norte Arquitectos, Santa Cruz de Tenerife",
      location: "SANTA CRUZ DE TENERIFE, SPAIN",
      date: "Octubre 2024",
      image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/matriz/third-row/third-row-03.png",
      category: "2024/23"
    },
    {
      id: 4,
      slug: "museo-del-mundo-2025",
      title: "FERNÁNDO MENIS: Museo del Mundo 2025",
      location: "PLAZA DEL MUNDO, DUBAI",
      date: "Septiembre 2024",
      image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/menis-lab/cuchillitos.png",
      category: "2024/23"
    },
    {
      id: 5,
      slug: "circulo-bellas-artes",
      title: "Círculo de Bellas Artes - Instalación Permanente",
      location: "MADRID, SPAIN",
      date: "Agosto 2024",
      image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/menis-lab/tanque.jpg",
      category: "2024/23"
    },
    {
      id: 6,
      slug: "jardin-el-tanque",
      title: "Jardín del Espacio Cultural El Tanque",
      location: "SANTA CRUZ DE TENERIFE, SPAIN",
      date: "Julio 2024",
      image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/menis-lab/navidad.jpg",
      category: "2024/23"
    },
    {
      id: 7,
      slug: "premio-arquitectura-contemporanea",
      title: "Premio de Arquitectura Contemporánea",
      location: "BARCELONA, SPAIN",
      date: "Mayo 2022",
      image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/matriz/first-row/first-row-02.png",
      category: "2022/21"
    },
    {
      id: 8,
      slug: "exposicion-internacional-diseno",
      title: "Exposición Internacional de Diseño",
      location: "MILAN, ITALY",
      date: "Abril 2022",
      image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/matriz/second-row/second-row-03.png",
      category: "2022/21"
    },
    {
      id: 9,
      slug: "proyecto-urbano-sostenible",
      title: "Proyecto Urbano Sostenible",
      location: "VALENCIA, SPAIN",
      date: "Marzo 2022",
      image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/matriz/third-row/third-row-01.png",
      category: "2022/21"
    },
  ];

  const filteredArticles = activeFilter === 'Todo'
    ? newsArticles
    : newsArticles.filter(article => article.category === activeFilter);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Filter Menu */}
      <section className="pb-12 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 text-gray-400">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-lg font-roboto tracking-wider transition-colors duration-300 hover:text-white ${
                  activeFilter === filter ? 'text-white border-b-2 border-red-600' : ''
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="pb-20 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredArticles.map((article) => (
              <Link key={article.id} href={`/noticias/${article.slug}`} className="flex flex-col group cursor-pointer">

                {/* Date */}
                <div className="mb-3">
                  <p className="text-red-600 text-sm font-roboto tracking-wider uppercase">
                    {article.date}
                  </p>
                </div>

                {/* Image */}
                <div className="relative w-full aspect-[4/3] bg-black mb-4 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Location */}
                <div className="mb-3">
                  <p className="text-gray-400 text-xs font-roboto tracking-widest uppercase">
                    {article.location}
                  </p>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-white text-lg font-roboto font-light leading-relaxed group-hover:text-red-600 transition-colors duration-300">
                    {article.title}
                  </h3>
                </div>

                {/* Read More Link */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 text-red-600">
                    <span className="text-sm font-roboto tracking-wider">Leer más</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="transform group-hover:translate-x-1 transition-transform duration-300"
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
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          {filteredArticles.length > 0 && (
            <div className="flex justify-center mt-16">
              <button className="group px-8 py-4 border border-white/20 hover:border-red-600 transition-colors duration-300">
                <span className="text-white group-hover:text-red-600 font-roboto tracking-wider">
                  CARGAR MÁS NOTICIAS
                </span>
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
