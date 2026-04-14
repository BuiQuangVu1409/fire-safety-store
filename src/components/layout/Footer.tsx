import { Shield, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-fire flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-heading text-xl font-bold">PCCC</span>
          </div>
          <p className="text-sm text-secondary-foreground/70">
            Chuyên cung cấp thiết bị Phòng Cháy Chữa Cháy chính hãng, đạt chuẩn BCA.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-heading text-sm font-bold mb-4 uppercase tracking-wider">Danh mục</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            <li><Link to="/products" className="hover:text-primary transition-colors">Bình chữa cháy</Link></li>
            <li><Link to="/products" className="hover:text-primary transition-colors">Vòi cứu hỏa</Link></li>
            <li><Link to="/products" className="hover:text-primary transition-colors">Đồ bảo hộ</Link></li>
            <li><Link to="/products" className="hover:text-primary transition-colors">Hệ thống báo cháy</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-heading text-sm font-bold mb-4 uppercase tracking-wider">Hỗ trợ</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            <li><Link to="/about" className="hover:text-primary transition-colors">Giới thiệu</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Liên hệ</Link></li>
            <li><a href="#" className="hover:text-primary transition-colors">Chính sách bảo hành</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Hướng dẫn mua hàng</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-sm font-bold mb-4 uppercase tracking-wider">Liên hệ</h4>
          <ul className="space-y-3 text-sm text-secondary-foreground/70">
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-primary" /> 1900 xxxx</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-primary" /> contact@pccc.vn</li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary" /> Quận 1, TP. Hồ Chí Minh</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-secondary-foreground/10 py-4">
      <p className="text-center text-xs text-secondary-foreground/50">© 2024 PCCC An Toàn. Tất cả quyền được bảo lưu.</p>
    </div>
  </footer>
);

export default Footer;
