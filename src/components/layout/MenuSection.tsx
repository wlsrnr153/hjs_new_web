'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';

// 메뉴 데이터
const menuItems = [
  {
    id: 1,
    title: '소개',
    link: '/about',
    subMenu: [
      { title: 'CEO 인사말', link: '/about/ceo' },
      { title: '연구원 소개', link: '/about/intro' },
      { title: '찾아오시는 길', link: '/about/location' },
      { title: '연락처', link: '/about/contact' }
    ]
  },
  {
    id: 2,
    title: '사업분야',
    link: '/research',
    subMenu: [
      { title: 'RFID 물품관리', link: '/research/tech' },
      { title: 'RFID 소모품', link: '/research/results' },
      { title: '불용물품 처리(폐기)', link: '/research/patents' }
    ]
  },
  {
    id: 3,
    title: '프로젝트',
    link: '/projects',
    subMenu: [
      { title: '진행 프로젝트', link: '/projects/current' },
      { title: '완료 프로젝트', link: '/projects/completed' },
      { title: '협력 기관', link: '/projects/partners' }
    ]
  },
  {
    id: 4,
    title: '견적문의',
    link: '/quotation',
    subMenu: [
      { title: '공지사항', link: '/news/notice' },
      { title: '견적문의', link: '/quotation' },
    ]
  },
  {
    id: 5,
    title: '채용',
    link: '/career',
    subMenu: [
      { title: '채용공고', link: '/career/jobs' },
      { title: '인재상', link: '/career/talent' },
      { title: '복리후생', link: '/career/benefits' }
    ]
  }
];

const MenuSection = () => {
  const [activeMenus, setActiveMenus] = useState<{ [key: string]: boolean }>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (menuId: string) => {
    // 다른 메뉴들은 닫고 선택된 메뉴만 열기
    setActiveMenus(prev => {
      const newState = Object.keys(prev).reduce((acc, key) => ({
        ...acc,
        [key]: false
      }), {});
      return {
        ...newState,
        [menuId]: true
      };
    });
  };

  const handleMouseLeave = () => {
    // 전체 메뉴 영역을 벗어날 때만 모든 메뉴 닫기
    setActiveMenus({});
  };

  return (
    <div 
      className="relative z-20 bg-[#004b93] shadow-md" 
      ref={menuRef}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-4">
        {/* PC 메뉴 */}
        <nav className="hidden lg:block">
          <ul className="flex justify-center">
            {menuItems.map((item) => (
              <li 
                key={item.id}
                className="relative flex-1"
                onMouseEnter={() => handleMouseEnter(String(item.id))}
              >
                <button
                  className={`
                    block w-full px-5 py-4 text-xl font-medium text-center text-white
                    hover:bg-[#0067cd] transition-colors
                    ${activeMenus[String(item.id)] ? 'bg-[#0067cd]' : ''}
                  `}
                >
                  {item.title}
                </button>
                
                {/* 서브메뉴 */}
                {item.subMenu && item.subMenu.length > 0 && (
                  <div 
                    className={`
                      absolute left-0 w-full bg-white shadow-lg border border-[#dddddd]
                      transition-all duration-200
                      ${activeMenus[String(item.id)] 
                        ? 'opacity-100 visible' 
                        : 'opacity-0 invisible pointer-events-none'}
                    `}
                  >
                    <ul className="py-1">
                      {item.subMenu.map((subItem) => (
                        <li key={subItem.title}>
                          <Link 
                            href={subItem.link}
                            className="
                              block px-5 py-2 text-sm text-gray-700
                              hover:bg-[#f5f5f5] hover:text-[#004b93] transition-colors
                            "
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* 햄버거 메뉴 버튼 (모바일) */}
        <div className="lg:hidden flex justify-end py-3">
          <button 
            className="z-10 p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="메뉴 열기"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white text-gray-800 absolute left-0 w-full z-30 shadow-lg">
            <ul className="border-t border-gray-100">
              {menuItems.map((item) => (
                <li key={item.id} className="border-b border-gray-100">
                  <button
                    className="w-full px-4 py-3 text-left font-medium flex justify-between items-center text-gray-800 hover:bg-[#f5f5f5] transition-colors"
                    onClick={() => {
                      setActiveMenus(prev => ({
                        ...prev,
                        [String(item.id)]: !prev[String(item.id)]
                      }));
                    }}
                  >
                    {item.title}
                    <svg
                      className={`w-4 h-4 transition-transform ${activeMenus[String(item.id)] ? 'transform rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {activeMenus[String(item.id)] && item.subMenu && (
                    <ul className="bg-[#f5f5f5]">
                      {item.subMenu.map((subItem) => (
                        <li key={subItem.title}>
                          <Link
                            href={subItem.link}
                            className="block px-4 py-2 pl-8 text-sm text-gray-700 hover:bg-white hover:text-[#004b93] transition-colors"
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 모바일 메뉴 배경 오버레이 */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-30 z-20 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        )}
      </div>
    </div>
  );
};

export default MenuSection;
