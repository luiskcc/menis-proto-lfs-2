'use client';

import Image from "next/image";

export default function Lab() {

  const newsArticles = [
    {
      id: 1,
      title: "Nuevo Proyecto de Arquitectura Volcánica en Tenerife",
      image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/menis-lab/cuchillitos.png",
    },
    {
      id: 2,
      title: "Complejo Deportivo Innovador con Tecnología Sostenible",
      image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/menis-lab/tanque.jpg",
    },
    {
      id: 3,
      title: "Intervención Urbana en el Puerto de Las Palmas",
      image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/menis-lab/navidad.jpg",
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="mx-auto px-12">

        {/* Section Title */}
        <div className="mb-8">
          <h2 className="text-xl lg:text-2xl font-roboto font-light tracking-wider text-white mb-2">
            LAB
          </h2>
          <div className="w-16 h-0.5 bg-red-600"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <div key={article.id} className="flex flex-col">

              {/* Category Text Above Image */}
              <div className="mb-4">
                <p className="text-white text-sm font-roboto tracking-wider uppercase">
                </p>
              </div>

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
