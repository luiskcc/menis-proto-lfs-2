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
