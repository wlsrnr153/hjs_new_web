import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CeoGreeting = () => {
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
              <Link href="/about/ceo" className="hover:text-blue-600">소개</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <span className="text-gray-800">CEO 인사말</span>
            </li>
          </ol>
        </nav>
      </div>
      
      {/* 페이지 제목 */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 border-b pb-4">CEO 인사말</h1>
      </div>

      {/* CEO 프로필 섹션 */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        <div className="lg:w-1/3">
          <div className="relative w-full aspect-[3/4] max-w-md mx-auto lg:mx-0">
            <Image
              src="/images/ceo.jpg"
              alt="CEO 프로필"
              fill
              className="object-cover rounded-lg border border-gray-200"
            />
          </div>
        </div>
        <div className="lg:w-2/3">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">엄성희</h2>
            <p className="text-lg text-gray-600">HJS 대표</p>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                안녕하세요. HJS 대표 엄성희입니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                HJS는 2005년 설립된 이래, 국가 재활용 사업 혁신을 선도해왔습니다. 
                우리 회사는 첨단 기술 연구와 산업화를 통해 국가 경쟁력 강화에 기여하고 있으며, 
                미래 기술 혁신을 선도하기 위해 끊임없이 노력하고 있습니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                4차 산업혁명 시대를 맞아 인공지능, 로봇, 바이오 등 첨단 기술 분야에서 
                혁신적인 연구 성과를 창출하고, 이를 통해 국가 산업의 발전에 기여하고 있습니다.
                특히, 중소·중견기업에 대한 기술 지원을 통해 국내 산업의 경쟁력 향상을 위해 
                노력하고 있습니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                앞으로도 한국기술연구원은 연구개발과 기술혁신을 통해 국가 발전에 기여하고, 
                글로벌 기술 리더로서의 역할을 수행하도록 하겠습니다. 
                여러분의 지속적인 관심과 성원을 부탁드립니다.
              </p>
              <p className="text-gray-700 leading-relaxed mt-8">
                감사합니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 비전 섹션 */}
      <div className="bg-blue-50 p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-blue-800 mb-8 text-center border-b border-blue-200 pb-4">회사 비전</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-4">혁신</div>
              <p className="text-gray-700">기술 혁신을 통한 미래 가치 창출</p>
              <p className="text-gray-600 text-sm mt-4">첨단 기술 개발과 응용을 통해 산업 발전에 기여합니다</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-green-600"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-4">성장</div>
              <p className="text-gray-700">지속가능한 성장과 발전 추구</p>
              <p className="text-gray-600 text-sm mt-4">경제, 사회, 환경적 가치의 균형 있는 성장을 지향합니다</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-purple-600"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-purple-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-4">협력</div>
              <p className="text-gray-700">글로벌 협력 네트워크 구축</p>
              <p className="text-gray-600 text-sm mt-4">국내외 연구기관, 기업과의 협력을 통해 시너지를 창출합니다</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeoGreeting;
