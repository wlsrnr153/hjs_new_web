"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function PressSection() {
  const pressItems = [
    {
      id: 1,
      title: 'HJS, RFID 물품관리 시스템 구축 프로젝트 수주',
      date: '2025.03.21',
      summary: 'HJS가 RFID 기반 물품관리 시스템 구축 프로젝트를 수주했습니다. 이번 프로젝트를 통해 고객사의 물품관리 효율성이 크게 향상될 것으로 기대됩니다.',
      image: '/images/press1.jpg',
      link: '/news/press/1'
    },
    {
      id: 2,
      title: '친환경 소모품 RFID 태그 개발 성공',
      date: '2025.03.15',
      summary: 'HJS가 친환경 소재를 활용한 RFID 태그를 개발했습니다. 이번 개발로 환경오염을 최소화하면서도 효율적인 물품관리가 가능해졌습니다.',
      image: '/images/press2.jpg',
      link: '/news/press/2'
    },
    {
      id: 3,
      title: '불용물품 처리 시스템 고도화 완료',
      date: '2025.03.10',
      summary: 'HJS가 자체 개발한 불용물품 처리 시스템의 고도화를 완료했습니다. 새로운 시스템은 처리 효율을 30% 이상 향상시켰습니다.',
      image: '/images/press3.jpg',
      link: '/news/press/3'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-[#dddddd]">
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-[#dddddd]">
        <h2 className="text-xl font-bold text-[#004b93]">보도자료</h2>
        <Link href="/news/press" className="text-sm text-[#004b93] hover:text-[#0067cd] hover:underline transition-colors">
          더보기
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pressItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm border border-[#dddddd] overflow-hidden hover:shadow-md transition-all hover:border-[#004b93]">
            <div className="relative h-48">
              <Image 
                src={item.image} 
                alt={item.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">
                <Link href={item.link} className="hover:text-[#004b93] transition-colors">
                  {item.title}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.summary}</p>
              <div className="flex justify-between items-center">
                <div className="text-gray-500 text-xs">{item.date}</div>
                <Link href={item.link} className="text-xs text-[#004b93] hover:underline">자세히 보기</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 