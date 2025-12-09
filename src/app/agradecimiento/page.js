'use client';

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AgradecimientoPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-roboto font-bold text-white mb-8 tracking-wide">
            Agradecimiento
          </h1>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-20 px-12">
        <div className="max-w-6xl mx-auto">

          {/* Main Logos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-items-center mb-16">

            {/* Logo 1 - Unión Europea */}
            <div className="flex items-center justify-center p-8 border border-white/10 w-full h-48 hover:border-red-600 transition-all duration-300">
              <div className="text-center">
                <div className="text-gray-400 text-sm font-roboto">
                  [Unión Europea Logo]
                </div>
              </div>
            </div>

            {/* Logo 2 - Gobierno de Canarias */}
            <div className="flex items-center justify-center p-8 border border-white/10 w-full h-48 hover:border-red-600 transition-all duration-300">
              <div className="text-center">
                <div className="text-gray-400 text-sm font-roboto">
                  [Gobierno de Canarias Logo]
                </div>
              </div>
            </div>

            {/* Logo 3 - Cabildo */}
            <div className="flex items-center justify-center p-8 border border-white/10 w-full h-48 hover:border-red-600 transition-all duration-300">
              <div className="text-center">
                <div className="text-gray-400 text-sm font-roboto">
                  [Cabildo Logo]
                </div>
              </div>
            </div>

            {/* Logo 4 - NextGen EU */}
            <div className="flex items-center justify-center p-8 border border-white/10 w-full h-48 hover:border-red-600 transition-all duration-300">
              <div className="text-center">
                <div className="text-gray-400 text-sm font-roboto">
                  [Financiado por NextGen EU Logo]
                </div>
              </div>
            </div>

            {/* Logo 5 - Gobierno de España */}
            <div className="flex items-center justify-center p-8 border border-white/10 w-full h-48 hover:border-red-600 transition-all duration-300">
              <div className="text-center">
                <div className="text-gray-400 text-sm font-roboto">
                  [Gobierno de España Logo]
                </div>
              </div>
            </div>

          </div>

          {/* Acknowledgment Text */}
          <div className="text-center max-w-4xl mx-auto mt-16">
            <p className="text-gray-300 text-lg leading-relaxed font-roboto">
              Agradecemos el apoyo y colaboración de todas las instituciones que hacen posible
              nuestro trabajo y compromiso con la arquitectura y el desarrollo sostenible.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
