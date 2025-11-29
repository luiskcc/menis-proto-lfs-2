'use client';

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HatchingPage() {
  const labProjects = [
    {
      id: 1,
      title: "HATCHING DIGITAL",
      mainImage: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/6_MENIS+HATCHING/01_Sketch.jpg",
      description: [
        "Exploración digital de técnicas de rayado y sombreado arquitectónico",
        "Transformación de sketches tradicionales a medios digitales",
        "Investigación de texturas y profundidad espacial"
      ]
    },
    {
      id: 2,
      title: "ACOUSTIC FRAMES",
      mainImage: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/menis-lab/cuchillitos.png",
      description: [
        "Marcos acústicos modulares para espacios arquitectónicos",
        "Integración de diseño sonoro y forma espacial",
        "Soluciones innovadoras para control acústico"
      ]
    },
    {
      id: 3,
      title: "CÍRCULO DE BELLAS ARTES",
      mainImage: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/menis-lab/tanque.jpg",
      description: [
        "Intervención artística en espacio cultural emblemático",
        "Diálogo entre arquitectura contemporánea y patrimonio",
        "Experiencia inmersiva de luz y espacio"
      ]
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="pt-16">
        {/* Section 1 - HATCHING DIGITAL */}
        <section className="mb-8">
          <div className="grid grid-cols-2 gap-0">
            {/* Left - Image */}
            <div className="relative w-full aspect-[924/455] mx-12">
              <Image
                src="https://demoairbnbbucket.s3.us-east-2.amazonaws.com/6_MENIS+HATCHING/01_Sketch.jpg"
                alt="Hatching Digital"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right - Content */}
            <div className="bg-black px-12 py-8 flex flex-col ml-12">
              <h2 className="text-2xl font-roboto tracking-widest text-red-600 mb-6">
                HATCHING DIGITAL
              </h2>
              <div className="bg-white text-black p-8 flex-1">
                <p className="text-sm font-roboto leading-relaxed mb-4">
                  Exploración digital de técnicas de rayado y sombreado arquitectónico
                </p>
                <p className="text-sm font-roboto leading-relaxed mb-4">
                  Transformación de sketches tradicionales a medios digitales
                </p>
                <p className="text-sm font-roboto leading-relaxed">
                  Investigación de texturas y profundidad espacial
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - ACOUSTIC FRAMES */}
        <section className="mb-8">
          <div className="grid grid-cols-2 gap-0">
            {/* Left - Image */}
            <div className="relative w-full aspect-[924/455] mx-12">
              <Image
                src="https://demoairbnbbucket.s3.us-east-2.amazonaws.com/menis-lab/cuchillitos.png"
                alt="Acoustic Frames"
                fill
                className="object-cover"
              />
            </div>

            {/* Right - Content */}
            <div className="bg-black px-12 py-8 flex flex-col ml-12">
              <h2 className="text-2xl font-roboto tracking-widest text-red-600 mb-6">
                ACOUSTIC FRAMES
              </h2>
              <div className="bg-white text-black p-8 flex-1">
                <p className="text-sm font-roboto leading-relaxed mb-4">
                  Marcos acústicos modulares para espacios arquitectónicos
                </p>
                <p className="text-sm font-roboto leading-relaxed mb-4">
                  Integración de diseño sonoro y forma espacial
                </p>
                <p className="text-sm font-roboto leading-relaxed">
                  Soluciones innovadoras para control acústico
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 - CÍRCULO DE BELLAS ARTES */}
        <section className="mb-8">
          <div className="grid grid-cols-2 gap-0">
            {/* Left - Image */}
            <div className="relative w-full aspect-[924/455] mx-12">
              <Image
                src="https://demoairbnbbucket.s3.us-east-2.amazonaws.com/menis-lab/tanque.jpg"
                alt="Círculo de Bellas Artes"
                fill
                className="object-cover"
              />
            </div>

            {/* Right - Content */}
            <div className="bg-black px-12 py-8 flex flex-col ml-12">
              <h2 className="text-2xl font-roboto tracking-widest text-red-600 mb-6">
                CÍRCULO DE BELLAS ARTES
              </h2>
              <div className="bg-white text-black p-8 flex-1">
                <p className="text-sm font-roboto leading-relaxed mb-4">
                  Intervención artística en espacio cultural emblemático
                </p>
                <p className="text-sm font-roboto leading-relaxed mb-4">
                  Diálogo entre arquitectura contemporánea y patrimonio
                </p>
                <p className="text-sm font-roboto leading-relaxed">
                  Experiencia inmersiva de luz y espacio
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
