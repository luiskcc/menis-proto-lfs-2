'use client';

import { Geist, Geist_Mono } from "next/font/google";
import { useState, useEffect } from "react";
import "./globals.css";
import LoadingScreen from "./components/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  color: "white",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  color: "white",
});

export default function RootLayout({ children }) {
  const [showLoading, setShowLoading] = useState(true);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  return (
    <html lang="en">
      <head>
        <title>Fernando Menis - Arquitectura</title>
        <meta name="description" content="Portfolio de Fernando Menis - Arquitectura" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mt-20`}
      >
        {showLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
        <div className={showLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
          {children}
        </div>
      </body>
    </html>
  );
}
