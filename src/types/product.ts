export interface ProductVariant {
  id: string;
  size: string;
  price: number;
  originalPrice?: number;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  brand: string;
  bcaCode: string;
  variants: ProductVariant[];
  featured?: boolean;
  bestSeller?: boolean;
}

export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
  priceAtAdd: number;
}

export interface OrderInfo {
  customerName: string;
  phone: string;
  email: string;
  address: string;
  companyName?: string;
  taxCode?: string;
}

export type OrderStatus = 'pending' | 'shipping' | 'completed' | 'cancelled';

export interface Order {
  id: string;
  orderDate: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  customerInfo: OrderInfo;
}

export const CATEGORIES = [
  'Bình chữa cháy',
  'Vòi cứu hỏa',
  'Đồ bảo hộ',
  'Hệ thống báo cháy',
  'Đèn thoát hiểm',
  'Phụ kiện PCCC',
] as const;
