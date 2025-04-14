import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const InstituteIntro = () => {
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
              <Link href="/about" className="hover:text-blue-600">소개</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <span className="text-gray-800">연구원 소개</span>
            </li>
          </ol>
        </nav>
      </div>
      
      {/* 페이지 제목 */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 border-b pb-4">연구원 소개</h1>
      </div>

      {/* 연구원 개요 섹션 */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        <div className="lg:w-1/2">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src="/images/introduce.jpeg"
              alt="연구원 전경"
              className="object-cover w-full h-full rounded-lg border border-gray-200"
              fill
              priority
            />
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">HJS 소개</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                HJS는 2005년 설립된 형제상사를 기반으로 하여 지속가능한 미래를 위한 
                자원 재활용 및 순환경제 구현에 앞장서고 있습니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                우리는 폐기물을 단순한 쓰레기가 아닌 새로운 가치를 창출할 수 있는 소중한 자원으로 인식하며, 
                첨단 재활용 기술을 통해 다양한 산업 폐기물과 사업장 폐기물을 효율적으로 수거, 분류, 가공하여
                새로운 원료와 제품으로 재탄생시키는 전문기업입니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                특히 폐플라스틱, 폐금속, 폐전자제품 등의 재활용 분야에서 독자적인 기술을 보유하고 있으며,
                이를 통해 자원 낭비를 최소화하고 환경오염을 줄이는 데 기여하고 있습니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                HJS는 단순한 재활용을 넘어 제품의 설계 단계부터 폐기 후 재활용까지 고려하는 
                자원순환형 비즈니스 모델을 구축하여, 지구 환경 보전과 경제적 가치 창출을 동시에 
                실현하는 미래지향적 기업으로 성장하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 연구원 상세 소개 */}
      <div className="mb-12 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3">HJS 역사 및 현황</h3>
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            HJS는 2005년 형제상사로 시작하여 폐기물 처리와 재활용 분야에서 지속적인 성장을 이뤄왔습니다.
            초기 소규모 재활용 사업에서 출발하여 현재는 첨단 재활용 기술과 설비를 갖춘 자원순환 전문기업으로 
            발전했습니다. 특히 폐기물의 가치를 재발견하고 이를 효율적으로 자원화하는 기술력으로 
            업계에서 높은 신뢰를 얻고 있습니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            현재 본사와 2개의 지사를 운영하며 연간 5만 톤 이상의 다양한 폐기물을 처리하고 있습니다.
            첨단 자동화 분류 시스템과 친환경 처리 공정으로 재활용률 90% 이상을 달성하고 있으며,
            자원 회수와 환경 보호를 동시에 실현하는 지속가능한 비즈니스 모델을 구축했습니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            환경부 인증 친환경 기업으로 매년 약 2만 톤의 탄소 배출량 감소에 기여하고 있으며,
            20여 개의 특허 기술과 50여 개의 재활용 관련 인증을 확보하고 있습니다.
            또한 국내외 재활용 산업 협회 및 환경 단체와의 협력을 통해 순환경제 발전과
            지속가능한 환경 보호에 앞장서고 있습니다.
          </p>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">사명과 가치</h4>
            <p className="text-gray-700 leading-relaxed">
              HJS는 &quot;폐기물에서 가치를 발견하고, 자원순환으로 미래를 창조한다&quot;는 사명 아래,
              환경 보호와 경제적 가치 창출의
              균형을 추구합니다. 혁신, 신뢰, 책임, 협력을 핵심 가치로 삼아
              모든 구성원이 환경과 사회에 기여하는 활동을 지속하고 있습니다.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">지속가능성 추진 현황</h4>
            <p className="text-gray-700 leading-relaxed">
              HJS는 ESG 경영을 실천하며 환경(E) 측면에서 재활용 기술 혁신과 탄소 저감,
              사회(S) 측면에서 지역사회 참여와 일자리 창출, 지배구조(G) 측면에서 투명한 경영과 
              윤리적 비즈니스 관행을 확립하고 있습니다. 2022년부터는 지속가능성 보고서를 발간하여
              환경 및 사회적 영향을 투명하게 공개하고 있습니다.
            </p>
          </div>
        </div>
      </div>

      {/* 주요 연구 분야 */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">주요 사업 영역</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">폐플라스틱 재활용</h4>
            </div>
            <p className="text-gray-600">다양한 폐플라스틱을 수거하여 선별, 세척, 파쇄, 재생 과정을 거쳐 고품질 재생 원료로 생산합니다. 식품 포장재, 산업용 필름, PET병 등을 재활용하여 환경 오염을 줄입니다.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">금속 폐기물 처리</h4>
            </div>
            <p className="text-gray-600">고철, 비철금속, 희소금속 등 다양한 금속 폐기물을 수거하고 분류하여 고순도 재생 금속 자원으로 가공합니다. 첨단 선별 기술로 금속 자원의 재활용률을 극대화합니다.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-purple-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">전자폐기물(E-waste) 처리</h4>
            </div>
            <p className="text-gray-600">폐가전, 폐컴퓨터, 폐휴대폰 등 전자폐기물에서 유용한 부품과 자원을 회수합니다. 친환경적인 방식으로 유해물질을 처리하고 귀금속, 희소금속 등 가치 있는 자원을 회수합니다.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-yellow-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">산업 폐기물 관리</h4>
            </div>
            <p className="text-gray-600">제조업, 건설업 등에서 발생하는 산업 폐기물을 전문적으로 처리합니다. 폐유, 폐산, 폐알칼리 등 유해 폐기물의 안전한 처리와 재활용 가능 자원의 효율적 회수를 동시에 실현합니다.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-red-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">재생 제품 생산</h4>
            </div>
            <p className="text-gray-600">재활용 원료를 활용하여 다양한 친환경 제품을 생산합니다. 재생 플라스틱 용기, 재활용 건축자재, 친환경 포장재 등 일상생활과 산업 현장에서 사용 가능한 다양한 제품을 개발 및 생산합니다.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-indigo-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">재활용 컨설팅</h4>
            </div>
            <p className="text-gray-600">기업과 기관을 대상으로 폐기물 관리 및 재활용 시스템 구축을 위한 전문 컨설팅 서비스를 제공합니다. 자원순환 전략 수립, 재활용 인프라 구축, 폐기물 저감 방안 등을 제안합니다.</p>
          </div>
        </div>
      </div>

      {/* 성과 지표 */}
      <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center border-b border-gray-200 pb-4">환경 기여 성과</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
            <p className="text-gray-700">연간 처리 폐기물량(톤)</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
            <p className="text-gray-700">평균 재활용률</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-blue-600 mb-2">20,000+</div>
            <p className="text-gray-700">탄소 배출 저감량(톤/년)</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
            <p className="text-gray-700">제휴 파트너사</p>
          </div>
        </div>
      </div>

      {/* 연구원 비전 */}
      <div className="bg-blue-50 p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-blue-800 mb-8 text-center border-b border-blue-200 pb-4">HJS 비전</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-4">자원순환</div>
              <p className="text-gray-700">폐기물에서 새로운 가치 창출</p>
              <p className="text-gray-600 text-sm mt-4">버려지는 자원을 최대한 활용하여 순환경제에 기여합니다</p>
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
              <div className="text-3xl font-bold text-green-600 mb-4">환경보호</div>
              <p className="text-gray-700">지속가능한 환경 보전</p>
              <p className="text-gray-600 text-sm mt-4">친환경 재활용 기술로 환경오염과 자원 낭비를 방지합니다</p>
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
              <div className="text-3xl font-bold text-purple-600 mb-4">사회책임</div>
              <p className="text-gray-700">지역사회와 상생하는 기업</p>
              <p className="text-gray-600 text-sm mt-4">환경교육과 자원재활용 문화 확산에 앞장섭니다</p>
            </div>
          </div>
        </div>
      </div>

      <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700">
        &quot;우리는 환경 문제 해결을 통해 더 나은 미래를 만들기 위해 노력하고 있습니다.&quot; 
        <cite>- 김환경 연구원장</cite>
      </blockquote>
    </div>
  );
};

export default InstituteIntro; 