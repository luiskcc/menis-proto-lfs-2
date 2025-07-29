"use client";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/components/Footer";
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
            title: "Santisimo Redentor",
            style: "pt-10",
            image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-1/santisimo_2.jpeg",
        },
        {
            id: 2,
            title: "Santísimo Redentor Aerea",
            image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-1/santisimo_6.jpeg",
        },
        {
            id: 3,
            title: "Santisimo Esculturas multiples",
            image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-1/santisimo_sculptures.jpg",
        },
        {
            id: 4,
            title: "Santisimo Redentor",
            image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-1/santisimo_collage.jpg",
        },
        {
            id: 5,
            title: "Santisimo Proyección Solar",
            style: "py-50",
            image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-1/santisimo_collage.png",
        }
    ]

    const carousel_sections = [
        {
            id: 1,
            title: "Santisimo Redentor",
            image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/carousel/santisimo_7.jpg",
        },
        {
            id: 2,
            title: "Santisimo Redentor",
            image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/carousel/santisimo_8.jpg",
        },
        {
            id: 3,
            title: "Santisimo Redentor",
            image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/carousel/santisimo_9.jpg",
        },
        {
            id: 4,
            title: "Santisimo Redentor",
            image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/carousel/santisimo_10.jpg",
        },
        {
            id: 5,
            title: "Santisimo Redentor",
            image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/carousel/santisimo_11.jpg",
        },
        {
            id: 6,
            title: "Santisimo Redentor",
            image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/carousel/santisimo_12.jpg",
        },
        {
            id: 7,
            title: "Santisimo Redentor",
            image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/carousel/santisimo_13.jpg",
        },
        {
            id: 8,
            title: "Santisimo Redentor",
            image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/carousel/santisimo_14.jpg",
        },
        {
            id: 9,
            title: "Santisimo Redentor",
            image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/carousel/santisimo_15.jpg",
        }
    ]

    const section_3 = [
        // SECTION 3
        {
            id: 1,
            title: "Santisimo Redentor",
            image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-3/santisimo_19.jpeg",
            section_style: "px-50 pt-10"
        },
        {
            id: 2,
            title: "Santisimo Redentor",
            image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-3/santisimo_17.jpeg",
            section_style: "px-100"
        },
        {
            id: 3,
            title: "Santisimo Redentor",
            image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-3/santisimo_26.jpg",
            section_style: "pr-200"
        },
        {
            id: 4,
            title: "Santisimo Redentor",
            image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-3/santisimo_20.jpg",
            section_style: "px-5"
        },
        {
            id: 5,
            title: "Santisimo Redentor",
            image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-3/santisimo_27.jpg",
            section_style: "px-75"
        },
        {
            id: 6,
            title: "Santisimo Redentor",
            image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-3/santisimo_28.jpg",
            section_style: "px-40"
        },
        {
            id: 7,
            title: "Santisimo Redentor",
            image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-3/santisimo_29.jpg",
            section_style: "px-120"
        },
        {
            id: 8,
            title: "Santisimo Redentor",
            image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-3/santisimo_32.jpg",
            section_style: "px-50"
        },
        {
            id: 11,
            title: "Santisimo Redentor",
            image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-3/shade_a.jpg",
            section_style: "px-40 flex flex-row h-screen",
            layout: "double",
            pairedImages: [
                "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-3/santisimo_30.jpg",
                "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-3/santisimo_41.jpg"
            ]
        },
        {
            id: 14,
            title: "Santisimo Redentor",
            image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-3/granite_lot.jpg",
            section_style: "flex flex-row items-center",
            layout: "double",
            pairedImages: [
                "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-3/santisimo_35.jpg",
                "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-3/santisimo_34.jpg"
            ]
        },
        {
            id: 15, 
            title: "Santisimo Redentor",
            image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com//section-3/rocks_A.jpg",
            section_style: "px-40",
            layout: "triple",
            pairedImages: [
                "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-3/santisimo_40.jpg",
                "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-3/santisimo_42.jpg",
                "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-3/santisimo_43.jpg"
            ]
        },
        {
            id: 16,
            title: "Santisimo Redentor",
            image: "/santisimo-redentor/section-3/luminus-3.png",
            section_style: "py-10 pl-20"
        },
        {
            id: 17,
            title: "Santisimo Redentor",
            image: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-3/PAG27A.jpg",
            section_style: "px-40 py-50",
            layout: "triple",
            pairedImages: [
                "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-3/santisimo_37.jpg",
                "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-3/santisimo_38.jpg",
                "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-3/santisimo_39.jpg"
            ]
        }
    ]

    return (
        <div>
            <Navbar/>
            <div className="cover-image w-full h-full h-screen pb-20">
                <Image 
                    src="https://demoairbnbbucket.s3.us-east-2.amazonaws.com/section-1/santisimo_36.jpg" 
                    alt="Santísimo Redentor" 
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
                                <p className="text-sm">El hormigón, el material principal, cumple aquí múltiples funciones: exterior, interior, 
                                    estructura, forma, materia y textura: (1) es accesible localmente; (2) la eficiencia energética del hormigón, 
                                    debido a su naturaleza isótropica, se ve reforzada aquí por la inercia térmica de los gruesos muros macizos; (3) 
                                    se explora el potencial acústico del hormigón de una manera innovadora, desafiando la creencia de que es inferior 
                                    acústicamente a materiales como la madera. Para la difusión se utiliza hormigón visto sencillo, mientras que para 
                                    la absorción se utiliza hormigón visto mezclado con piedra volcánica local (picón).</p>
                            </div>
                            <div className="text-xs font-extrabold">
                                <p className="text-[13px] gap-10 bottom-0 relative">Location: Calle Volcán Estrómboli, 3, Las Chumberas 38108, La Laguna, Tenerife.
                                28°27&apos;40.4&quot;N 16°18&apos;07.6&quot;W</p>
                                <p className="text-[13px]">Construction: 1995 - 1999</p>
                                <p className="text-[13px]">Client: Private community Casa MM</p>
                                <p className="text-[13px]">Use: Edificio Religioso</p>
                                <p className="text-[13px]">Awards: Premio de Honor Faith & Form-AIA Interfaith para la Arquitectura Sacra y Arte Religioso; Premio a la 
                                    Innovación con el hormigón de la Fundación Ambuja Knowledge, India, 2012; Proyecto incluido en la colección permanente de arquitectura 
                                    del Museo de Arte Moderno de Nueva York (MoMA).</p>
                            </div>
                        </div>
                    </div>

                    {/* Main content area */}
                    <div className="md:w-3/4 h-auto">
                        {/* First three images remain as is */}
                        <div className="flex flex-col">
                            {visual_sections.slice(0, 5).map((section) => (
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
                        
                        {/* Carousel section */}
                        <div className="w-full h-screen mb-10" style={{'--swiper-navigation-color': 'black', '--swiper-navigation-size': '20px'}}>
                            <Swiper 
                                modules={[Navigation, Pagination]}
                                spaceBetween={0}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                className="w-full h-full"
                            >
                                {carousel_sections.slice(0, 11).map((section) => (
                                    <SwiperSlide key={section.id}>
                                        <div className="w-full h-full">
                                            <Image 
                                                src={section.image} 
                                                alt={section.title} 
                                                width={2400}  
                                                height={1600} 
                                                className="w-full h-full object-cover custom-pagination" 
                                                priority={false}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
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