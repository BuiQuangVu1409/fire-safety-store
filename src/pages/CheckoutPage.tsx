import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2 } from 'lucide-react';

const formatPrice = (price: number) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCartStore();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    customerName: '',
    phone: '',
    email: '',
    address: '',
    companyName: '',
    taxCode: '',
  });

  if (items.length === 0 && !submitted) {
    navigate('/cart');
    return null;
  }

  if (submitted) {
    return (
      <div className="container py-20 text-center">
        <CheckCircle2 className="w-16 h-16 mx-auto text-success-green mb-4" />
        <h2 className="font-heading text-2xl font-bold mb-2">Đặt hàng thành công!</h2>
        <p className="text-muted-foreground text-sm mb-6">Chúng tôi sẽ liên hệ xác nhận đơn hàng trong thời gian sớm nhất.</p>
        <Button onClick={() => navigate('/')}>Về trang chủ</Button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.customerName || !form.phone || !form.email || !form.address) {
      toast({ title: 'Vui lòng điền đầy đủ thông tin', variant: 'destructive' });
      return;
    }
    clearCart();
    setSubmitted(true);
    toast({ title: 'Đặt hàng thành công!' });
  };

  const updateField = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="py-8">
      <div className="container max-w-3xl">
        <h1 className="font-heading text-2xl md:text-3xl font-bold mb-6">Thanh Toán</h1>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg">Thông tin giao hàng</h3>
            <div>
              <Label>Họ tên *</Label>
              <Input value={form.customerName} onChange={(e) => updateField('customerName', e.target.value)} placeholder="Nguyễn Văn A" required />
            </div>
            <div>
              <Label>Số điện thoại *</Label>
              <Input value={form.phone} onChange={(e) => updateField('phone', e.target.value)} placeholder="0901234567" required />
            </div>
            <div>
              <Label>Email *</Label>
              <Input type="email" value={form.email} onChange={(e) => updateField('email', e.target.value)} placeholder="email@gmail.com" required />
            </div>
            <div>
              <Label>Địa chỉ giao hàng *</Label>
              <Input value={form.address} onChange={(e) => updateField('address', e.target.value)} placeholder="Số nhà, đường, quận/huyện, tỉnh/thành" required />
            </div>
            <div>
              <Label>Tên công ty (không bắt buộc)</Label>
              <Input value={form.companyName} onChange={(e) => updateField('companyName', e.target.value)} />
            </div>
            <div>
              <Label>Mã số thuế (không bắt buộc)</Label>
              <Input value={form.taxCode} onChange={(e) => updateField('taxCode', e.target.value)} />
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Đơn hàng của bạn</h3>
            <div className="bg-muted rounded-lg p-4 space-y-3 mb-4">
              {items.map((item) => (
                <div key={item.variant.id} className="flex justify-between text-sm">
                  <span className="truncate mr-2">{item.product.name} ({item.variant.size}) x{item.quantity}</span>
                  <span className="font-semibold shrink-0">{formatPrice(item.priceAtAdd * item.quantity)}</span>
                </div>
              ))}
              <div className="border-t pt-3 flex justify-between font-heading font-bold">
                <span>Tổng cộng</span>
                <span className="text-primary">{formatPrice(totalPrice())}</span>
              </div>
            </div>
            <Button type="submit" size="lg" className="w-full bg-gradient-fire hover:opacity-90">
              Xác nhận đặt hàng
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
