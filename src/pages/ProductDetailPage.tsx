import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockProducts } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Minus, Plus, ChevronLeft, Shield, Truck, Award } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

const formatPrice = (price: number) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = mockProducts.find((p) => p.id === id);
  const addItem = useCartStore((s) => s.addItem);
  const { toast } = useToast();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <p className="text-muted-foreground">Sản phẩm không tồn tại.</p>
        <Button asChild className="mt-4"><Link to="/products">Quay lại</Link></Button>
      </div>
    );
  }

  const variant = product.variants[selectedVariant];

  const handleAdd = () => {
    addItem(product, variant, quantity);
    toast({
      title: 'Đã thêm vào giỏ hàng',
      description: `${product.name} - ${variant.size} x${quantity}`,
    });
  };

  return (
    <div className="py-8">
      <div className="container">
        <Link to="/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6">
          <ChevronLeft className="w-4 h-4" /> Quay lại sản phẩm
        </Link>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-square rounded-lg overflow-hidden bg-muted border"
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{product.brand} • {product.category}</p>
            <h1 className="font-heading text-2xl md:text-3xl font-bold mb-3">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4 text-xs">
              <span className="px-2 py-1 rounded bg-primary/10 text-primary font-medium">Mã BCA: {product.bcaCode}</span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{product.description}</p>

            {/* Variants */}
            <div className="mb-6">
              <p className="text-sm font-semibold mb-2">Kích thước / Loại:</p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v, i) => (
                  <button
                    key={v.id}
                    onClick={() => { setSelectedVariant(i); setQuantity(1); }}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                      i === selectedVariant
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    {v.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-heading text-3xl font-bold text-primary">{formatPrice(variant.price)}</span>
              {variant.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">{formatPrice(variant.originalPrice)}</span>
              )}
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <p className="text-sm font-semibold">Số lượng:</p>
              <div className="flex items-center border rounded-lg">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2 hover:bg-muted transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 text-sm font-semibold min-w-[40px] text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 hover:bg-muted transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <Button size="lg" className="w-full bg-gradient-fire hover:opacity-90 text-lg" onClick={handleAdd}>
              <ShoppingCart className="w-5 h-5 mr-2" /> Thêm vào giỏ hàng
            </Button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t">
              {[
                { icon: Shield, text: 'Chính hãng BCA' },
                { icon: Truck, text: 'Giao toàn quốc' },
                { icon: Award, text: 'Bảo hành 12 tháng' },
              ].map((b, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-1">
                  <b.icon className="w-5 h-5 text-primary" />
                  <span className="text-[10px] text-muted-foreground">{b.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
