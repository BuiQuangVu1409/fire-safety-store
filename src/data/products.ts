import { Product } from '@/types/product';
import imgExtinguisher from '@/assets/product-extinguisher.jpg';
import imgHose from '@/assets/product-hose.jpg';
import imgHelmet from '@/assets/product-helmet.jpg';
import imgAlarm from '@/assets/product-alarm.jpg';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Bình Chữa Cháy Bột ABC',
    image: imgExtinguisher,
    description: 'Bình chữa cháy bột ABC đa năng, phù hợp cho văn phòng, nhà xưởng, chung cư. Được kiểm định đạt tiêu chuẩn TCVN, tem BCA chính hãng.',
    category: 'Bình chữa cháy',
    brand: 'Yamato',
    bcaCode: 'BCA-2024-ABC-001',
    featured: true,
    bestSeller: true,
    variants: [
      { id: '1-4kg', size: '4kg', price: 280000, originalPrice: 350000 },
      { id: '1-8kg', size: '8kg', price: 450000, originalPrice: 520000 },
      { id: '1-35kg', size: '35kg', price: 1800000 },
    ],
  },
  {
    id: '2',
    name: 'Bình Chữa Cháy CO2',
    image: imgExtinguisher,
    description: 'Bình chữa cháy CO2 chuyên dụng cho phòng máy tính, phòng server, thiết bị điện tử. Không để lại cặn bẩn sau khi phun.',
    category: 'Bình chữa cháy',
    brand: 'Naffco',
    bcaCode: 'BCA-2024-CO2-002',
    featured: true,
    variants: [
      { id: '2-3kg', size: '3kg', price: 650000 },
      { id: '2-5kg', size: '5kg', price: 950000 },
    ],
  },
  {
    id: '3',
    name: 'Vòi Chữa Cháy D50',
    image: imgHose,
    description: 'Vòi chữa cháy đường kính 50mm, chịu áp lực cao, vải sợi tổng hợp bền bỉ. Phù hợp lắp đặt trong tòa nhà, khu công nghiệp.',
    category: 'Vòi cứu hỏa',
    brand: 'Hàn Quốc',
    bcaCode: 'BCA-2024-VOI-003',
    bestSeller: true,
    variants: [
      { id: '3-20m', size: '20m', price: 380000 },
      { id: '3-30m', size: '30m', price: 520000 },
    ],
  },
  {
    id: '4',
    name: 'Mũ Bảo Hộ Chống Cháy',
    image: imgHelmet,
    description: 'Mũ bảo hộ PCCC chịu nhiệt cao, có kính chắn mặt, đạt tiêu chuẩn EN443. Thiết kế thoải mái, phù hợp cho lính cứu hỏa.',
    category: 'Đồ bảo hộ',
    brand: 'MSA',
    bcaCode: 'BCA-2024-MBH-004',
    featured: true,
    variants: [
      { id: '4-m', size: 'Size M', price: 2500000 },
      { id: '4-l', size: 'Size L', price: 2500000 },
      { id: '4-xl', size: 'Size XL', price: 2700000 },
    ],
  },
  {
    id: '5',
    name: 'Đầu Báo Khói Thông Minh',
    image: imgAlarm,
    description: 'Đầu báo khói quang điện, phát hiện sớm đám cháy, kết nối với trung tâm báo cháy. Lắp đặt dễ dàng, hoạt động ổn định.',
    category: 'Hệ thống báo cháy',
    brand: 'Hochiki',
    bcaCode: 'BCA-2024-DBK-005',
    bestSeller: true,
    variants: [
      { id: '5-std', size: 'Tiêu chuẩn', price: 320000 },
      { id: '5-pro', size: 'Chuyên dụng', price: 580000 },
    ],
  },
  {
    id: '6',
    name: 'Đèn Thoát Hiểm LED',
    image: imgAlarm,
    description: 'Đèn chỉ dẫn thoát hiểm LED tiết kiệm năng lượng, có pin dự phòng 3 giờ. Đạt tiêu chuẩn PCCC Việt Nam.',
    category: 'Đèn thoát hiểm',
    brand: 'Paragon',
    bcaCode: 'BCA-2024-DTH-006',
    variants: [
      { id: '6-1m', size: '1 mặt', price: 185000 },
      { id: '6-2m', size: '2 mặt', price: 250000 },
    ],
  },
  {
    id: '7',
    name: 'Bộ Quần Áo Chữa Cháy',
    image: imgHelmet,
    description: 'Bộ quần áo chống cháy 4 lớp, chịu nhiệt 1000°C, phản quang. Được trang bị cho lực lượng PCCC chuyên nghiệp.',
    category: 'Đồ bảo hộ',
    brand: 'Honeywell',
    bcaCode: 'BCA-2024-QAC-007',
    featured: true,
    variants: [
      { id: '7-m', size: 'Size M', price: 4500000 },
      { id: '7-l', size: 'Size L', price: 4500000 },
      { id: '7-xl', size: 'Size XL', price: 4800000 },
    ],
  },
  {
    id: '8',
    name: 'Lăng Phun Chữa Cháy',
    image: imgHose,
    description: 'Lăng phun nước chữa cháy đa năng, điều chỉnh được dạng tia phun, vật liệu đồng thau chống ăn mòn.',
    category: 'Phụ kiện PCCC',
    brand: 'AWG',
    bcaCode: 'BCA-2024-LPC-008',
    variants: [
      { id: '8-d50', size: 'D50', price: 850000 },
      { id: '8-d65', size: 'D65', price: 1100000 },
    ],
  },
];
