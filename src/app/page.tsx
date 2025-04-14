import React from 'react';
import MainBanner from '@/components/home/MainBanner';
import NewsSection from '@/components/home/NewsSection';
import MediaSection from '@/components/home/MediaSection';
import BlogSection from '@/components/home/BlogSection';
import PressSection from '@/components/home/PressSection';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <MainBanner />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <NewsSection />
        <PressSection />
      </div>
      <MediaSection />
      <BlogSection />
    </main>
  );
}