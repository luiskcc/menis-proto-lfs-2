'use client';
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

// Simplified channel mixer based on Photoshop settings
function applyCustomBwFilter(imgElement) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = imgElement.width;
    canvas.height = imgElement.height;
    ctx.drawImage(imgElement, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    // Photoshop-inspired weights (normalized)
    // Higher values = lighter in grayscale, lower = darker
    const weights = {
        r: 0.40,  // Reds: 40
        g: 0.50,  // Greens: 40-60 average
        b: 0.20   // Blues: 20
    };

    // Boost for warm tones (yellows/magentas)
    const warmBoost = 1.15;

    for (let i = 0; i < imageData.data.length; i += 4) {
        const r = imageData.data[i];
        const g = imageData.data[i + 1];
        const b = imageData.data[i + 2];

        // Detect warm tones (high red+green, or high red+blue for magenta)
        const isWarm = (r > b && g > b * 0.8) || (r > g && b > g * 0.8);
        const boost = isWarm ? warmBoost : 1.0;

        // Weighted grayscale conversion
        let gray = (r * weights.r + g * weights.g + b * weights.b) * boost;

        // Clamp values
        gray = Math.min(255, Math.max(0, gray));

        imageData.data[i] = imageData.data[i + 1] = imageData.data[i + 2] = gray;
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
                        className="w-full sm:w-1/4 md:w-[16.666%] lg:w-[12.5%] aspect-[4/3] relative overflow-hidden"
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
                                className="object-cover p-2 transition-all duration-700 ease-out z-50 scale-110 brightness-110"
                                sizes="400px"
                            />
                        ) : (
                            filteredImages[index] && (
                                <img
                                    src={filteredImages[index]}
                                    alt="architectural image"
                                    className={`absolute inset-0 w-full h-full object-cover p-2 transition-all duration-700 ease-out
                                        ${hoveredIndex !== null ? 'scale-95 opacity-60' : 'scale-100'}`}
                                />
                            )
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent
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