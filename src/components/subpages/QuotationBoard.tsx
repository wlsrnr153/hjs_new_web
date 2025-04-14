'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Post 타입 정의
interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  views: number;
  status: string;
  content?: string;
  email?: string;
  phone?: string;
  category?: string;
  password?: string;
}

// 로컬 스토리지에서 게시물 가져오기
const getStoredPosts = (): Post[] => {
  if (typeof window !== 'undefined') {
    const storedPosts = localStorage.getItem('quotationPosts');
    return storedPosts ? JSON.parse(storedPosts) : [];
  }
  return [];
};

const QuotationBoard = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');

  // 컴포넌트 마운트 시 데이터 로드
  useEffect(() => {
    const loadedPosts = getStoredPosts();
    setPosts(loadedPosts);
  }, []);

  // 검색 기능
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const allPosts = getStoredPosts();
    // 검색어로 필터링
    const filtered = allPosts.filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setPosts(filtered);
  };

  // 카테고리 필터링
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const allPosts = getStoredPosts();
    if (category === '전체') {
      setPosts(allPosts);
    } else {
      // 상태에 따라 필터링
      const filtered = allPosts.filter(post => 
        category === '답변완료' ? post.status === '답변완료' : post.status !== '답변완료'
      );
      setPosts(filtered);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 페이지 내비게이션 */}
      <div className="mb-6">
        <nav className="text-sm text-gray-500">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link href="/" className="hover:text-blue-600">홈</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <span className="text-gray-800">견적문의</span>
            </li>
          </ol>
        </nav>
      </div>
      
      {/* 페이지 제목 */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 border-b pb-4">견적문의</h1>
      </div>

      {/* 검색 및 필터 */}
      <div className="mb-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-2 mb-4 md:mb-0">
          <button 
            className={`px-4 py-2 text-sm rounded-md ${selectedCategory === '전체' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => handleCategoryChange('전체')}
          >
            전체
          </button>
          <button 
            className={`px-4 py-2 text-sm rounded-md ${selectedCategory === '답변완료' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => handleCategoryChange('답변완료')}
          >
            답변완료
          </button>
          <button 
            className={`px-4 py-2 text-sm rounded-md ${selectedCategory === '대기중' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => handleCategoryChange('대기중')}
          >
            대기중
          </button>
        </div>
        <form onSubmit={handleSearch} className="flex w-full md:w-auto">
          <input
            type="text"
            placeholder="제목 또는 작성자 검색"
            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            검색
          </button>
        </form>
      </div>

      {/* 게시글 목록 */}
      <div className="overflow-x-auto bg-white rounded-lg shadow mb-8">
        <table className="w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">번호</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제목</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작성자</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작성일</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">조회수</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-50 cursor-pointer">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <Link href={`/quotation/${post.id}`} className="hover:text-blue-600">
                    {post.title}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.author}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.views}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${post.status === '답변완료' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {post.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 페이지네이션 */}
      <div className="flex justify-center mb-8">
        <nav className="inline-flex rounded-md shadow">
          <a href="#" className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            이전
          </a>
          <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-blue-50 text-sm font-medium text-blue-600">
            1
          </a>
          <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            2
          </a>
          <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            3
          </a>
          <a href="#" className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            다음
          </a>
        </nav>
      </div>

      {/* 글쓰기 버튼 */}
      <div className="flex justify-end">
        <Link href="/quotation/write" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          견적문의 작성
        </Link>
      </div>
    </div>
  );
};

export default QuotationBoard; 