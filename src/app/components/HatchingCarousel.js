'use client';

import Image from 'next/image';

const hatchingImages = [
  {
    id: 1,
    image: 'https://demoairbnbbucket.s3.us-east-2.amazonaws.com/6_MENIS+HATCHING/01_Sketch.jpg',
    title: 'Sketch 01'
  },
  {
    id: 2,
    image: 'https://demoairbnbbucket.s3.us-east-2.amazonaws.com/6_MENIS+HATCHING/02_Sketch.jpg',
    title: 'Sketch 02'
  },
  {
    id: 3,
    image: 'https://demoairbnbbucket.s3.us-east-2.amazonaws.com/6_MENIS+HATCHING/03_Sketch.jpg',
    title: 'Sketch 03'
  },
];

export default function HatchingCarousel() {
  return (
    <section className="bg-black text-white py-20">
      <div className="mx-auto px-20">

        {/* Section Title */}
        <div className="mb-8 px-4">
          <h2 className="text-xl lg:text-2xl font-roboto font-light tracking-wider text-white mb-2">
            MENIS HATCHING
          </h2>
          <div className="w-16 h-0.5 bg-red-600"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-8">
          {hatchingImages.map((item) => (
            <div key={item.id} className="relative w-full aspect-square bg-black group cursor-pointer">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="33vw"
                priority={item.id <= 3}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
