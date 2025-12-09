'use client';

import Image from "next/image";

export default function Lab() {

  const newsArticles = [
    {
      id: 1,
      title: "Parque Cuchillitos de Tristan",
      image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/menis-lab/cuchillitos.png",
    },
    {
      id: 2,
      title: "Jardín del Espacio Cultural El Tanque",
      image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/menis-lab/tanque.jpg",
    },
    {
      id: 3,
      title: "Iluminación navideña en la isla de Fuerteventura",
      image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/menis-lab/navidad.jpg",
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="mx-auto px-12">

        {/* Section Title */}
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-xl lg:text-2xl font-roboto font-light tracking-wider text-white mb-2">
              LAB
            </h2>
            <div className="w-16 h-0.5 bg-red-600"></div>
          </div>
          <a href="/hatching" className="group flex items-center gap-2 hover:text-red-600 transition-colors duration-300">
            <span className="text-sm font-roboto tracking-wider">VER TODOS LOS PROYECTOS</span>
            <svg
              width="20"
              height="20"
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
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <div key={article.id} className="flex flex-col">

              {/* Main Image - Square */}
              <div className="relative w-full aspect-[44/35] bg-black group cursor-pointer">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="33vw"
                  priority={article.id <= 3}
                />
              </div>

              {/* Title Text Below Image - Centered */}
              <div className="mt-4 text-center">
                <h3 className="text-red-600 text-base md:text-lg font-roboto font-bold tracking-wide">
                  {article.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
