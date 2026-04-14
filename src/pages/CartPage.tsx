import { Link } from 'react-router-dom';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/button';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const formatPrice = (price: number) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

const CartPage = () => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center">
        <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
        <h2 className="font-heading text-xl font-bold mb-2">Giỏ hàng trống</h2>
        <p className="text-muted-foreground text-sm mb-6">Hãy thêm sản phẩm vào giỏ hàng.</p>
        <Button asChild><Link to="/products">Mua sắm ngay</Link></Button>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="container">
        <h1 className="font-heading text-2xl md:text-3xl font-bold mb-6">
          Giỏ Hàng <span className="text-primary">({items.length} sản phẩm)</span>
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <motion.div
                key={item.variant.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex gap-4 p-4 bg-card rounded-lg border"
              >
                <Link to={`/product/${item.product.id}`} className="w-20 h-20 rounded-md overflow-hidden bg-muted shrink-0">
                  <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link to={`/product/${item.product.id}`}>
                    <h3 className="text-sm font-semibold truncate hover:text-primary">{item.product.name}</h3>
                  </Link>
                  <p className="text-xs text-muted-foreground">{item.variant.size}</p>
                  <p className="text-sm font-bold text-primary mt-1">{formatPrice(item.priceAtAdd)}</p>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button onClick={() => removeItem(item.variant.id)} className="text-muted-foreground hover:text-destructive">
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="flex items-center border rounded">
                    <button onClick={() => updateQuantity(item.variant.id, item.quantity - 1)} className="px-2 py-1 hover:bg-muted">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-2 text-xs font-semibold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.variant.id, item.quantity + 1)} className="px-2 py-1 hover:bg-muted">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-card border rounded-lg p-6 h-fit sticky top-24">
            <h3 className="font-heading text-lg font-bold mb-4">Tổng đơn hàng</h3>
            <div className="space-y-2 mb-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tạm tính</span>
                <span>{formatPrice(totalPrice())}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Phí vận chuyển</span>
                <span className="text-success-green text-xs font-medium">Miễn phí</span>
              </div>
            </div>
            <div className="flex justify-between font-heading font-bold text-lg pt-4 border-t mb-6">
              <span>Tổng cộng</span>
              <span className="text-primary">{formatPrice(totalPrice())}</span>
            </div>
            <Button size="lg" className="w-full bg-gradient-fire hover:opacity-90" asChild>
              <Link to="/checkout">Thanh toán <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button variant="ghost" size="sm" className="w-full mt-2 text-muted-foreground" onClick={clearCart}>
              Xóa giỏ hàng
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
