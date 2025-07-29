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
                        className="w-[400px] h-[225px] relative"
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
        'magma_main.jpg',
        'teatro-menis.png',
        'building-gray.png',
        'santacruz-menis.png',
        'port-menis.png',
        'town-menis.png',
        'pool-menis.png',
        'nature-menis.png',
        'plan-menis.png',
        'planet-menis.png',
        'stadium-menis.png',
        'teatro-menis.png',
        'building-gray.png',
        'santacruz-menis.png',
        'port-menis.png',
        'town-menis.png',
        'magma_main.jpg',
        'teatro-menis.png',
        'building-gray.png',
        'santacruz-menis.png',
        'port-menis.png',
        'town-menis.png',
        'pool-menis.png',
        'nature-menis.png',
        'plan-menis.png',
        'planet-menis.png',
        'stadium-menis.png',
        'teatro-menis.png',
        'building-gray.png',
        'santacruz-menis.png',
        'port-menis.png',
        'town-menis.png',
    ];
    return images[index % images.length];
}