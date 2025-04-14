'use client';

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState({ success: false, message: '' });
  const [showResult, setShowResult] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setShowResult(false);
    
    try {
      // 이메일 전송 로직 (실제로는 서버 API를 호출해야 합니다)
      // 현재는 mailto 링크로 대체합니다
      const { name, email, phone, subject, message } = formData;
      const mailtoSubject = encodeURIComponent(`[웹사이트 문의] ${subject || '일반 문의'}`);
      const mailtoBody = encodeURIComponent(
        `이름: ${name}\n` +
        `이메일: ${email}\n` +
        `연락처: ${phone || '미입력'}\n\n` +
        `문의 내용:\n${message}`
      );
      
      // mailto 링크 생성 및 열기
      const mailtoLink = `mailto:hjs4425006@naver.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      window.location.href = mailtoLink;
      
      setSubmitResult({
        success: true,
        message: '문의가 성공적으로 전송되었습니다. 이메일 클라이언트가 열리지 않은 경우, 직접 이메일을 보내주세요.'
      });
      
      // 폼 초기화
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        privacy: false
      });
    } catch (error) {
      setSubmitResult({
        success: false,
        message: '문의 전송 중 오류가 발생했습니다. 다시 시도하거나 직접 연락해주세요.'
      });
    } finally {
      setIsSubmitting(false);
      setShowResult(true);
      
      // 5초 후 결과 메시지 숨기기
      setTimeout(() => {
        setShowResult(false);
      }, 5000);
    }
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
              <a href="/about" className="hover:text-blue-600">소개</a>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <span className="text-gray-800">연락처</span>
            </li>
          </ol>
        </nav>
      </div>
      
      {/* 페이지 제목 */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 border-b pb-4">연락처</h1>
      </div>

      {/* 주요 연락처 */}
      <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex flex-col items-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">대표 전화</h3>
          </div>
          <div className="text-center">
            <p className="text-gray-600 mb-2">문의 사항은 아래 번호로 연락주세요</p>
            <p className="text-xl font-semibold text-blue-600">02-2066-0218</p>
            <p className="text-sm text-gray-500 mt-2">평일, 주말 24시간 접수 가능</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex flex-col items-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-green-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">이메일</h3>
          </div>
          <div className="text-center">
            <p className="text-gray-600 mb-2">이메일로 문의 사항을 보내주세요</p>
            <p className="text-xl font-semibold text-green-600">hjs4425006@naver.com</p>
            <p className="text-sm text-gray-500 mt-2">24시간 접수 가능</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex flex-col items-center mb-4">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-purple-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">팩스</h3>
          </div>
          <div className="text-center">
            <p className="text-gray-600 mb-2">팩스로 서류를 보내실 수 있습니다</p>
            <p className="text-xl font-semibold text-purple-600">0504-316-5006</p>
            <p className="text-sm text-gray-500 mt-2">24시간 접수 가능</p>
          </div>
        </div>
      </div>

      {/* 문의 양식 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3 flex items-center">
          문의하기
          <span className="ml-2 text-sm font-normal text-gray-500">*이메일로 접수</span>
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          {showResult && (
            <div className={`mb-6 p-4 rounded-md ${submitResult.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              {submitResult.message}
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">이름 *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">이메일 *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  required 
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">문의 유형 *</label>
                <select 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  required
                >
                  <option value="">선택해주세요</option>
                  <option value="general">일반 문의</option>
                  <option value="technical">기술 문의</option>
                  <option value="cooperation">협력 제안</option>
                  <option value="visit">방문 예약</option>
                  <option value="other">기타</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">문의 내용 *</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6} 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                required
              ></textarea>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  checked={formData.privacy}
                  onChange={handleCheckbox}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="privacy" className="font-medium text-gray-700">개인정보 수집 및 이용에 동의합니다 *</label>
                <p className="text-gray-500">문의 접수 및 처리를 위해 이름, 이메일, 연락처 정보를 수집합니다. 수집된 정보는 문의 처리 후 3개월간 보관됩니다.</p>
              </div>
            </div>
            <div className="text-right">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '전송 중...' : '문의하기'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* 부서별 연락처 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">부서별 연락처</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="py-3 px-4 text-left font-semibold">부서</th>
                <th className="py-3 px-4 text-left font-semibold">담당 업무</th>
                <th className="py-3 px-4 text-left font-semibold">연락처</th>
                <th className="py-3 px-4 text-left font-semibold">이메일</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">불용팀</td>
                <td className="py-3 px-4 text-gray-600">불용 물품 처리(폐기, 매각 관련 등)</td>
                <td className="py-3 px-4">02-2066-0218 </td>
                <td className="py-3 px-4">hjs4393@naver.com</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">RFID팀</td>
                <td className="py-3 px-4 text-gray-600">RFID 관련 문의(시스템, 소모품 등) </td>
                <td className="py-3 px-4">051-442-5006 </td>
                <td className="py-3 px-4">hjs4425006@naver.com</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">기술이전팀</td>
                <td className="py-3 px-4 text-gray-600">기술 이전, 특허 관리</td>
                <td className="py-3 px-4">031-123-4567 (내선 3)</td>
                <td className="py-3 px-4">transfer@research.com</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">총무팀</td>
                <td className="py-3 px-4 text-gray-600">인사, 행정, 시설 관리</td>
                <td className="py-3 px-4">031-123-4567 (내선 4)</td>
                <td className="py-3 px-4">admin@research.com</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">홍보팀</td>
                <td className="py-3 px-4 text-gray-600">홍보, 미디어 대응</td>
                <td className="py-3 px-4">031-123-4567 (내선 5)</td>
                <td className="py-3 px-4">pr@research.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 지도 및 위치 */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">찾아오시는 길</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="w-full h-[300px] relative rounded-lg overflow-hidden border border-gray-200 mb-4">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.0378083237126!2d126.77765591531296!3d37.37194797983347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6f23a21ce6f9%3A0x5e5051c03e010c85!2z6rK967O16raB7Iuc7ZeI7IucIDU4NS0y67KI7KeA!5e0!3m2!1sko!2skr!4v1642412345678!5m2!1sko!2skr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="연구원 위치"
                className="absolute top-0 left-0"
              ></iframe>
            </div>
            <p className="text-sm text-gray-600 mb-4">주소: 경기도 시흥시 과림동 585-2번지</p>
            <a 
              href="/about/location" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <span>상세 찾아오시는 길 안내</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-blue-50 p-6 rounded-lg h-full">
              <h3 className="text-xl font-bold text-blue-800 mb-4">운영 시간</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700"><span className="font-medium">업무 시간:</span> 평일 09:00 - 18:00</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700"><span className="font-medium">점심 시간:</span> 11:00 - 12:00</p>
                </li>
                 <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                <p className="ml-3 text-gray-700"><span className="font-medium">문의 :</span> 24시간 접수 </p> 
                </li> 
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700"><span className="font-medium">방문 안내:</span> 방문 시 사전 예약 필요</p>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-white rounded-lg border border-blue-100">
                <p className="text-gray-800">
                  <span className="font-semibold">참고 :</span> 방문 전 담당자와 사전 협의 부탁드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 