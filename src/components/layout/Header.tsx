"use client";

import Link from 'next/link';
import Image from 'next/image';
import MenuSection from './MenuSection';

export default function Header() {
  return (
    <header className="relative bg-white shadow-md z-30">
      {/* 상단 유틸리티 메뉴 */}
      <div className="bg-[#f5f5f5] border-b border-[#dddddd]">
        <div className="container mx-auto px-4">
          <div className="flex justify-end py-2 text-sm">
            <Link href="/english" className="text-gray-600 hover:text-[#004b93] px-3 py-1 transition-colors">ENGLISH</Link>
            <div className="flex items-center text-gray-600 px-3 py-1">
              <span className="mr-2">확대</span>
              <button className="text-xs mx-1 hover:text-[#004b93] transition-colors">100%</button>
              <button className="text-xs mx-1 hover:text-[#004b93] transition-colors">축소</button>
            </div>
            <button className="text-gray-600 hover:text-[#004b93] px-3 py-1 flex items-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              검색
            </button>
          </div>
        </div>
      </div>

      {/* 로고 및 주 메뉴 */}
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between py-4">
          {/* 로고 */}
          <Link href="/" className="flex items-center z-10">
            <Image 
              src="/images/logo.jpg" 
              alt="HJS 회사 로고" 
              width={150} 
              height={40} 
              quality={100}
              priority
            />
          </Link>
        </div>
      </div>
    </header>
  );
} 