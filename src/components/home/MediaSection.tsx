"use client";


import Link from 'next/link';

export default function MediaSection() {
  const mediaItems = [
    {
      id: 1,
      title: '회사 소개 영상',
      thumbnail: '/images/video1.jpg',
      link: '/media/1'
    },
    {
      id: 2,
      title: '신제품 출시 영상',
      thumbnail: '/images/video2.jpg',
      link: '/media/2'
    },
    {
      id: 3,
      title: '기술 시연 영상',
      thumbnail: '/images/video3.jpg',
      link: '/media/3'
    },
    {
      id: 4,
      title: '기술 시연 영상',
      thumbnail: '/images/video3.jpg',
      link: '/media/3'
    }


  ];

  return (
    <section className="my-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">미디어</h2>
        <Link href="/media" className="text-blue-600 hover:underline">
          더보기
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mediaItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div 
              className="relative h-48 bg-cover bg-center" 
              style={{ backgroundImage: `url(${item.thumbnail})` }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-blue-600/90 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800">
                <Link href={item.link} className="hover:text-blue-600 transition-colors">
                  {item.title}
                </Link>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 