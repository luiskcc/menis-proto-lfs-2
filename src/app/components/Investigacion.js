'use client';

import Image from "next/image";

export default function Investigacion() {
  const researchData = [
    {
      title: "Materiales Volcánicos en Construcción Contemporánea",
      institution: "Laboratorio de Innovación Arquitectónica, Tenerife",
    },
    {
      title: "Arquitectura Adaptativa al Paisaje Volcánico",
      institution: "Instituto de Arquitectura Experimental de Canarias",
    },
    {
      title: "Innovación en Técnicas Constructivas Tradicionales", 
      institution: "Centro de Investigación en Patrimonio Arquitectónico",
    },
    {
      title: "Espacios Arquitectónicos y Experiencia Sensorial",
      institution: "Universidad Internacional de Arquitectura Experimental", 
    }
  ];

  return (
    <section className="min-h-screen bg-black text-white pt-40 pb-30 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-6xl font-roboto font-light tracking-wider text-white mb-4">
            LAB
          </h2>
          <div className="w-24 h-0.5 bg-red-600"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Diagram/Plans */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto lg:mx-0">
              <Image
                src="/materiales.png"
                alt="Materiales - Investigación estructural"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Side - Research Content */}
          <div className="space-y-12">
            {researchData.map((item, index) => (
              <div 
                key={index}
                className="border-b border-gray-800 pb-2 last:border-b-0 hover:border-red-600 transition-colors duration-300"
              >
                <h3 className="text-xl lg:text-2xl font-roboto font-medium text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {item.institution}
                </p>
                
                <p className="text-gray-400 text-base">
                  {item.focus}
                </p>
                
                <p className="text-gray-400 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
