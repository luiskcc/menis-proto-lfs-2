'use client';

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HatchingPage() {
  const labProjects = [
    {
      id: 1,
      title: "HATCHING DIGITAL",
      date: "17 OCTOBER 2025",
      mainImage: "/magma/lab.png",
    },
    {
      id: 2,
      title: "ACOUSTIC FRAMES",
      date: "15 NOVEMBER 2025",
      mainImage: "/magma/lab-2.png",
    },
    {
      id: 3,
      title: "CÍRCULO DE BELLAS ARTES",
      date: "20 DECEMBER 2025",
      mainImage: "/magma/lab-3.png",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="pt-16">
        {/* Section 1 - HATCHING DIGITAL */}
        <section className="mb-8">
          <div className="grid grid-cols-2 gap-0 items-stretch">
            {/* Left - Image */}  
            <div className="relative w-full aspect-[924/455] mx-12">
              <Image
                src="/magma/lab.png"
                alt="Hatching Digital"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right - Content */}
            <div className="bg-black px-12 flex flex-col justify-center items-start ml-12 min-h-full">
              <h3 className="text-sm font-roboto tracking-wider text-white uppercase mb-4">
                PROJECT UPDATE
              </h3>
              <h2 className="text-4xl font-roboto font-bold tracking-widest text-red-600 mb-2">
                HATCHING DIGITAL
              </h2>
              <p className="text-sm font-roboto tracking-wider text-gray-400 uppercase">
                17 OCTOBER 2025
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 - ACOUSTIC FRAMES */}
        <section className="mb-8">
          <div className="grid grid-cols-2 gap-0 items-stretch">
            {/* Left - Image */}
            <div className="relative w-full aspect-[924/455] mx-12">
              <Image
                src="/magma/lab-2.png"
                alt="Acoustic Frames"
                fill
                className="object-cover"
              />
            </div>

            {/* Right - Content */}
            <div className="bg-black px-12 flex flex-col justify-center items-start ml-12 min-h-full">
              <h3 className="text-sm font-roboto tracking-wider text-white uppercase mb-4">
                PROJECT UPDATE
              </h3>
              <h2 className="text-4xl font-roboto font-bold tracking-widest text-red-600 mb-2">
                ACOUSTIC FRAMES
              </h2>
              <p className="text-sm font-roboto tracking-wider text-gray-400 uppercase">
                15 NOVEMBER 2025
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 - CÍRCULO DE BELLAS ARTES */}
        <section className="mb-8">
          <div className="grid grid-cols-2 gap-0 items-stretch">
            {/* Left - Image */}
            <div className="relative w-full aspect-[924/455] mx-12">
              <Image
                src="/magma/lab-3.png"
                alt="Círculo de Bellas Artes"
                fill
                className="object-cover"
              />
            </div>

            {/* Right - Content */}
            <div className="bg-black px-12 flex flex-col justify-center items-start ml-12 min-h-full">
              <h3 className="text-sm font-roboto tracking-wider text-white uppercase mb-4">
                PROJECT UPDATE
              </h3>
              <h2 className="text-4xl font-roboto font-bold tracking-widest text-red-600 mb-2">
                CÍRCULO DE BELLAS ARTES
              </h2>
              <p className="text-sm font-roboto tracking-wider text-gray-400 uppercase">
                20 DECEMBER 2025
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
