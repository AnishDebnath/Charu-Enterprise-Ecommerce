import React, { useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../constants';
import { ChevronRight } from 'lucide-react';

export const ListingPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q');

  const category = CATEGORIES.find(c => c.id === categoryId);

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;

    if (categoryId) {
        // Simple string matching for demo purposes
        const catName = category?.name.toLowerCase();
        // Since mock data categories might not match perfectly by ID structure in types vs constants
        // We filter roughly. In real app, IDs would match.
        if (categoryId === 'chain-link') {
            result = result.filter(p => p.category.includes('Chain Link'));
        } else if (categoryId === 'gate-hardware') {
            result = result.filter(p => p.category.includes('Gate'));
        } else if (categoryId === 'post-accessories') {
             result = result.filter(p => p.category.includes('Post') || p.category.includes('Cap'));
        } else if (categoryId === 'ornamental') {
             result = result.filter(p => p.category.includes('Ornamental') || p.category.includes('Spear'));
        }
    }

    if (searchQuery) {
        const lowerQ = searchQuery.toLowerCase();
        result = result.filter(p => 
            p.title.toLowerCase().includes(lowerQ) || 
            p.description.toLowerCase().includes(lowerQ) ||
            p.sku.toLowerCase().includes(lowerQ)
        );
    }

    return result;
  }, [categoryId, searchQuery, category]);

  const pageTitle = searchQuery 
    ? `Results for "${searchQuery}"` 
    : category 
        ? category.name 
        : 'All Products';

  return (
    <div className="bg-gray-100 min-h-screen py-4">
      <div className="container mx-auto px-4">
        
        {/* Breadcrumbs */}
        <div className="text-xs text-gray-500 mb-4 flex items-center">
            <Link to="/" className="hover:underline">Home</Link> 
            <ChevronRight size={12} className="mx-1"/>
            <span className="font-bold text-gray-800">{pageTitle}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar Filters (Static Mock) */}
            <div className="w-full md:w-64 flex-shrink-0 hidden md:block">
                <div className="bg-white p-4 shadow-sm border border-gray-200 rounded">
                    <h3 className="font-bold mb-3 text-sm">Department</h3>
                    <ul className="text-sm space-y-2 text-gray-600 mb-6">
                        {CATEGORIES.map(c => (
                             <li key={c.id}>
                                <Link to={`/category/${c.id}`} className={`hover:text-accent ${c.id === categoryId ? 'font-bold text-primary' : ''}`}>
                                    {c.name}
                                </Link>
                             </li>
                        ))}
                    </ul>

                    <h3 className="font-bold mb-3 text-sm">Avg. Customer Review</h3>
                    <div className="space-y-1 cursor-pointer">
                        <div className="text-sm hover:text-accent">★★★★☆ & Up</div>
                        <div className="text-sm hover:text-accent">★★★☆☆ & Up</div>
                    </div>

                    <h3 className="font-bold mt-6 mb-3 text-sm">Material</h3>
                    <div className="space-y-1">
                        <label className="flex items-center space-x-2 text-sm">
                            <input type="checkbox" /> <span>Galvanized Steel</span>
                        </label>
                        <label className="flex items-center space-x-2 text-sm">
                            <input type="checkbox" /> <span>Aluminum</span>
                        </label>
                        <label className="flex items-center space-x-2 text-sm">
                            <input type="checkbox" /> <span>Black Powder Coated</span>
                        </label>
                    </div>
                </div>
            </div>

            {/* Results Grid */}
            <div className="flex-1">
                <div className="bg-white p-4 shadow-sm border border-gray-200 rounded mb-4 flex justify-between items-center">
                    <span className="text-sm font-bold">{filteredProducts.length} results</span>
                    <select className="text-sm border border-gray-300 rounded p-1">
                        <option>Sort by: Featured</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Avg. Customer Review</option>
                    </select>
                </div>

                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="bg-white p-12 text-center rounded shadow-sm">
                        <h3 className="text-xl font-bold mb-2">No products found</h3>
                        <p className="text-gray-600">Try checking your spelling or use different keywords.</p>
                        <Link to="/" className="text-accent hover:underline mt-4 inline-block">Go back home</Link>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};