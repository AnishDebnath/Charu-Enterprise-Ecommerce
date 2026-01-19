import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRightLeft, Plus, Minus, CheckCircle } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { useComparison } from '../context/ComparisonContext';
import { useRegion } from '../context/RegionContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToast } = useToast();
  const { selectedIds, toggleComparison, maxItems } = useComparison();
  const { formatPrice, convertPrice, region } = useRegion();
  const [quantity, setQuantity] = useState(1);

  const isSelectedForCompare = selectedIds.includes(product.id);
  const isBulkActive = quantity >= product.moq;
  const currentUnitPrice = isBulkActive ? product.bulkPrice : product.price;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, quantity);
    addToast(`Added ${quantity} x ${product.title} to Cart`, 'success');
  };

  const handleToggleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isSelectedForCompare && selectedIds.length >= maxItems) {
      addToast(`You can only compare up to ${maxItems} products.`, 'info');
      return;
    }
    toggleComparison(product.id);
  };

  const incrementQty = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuantity(prev => prev + 1);
  };

  const decrementQty = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleQtyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className={`bg-white dark:bg-slate-800 border ${isSelectedForCompare ? 'border-accent ring-1 ring-accent' : 'border-gray-200 dark:border-slate-700'} rounded-sm p-4 flex flex-col h-full hover:shadow-lg transition-all duration-200 relative group`}>
      {/* Compare Toggle */}
      <button
        onClick={handleToggleCompare}
        className={`absolute top-2 right-2 z-10 p-1.5 rounded shadow-sm border transition-all ${isSelectedForCompare
          ? 'bg-accent text-white border-accent'
          : 'bg-white dark:bg-slate-700 text-gray-400 dark:text-gray-400 border-gray-200 dark:border-slate-600 hover:text-accent hover:border-accent md:opacity-0 group-hover:opacity-100'
          }`}
        title={isSelectedForCompare ? "Remove from comparison" : "Add to comparison"}
      >
        <ArrowRightLeft size={16} />
      </button>

      <div className="relative bg-white p-4 h-48 flex items-center justify-center mb-2 rounded-sm overflow-hidden">
        {/* Best Seller Badge */}
        {product.isBestSeller && (
          <div className="absolute top-0 left-0 bg-orange-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wide skew-x-[-10deg]">
            Best Seller
          </div>
        )}
        <Link to={`/product/${product.id}`} className="block h-full w-full">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full mx-auto object-contain hover:scale-105 transition-transform duration-300 mix-blend-multiply"
          />
        </Link>
      </div>

      <div className="flex-1 flex flex-col">
        <Link to={`/product/${product.id}`} className="text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-2 hover:text-orange-600 hover:underline mb-1">
          {product.title}
        </Link>

        <div className="flex items-center mb-2">
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} className={i < Math.floor(product.rating) ? "" : "text-gray-300 dark:text-gray-600"} />
            ))}
          </div>
          <span className="text-[10px] text-blue-600 dark:text-blue-400 ml-1 hover:underline cursor-pointer">{product.reviewCount}</span>
        </div>

        <div className="mt-1 mb-3">
          <div className="flex items-center gap-2">
            <div className="flex items-baseline">
              <span className={`text-xl font-bold transition-colors ${isBulkActive ? 'text-red-700 dark:text-red-400' : 'text-gray-900 dark:text-gray-100'}`}>
                {formatPrice(currentUnitPrice)}
              </span>
            </div>
            {isBulkActive && (
              <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[9px] font-bold px-1.5 py-0.5 rounded border border-green-200 dark:border-green-800/30 uppercase tracking-tighter flex items-center gap-0.5 animate-pulse">
                <CheckCircle size={10} /> Bulk Rate
              </span>
            )}
          </div>

          <div className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 min-h-[1.25rem]">
            {isBulkActive ? (
              <span>You save <span className="font-bold text-green-600 dark:text-green-400">{formatPrice(product.price - product.bulkPrice)}</span> per unit</span>
            ) : (
              product.bulkPrice < product.price && (
                <span>As low as <span className="text-red-700 dark:text-red-400 font-bold">{formatPrice(product.bulkPrice)}</span> for {product.moq}+ units</span>
              )
            )}
          </div>
        </div>

        <div className="mt-auto space-y-3">
          {/* Quantity Selector */}
          <div className="flex items-center justify-between gap-2" onClick={handleQtyClick}>
            <span className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Qty</span>
            <div className="flex items-center border border-gray-200 dark:border-slate-700 rounded-md bg-gray-50 dark:bg-slate-700 overflow-hidden flex-1 max-w-[100px]">
              <button
                onClick={decrementQty}
                className="p-1.5 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors text-gray-500 dark:text-gray-400"
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <div className="flex-1 text-center text-xs font-bold text-primary dark:text-gray-200">
                {quantity}
              </div>
              <button
                onClick={incrementQty}
                className="p-1.5 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors text-gray-500 dark:text-gray-400"
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-[#F7CA00] hover:bg-[#F0B800] border border-[#FCD200] rounded-full py-2 text-xs font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-1 transition-colors active:scale-95"
          >
            Add to Cart
          </button>
          <Link to={`/product/${product.id}`} className="block text-center text-[10px] text-blue-700 dark:text-blue-400 hover:underline">
            View Wholesale Options
          </Link>
        </div>
      </div>
    </div>
  );
};