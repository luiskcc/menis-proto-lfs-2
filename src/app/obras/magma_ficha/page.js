"use client"
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import { useState } from "react";

export default function MagmaFicha() {
    const sections = [
            {
                id: 1,
                title: "Magma",
                image: "/magma_interior.png",
                description: `Magma Art & Congress, Centro de Arte y Congresos aparece como un punto de referencia, de imponente presencia, entre construcciones anónimas. paisaje semidesértico que lo rodea y la cercanía del mar, enmarcan el edificio, Piezas geométricas emergen del suelo albergando los diferentes servicios del programa: oficinas, salas de congreso, auditorio, oficinas, hall, aseos, cafetería, etc., uniéndose a través del fluir de la espectacular e innovadora cubierta, acotando el espacio en todas direcciones.`,
                details: `Location: Santa Cruz de Tenerife. Spain 28°04'10.0"N 16°43'36.7"W Construction: 1995 - 1999 Client: Private community Casa MM Use: Residential and commercial Awards: XI Venice Architecture Biennial IX Biennial of Spanish Architecture Accessibility Award SINPROMI Architecture Award Nomination Awards Nomination Mies van der Rohe Finalist in the IX Biennial of Spanish Architecture, Magma Arte & Congresos Manuel de Oraá Award FAD Awards Finalist`
            },
            {
                id: 2,
                title: "Magma",
                image: "/magma-plano.png",
                description: `Magma Art & Congress, Centro de Arte y Congresos aparece como un punto de referencia, de imponente presencia, entre construcciones anónimas. Magma es un edificio de 12.000 m2, con una cubierta de 1.500 m2, que se extiende sobre 4 plantas, con un total de 10.000 m2 de oficinas y 2.000 m2 de salas de congreso. Fue proyectado por el estudio de arquitectura español Manuel de Oraá, en colaboración con el estudio de ingeniería alemán Gerkan, Marg y Partner.`,
                details: `Location: Santa Cruz de Tenerife. Spain 28°04'10.0"N 16°43'36.7"W Construction: 1995 - 1999 Client: Private community Casa MM Use: Residential and commercial Awards: XI Venice Architecture Biennial IX Biennial of Spanish Architecture Accessibility Award SINPROMI Architecture Award Nomination Awards Nomination Mies van der Rohe Finalist in the IX Biennial of Spanish Architecture, Magma Arte & Congresos Manuel de Oraá Award FAD Awards Finalist`
            },
            {
                id: 3,
                title: "Magma",
                image: "/magma_plan.png",
                description: `Magma Art & Congress, Centro de Arte y Congresos aparece como un punto de referencia, de imponente presencia, entre construcciones anónimas. paisaje semidesértico que lo rodea y la cercanía del mar, enmarcan el edificio, Piezas geométricas emergen del suelo albergando los diferentes servicios del programa: oficinas, salas de congreso, auditorio, oficinas, hall, aseos, cafetería, etc., uniéndose a través del fluir de la espectacular e innovadora cubierta, acotando el espacio en todas direcciones.`,
                details: `Location: Santa Cruz de Tenerife. Spain 28°04'10.0"N 16°43'36.7"W Construction: 1995 - 1999 Client: Private community Casa MM Use: Residential and commercial Awards: XI Venice Architecture Biennial IX Biennial of Spanish Architecture Accessibility Award SINPROMI Architecture Award Nomination Awards Nomination Mies van der Rohe Finalist in the IX Biennial of Spanish Architecture, Magma Arte & Congresos Manuel de Oraá Award FAD Awards Finalist`
            },
            {
                id: 4,
                title: "Magma",
                image: "/magma-plano-negro.png",
                description: `Magma Art & Congress, Centro de Arte y Congresos aparece como un punto de referencia, de imponente presencia, entre construcciones anónimas. Está ubicado en la costa de Tenerife, en la isla Canaria, España. Sus planos se extienden sobre 4 plantas, con un total de 10.000 m2 de oficinas y 2.000 m2 de salas de congreso. Los detalles de la cubierta se pueden apreciar en el plano de la derecha. Cara exterior del edificio, con el fluir de la cubierta, acotando el espacio en todas direcciones.`,
                details: `Location: Santa Cruz de Tenerife. Spain 28°04'10.0"N 16°43'36.7"W Construction: 1995 - 1999 Client: Private community Casa MM Use: Residential and commercial Awards: XI Venice Architecture Biennial IX Biennial of Spanish Architecture Accessibility Award SINPROMI Architecture Award Nomination Awards Nomination Mies van der Rohe Finalist in the IX Biennial of Spanish Architecture, Magma Arte & Congresos Manuel de Oraá Award FAD Awards Finalist`
            },
    ]

    const visual_sections = [
        {
            id: 1,
            title: "Magma Workers",
            image: "/magma-worker.png",
        },
        {
            id: 2,
            title: "Magma Workers",
            image: "/magma-surface.png",
        },
        {
            id: 3,
            title: "Magma Workers",
            image: "/magma-structure.png",
        },
        {
            id: 4,
            title: "Magma Workers",
            image: "/magma-base.png",
        },
        {
            id: 5,
            title: "Magma Workers",
            image: "/magma-roof.png",
        },
        {
            id: 6,
            title: "Magma Workers",
            image: "/magma-interior.png",
        },
        {
            id: 7,
            title: "Magma Workers",
            image: "/magma-interior-2.png",
        },
        {
            id: 8,
            title: "Magma Workers",
            image: "/magma-theater.png",
        },
        {
            id: 9,
            title: "Magma Workers",
            image: "/magma-roof-2.png",
        },
        {
            id: 10,
            title: "Magma Workers",
            image: "/magma-darkness.png",
        },
        {
            id: 11,
            title: "Magma Workers",
            image: "/magma-underground.png",
        },
        {
            id: 12,
            title: "Magma Workers",
            image: "/magma-dual.png",
        },
        {
            id: 13,
            title: "Magma Workers",
            image: "/magma-roofing.png",
        },
        {
            id: 14,
            title: "Magma Workers",
            image: "/suisse-village.png",
        },
    ]
  return (
    <div>
        <Navbar/>
        <div className="cover-image w-full h-full">
            <Image 
                src="/magma.png" 
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
                    <div className="flex flex-col md:gap-50">
                        <div>
                            <p className="text-sm gap-10 font-bold">Magma Art & Congress, Centro de Arte y Congresos aparece como un punto de referencia, de imponente presencia, entre construcciones anónimas. paisaje semidesértico que lo rodea y la cercanía del mar, enmarcan el edificio, Piezas geométricas emergen del suelo albergando los diferentes servicios del programa: oficinas, salas de congreso, auditorio, oficinas, hall, aseos, cafetería, etc., uniéndose a través del fluir de la espectacular e innovadora cubierta, acotando el espacio en todas direcciones.</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm gap-10 bottom-0 relative">Santa Cruz de Tenerife. Spain 28°04&apos;10.0&quot;N 16°43&apos;36.7&quot;W</p>
                            <p className="text-sm">Construction: 1995 - 1999</p>
                            <p className="text-sm">Client: Private community Casa MM</p>
                            <p className="text-sm">Use: Residential and commercial</p>
                            <p className="text-sm">Awards: XI Venice Architecture Biennial IX Biennial of Spanish Architecture Accessibility Award SINPROMI Architecture Award Nomination Awards Nomination Mies van der Rohe Finalist in the IX Biennial of Spanish Architecture, Magma Arte & Congresos Manuel de Oraá Award FAD Awards Finalist</p>
                            <p className="text-sm">Use: Residential and commercial</p>
                            <p className="text-sm">Awards: XI Venice Architecture Biennial IX Biennial of Spanish Architecture Accessibility Award SINPROMI Architecture Award Nomination Awards Nomination Mies van der Rohe Finalist in the IX Biennial of Spanish Architecture, Magma Arte & Congresos Manuel de Oraá Award FAD Awards Finalist</p>
                            <p className="text-sm">Use: Residential and commercial</p>
                            <p className="text-sm">Awards: XI Venice Architecture Biennial IX Biennial of Spanish Architecture Accessibility Award SINPROMI Architecture Award Nomination Awards Nomination Mies van der Rohe Finalist in the IX Biennial of Spanish Architecture, Magma Arte & Congresos Manuel de Oraá Award FAD Awards Finalist</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-3/4 h-auto">
                        <div className="flex flex-col">
                            {visual_sections.slice(0, 4).map((section) => (
                                <div key={section.id} className="w-full h-screen">
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
                <div className="flex flex-col">
                    {visual_sections.slice(4, 18).map((section) => (
                        <div key={section.id} className="w-full h-screen">
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
        <Footer />
    </div>
  );
}

