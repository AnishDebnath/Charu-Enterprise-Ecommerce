import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, ShoppingCart, Star, ArrowLeft, Trash2, ShieldCheck, Check } from 'lucide-react';
import { useComparison } from '../context/ComparisonContext';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { PRODUCTS } from '../constants';

export const ComparisonPage = () => {
  const { selectedIds, removeFromComparison, clearComparison } = useComparison();
  const { addToCart } = useCart();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const selectedProducts = selectedIds.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);

  const handleAddToCart = (product: any) => {
    addToCart(product, 1);
    addToast(`Added ${product.title} to Cart`, 'success');
  };

  if (selectedProducts.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
        <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-200 max-w-md">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
            <Trash2 size={40} />
          </div>
          <h2 className="text-2xl font-bold mb-4">No products to compare</h2>
          <p className="text-gray-600 mb-8">Select up to 4 products to compare their industrial specifications side-by-side.</p>
          <button 
            onClick={() => navigate('/')}
            className="bg-primary text-white px-8 py-3 rounded font-bold hover:bg-opacity-90 transition-all"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  const specKeys = [
    { label: 'SKU', key: 'sku' },
    { label: 'Price (Retail)', key: 'price', format: (v: number) => `$${v.toFixed(2)}` },
    { label: 'Price (Bulk)', key: 'bulkPrice', format: (v: number) => `$${v.toFixed(2)}` },
    { label: 'Min. Bulk Qty', key: 'moq' },
    { label: 'Material', key: 'material', isSpec: true },
    { label: 'Finish', key: 'finish', isSpec: true },
    { label: 'Diameter', key: 'diameter', isSpec: true },
    { label: 'Standards', key: 'standard', isSpec: true },
    { label: 'Weight', key: 'weight', isSpec: true },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="p-2 hover:bg-white rounded-full transition-colors">
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-3xl font-bold font-heading">Product Comparison</h1>
          </div>
          <button 
            onClick={clearComparison}
            className="text-sm text-red-600 hover:underline flex items-center gap-1"
          >
            <Trash2 size={16} /> Clear comparison
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="w-48 p-6 bg-gray-50 text-left text-sm font-bold text-gray-500 uppercase tracking-wider sticky left-0 z-10">
                    Feature
                  </th>
                  {selectedProducts.map((product) => (
                    <th key={product?.id} className="p-6 min-w-[250px] relative">
                      <button 
                        onClick={() => removeFromComparison(product!.id)}
                        className="absolute top-2 right-2 text-gray-400 hover:text-red-600 p-1"
                      >
                        <X size={18} />
                      </button>
                      <div className="flex flex-col items-center">
                        <div className="h-40 w-full flex items-center justify-center mb-4">
                          <img src={product?.image} alt={product?.title} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                        </div>
                        <Link to={`/product/${product?.id}`} className="text-sm font-bold text-primary hover:text-accent hover:underline text-center line-clamp-2 min-h-[40px]">
                          {product?.title}
                        </Link>
                        <div className="mt-4 w-full">
                          <button 
                            onClick={() => handleAddToCart(product)}
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded text-xs font-bold shadow-sm transition-colors flex items-center justify-center gap-2"
                          >
                            <ShoppingCart size={14} /> Add to Cart
                          </button>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-blue-50/30">
                  <td className="p-4 px-6 font-bold text-sm text-gray-700 bg-gray-50/50 sticky left-0 z-10 border-r border-gray-100">Rating</td>
                  {selectedProducts.map((product) => (
                    <td key={product?.id} className="p-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star size={14} className="text-yellow-500" fill="currentColor" />
                        <span className="font-bold text-sm">{product?.rating}</span>
                        <span className="text-xs text-gray-500">({product?.reviewCount})</span>
                      </div>
                    </td>
                  ))}
                </tr>
                {specKeys.map((spec) => (
                  <tr key={spec.label} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 px-6 font-bold text-sm text-gray-700 bg-gray-50/50 sticky left-0 z-10 border-r border-gray-100">{spec.label}</td>
                    {selectedProducts.map((product: any) => {
                      const value = spec.isSpec ? product.specs[spec.key] : product[spec.key];
                      return (
                        <td key={product.id} className="p-4 text-sm text-center text-gray-800">
                          {value ? (spec.format ? spec.format(value) : value) : <span className="text-gray-300">N/A</span>}
                        </td>
                      );
                    })}
                  </tr>
                ))}
                <tr>
                  <td className="p-4 px-6 font-bold text-sm text-gray-700 bg-gray-50/50 sticky left-0 z-10 border-r border-gray-100">Availability</td>
                  {selectedProducts.map((product) => (
                    <td key={product?.id} className="p-4 text-center">
                      {product?.inStock ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-green-700">
                          <Check size={14} /> In Stock
                        </span>
                      ) : (
                        <span className="text-xs font-bold text-red-600">Out of Stock</span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 px-6 font-bold text-sm text-gray-700 bg-gray-50/50 sticky left-0 z-10 border-r border-gray-100">Quality Cert.</td>
                  {selectedProducts.map((product) => (
                    <td key={product?.id} className="p-4 text-center">
                      <div className="flex justify-center">
                        <ShieldCheck size={20} className="text-blue-600" />
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6 flex items-start gap-4">
          <div className="bg-blue-600 text-white p-2 rounded-full">
            <Check size={20} />
          </div>
          <div>
            <h3 className="font-bold text-blue-900">Expert Recommendation</h3>
            <p className="text-sm text-blue-800 mt-1">
              For high-security industrial projects, we recommend comparing the <strong>Standard</strong> and <strong>Weight</strong> specifications. Charu Enterprise products are strictly manufactured to ASTM F626 standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};