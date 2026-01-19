import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ArrowRightLeft, Trash2 } from 'lucide-react';
import { useComparison } from '../context/ComparisonContext';
import { PRODUCTS } from '../constants';

export const ComparisonBar = () => {
  const { selectedIds, removeFromComparison, clearComparison } = useComparison();
  const navigate = useNavigate();

  if (selectedIds.length === 0) return null;

  const selectedProducts = selectedIds.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up">
      <div className="container mx-auto">
        <div className="bg-primary text-white rounded-lg shadow-2xl border border-white/10 p-4 flex items-center justify-between flex-wrap gap-4 backdrop-blur-md bg-opacity-95">
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide flex-1">
            <div className="flex items-center gap-2 border-r border-white/20 pr-6 mr-2">
              <ArrowRightLeft className="text-accent" size={20} />
              <span className="font-bold whitespace-nowrap">Compare ({selectedIds.length}/4)</span>
            </div>
            
            <div className="flex gap-4">
              {selectedProducts.map((product) => (
                <div key={product?.id} className="relative group flex-shrink-0">
                  <div className="w-12 h-12 bg-white rounded p-1 border border-white/20 overflow-hidden">
                    <img src={product?.image} alt={product?.title} className="w-full h-full object-contain" />
                  </div>
                  <button 
                    onClick={() => removeFromComparison(product!.id)}
                    className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-0.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={clearComparison}
              className="text-xs text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              <Trash2 size={14} /> Clear all
            </button>
            <button 
              onClick={() => navigate('/compare')}
              className="bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded font-bold text-sm shadow-lg transition-all transform hover:scale-105 active:scale-95"
            >
              Compare Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};