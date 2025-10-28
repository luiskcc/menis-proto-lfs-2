'use client';

import Image from "next/image";

export default function Proyectos2() {

  const newsArticles = [
    {
      id: 1,
      location: "SANTA CRUZ DE TENERIFE, SPAIN",
      title: "Nuevo Proyecto de Arquitectura Volcánica en Tenerife",
      year: "2024",
      image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/matriz/first-row/first-row-10.png",
      category: "2024/23"
    },
    {
      id: 2,
      location: "LAS PALMAS DE GRAN CANARIA, SPAIN",
      title: "Complejo Deportivo Innovador con Tecnología Sostenible",
      year: "2024",
      image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/matriz/second-row/second-row-15.png",
      category: "2024/23"
    },
    {
      id: 3,
      location: "SANTA CRUZ DE TENERIFE, SPAIN",
      title: "Intervención Urbana en el Puerto de Las Palmas",
      year: "2024",
      image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/matriz/third-row/third-row-18.png",
      category: "2024/23"
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="mx-auto px-20">

        {/* Grid */}
        <div className="grid grid-cols-3 gap-8">
          {newsArticles.map((article) => (
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

      </div>
    </section>
  );
}
