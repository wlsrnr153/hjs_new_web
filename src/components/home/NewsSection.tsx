"use client";

import Link from 'next/link';

export default function NewsSection() {
  const newsItems = [
    {
      id: 1,
      title: '신규 프로젝트 출시 안내',
      date: '2025.03.21',
      link: '/news/1'
    },
    {
      id: 2,
      title: '2025년 기술 세미나 개최 안내',
      date: '2025.03.15',
      link: '/news/2'
    },
    {
      id: 3,
      title: '신규 인재 채용 안내',
      date: '2025.03.10',
      link: '/news/3'
    },
    {
      id: 4,
      title: '기술 개발 성과 발표회 안내',
      date: '2025.03.05',
      link: '/news/4'
    },
    {
      id: 5,
      title: '2025년 사업 계획 발표',
      date: '2025.03.01',
      link: '/news/5'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-[#dddddd]">
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-[#dddddd]">
        <h2 className="text-xl font-bold text-[#004b93]">공지사항</h2>
        <Link href="/news" className="text-sm text-[#004b93] hover:text-[#0067cd] hover:underline transition-colors">
          더보기
        </Link>
      </div>
      <ul className="space-y-3">
        {newsItems.map((item) => (
          <li key={item.id} className="flex justify-between items-center hover:bg-[#f5f5f5] p-2 rounded transition-colors group">
            <Link href={item.link} className="text-gray-700 group-hover:text-[#004b93] truncate flex-1 transition-colors">
              {item.title}
            </Link>
            <span className="text-gray-500 text-sm">{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
} 