import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ComparisonContextType {
  selectedIds: string[];
  toggleComparison: (productId: string) => void;
  removeFromComparison: (productId: string) => void;
  clearComparison: () => void;
  maxItems: number;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export const ComparisonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const maxItems = 4;

  const toggleComparison = (productId: string) => {
    setSelectedIds((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }
      if (prev.length >= maxItems) {
        return prev; // Limit reached
      }
      return [...prev, productId];
    });
  };

  const removeFromComparison = (productId: string) => {
    setSelectedIds((prev) => prev.filter((id) => id !== productId));
  };

  const clearComparison = () => {
    setSelectedIds([]);
  };

  return (
    <ComparisonContext.Provider value={{ selectedIds, toggleComparison, removeFromComparison, clearComparison, maxItems }}>
      {children}
    </ComparisonContext.Provider>
  );
};

export const useComparison = () => {
  const context = useContext(ComparisonContext);
  if (!context) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
};