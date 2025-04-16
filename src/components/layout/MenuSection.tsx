'use client';

import React, { useState, useRef, useEffect } from 'react';
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
      { title: '공지사항', link: '/notice' },
      { title: '견적문의', link: '/quotation' },
    ]
  }
];

const MenuSection = () => {
  const [activeMenus, setActiveMenus] = useState<{ [key: string]: boolean }>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveMenus, setMobileActiveMenus] = useState<{ [key: string]: boolean }>({});
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (menuId: string) => {
    // 모바일 메뉴가 열려있지 않을 때만 마우스 이벤트 처리
    if (!mobileMenuOpen) {
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
    }
  };

  const handleMouseLeave = () => {
    // 모바일 메뉴가 열려있지 않을 때만 마우스 이벤트 처리
    if (!mobileMenuOpen) {
      // 전체 메뉴 영역을 벗어날 때만 모든 메뉴 닫기
      setActiveMenus({});
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleMobileSubMenu = (menuId: string) => {
    // 모바일 메뉴가 열려있을 때만 서브메뉴 토글 처리
    if (mobileMenuOpen) {
      setMobileActiveMenus(prev => ({
        ...prev,
        [menuId]: !prev[menuId]
      }));
    }
  };

  // 모바일 메뉴가 열렸을 때 body 스크롤 방지
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // 외부 클릭 감지하여 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen && 
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        // 햄버거 버튼 클릭 시 중복 처리 방지
        const hamburgerButton = document.querySelector('.hamburger-menu');
        if (hamburgerButton && hamburgerButton.contains(event.target as Node)) {
          return;
        }
        
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <div 
        className="relative z-20 bg-[#004b93] shadow-md" 
        ref={menuRef}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* PC 메뉴 */}
            <nav className="hidden lg:block w-full">
              <ul className="flex justify-center">
                {menuItems.map((item) => (
                  <li 
                    key={item.id}
                    className="relative flex-1"
                    onMouseEnter={() => handleMouseEnter(String(item.id))}
                  >
                    <Link
                      href={item.link}
                      className={`
                        block w-full px-5 py-5 text-xl font-medium text-center text-white
                        hover:bg-[#0067cd] transition-colors
                        ${activeMenus[String(item.id)] ? 'bg-[#0067cd]' : ''}
                      `}
                    >
                      {item.title}
                    </Link>
                    
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
                                  block px-5 py-3 text-sm text-gray-700
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

            {/* 햄버거 메뉴 버튼 - 오른쪽으로 이동 */}
            <button 
              className={`p-3 text-white z-[60] ml-auto ${mobileMenuOpen ? 'opacity-0 pointer-events-none' : ''}`}
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            >
              <div className={`hamburger-menu ${mobileMenuOpen ? 'active' : ''}`}>
                <span className={`hamburger-line ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''} block w-6 h-0.5 bg-white transition-all mb-1.5`}></span>
                <span className={`hamburger-line ${mobileMenuOpen ? 'opacity-0' : ''} block w-6 h-0.5 bg-white transition-all mb-1.5`}></span>
                <span className={`hamburger-line ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''} block w-6 h-0.5 bg-white transition-all`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 - MenuSection 외부로 이동 */}
      {mobileMenuOpen && (
        <>
          {/* 모바일 메뉴 배경 오버레이 */}
          <div 
            className="fixed inset-0 pointer-events-auto"
            onClick={closeMobileMenu}
            style={{ 
              zIndex: 9998,
              pointerEvents: 'auto',
              backgroundColor: 'rgba(128, 128, 128, 0.8)'
            }}
          ></div>

          {/* 모바일 메뉴 */}
          <div 
            ref={mobileMenuRef}
            className={`
              fixed top-0 right-0 w-[280px] h-full bg-white shadow-xl transition-transform duration-300 ease-in-out transform
              ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
            style={{ 
              zIndex: 9999,
              paddingTop: '0', 
              marginTop: '0' 
            }}
          >
            {/* 모바일 메뉴 헤더 */}
            <div className="bg-[#004b93] py-4 px-4 flex justify-between items-center">
              <span className="text-white text-lg font-bold">메뉴</span>
              <button 
                onClick={closeMobileMenu}
                className="text-white p-2"
                aria-label="메뉴 닫기"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* 모바일 메뉴 아이템 */}
            <div className="overflow-y-auto h-[calc(100%-60px)]">
              <ul className="border-t border-gray-200">
                {menuItems.map((item) => (
                  <li key={item.id} className="border-b border-gray-200">
                    <div className="flex items-center">
                      <Link
                        href={item.link}
                        className="flex-1 py-4 px-5 text-gray-800 font-medium"
                        onClick={() => {
                          if (!item.subMenu || item.subMenu.length === 0) {
                            closeMobileMenu();
                          }
                        }}
                      >
                        {item.title}
                      </Link>
                      {item.subMenu && item.subMenu.length > 0 && (
                        <button
                          className="py-4 px-4 text-gray-500"
                          onClick={() => toggleMobileSubMenu(String(item.id))}
                        >
                          <svg
                            className={`w-4 h-4 transition-transform ${mobileActiveMenus[String(item.id)] ? 'transform rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      )}
                    </div>
                    
                    {/* 모바일 서브메뉴 */}
                    {item.subMenu && item.subMenu.length > 0 && (
                      <div className={`overflow-hidden transition-all duration-300 ${mobileActiveMenus[String(item.id)] ? 'max-h-96' : 'max-h-0'}`}>
                        <ul className="bg-[#f7f7f7]">
                          {item.subMenu.map((subItem) => (
                            <li key={subItem.title}>
                              <Link
                                href={subItem.link}
                                className="block py-3 px-5 pl-10 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#004b93] border-t border-gray-200"
                                onClick={closeMobileMenu}
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
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MenuSection;
