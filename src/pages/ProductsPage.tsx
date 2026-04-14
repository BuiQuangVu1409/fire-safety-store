import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { mockProducts } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { CATEGORIES } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const activeCategory = searchParams.get('category') || '';

  const filtered = useMemo(() => {
    return mockProducts.filter((p) => {
      const matchCat = !activeCategory || p.category === activeCategory;
      const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="py-8">
      <div className="container">
        <h1 className="font-heading text-2xl md:text-3xl font-bold mb-6">
          Tất Cả <span className="text-primary">Sản Phẩm</span>
        </h1>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Tìm kiếm sản phẩm..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button
              size="sm"
              variant={!activeCategory ? 'default' : 'outline'}
              onClick={() => setSearchParams({})}
            >
              <Filter className="w-3.5 h-3.5 mr-1" /> Tất cả
            </Button>
            {CATEGORIES.map((cat) => (
              <Button
                key={cat}
                size="sm"
                variant={activeCategory === cat ? 'default' : 'outline'}
                onClick={() => setSearchParams({ category: cat })}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">Không tìm thấy sản phẩm nào.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
