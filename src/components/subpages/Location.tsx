import React from 'react';

const Location = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 페이지 내비게이션 */}
      <div className="mb-6">
        <nav className="text-sm text-gray-500">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="/" className="hover:text-[#004b93] transition-colors">홈</a>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <a href="/about" className="hover:text-[#004b93] transition-colors">소개</a>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <span className="text-gray-800">찾아오시는길</span>
            </li>
          </ol>
        </nav>
      </div>
      
      {/* 페이지 제목 */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 border-b pb-4">찾아오시는길</h1>
      </div>

      {/* 지도 섹션 */}
      <div className="mb-12">
        <div className="w-full h-[500px] relative rounded-lg overflow-hidden border border-gray-200 mb-4">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d792.0400525846536!2d126.83967447382004!3d37.43331987424857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b63919ce43863%3A0x6c236fa6d6a0e83b!2z6rK96riw64-EIOyLnO2dpeyLnCDqs7zrprzrj5kgNTg1LTI!5e0!3m2!1sko!2skr!4v1744601570832!5m2!1sko!2skr"
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
        <div className="bg-[#f5f5f5] p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#004b93] mb-2">주소</h3>
          <p className="text-gray-700 mb-1">경기도 시흥시 과림동 585-2번지</p>
          <p className="text-gray-600 mb-4">우편번호: 15014</p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://maps.google.com/maps?q=경기도+시흥시+과림동+585-2번지" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-[#004b93] text-white rounded-md hover:bg-[#0067cd] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Google 지도로 길찾기
            </a>
            <a 
              href="https://map.kakao.com/?q=경기도 시흥시 과림동 585-2번지" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-yellow-400 text-gray-800 rounded-md hover:bg-yellow-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              카카오맵으로 길찾기
            </a>
            <a 
              href="https://map.naver.com/?query=경기도 시흥시 과림동 585-2번지" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              네이버맵으로 길찾기
            </a>
          </div>
        </div>
      </div>

      {/* 교통편 안내 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">교통편 안내</h2>

        {/* 자동차 이용 */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#f5f5f5] rounded-full flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-[#004b93]">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">자동차 이용</h3>
          </div>
          <div className="ml-16 space-y-3">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-[#dddddd]">
              <p className="font-semibold text-gray-800 mb-2">서울 방면에서 오시는 경우</p>
              <p className="text-gray-600">서울외곽순환고속도로 → 광명IC → 안현분기점 → 과림동 방면</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-[#dddddd]">
              <p className="font-semibold text-gray-800 mb-2">인천 방면에서 오시는 경우</p>
              <p className="text-gray-600">제2경인고속도로 → 서창IC → 서창JC → 서울외곽순환고속도로 → 광명IC → 과림동 방면</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-[#dddddd]">
              <p className="font-semibold text-gray-800 mb-2">안산/수원 방면에서 오시는 경우</p>
              <p className="text-gray-600">서해안고속도로 → 안산JC → 서울외곽순환고속도로 → 광명IC → 과림동 방면</p>
            </div>
          </div>
        </div>

        {/* 대중교통 이용 */}
        <div>
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#f5f5f5] rounded-full flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-[#004b93]">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">대중교통 이용</h3>
          </div>
          <div className="ml-16 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-[#dddddd]">
              <p className="font-semibold text-gray-800 mb-2">버스</p>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="inline-block min-w-16 px-2 bg-[#004b93] text-white rounded text-center font-medium mr-2">광명버스</span>
                  <span className="text-gray-600">39번 (매화초등학교 - 개봉역) → 두무절리 정류장 하차 → 도보 3분</span>
                </li>
                <li className="flex">
                  <span className="inline-block min-w-16 px-2 bg-[#004b93] text-white rounded text-center font-medium mr-2">시흥버스</span>
                  <span className="text-gray-600">530번 (포동차고지 - 여의도환승센터) → 두무절리 정류장 하차 → 도보 3분</span>
                </li>
                <li className="flex">
                  <span className="inline-block min-w-16 px-2 bg-[#004b93] text-white rounded text-center font-medium mr-2">일반버스</span>
                  <span className="text-gray-600">505번 (노온사동 - 서울역) → 모갈마을 정류장 하차 → 도보 10분</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-[#dddddd]">
              <p className="font-semibold text-gray-800 mb-2">지하철</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-8 h-8 bg-[#0052A4] text-white rounded-full text-center leading-8 font-bold mr-2 mt-1 flex-shrink-0">1</span>
                  <span className="text-gray-600">1호선 광명역 하차 → 39번 버스 이용 → 두무절리 정류장 하차 → 도보 3분</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-8 h-8 bg-[#33A23D] text-white rounded-full text-center leading-8 font-bold mr-2 mt-1 flex-shrink-0">2</span>
                  <span className="text-gray-600">2호선 구로디지털단지역 하차 → 5627번 버스 이용 → 장절리 정류장 하차 → 도보 36분(택시 이용 권장)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-8 h-8 bg-[#996CAC] text-white rounded-full text-center leading-8 font-bold mr-2 mt-1 flex-shrink-0">수</span>
                  <span className="text-gray-600">수인분당선 안산역 하차 → 301번 버스 이용 → 장절리 정류장 하차 → 도보 36분(택시 이용 권장)</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-[#dddddd]">
              <p className="font-semibold text-gray-800 mb-3">인근 버스정류장</p>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-3 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">정류장명</th>
                      <th className="px-3 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">정류장 번호</th>
                      <th className="px-3 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">거리</th>
                      <th className="px-3 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">경유 버스</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">두무절리</td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">24-236</td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">도보 3분</td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">39광명, 530시흥</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">모갈마을</td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">24-114</td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">도보 10분</td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">39광명, 505, 530시흥</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 주차 안내 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">주차 안내</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#dddddd]">
          <ul className="space-y-4">
            <li className="flex">
              <div className="flex-shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#004b93]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="ml-3 text-gray-700">주차공간: 지하 20대, 지상 30대 주차 가능</p>
            </li>
            <li className="flex">
              <div className="flex-shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#004b93]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="ml-3 text-gray-700">주차요금: 무료 (방문객 등록 필요)</p>
            </li>
            <li className="flex">
              <div className="flex-shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#004b93]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="ml-3 text-gray-700">이용시간: 평일 07:00 ~ 19:00 (주말 및 공휴일 사전 등록 필요)</p>
            </li>
            <li className="flex">
              <div className="flex-shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#004b93]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="ml-3 text-gray-700">장애인 전용 주차공간이 지상 1층에 마련되어 있습니다.</p>
            </li>
          </ul>
        </div>
      </div>

      {/* 문의처 */}
      <div className="bg-[#f5f5f5] p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-[#004b93] mb-4">문의처</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#f0f7ff] rounded-full flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-[#004b93]">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-600 text-sm">전화번호</p>
              <p className="text-gray-800 font-semibold">02-2066-0218</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#f0f7ff] rounded-full flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-[#004b93]">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-600 text-sm">이메일</p>
              <p className="text-gray-800 font-semibold">hjs4425006@naver.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location; 