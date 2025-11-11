'use client';
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

// Desaturated tonal filter preserving some color information
function applyCustomBwFilter(imgElement) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = imgElement.width;
    canvas.height = imgElement.height;
    ctx.drawImage(imgElement, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Calculate luminance for contrast adjustment
        const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

        // Desaturation: blend original colors with luminance (80% desaturated, 20% color)
        const desaturationAmount = 0.80;
        let newR = r * (1 - desaturationAmount) + luminance * desaturationAmount;
        let newG = g * (1 - desaturationAmount) + luminance * desaturationAmount;
        let newB = b * (1 - desaturationAmount) + luminance * desaturationAmount;

        // Adjust individual channels for slightly cooler tone
        // Reds: 40, Yellows: 60, Greens: 40, Cyans: 60, Blues: 20, Magentas: 80
        newR *= 0.98;  // Slightly reduce reds
        newG *= 1.00;  // Keep greens neutral
        newB *= 1.05;  // Slightly boost blues for subtle cool tone

        // Slight contrast boost
        const contrast = 1.15;
        newR = ((newR - 128) * contrast) + 128;
        newG = ((newG - 128) * contrast) + 128;
        newB = ((newB - 128) * contrast) + 128;

        // Clamp values
        data[i] = Math.min(255, Math.max(0, newR));
        data[i + 1] = Math.min(255, Math.max(0, newG));
        data[i + 2] = Math.min(255, Math.max(0, newB));
    }

    ctx.putImageData(imageData, 0, 0);
    return canvas;
}

export default function Hero() {
    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [filteredImages, setFilteredImages] = useState({});

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

    // Apply custom filter to images when they load
    const handleImageLoad = (e, index) => {
        const img = e.target;
        const canvas = applyCustomBwFilter(img);
        const dataUrl = canvas.toDataURL();
        setFilteredImages(prev => ({
            ...prev,
            [index]: dataUrl
        }));
    };

    return (
        <div
            ref={scrollContainerRef}
            className="h-screen w-full overflow-auto cursor-pointer bg-black scroll-smooth
            scrollbar-none touch-pan-x touch-pan-y px-4"
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
            <div className="flex flex-wrap gap-10 min-w-full sm:min-w-[200%] min-h-full sm:min-h-[200%]">
                {[...Array(62)].map((_, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-1/5 md:w-[14.28%] lg:w-[12%] aspect-[3/2] relative overflow-hidden"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="absolute inset-0 bg-black/50 transition-opacity duration-700 ease-out z-10
                            opacity-0 hover:opacity-100"></div>

                        {/* Hidden original image for filter processing */}
                        <Image
                            src={getImageSource(index)}
                            alt="architectural image"
                            fill
                            className="opacity-0 pointer-events-none"
                            sizes="400px"
                            onLoad={(e) => handleImageLoad(e, index)}
                        />

                        {/* Display filtered or original image based on hover state */}
                        {hoveredIndex === index ? (
                            <Image
                                src={getImageSource(index)}
                                alt="architectural image"
                                fill
                                className="object-cover transition-all duration-700 ease-out z-50 scale-105 brightness-105"
                                sizes="400px"
                            />
                        ) : (
                            filteredImages[index] && (
                                <img
                                    src={filteredImages[index]}
                                    alt="architectural image"
                                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out
                                        ${hoveredIndex !== null ? 'scale-98 opacity-80' : 'scale-100'}`}
                                />
                            )
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent
                            transition-opacity duration-700 ease-out z-20 opacity-0 hover:opacity-100">
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