import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import { Product } from '@/types/product';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

const formatPrice = (price: number) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

const ProductCard = ({ product, index = 0 }: { product: Product; index?: number }) => {
  const addItem = useCartStore((s) => s.addItem);
  const { toast } = useToast();
  const minVariant = product.variants.reduce((a, b) => (a.price < b.price ? a : b));

  const handleAdd = () => {
    addItem(product, minVariant);
    toast({
      title: 'Đã thêm vào giỏ hàng',
      description: `${product.name} - ${minVariant.size}`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {product.bestSeller && (
            <span className="absolute top-2 left-2 px-2 py-1 text-[10px] font-bold uppercase rounded bg-primary text-primary-foreground">
              Bán chạy
            </span>
          )}
          {minVariant.originalPrice && (
            <span className="absolute top-2 right-2 px-2 py-1 text-[10px] font-bold uppercase rounded bg-accent text-accent-foreground">
              -{Math.round((1 - minVariant.price / minVariant.originalPrice) * 100)}%
            </span>
          )}
        </div>
      </Link>
      <div className="p-4">
        <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1">{product.brand}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-heading text-sm font-semibold leading-tight mb-2 line-clamp-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-baseline gap-2 mb-3">
          <span className="font-heading text-lg font-bold text-primary">{formatPrice(minVariant.price)}</span>
          {minVariant.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">{formatPrice(minVariant.originalPrice)}</span>
          )}
        </div>
        <div className="flex gap-2">
          <Button size="sm" className="flex-1 text-xs" onClick={handleAdd}>
            <ShoppingCart className="w-3.5 h-3.5 mr-1" /> Thêm
          </Button>
          <Button size="sm" variant="outline" asChild>
            <Link to={`/product/${product.id}`}><Eye className="w-3.5 h-3.5" /></Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
