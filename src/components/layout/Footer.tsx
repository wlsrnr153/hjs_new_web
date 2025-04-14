import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#004b93] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#2571bd] pb-2">소개</h3>
            <ul className="space-y-2">
              <li><Link href="/about/ceo" className="text-gray-200 hover:text-white transition-colors">CEO 인사말</Link></li>
              <li><Link href="/about/intro" className="text-gray-200 hover:text-white transition-colors">연구원 소개</Link></li>
              <li><Link href="/about/location" className="text-gray-200 hover:text-white transition-colors">찾아오시는 길</Link></li>
              <li><Link href="/about/contact" className="text-gray-200 hover:text-white transition-colors">연락처</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#2571bd] pb-2">사업분야</h3>
            <ul className="space-y-2">
              <li><Link href="/research/tech" className="text-gray-200 hover:text-white transition-colors">RFID 물품관리</Link></li>
              <li><Link href="/research/results" className="text-gray-200 hover:text-white transition-colors">RFID 소모품</Link></li>
              <li><Link href="/research/patents" className="text-gray-200 hover:text-white transition-colors">불용물품 처리(폐기)</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#2571bd] pb-2">프로젝트</h3>
            <ul className="space-y-2">
              <li><Link href="/projects/current" className="text-gray-200 hover:text-white transition-colors">진행 프로젝트</Link></li>
              <li><Link href="/projects/completed" className="text-gray-200 hover:text-white transition-colors">완료 프로젝트</Link></li>
              <li><Link href="/projects/partners" className="text-gray-200 hover:text-white transition-colors">협력 기관</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#2571bd] pb-2">견적문의</h3>
            <ul className="space-y-2">
              <li><Link href="/notice" className="text-gray-200 hover:text-white transition-colors">공지사항</Link></li>
              <li><Link href="/quotation" className="text-gray-200 hover:text-white transition-colors">견적문의</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#2571bd] pb-2">연락처</h3>
            <p className="text-gray-200 mb-2">주소: 경기도 시흥시 과림동 585-2</p>
            <p className="text-gray-200 mb-2">전화: 02-2066-0218</p>
            <p className="text-gray-200 mb-2">이메일: hjs4425006@naver.com</p>
          </div>
        </div>
        
        <div className="border-t border-[#2571bd] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image src="/images/logo.jpg" alt="회사 로고" width={120} height={30} />
          </div>
          <div className="text-gray-300 text-sm">
            © {new Date().getFullYear()} HJS Company. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
} 