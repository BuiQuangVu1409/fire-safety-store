import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Truck, Award, Headphones } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';
import ProductCard from '@/components/product/ProductCard';
import { mockProducts } from '@/data/products';
import { CATEGORIES } from '@/types/product';

import imgExtinguisher from '@/assets/product-extinguisher.jpg';
import imgHose from '@/assets/product-hose.jpg';
import imgHelmet from '@/assets/product-helmet.jpg';
import imgAlarm from '@/assets/product-alarm.jpg';

const categoryImages: Record<string, string> = {
  'Bình chữa cháy': imgExtinguisher,
  'Vòi cứu hỏa': imgHose,
  'Đồ bảo hộ': imgHelmet,
  'Hệ thống báo cháy': imgAlarm,
  'Đèn thoát hiểm': imgAlarm,
  'Phụ kiện PCCC': imgHose,
};

const features = [
  { icon: ShieldCheck, title: 'Chính hãng BCA', desc: 'Tem kiểm định Bộ Công An' },
  { icon: Truck, title: 'Giao hàng toàn quốc', desc: 'Miễn phí đơn > 2 triệu' },
  { icon: Award, title: 'Bảo hành 12 tháng', desc: 'Đổi mới nếu lỗi nhà sản xuất' },
  { icon: Headphones, title: 'Hỗ trợ 24/7', desc: 'Tư vấn kỹ thuật miễn phí' },
];

const HomePage = () => {
  const featuredProducts = mockProducts.filter((p) => p.featured);
  const bestSellers = mockProducts.filter((p) => p.bestSeller);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <img src={heroBanner} alt="Thiết bị PCCC" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/70 to-transparent" />
        <div className="container relative h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-4 border border-primary/30">
              🔥 Uy tín — Chất lượng — An toàn
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-black text-secondary-foreground leading-tight mb-4">
              Thiết Bị <span className="text-gradient-fire">Phòng Cháy Chữa Cháy</span> Chính Hãng
            </h1>
            <p className="text-secondary-foreground/80 mb-6 text-sm md:text-base leading-relaxed">
              Cung cấp đầy đủ trang thiết bị PCCC đạt tiêu chuẩn Bộ Công An.
              Bảo hành chính hãng, giao hàng toàn quốc.
            </p>
            <div className="flex gap-3">
              <Button size="lg" asChild className="bg-gradient-fire hover:opacity-90 shadow-lg">
                <Link to="/products">Xem sản phẩm <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                Liên hệ tư vấn
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 bg-card border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 p-3"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{f.title}</p>
                  <p className="text-xs text-muted-foreground">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-8">
            Danh Mục <span className="text-primary">Sản Phẩm</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/products?category=${encodeURIComponent(cat)}`}
                  className="group block text-center p-4 rounded-lg border bg-card hover:border-primary hover:shadow-md transition-all"
                >
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden bg-muted">
                    <img src={categoryImages[cat]} alt={cat} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <p className="text-xs font-semibold group-hover:text-primary transition-colors">{cat}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold">
              Sản Phẩm <span className="text-primary">Nổi Bật</span>
            </h2>
            <Link to="/products" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
              Xem tất cả <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold">
              Bán Chạy <span className="text-accent">Nhất</span>
            </h2>
            <Link to="/products" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
              Xem tất cả <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {bestSellers.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-dark">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
              Cần tư vấn giải pháp <span className="text-gradient-fire">PCCC</span>?
            </h2>
            <p className="text-secondary-foreground/70 mb-6 max-w-md mx-auto text-sm">
              Đội ngũ kỹ thuật viên giàu kinh nghiệm sẵn sàng tư vấn miễn phí cho bạn.
            </p>
            <Button size="lg" className="bg-gradient-fire hover:opacity-90">
              Liên hệ ngay — 1900 xxxx
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
