'use client';
import Image from "next/image";
import { useRef, useState } from "react";

export default function Hero() {
    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setStartY(e.pageY - scrollContainerRef.current.offsetTop);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
        setScrollTop(scrollContainerRef.current.scrollTop);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const y = e.pageY - scrollContainerRef.current.offsetTop;
        const walkX = (x - startX) * 2;
        const walkY = (y - startY) * 2;
        scrollContainerRef.current.scrollLeft = scrollLeft - walkX;
        scrollContainerRef.current.scrollTop = scrollTop - walkY;
    };

    return (
        <div 
            ref={scrollContainerRef}
            className="h-screen w-full overflow-auto cursor-grab active:cursor-grabbing bg-black scroll-smooth 
            scrollbar-none"    
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{
                scrollBehavior: 'smooth',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
            }}
        >
            <div className="flex flex-wrap min-w-[200%] min-h-[200%]">
                {[...Array(50)].map((_, index) => (
                    <div 
                        key={index} 
                        className="w-[500px] h-[238px] relative"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 z-10
                            opacity-0 hover:opacity-100"></div>
                        <Image 
                            src={`/${getImageSource(index)}`}
                            alt="architectural image"
                            fill
                            className={`object-cover p-5 transition-all duration-500 ease-in-out
                                ${hoveredIndex === index 
                                    ? 'z-50 grayscale-0 scale-110 brightness-110' 
                                    : hoveredIndex !== null 
                                        ? 'scale-95 opacity-60 grayscale' 
                                        : 'grayscale scale-100'}`}
                            sizes="400px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent 
                            transition-opacity duration-300 z-20 opacity-0 hover:opacity-100">
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Helper function to cycle through your images
function getImageSource(index) {
    const images = [
        'tanque.png',
        'materiales.png',
        'Fernando-Menis-Profile_WEB.jpg',
        'magma/hero/RH1539-23.jpg',
        'magma/section-2/Fernando Alda_057.jpg',
        'magma/section-2/Fernando Alda_032.jpg',
        'magma/section-2/Fernando Alda_005.jpg',
        'magma/section-2/Hisao Suzuki_04.jpg',
        'magma/section-2/Hisao Suzuki_09.jpg',
        'magma/section-2/Hisao Suzuki_11.jpg',
        'magma/section-2/Hisao Suzuki_13.jpg',
        'magma/section-2/RH1539-30.jpg',
        'magma/section-2/RH1539-32.jpg',
        'magma/section-2/705-30.jpg',
        'magma/section-2/Hisao-Suzuki_05.jpeg',
        'magma/section-2/Hisao-Suzuki_06.jpeg',
        'magma/section-1/ficha_tecnica.jpg',
        'magma/section-1/01sfvdfvdfbgre.jpeg',
        'magma/section-1/02043-09a.jpeg',
        'magma/section-1/28-031.jpeg',
        'magma/section-1/28-111.jpeg',
        'magma/section-1/28-121.jpeg',
        'magma/section-2/magma_ground.png',
        'magma/section-2/magma_ground_floor.png',
        'magma/section-1/magma_planos.png',
        'magma/section-1/magma_molde.png',
        'magma/hero/RH1539-23.jpg',
        'magma/section-2/Fernando Alda_057.jpg',
        'tanque.png',
        'materiales.png',
    ];
    return images[index % images.length];
}