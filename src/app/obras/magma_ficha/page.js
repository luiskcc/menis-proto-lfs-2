"use client";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SantisimoRedentorFicha() {

    const visual_sections = [
        {
            id: 1,
            title: "Magma",
            style: "pt-10",
            image: "/magma/section-1/ficha_tecnica.jpg",
        },
        {
            id: 2,
            title: "Magma",
            image: "/magma/section-1/01sfvdfvdfbgre.jpeg",
        },
        {
            id: 3,
            title: "Santisimo Esculturas multiples",
            image: "/magma/section-1/magma_molde.png",
        },
        {
            id: 4,
            title: "Santisimo Redentor",
            image: "/magma/section-1/28-121.jpeg",
        },
        {
            id: 5,
            title: "Santisimo Proyección Solar",
            style: "py-50",
            image: "/magma/section-1/28-111.jpeg",
        },
        {
            id: 6,
            title: "Santisimo Proyección Solar",
            style: "py-50",
            image: "/magma/section-1/magma_planos.png",
        },
        {
            id: 7,
            title: "Santisimo Proyección Solar",
            style: "py-50",
            image: "/magma/section-1/28-031.jpeg",
        },
        {
            id: 8,
            title: "Santisimo Proyección Solar",
            style: "py-50",
            image: "/magma/section-1/02043-09a.jpeg",
        },
        
    ]


    const section_3 = [
        // SECTION 3
        {
            id: 1,
            title: "Santisimo Redentor",
            image: "/magma/section-2/Fernando Alda_057.jpg",
            section_style: "px-50 pt-10"
        },
        {
            id: 2,
            title: "Santisimo Redentor",
            image: "/magma/hero/RH1539-23.jpg",
            section_style: "px-40 flex flex-row h-screen",
            layout: "double",
            pairedImages: [
                "/magma/section-2/Fernando Alda_005.jpg",
                "/magma/section-2/Hisao Suzuki_11.jpg"
            ]
        },
        {
            id: 3,
            title: "Santisimo Redentor",
            image: "/magma/section-2/Hisao-Suzuki_06.jpeg",
            section_style: "px-50 pt-10"
        },
        {
            id: 4,
            title: "Santisimo Redentor",
            image: "/magma/section-2/Hisao-Suzuki_06.jpeg",
            section_style: "px-50 pt-10",
            layout: "double",
            pairedImages: [
                "/magma/section-2/Hisao Suzuki_13.jpg",
                "/magma/section-2/Hisao Suzuki_09.jpg",
            ]
        },
        {
            id: 5,
            title: "Santisimo Redentor",
            image: "/magma/section-2/Hisao Suzuki_06.jpeg",
            section_style: "px-50 pt-10",
            layout: "double",
            pairedImages: [
                "/magma/section-2/Hisao Suzuki_13.jpg",
                "/magma/section-2/Hisao Suzuki_09.jpg",
            ]
        },
        {
            id: 6,
            title: "Santisimo Redentor",
            image: "/magma/section-2/Hisao-Suzuki_06.jpeg",
            section_style: "px-50 pt-10"
        },
        {
            id: 7, 
            title: "Santisimo Redentor",
            image: "/magma/hero/RH1539-23.jpg",
            section_style: "py-50",
            layout: "triple",
            pairedImages: [
                "/magma/hero/RH1539-23.jpg",
                "/magma/hero/RH1539-23.jpg",
                "/magma/hero/RH1539-23.jpg"
            ]
        }
    ]

    return (
        <div>
            <Navbar/>
            <div className="cover-image w-full h-full h-screen pb-20">
                <Image 
                    src="/magma/hero/RH1539-23.jpg" 
                    alt="Magma" 
                    width={2400}  
                    height={1600} 
                    className="w-full h-full object-cover" 
                    priority 
                />
            </div>
            <div className="bg-white text-black font-bold text-justify">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 p-10 sticky top-0 h-screen overflow-y-auto no-scrollbar">
                        <div className="flex flex-col md:gap-90">
                            <div className="flex flex-col gap-1">
                                <p className="text-sm">Magma Art & Congress, Centro de Arte y Congresos aparece como un punto de referencia, 
                                    de imponente presencia, entre construcciones anónimas. El paisaje semidesértico que lo rodea y la cercanía del mar, 
                                    enmarcan el edificio. Piezas geométricas emergen del suelo albergando los diferentes servicios del programa: oficinas, salas de congreso, 
                                    auditorio, oficinas, hall, aseos, cafetería, etc., uniéndose a través del fluir de la espectacular e innovadora cubierta, acotando el espacio en todas direcciones.</p>
                            </div>
                            <div className="text-xs font-extrabold">
                                <p className="text-[13px] gap-10 bottom-0 relative">Location: Santa Cruz de Tenerife. Spain
                                28°04&apos;10.0&quot;N 16°43&apos;36.7&quot;W</p>
                                <p className="text-[13px]">Client: Private community Casa MM</p>
                                <p className="text-[13px]">Use: Residential and commercial</p>
                                <p className="text-[13px]">Awards: XI Venice Architecture Biennial IX Biennial of Spanish Architecture Accessibility 
                                    Award SINPROMI Architecture Award Nomination Awards Nomination Mies van der Rohe Finalist in the IX Biennial of 
                                    Spanish Architecture, Magma Arte & Congresos Manuel de Oraá Award FAD Awards Finalist</p>
                            </div>
                        </div>
                    </div>

                    {/* Main content area */}
                    <div className="md:w-3/4 h-auto">
                        {/* First three images remain as is */}
                        <div className="flex flex-col">
                            {visual_sections.slice(0, 8).map((section) => (
                                <div key={section.id} className={`w-full h-screen mb-10 ${section.style || ''}`}>
                                    <Image 
                                        src={section.image} 
                                        alt={section.title} 
                                        width={2400}  
                                        height={1600} 
                                        className="w-full h-full object-cover" 
                                        priority={section.id === 1}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Bottom section */}
                <div className="flex flex-col">
                    {section_3.map((section, index) => {
                        if (section.layout === "double") {
                            return (
                                <div key={section.id} className={`w-full bg-black py-10 px-10 gap-10 ${section.section_style || ''}`}>
                                    {section.pairedImages.map((img, i) => (
                                        <div key={i} className="w-1/2">
                                            <Image 
                                                src={img}
                                                alt={section.title} 
                                                width={2400}  
                                                height={1600} 
                                                className={`w-full h-full object-cover`}
                                                priority={false}
                                            />
                                        </div>
                                    ))}
                                </div>
                            );
                        }

                        if (section.layout === "triple") {
                            return (
                                <div key={section.id} className={`flex flex-row w-full bg-black px-10 py-10 gap-10 ${section.section_style || ''}`}>
                                    {section.pairedImages.map((img, i) => (
                                        <div key={i} className="w-1/3">
                                            <Image 
                                                src={img}
                                                alt={section.title} 
                                                width={2400}  
                                                height={1600} 
                                                priority={false}
                                            />
                                        </div>
                                    ))}
                                </div>
                            );
                        }

                        // Regular full-width images (default case)
                        return (
                            <div key={section.id} className={`w-full bg-black h-screen pt-10 pb-10`}>
                                <Image 
                                    src={section.image} 
                                    alt={section.title} 
                                    width={2400}  
                                    height={1600} 
                                    className={`w-full h-full object-cover ${section.section_style || ''}`} 
                                    priority={section.id === 1}
                                />
                            </div>
                        );
                    })}
                </div>
                <Footer />
            </div>
        </div>
    );
}