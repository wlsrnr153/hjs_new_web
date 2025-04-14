'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

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

interface FormData {
  title: string;
  author: string;
  password: string;
  email: string;
  phone: string;
  category: string;
  content: string;
  file: File | null;
  agreement: boolean;
}

// 로컬 스토리지에서 게시물 가져오기
const getStoredPosts = (): Post[] => {
  if (typeof window !== 'undefined') {
    const storedPosts = localStorage.getItem('quotationPosts');
    return storedPosts ? JSON.parse(storedPosts) : [];
  }
  return [];
};

// 로컬 스토리지에 게시물 저장
const storePosts = (posts: Post[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('quotationPosts', JSON.stringify(posts));
  }
};

const QuotationWrite = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    title: '',
    author: '',
    password: '',
    email: '',
    phone: '',
    category: '',
    content: '',
    file: null,
    agreement: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        file: e.target.files[0]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 폼 유효성 검사
    if (!formData.title.trim()) {
      alert('제목을 입력해주세요.');
      return;
    }
    
    if (!formData.author.trim()) {
      alert('작성자 이름을 입력해주세요.');
      return;
    }
    
    if (!formData.password.trim()) {
      alert('비밀번호를 입력해주세요.');
      return;
    }
    
    if (!formData.email.trim() && !formData.phone.trim()) {
      alert('이메일 또는 연락처 중 하나는 반드시 입력해주세요.');
      return;
    }
    
    if (!formData.category) {
      alert('문의 유형을 선택해주세요.');
      return;
    }
    
    if (!formData.content.trim()) {
      alert('문의 내용을 입력해주세요.');
      return;
    }
    
    if (!formData.agreement) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }
    
    // 로컬 스토리지에서 기존 게시물 가져오기
    const existingPosts = getStoredPosts();
    
    // 현재 날짜 형식 지정 (YYYY-MM-DD)
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    
    // 새 게시물 생성
    const newPost: Post = {
      id: existingPosts.length > 0 ? Math.max(...existingPosts.map(p => p.id)) + 1 : 1,
      title: formData.title,
      author: formData.author,
      date: formattedDate,
      views: 0,
      status: '대기중',
      content: formData.content,
      email: formData.email,
      phone: formData.phone,
      category: formData.category,
      password: formData.password
    };
    
    // 게시물 목록에 추가하고 저장
    const updatedPosts = [newPost, ...existingPosts];
    storePosts(updatedPosts);
    
    // 폼 제출 처리 (실제 구현 시에는 API 호출로 대체)
    console.log('폼 데이터:', formData);
    alert('견적 문의가 성공적으로 접수되었습니다.');
    router.push('/quotation');
  };

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
              <a href="/quotation" className="hover:text-blue-600">견적문의</a>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <span className="text-gray-800">견적문의 작성</span>
            </li>
          </ol>
        </nav>
      </div>
      
      {/* 페이지 제목 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 border-b pb-4">견적문의 작성</h1>
      </div>

      {/* 견적 문의 작성 폼 */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 기본 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">제목 *</label>
              <input 
                type="text" 
                id="title" 
                name="title" 
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                required 
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">문의 유형 *</label>
              <select 
                id="category" 
                name="category" 
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                required
              >
                <option value="">선택해주세요</option>
                <option value="플라스틱">폐플라스틱 재활용</option>
                <option value="금속">금속 폐기물 처리</option>
                <option value="전자폐기물">전자폐기물(E-waste) 처리</option>
                <option value="산업폐기물">산업 폐기물 관리</option>
                <option value="재생제품">재생 제품 생산</option>
                <option value="컨설팅">재활용 컨설팅</option>
                <option value="기타">기타</option>
              </select>
            </div>
          </div>

          {/* 작성자 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">작성자 *</label>
              <input 
                type="text" 
                id="author" 
                name="author" 
                value={formData.author}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                required 
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">비밀번호 *</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                required 
                placeholder="글 수정/삭제 시 필요합니다"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              placeholder="- 없이 입력해주세요"
            />
            <p className="mt-1 text-sm text-gray-500">이메일 또는 연락처 중 하나는 반드시 입력해주세요.</p>
          </div>

          {/* 문의 내용 */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">문의 내용 *</label>
            <textarea 
              id="content" 
              name="content" 
              value={formData.content}
              onChange={handleChange}
              rows={8} 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              required
              placeholder="처리할 폐기물의 종류, 예상 수량, 처리 주기 등 구체적으로 작성해주시면 더 정확한 견적을 안내해드릴 수 있습니다."
            ></textarea>
          </div>

          {/* 첨부 파일 */}
          <div>
            <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-1">첨부 파일</label>
            <input 
              type="file" 
              id="file" 
              name="file" 
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            />
            <p className="mt-1 text-sm text-gray-500">최대 10MB까지 업로드 가능합니다. (허용 형식: jpg, png, pdf, doc, docx, xls, xlsx)</p>
          </div>

          {/* 개인정보 동의 */}
          <div className="border-t pt-6">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="agreement"
                  name="agreement"
                  type="checkbox"
                  checked={formData.agreement}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="agreement" className="font-medium text-gray-700">개인정보 수집 및 이용에 동의합니다 *</label>
                <p className="text-gray-500 mt-1">수집된 개인정보(이름, 이메일, 연락처)는 견적 문의 답변 및 관련 연락 목적으로만 사용되며, 문의 처리 후 3개월 간 보관됩니다. 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으나, 동의하지 않을 경우 견적 문의 서비스 이용이 제한될 수 있습니다.</p>
              </div>
            </div>
          </div>

          {/* 버튼 */}
          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={() => router.push('/quotation')}
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              취소
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              문의하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuotationWrite; 