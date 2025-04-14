import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Inter } from 'next/font/google';
import MenuSection from '@/components/layout/MenuSection';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'HJS 회사 홈페이지',
  description: '회사 소개 및 서비스 안내',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <MenuSection />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 