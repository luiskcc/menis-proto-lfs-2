'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function LoadingScreen({ onLoadingComplete }) {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
        if (onLoadingComplete) {
          onLoadingComplete();
        }
      }, 800);
    }, 2500); // Show loading screen for 2.5 seconds

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isLoading) {
    return null;
  }

  return (
    <div className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-800 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      {/* Main Content Container - Perfectly Centered */}
      <div className="flex flex-col items-center">
        
        {/* Brand Text */}
        <div className="text-center">
          <h1 className="text-white text-5xl font-roboto tracking-wide animate-fadeInUp">
            FERNANDO MENIS
          </h1> 
        </div>
      </div>
    </div>
  );
}