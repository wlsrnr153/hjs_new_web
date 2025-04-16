"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  views: number;
  status: string;
  content?: string;
}

export default function NewsSection() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // 기본 데이터 (공지사항이 없을 때 표시할 예시 데이터)
  const defaultPosts = [
    {
      id: 1,
      title: '홈페이지 리뉴얼 작업 중입니다..',
      date: new Date().toISOString().split('T')[0],
      author: '관리자',
      views: 0,
      status: '일반'
    },
    {
      id: 2,
      title: '공지사항, 견적문의, 프로젝트 탭이 작동하지 않을 수 있습니다.',
      date: new Date().toISOString().split('T')[0],
      author: '관리자',
      views: 0,
      status: '공지'
    },
    {
      id: 3,
      title: '카카오톡 채팅 및 통화를 통해 문의 상담 부탁드립니다.',
      date: new Date().toISOString().split('T')[0],
      author: '관리자',
      views: 0,
      status: '공지'
    }
  ];

  useEffect(() => {
    setIsMounted(true);
    
    try {
      // localStorage에서 공지사항 데이터 가져오기
      const storedPosts = localStorage.getItem('noticePosts');
      if (storedPosts) {
        const parsedPosts = JSON.parse(storedPosts);
        
        // 최신순으로 정렬 (날짜순, 그 다음 id순)
        const sortedPosts = [...parsedPosts].sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          if (dateA.getTime() === dateB.getTime()) {
            return b.id - a.id;
          }
          return dateB.getTime() - dateA.getTime();
        });
        
        // 최대 7개까지만 표시
        setPosts(sortedPosts.slice(0, 7));
      }
    } catch (error) {
      console.error('Failed to load posts from localStorage:', error);
    }
  }, []);

  // 표시할 공지사항 목록 (실제 데이터가 없으면 기본 데이터 사용)
  const displayPosts = isMounted && posts.length > 0 ? posts : defaultPosts;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-[#dddddd]">
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-[#dddddd]">
        <h2 className="text-xl font-bold text-[#004b93]">공지사항</h2>
        <Link href="/notice" className="text-sm text-[#004b93] hover:text-[#0067cd] hover:underline transition-colors">
          더보기
        </Link>
      </div>
      <ul className="space-y-3">
        {displayPosts.map((post) => (
          <li key={post.id} className="flex justify-between items-center hover:bg-[#f5f5f5] p-2 rounded transition-colors group">
            <Link 
              href={`/notice/${post.id}`} 
              className="text-gray-700 group-hover:text-[#004b93] truncate flex-1 transition-colors flex items-center"
            >
              {post.status === '중요' && (
                <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  중요
                </span>
              )}
              {post.title}
            </Link>
            <span className="text-gray-500 text-sm">{post.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
} 