'use client';
import Image from "next/image";
import { useState } from "react";

export default function TestMatrix() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Generate 24 test images (same as a full row in HeroMatrix)
    const testImages = Array.from({ length: 24 }, (_, i) =>
        `https://demoairbnbbucket.s3.us-east-2.amazonaws.com/matriz/first-row/first-row-${String(i + 1).padStart(2, '0')}.png`
    );

    return (
        <div className="h-screen w-full overflow-auto bg-black scroll-smooth scrollbar-none px-4">
            <h1 className="text-white text-2xl mb-8 pt-8">Matrix Scale Test - Scrollable Container (EXACT HeroMatrix setup)</h1>

            <div className="flex flex-wrap gap-4 min-w-full sm:min-w-[200%] min-h-full sm:min-h-[200%]">
                {testImages.map((img, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-1/5 md:w-[14.28%] lg:w-[12%] aspect-[3/2] relative overflow-hidden bg-gray-900"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Image
                            src={img}
                            alt={`test ${index}`}
                            fill
                            className={`object-cover p-2 transition-all duration-700 ease-out
                                ${hoveredIndex === index ? 'scale-105 brightness-105' : ''}
                                ${hoveredIndex !== null && hoveredIndex !== index ? 'scale-98 opacity-80' : ''}
                            `}
                            sizes="400px"
                        />
                    </div>
                ))}
            </div>

            <div className="mt-8 text-white text-sm">
                <p>Hovered Index: {hoveredIndex !== null ? hoveredIndex : 'None'}</p>
                <p className="mt-2">Test: Hover over images to see if they scale evenly from center</p>
                <p className="mt-2 text-yellow-400">Watch for: Does the image shift to the right when hovering?</p>
                <p className="mt-2 text-gray-400">Now using the SAME responsive widths as HeroMatrix: w-full sm:w-1/5 md:w-[14.28%] lg:w-[12%]</p>
            </div>
        </div>
    );
}
