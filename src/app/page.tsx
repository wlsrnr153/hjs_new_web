import Image from 'next/image';
import MainBanner from '@/components/home/MainBanner';
import NewsSection from '@/components/home/NewsSection';
import BlogSection from '@/components/home/BlogSection';
import MediaSection from '@/components/home/MediaSection';
import PressSection from '@/components/home/PressSection';

export default function Home() {
  return (
    <div>
      
      <div className="container mx-auto px-4">
        {/* 메인 배너 슬라이더 */}
        <div className="mt-8">
          <MainBanner />
        </div>
        
        {/* 공지사항 및 뉴스 섹션 */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <NewsSection />
          <PressSection />
        </div>
        
        {/* 블로그 섹션 */}
        <BlogSection />
        
        {/* 미디어 섹션 (동영상) */}
        <MediaSection />
      </div>
    </div>
  );
}