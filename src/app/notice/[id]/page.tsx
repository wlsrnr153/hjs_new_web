'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
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
  password?: string;
}

// 로컬 스토리지에서 게시물 가져오기
const getStoredPosts = (): Post[] => {
  try {
    if (typeof window !== 'undefined') {
      const storedPosts = localStorage.getItem('noticePosts');
      return storedPosts ? JSON.parse(storedPosts) : [];
    }
  } catch (error) {
    console.error('Failed to get posts from localStorage:', error);
  }
  return [];
};

// 로컬 스토리지에 게시물 저장
const storePosts = (posts: Post[]) => {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem('noticePosts', JSON.stringify(posts));
    }
  } catch (error) {
    console.error('Failed to store posts to localStorage:', error);
  }
};

export default function NoticeDetail() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [action, setAction] = useState<'delete' | 'edit' | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    
    if (!params.id) {
      setIsLoading(false);
      return;
    }
    
    try {
      const postId = Number(params.id);
      const posts = getStoredPosts();
      const foundPost = posts.find(p => p.id === postId);
      
      if (foundPost) {
        // 조회수 증가
        const updatedPost = { ...foundPost, views: foundPost.views + 1 };
        setPost(updatedPost);
        
        // 로컬 스토리지 업데이트
        const updatedPosts = posts.map(p => p.id === postId ? updatedPost : p);
        storePosts(updatedPosts);
      } else if (isMounted) {
        // 게시물이 존재하지 않으면 목록으로 리다이렉트
        router.push('/notice');
      }
    } catch (error) {
      console.error('Error loading post:', error);
    } finally {
      setIsLoading(false);
    }
  }, [params.id, router, isMounted]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!post) return;
    
    try {
      if (post.password === password) {
        if (action === 'delete') {
          // 게시물 삭제
          const posts = getStoredPosts();
          const updatedPosts = posts.filter(p => p.id !== post.id);
          storePosts(updatedPosts);
          alert('게시물이 삭제되었습니다.');
          router.push('/notice');
        } else if (action === 'edit') {
          // 수정 페이지로 이동 (구현 예정)
          alert('수정 기능은 아직 구현되지 않았습니다.');
        }
        setIsPasswordModalOpen(false);
      } else {
        alert('비밀번호가 일치하지 않습니다.');
      }
    } catch (error) {
      console.error('Error processing action:', error);
      alert('오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const handleAction = (actionType: 'delete' | 'edit') => {
    setAction(actionType);
    setIsPasswordModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-lg">게시물을 불러오는 중입니다...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-lg">게시물을 찾을 수 없습니다.</p>
          <Link 
            href="/notice"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 inline-block"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 페이지 내비게이션 */}
      <div className="mb-6">
        <nav className="text-sm text-gray-500">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="/" className="hover:text-blue-600">홈</a>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <a href="/notice" className="hover:text-blue-600">공지사항</a>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <span className="text-gray-800">공지사항 상세</span>
            </li>
          </ol>
        </nav>
      </div>
      
      {/* 게시물 상세 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        {/* 게시물 헤더 */}
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h1>
          <div className="flex justify-between text-sm text-gray-600">
            <div>
              <span className="font-medium">작성자:</span> {post.author}
              <span className="mx-4">|</span>
              <span className="font-medium">작성일:</span> {post.date}
            </div>
            <div>
              <span className="font-medium">조회수:</span> {post.views}
              <span className="mx-4">|</span>
              <span className="font-medium">상태:</span> 
              <span className={`ml-1 px-2 py-0.5 rounded-full text-xs font-medium ${post.status === '중요' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
                {post.status}
              </span>
            </div>
          </div>
        </div>
        
        {/* 게시물 내용 */}
        <div className="p-6 min-h-[200px] whitespace-pre-wrap">
          {post.content}
        </div>
      </div>
      
      {/* 버튼 그룹 */}
      <div className="flex justify-between">
        <div className="space-x-3">
          <button 
            onClick={() => handleAction('edit')}
            className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            수정
          </button>
          <button 
            onClick={() => handleAction('delete')}
            className="px-4 py-2 text-sm bg-red-100 text-red-700 rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            삭제
          </button>
        </div>
        <Link 
          href="/notice"
          className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          목록
        </Link>
      </div>

      {/* 비밀번호 확인 모달 */}
      {isPasswordModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">비밀번호 확인</h3>
            <form onSubmit={handlePasswordSubmit}>
              <p className="mb-4 text-sm text-gray-600">
                {action === 'delete' 
                  ? '게시물을 삭제하시려면 비밀번호를 입력해주세요.' 
                  : '게시물을 수정하시려면 비밀번호를 입력해주세요.'}
              </p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
                placeholder="비밀번호를 입력해주세요"
                required
              />
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsPasswordModalOpen(false)}
                  className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  확인
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}