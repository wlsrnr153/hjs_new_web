"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { banners } from '@/data/banners';
import { useRouter } from 'next/navigation';

export default function MainBanner() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleBannerClick = (banner: typeof banners[0]) => {
    if (banner.link.startsWith('kakaotalk://')) {
      window.location.href = banner.link;
    } else {
      router.push(banner.link);
    }
  };

  return (
    <div className="relative h-[400px] overflow-hidden rounded-lg mb-8">
      {banners.map((banner, index) => (
        <div 
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentBanner ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <div 
            className="block relative h-full w-full cursor-pointer"
            onClick={() => handleBannerClick(banner)}
          >
            <div className="relative h-full w-full">
              <Image 
                src={banner.image} 
                alt={banner.title}
                fill
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-700/40 flex flex-col justify-center px-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{banner.title}</h2>
                <p className="text-lg md:text-xl text-gray-100">{banner.description}</p>
                <div className="mt-6">
                  <span className="inline-block bg-white text-gray-800 px-4 py-2 rounded hover:bg-[#f6ab00] hover:text-white transition-colors duration-300 text-sm font-medium">
                    자세히 보기
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentBanner ? 'bg-[#f6ab00] w-6' : 'bg-white/70 hover:bg-white'
            }`}
            onClick={() => setCurrentBanner(index)}
            aria-label={`배너 ${index + 1}로 이동`}
          />
        ))}
      </div>
    </div>
  );
}