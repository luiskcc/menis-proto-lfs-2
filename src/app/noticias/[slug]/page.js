'use client';

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useParams } from 'next/navigation';

export default function NoticiaFicha() {
  const params = useParams();

  // Sample news data - replace with actual data fetching
  const newsData = {
    title: "Primer Premio World's Best Mosque - Aga Khan Architecture Award 2024",
    subtitle: "al Warqa'a Mosque - Dubai",
    location: "DUBAI, EMIRATOS ÁRABES UNIDOS",
    date: "Diciembre 2024",
    category: "Premios y Reconocimientos",
    coverImage: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/matriz/first-row/first-row-01.png",
    content: [
      "El proyecto al Warqa'a Mosque en Dubai ha sido galardonado con el prestigioso premio World's Best Mosque en los Aga Khan Architecture Awards 2024, reconociendo la excelencia en diseño arquitectónico y su contribución a la arquitectura religiosa contemporánea.",
      "Este reconocimiento internacional destaca el enfoque innovador del estudio en la reinterpretación de espacios sagrados, combinando tradición y modernidad en un diseño que responde tanto a las necesidades espirituales como a los desafíos ambientales de la región.",
      "El diseño incorpora elementos vernáculos adaptados al clima extremo de Dubai, utilizando estrategias pasivas de enfriamiento y un uso cuidadoso de la luz natural para crear un espacio de contemplación y espiritualidad."
    ],
    images: [
      "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/matriz/first-row/first-row-02.png",
      "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/matriz/first-row/first-row-03.png",
      "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/matriz/second-row/second-row-01.png"
    ],
    details: [
      { label: "Cliente", value: "Gobierno de Dubai" },
      { label: "Año", value: "2024" },
      { label: "Superficie", value: "2,500 m²" },
      { label: "Categoría", value: "Arquitectura Religiosa" }
    ]
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero Image */}
      <section className="w-full h-screen relative">
        <Image
          src={newsData.coverImage}
          alt={newsData.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </section>

      {/* Content */}
      <div className="bg-white text-black">
        {/* Header Section */}
        <section className="px-12 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Left Column - Details */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">

                  {/* Category */}
                  <div>
                    <span className="inline-block px-4 py-2 bg-red-600 text-white text-sm font-roboto tracking-wider uppercase">
                      {newsData.category}
                    </span>
                  </div>

                  {/* Date & Location */}
                  <div className="space-y-2">
                    <p className="text-red-600 text-sm font-roboto tracking-wider uppercase">
                      {newsData.date}
                    </p>
                    <p className="text-gray-600 text-xs font-roboto tracking-widest uppercase">
                      {newsData.location}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="pt-8 border-t border-gray-200">
                    <h3 className="text-sm font-roboto font-bold tracking-wider uppercase mb-4">
                      Detalles del Proyecto
                    </h3>
                    <div className="space-y-3">
                      {newsData.details.map((detail, index) => (
                        <div key={index} className="flex flex-col">
                          <span className="text-xs text-gray-500 font-roboto tracking-wider uppercase">
                            {detail.label}
                          </span>
                          <span className="text-sm font-roboto mt-1">
                            {detail.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Share */}
                  <div className="pt-8 border-t border-gray-200">
                    <h3 className="text-sm font-roboto font-bold tracking-wider uppercase mb-4">
                      Compartir
                    </h3>
                    <div className="flex gap-4">
                      <button className="text-gray-400 hover:text-red-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-red-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-red-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="lg:col-span-2 space-y-8">

                {/* Title */}
                <div>
                  <h1 className="text-4xl lg:text-5xl font-roboto font-light tracking-wide mb-4">
                    {newsData.title}
                  </h1>
                  {newsData.subtitle && (
                    <h2 className="text-2xl lg:text-3xl font-roboto font-light text-gray-600">
                      {newsData.subtitle}
                    </h2>
                  )}
                </div>

                {/* Content Paragraphs */}
                <div className="space-y-6 text-base lg:text-lg font-roboto font-light leading-relaxed text-justify">
                  {newsData.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="px-12 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsData.images.map((image, index) => (
                <div key={index} className="relative w-full aspect-[4/3] bg-black group overflow-hidden">
                  <Image
                    src={image}
                    alt={`${newsData.title} - Imagen ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Back to News */}
        <section className="px-12 pb-20">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/noticias"
              className="group inline-flex items-center gap-3 text-black hover:text-red-600 transition-colors duration-300"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="transform group-hover:-translate-x-2 transition-transform duration-300 rotate-180"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-lg font-roboto tracking-wider">Volver a Noticias</span>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
