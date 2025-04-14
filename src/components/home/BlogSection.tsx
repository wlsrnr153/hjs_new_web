"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: 'RFID 물품관리',
      summary: 'RFID 물품관리시스템 솔루션.',
      image: '/images/rfid1.jpg',
      date: '2025.03.15',
      link: '/blog/1'
    },
    {
      id: 2,
      title: 'RFID 소모품',
      summary: 'RFID 태그 발행기, 리더기, 태그 등 소모품.',
      image: '/images/rfid1.jpg',
      date: '2025.03.10',
      link: '/blog/2'
    },
    {
      id: 3,
      title: '불용물품 처분',
      summary: '인공지능 기술이 각 산업 분야에 미치는 영향과 혁신에 대해 소개합니다.',
      image: '/images/work.jpg',
      date: '2025.03.05',
      link: '/blog/3'
    },
    {
      id: 4,
      title: '지속 가능한 발전을 위한 기술',
      summary: '환경 보호와 지속 가능한 발전을 위한 기술 적용 사례입니다.',
      image: '/images/work.jpg',
      date: '2025.03.01',
      link: '/blog/4'
    }
  ];

  return (
    <section className="my-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">사업영역</h2>
        <Link href="/blog" className="text-blue-600 hover:underline">
          더보기
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image 
                src={post.image} 
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">
                <Link href={post.link} className="hover:text-blue-600">
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.summary}</p>
              <div className="text-gray-500 text-xs">{post.date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 