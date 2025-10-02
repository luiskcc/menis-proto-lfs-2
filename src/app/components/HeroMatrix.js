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

    const handleTouchStart = (e) => {
        setIsDragging(true);
        const touch = e.touches[0];
        setStartX(touch.pageX - scrollContainerRef.current.offsetLeft);
        setStartY(touch.pageY - scrollContainerRef.current.offsetTop);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
        setScrollTop(scrollContainerRef.current.scrollTop);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const touch = e.touches[0];
        const x = touch.pageX - scrollContainerRef.current.offsetLeft;
        const y = touch.pageY - scrollContainerRef.current.offsetTop;
        const walkX = (x - startX) * 2;
        const walkY = (y - startY) * 2;
        scrollContainerRef.current.scrollLeft = scrollLeft - walkX;
        scrollContainerRef.current.scrollTop = scrollTop - walkY;
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <div
            ref={scrollContainerRef}
            className="h-screen w-full overflow-auto cursor-pointer bg-black scroll-smooth
            scrollbar-none touch-pan-x touch-pan-y"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
                scrollBehavior: 'smooth',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
                WebkitOverflowScrolling: 'touch',
            }}
        >
            <div className="flex flex-wrap min-w-full sm:min-w-[200%] min-h-full sm:min-h-[200%]">
                {[...Array(62)].map((_, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[370px]
                        h-[250px] sm:h-[280px] md:h-[250px] relative"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 z-10
                            opacity-0 hover:opacity-100"></div>
                        <Image
                            src={getImageSource(index)}
                            alt="architectural image"
                            fill
                            className={`object-cover p-2 transition-all duration-500 ease-in-out
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
    const baseUrl = 'https://demoairbnbbucket.s3.us-east-2.amazonaws.com';
    const images = [
        // First row - 23 images
        ...Array.from({ length: 23 }, (_, i) => `${baseUrl}/matriz/first-row/first-row-${String(i + 1).padStart(2, '0')}.png`),
        // Second row - 19 images
        ...Array.from({ length: 19 }, (_, i) => `${baseUrl}/matriz/second-row/second-row-${String(i + 1).padStart(2, '0')}.png`),
        // Third row - 20 images
        ...Array.from({ length: 20 }, (_, i) => `${baseUrl}/matriz/third-row/third-row-${String(i + 1).padStart(2, '0')}.png`),
    ];
    return images[index % images.length];
}