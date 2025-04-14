export interface Banner {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const banners: Banner[] = [
  {
    id: 1,
    title: '카카오톡 채팅을 통해 문의하세요.',
    description: '카카오톡 채팅을 통해 문의하세요.',
    image: '/images/kakaotalk.jpg',
    link: 'kakaotalk://chat'
  },
  {
    id: 2,
    title: 'HJS 홈페이지 방문을 환영합니다.',
    description: 'HJS는 RFID 물품관리 솔루션을 제공하는 회사입니다.',
    image: '/images/work2.jpg',
    link: '/about'
  },
  {
    id: 3,
    title: '불용물품 처리 시스템',
    description: '스마트한 불용물품 처리 솔루션',
    image: '/images/work3.jpg',
    link: '/research/tech'
  }
]; 