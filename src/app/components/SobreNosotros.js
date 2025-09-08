'use client';

import Image from "next/image";

export default function SobreNosotros() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
          
          {/* Left Side - Portrait Photo */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] max-w-lg mx-auto lg:mx-0">
              <Image
                src="/Fernando-Menis-Profile_WEB.jpg"
                alt="Fernando Menis - Retrato"
                fill
                className="object-cover grayscale"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="relative space-y-8">
            
            {/* Main Title */}
            <div className="mb-12">
              <h2 className="text-4xl lg:text-6xl font-roboto font-light tracking-wider text-white mb-4">
                FERNANDO
              </h2>
              <h2 className="text-4xl lg:text-6xl font-roboto font-light tracking-wider text-white mb-6">
                MENIS
              </h2>
              <div className="w-full h-0.5 bg-white"></div>
            </div>

            {/* Biography Text */}
            <div className="space-y-6">
              <p className="text-white text-lg lg:text-xl leading-relaxed font-light">
                Fernando Martín Menis, más conocido como Fernando Menis 
                nacido el 15 de junio de 1951 en Santa Cruz de Tenerife, Islas 
                Canarias, es un arquitecto español egresado del Instituto de 
                Arquitectura de Barcelona, y también se desempeña como 
                Presidente del Laboratorio de Innovación en Arquitectura, Diseño 
                y Turismo Avanzado de Tenerife.
              </p>
            </div>

            {/* About Us Link - Positioned in bottom right */}
            <div className="absolute bottom-0 right-0 lg:relative lg:bottom-auto lg:right-auto lg:mt-16">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="text-right">
                  <h3 className="text-2xl lg:text-4xl font-roboto font-light tracking-wider text-white group-hover:text-red-600 transition-colors duration-300">
                    SOBRE
                  </h3>
                  <h3 className="text-2xl lg:text-4xl font-roboto font-light tracking-wider text-white group-hover:text-red-600 transition-colors duration-300">
                    NOSOTROS
                  </h3>
                </div>
                <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                  <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-white group-hover:text-red-600 transition-colors duration-300"
                  >
                    <path 
                      d="M7 17L17 7M17 7H7M17 7V17" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
