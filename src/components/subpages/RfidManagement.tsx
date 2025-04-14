'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const RfidManagement = () => {
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
              <Link href="/research" className="hover:text-blue-600">사업분야</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <span className="text-gray-800">RFID 물품관리</span>
            </li>
          </ol>
        </nav>
      </div>
      
      {/* 페이지 제목 */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 border-b pb-4">RFID 물품관리</h1>
      </div>

      {/* RFID 시스템 소개 */}
      <div className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">RFID 물품관리 시스템</h2>
          <p className="text-gray-600 mb-6">
            RFID(Radio Frequency Identification) 기술을 활용한 물품관리 시스템으로, 
            물품의 실시간 추적, 재고 관리, 자산 관리 등을 효율적으로 수행할 수 있습니다.
          </p>
          
          {/* 주요 기능 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">실시간 추적</h3>
              <p className="text-gray-600">RFID 태그를 통한 물품의 실시간 위치 추적 및 모니터링</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">재고 관리</h3>
              <p className="text-gray-600">자동화된 재고 수량 확인 및 관리 시스템</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">자산 관리</h3>
              <p className="text-gray-600">기관 자산의 효율적인 관리 및 감가상각 추적</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">보안 관리</h3>
              <p className="text-gray-600">물품의 무단 반출 방지 및 보안 강화</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">데이터 분석</h3>
              <p className="text-gray-600">물품 사용 패턴 분석 및 의사결정 지원</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">통합 관리</h3>
              <p className="text-gray-600">기존 시스템과의 연동 및 통합 관리</p>
            </div>
          </div>

          {/* 시스템 구성 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">시스템 구성</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">하드웨어</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>RFID 태그</li>
                  <li>RFID 리더기</li>
                  <li>안테나</li>
                  <li>게이트 시스템</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">소프트웨어</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>물품관리 시스템</li>
                  <li>데이터베이스</li>
                  <li>모니터링 시스템</li>
                  <li>보고서 생성 도구</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 적용 분야 */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">적용 분야</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">공공기관</h4>
                <p className="text-gray-600">행정기관, 교육기관, 연구기관 등의 물품관리</p>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">기업</h4>
                <p className="text-gray-600">제조업, 물류업, 유통업 등의 재고관리</p>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">의료기관</h4>
                <p className="text-gray-600">의료장비, 의약품, 환자관리 등</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 문의하기 섹션 */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">RFID 물품관리 시스템 도입 문의</h2>
        <p className="text-gray-600 mb-6">
          RFID 물품관리 시스템 도입에 대해 궁금하신 점이 있으시다면 언제든 문의해주세요.
          전문가가 상세한 설명과 함께 맞춤형 솔루션을 제안해드립니다.
        </p>
        <div className="text-center mt-12">
          <Link 
            href="/quotation/write" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            견적문의하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RfidManagement; 