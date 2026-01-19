import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Star,
  ShieldCheck,
  Truck,
  Package,
  RotateCcw,
  Lock,
  Clock,
  Sun,
  Wrench,
  CheckCircle,
  Info,
  User,
  ThumbsUp,
  MessageSquare,
  Flag,
  TrendingUp,
  Zap,
  Tag
} from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { Product, Review } from '../types';
import { WholesaleModal } from '../components/WholesaleModal';
import { useRegion } from '../context/RegionContext';

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  const { addToast } = useToast();
  const { formatPrice } = useRegion();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [wholesaleModalOpen, setWholesaleModalOpen] = useState(false);

  // Review State
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({ userName: '', rating: 5, comment: '' });
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    if (product) {
      const savedReviews = localStorage.getItem(`charu_reviews_${product.id}`);
      if (savedReviews) {
        setReviews(JSON.parse(savedReviews));
      } else {
        const initialReviews: Review[] = [
          {
            id: 'm1',
            productId: product.id,
            userName: 'Industrial Solutions Inc.',
            rating: 5,
            comment: 'Superior galvanized finish. We used these for a high-security perimeter and the fit was perfect.',
            date: '2023-11-15'
          },
          {
            id: 'm2',
            productId: product.id,
            userName: 'John D.',
            rating: 4,
            comment: 'Very solid build. Easy to install on my garden fence. Shipping was a bit slow but the product is worth it.',
            date: '2023-12-02'
          }
        ];
        setReviews(initialReviews);
        localStorage.setItem(`charu_reviews_${product.id}`, JSON.stringify(initialReviews));
      }
    }
  }, [product]);

  const stats = useMemo(() => {
    const total = reviews.length;
    if (total === 0) return { avg: "0.0", count: 0, distribution: [0, 0, 0, 0, 0] };
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    const distribution = [5, 4, 3, 2, 1].map(star =>
      Math.round((reviews.filter(r => r.rating === star).length / total) * 100)
    );
    return { avg: (sum / total).toFixed(1), count: total, distribution };
  }, [reviews]);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.userName.trim() || !newReview.comment.trim()) {
      addToast('Please fill out all fields', 'error');
      return;
    }

    const review: Review = {
      id: Date.now().toString(),
      productId: product!.id,
      userName: newReview.userName,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0]
    };

    const updatedReviews = [review, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem(`charu_reviews_${product!.id}`, JSON.stringify(updatedReviews));
    setNewReview({ userName: '', rating: 5, comment: '' });
    addToast('Review submitted! Thank you for your feedback.', 'success');
  };

  const handleReport = (reviewId: string) => {
    addToast("Review reported. Our safety team will investigate this content.", "info");
  };

  const handleHelpful = (reviewId: string) => {
    addToast("Thank you for your feedback!", "success");
  };

  if (!product) {
    return <div className="p-10 text-center">Product not found.</div>;
  }

  const isBulk = quantity >= product.moq;
  const currentPrice = isBulk ? product.bulkPrice : product.price;
  const listPrice = product.price * 1.25;
  const discountPercent = Math.round(((listPrice - currentPrice) / listPrice) * 100);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    addToast(`Added ${quantity} x ${product.title} to Cart`, 'success');
  };

  return (
    <div className="bg-white min-h-screen pb-12">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2 px-4 text-xs text-gray-600 mb-4 border-b border-gray-200">
        <div className="container mx-auto">
          <Link to="/" className="hover:underline">Home</Link> &rsaquo;
          <Link to={`/category/${product.category.toLowerCase().replace(/\s/g, '-')}`} className="hover:underline mx-1">{product.category}</Link> &rsaquo;
          <span className="font-bold text-gray-800 ml-1">{product.sku}</span>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">

          {/* Images */}
          <div className="lg:col-span-4 sticky top-24 self-start">
            <div className="flex flex-col-reverse md:flex-row gap-4">
              <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={`border rounded p-1 cursor-pointer w-16 h-16 flex-shrink-0 flex items-center justify-center transition-all ${activeImage === i ? 'ring-2 ring-accent ring-offset-1 border-accent' : 'border-gray-300 hover:border-gray-500'}`}
                    onMouseEnter={() => setActiveImage(i)}
                  >
                    <img src={product.image} className="max-w-full max-h-full object-contain mix-blend-multiply" alt={`${product.title} thumbnail ${i}`} />
                  </div>
                ))}
              </div>
              <div className="flex-1 border border-gray-200 rounded p-6 flex items-center justify-center bg-white relative group overflow-hidden">
                {/* Floating Badges Over Image */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                  {product.isBestSeller && (
                    <div className="bg-orange-600 text-white text-[10px] font-black px-3 py-1.5 uppercase tracking-tighter shadow-xl flex items-center gap-1.5 rounded-r-lg -ml-6 pl-8 animate-fade-in-up">
                      <TrendingUp size={14} /> #1 Best Seller
                    </div>
                  )}
                  {product.isNewArrival && (
                    <div className="bg-blue-600 text-white text-[10px] font-black px-3 py-1.5 uppercase tracking-tighter shadow-xl flex items-center gap-1.5 rounded-r-lg -ml-6 pl-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                      <Zap size={14} fill="currentColor" /> New Engineering
                    </div>
                  )}
                  {product.isOnSale && (
                    <div className="bg-red-700 text-white text-[10px] font-black px-3 py-1.5 uppercase tracking-tighter shadow-xl flex items-center gap-1.5 rounded-r-lg -ml-6 pl-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                      <Tag size={14} /> Sale -{discountPercent}%
                    </div>
                  )}
                </div>

                <img src={product.image} className="max-w-full max-h-[500px] object-contain cursor-zoom-in transition-transform group-hover:scale-110 duration-500" alt={product.title} />

                <div className="absolute top-4 right-4 text-gray-300 group-hover:text-primary transition-colors">
                  <Package size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:col-span-4">

            {/* Tag Badges near Title */}
            <div className="flex flex-wrap gap-2 mb-4">
              {product.isBestSeller && (
                <span className="inline-flex items-center gap-1 bg-orange-50 text-orange-700 text-[10px] font-bold px-2 py-0.5 rounded border border-orange-200 uppercase tracking-widest">
                  <Star size={10} fill="currentColor" /> Best Seller
                </span>
              )}
              {product.isNewArrival && (
                <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded border border-blue-200 uppercase tracking-widest">
                  <Zap size={10} fill="currentColor" /> New Release
                </span>
              )}
              {product.isOnSale && (
                <span className="inline-flex items-center gap-1 bg-red-50 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded border border-red-200 uppercase tracking-widest">
                  <Tag size={10} fill="currentColor" /> Seasonal Offer
                </span>
              )}
              <span className="inline-flex items-center gap-1 bg-gray-50 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded border border-gray-200 uppercase tracking-widest">
                SKU: {product.sku}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 leading-tight font-heading">{product.title}</h1>
            <div className="text-sm text-blue-700 hover:underline mb-4 cursor-pointer font-medium flex items-center gap-1">
              Visit the Charu Industrial Store <ArrowRight size={14} className="opacity-50" />
            </div>

            <div className="flex items-center space-x-4 mb-6 border-b border-gray-100 pb-4">
              <div className="flex items-center">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} className={i < Math.floor(product.rating) ? "" : "text-gray-200"} />
                  ))}
                </div>
                <span className="text-blue-700 hover:underline ml-3 text-sm font-bold">{product.rating}</span>
                <span className="text-gray-400 text-xs ml-1">({product.reviewCount} reviews)</span>
              </div>
              <span className="text-gray-200">|</span>
              <span className="text-sm font-bold text-green-700 flex items-center gap-1"><ShieldCheck size={16} /> Certified Item</span>
            </div>

            {/* Price Block */}
            <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-baseline gap-3">
                {product.isOnSale && (
                  <span className="text-red-600 text-3xl font-light">-{discountPercent}%</span>
                )}
                <span className="flex items-start text-gray-900 text-4xl font-bold">
                  {formatPrice(product.price)}
                </span>
              </div>
              <div className="text-sm text-gray-500 mb-4 mt-1">
                Typical price: <span className="line-through">{formatPrice(listPrice)}</span>
              </div>

              {/* Bulk Pricing Table */}
              <div className="bg-white border border-blue-200 rounded p-4 shadow-sm">
                <h4 className="text-xs font-black text-primary mb-3 flex items-center gap-2 uppercase tracking-widest">
                  <TrendingUp size={14} className="text-accent" /> Professional Bulk Savings
                </h4>
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <div className="text-gray-500 text-[10px] uppercase font-bold tracking-tighter">Standard (1-{product.moq - 1})</div>
                    <div className="text-xl font-bold">{formatPrice(product.price)} <span className="text-[10px] font-normal text-gray-400">/unit</span></div>
                  </div>
                  <div>
                    <div className="text-accent text-[10px] uppercase font-bold tracking-tighter">Bulk ({product.moq}+ units)</div>
                    <div className="text-xl font-bold text-red-700">{formatPrice(product.bulkPrice)} <span className="text-[10px] font-normal text-gray-400">/unit</span></div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-50 text-[10px] text-gray-400 italic">
                  *Bulk pricing applied automatically in cart for eligible quantities.
                </div>
              </div>
            </div>

            {/* Specs Grid */}
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
                <Wrench size={18} className="text-gray-400" /> Engineering Specs
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between bg-white border-b border-gray-50 py-2">
                    <span className="font-bold text-gray-500 capitalize">{key}:</span>
                    <span className="text-gray-900 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2 border-b border-gray-100 pb-2">
                <Info size={18} className="text-gray-400" /> Overview
              </h3>
              <ul className="list-disc list-outside ml-5 text-sm space-y-2 text-gray-700">
                <li>{product.description}</li>
                <li>Manufactured to meet strict <span className="font-bold">ASTM standards</span> for heavy-duty fencing.</li>
                <li>Premium industrial galvanization for superior corrosion resistance.</li>
                <li>Field-tested for extreme durability and ease of installation.</li>
                <li>Direct-from-manufacturer pricing ensures competitive project bidding.</li>
              </ul>
            </div>
          </div>

          {/* Buy Box */}
          <div className="lg:col-span-2">
            <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-xl sticky top-24 border-t-4 border-t-accent">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {formatPrice(currentPrice)}
              </div>
              {isBulk && (
                <div className="flex items-center gap-1.5 text-[10px] font-bold bg-green-50 text-green-700 px-2 py-1 rounded mb-3 border border-green-100 animate-pulse">
                  <CheckCircle size={12} /> BULK SAVINGS ACTIVE
                </div>
              )}

              <div className="text-sm text-gray-600 mb-6 pb-4 border-b border-gray-100">
                Est. Delivery <span className="font-bold text-gray-900">Tuesday, Oct 24</span>.
                <div className="text-blue-700 hover:underline cursor-pointer mt-1 font-medium">Global shipping options</div>
              </div>

              <div className="flex items-center gap-2 text-lg text-green-700 font-bold mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500"></span> In Stock
              </div>

              <div className="mb-6">
                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1.5">Project Quantity:</label>
                <div className="relative">
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full appearance-none border border-gray-300 rounded-lg py-2 px-4 bg-gray-50 focus:ring-2 focus:ring-accent focus:border-accent text-sm font-bold shadow-sm transition-all outline-none"
                  >
                    {[...Array(50)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Unit' : 'Units'}</option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-[#F7CA00] hover:bg-[#F0B800] border border-[#EAB308] rounded-full py-3 text-sm font-bold shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-accent hover:bg-accent-hover text-white rounded-full py-3 text-sm font-bold shadow-md transition-all active:scale-95"
                >
                  Buy Now
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                <div className="flex justify-between text-[10px] uppercase font-bold text-gray-400 tracking-tighter">
                  <span>Ships from</span>
                  <span className="text-gray-700">Charu Logistics</span>
                </div>
                <div className="flex justify-between text-[10px] uppercase font-bold text-gray-400 tracking-tighter">
                  <span>Sold by</span>
                  <span className="text-gray-700">Charu Enterprise</span>
                </div>
                <button className="w-full text-left text-xs text-blue-700 hover:underline flex items-center gap-2 mt-4 font-medium">
                  <Lock size={14} className="text-gray-300" /> Secure Industrial Transaction
                </button>
              </div>
            </div>

            <div className="mt-4 bg-primary text-white p-6 rounded-xl text-center shadow-lg group cursor-pointer overflow-hidden relative">
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="relative z-10">
                <button onClick={() => setWholesaleModalOpen(true)} className="text-sm font-black uppercase tracking-widest">Bulk Wholesale Inquiry</button>
                <p className="text-[10px] text-gray-300 group-hover:text-white mt-1">Special Container Load Pricing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-12">

            {/* Review Sidebar / Summary */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold mb-4 font-heading">Industry Feedback</h2>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} fill={i < Math.round(Number(stats.avg)) ? "currentColor" : "none"} className={i < Math.round(Number(stats.avg)) ? "" : "text-gray-200"} />
                  ))}
                </div>
                <span className="text-2xl font-black text-gray-900">{stats.avg}</span>
              </div>
              <div className="text-sm text-gray-500 mb-8 font-medium">{stats.count} global ratings</div>

              {/* Star Breakdown */}
              <div className="space-y-4 mb-10">
                {[5, 4, 3, 2, 1].map((star, idx) => (
                  <div key={star} className="flex items-center text-xs gap-4 group cursor-pointer hover:text-accent">
                    <span className="w-12 flex-shrink-0 text-blue-700 group-hover:underline font-bold">{star} star</span>
                    <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-accent transition-all duration-500" style={{ width: `${stats.distribution[idx]}%` }}></div>
                    </div>
                    <span className="w-10 text-right text-gray-400 font-bold">{stats.distribution[idx]}%</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-lg mb-2">Submit Product Review</h3>
                <p className="text-xs text-gray-500 mb-6 leading-relaxed">Share your field experience with other contractors and project managers.</p>

                {/* Review Form */}
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1.5">Your Identity</label>
                    <input
                      required
                      type="text"
                      value={newReview.userName}
                      onChange={(e) => setNewReview({ ...newReview, userName: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-accent outline-none bg-white transition-all shadow-sm"
                      placeholder="e.g. Acme Fencing Corp"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1.5">Rating</label>
                    <div className="flex gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReview({ ...newReview, rating: star })}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="transition-transform active:scale-125"
                        >
                          <Star
                            size={28}
                            fill={(hoverRating || newReview.rating) >= star ? "#EAB308" : "none"}
                            className={(hoverRating || newReview.rating) >= star ? "text-yellow-500" : "text-gray-300"}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1.5">Your Review</label>
                    <textarea
                      required
                      rows={4}
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-accent outline-none bg-white transition-all shadow-sm"
                      placeholder="Durability? Fit? Coating quality?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white hover:bg-opacity-90 rounded-lg py-3 text-sm font-bold transition-all shadow-md active:scale-95"
                  >
                    Publish Review
                  </button>
                </form>
              </div>
            </div>

            {/* Review List */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-10 border-b border-gray-100 pb-6">
                <h3 className="text-2xl font-bold font-heading">Verified Field Reports</h3>
                <select className="text-xs bg-white border border-gray-300 rounded-lg px-4 py-2 font-bold text-gray-600 outline-none shadow-sm cursor-pointer hover:border-accent transition-colors">
                  <option>Featured Reports</option>
                  <option>Most Recent</option>
                </select>
              </div>

              <div className="space-y-12">
                {reviews.length > 0 ? reviews.map((review) => (
                  <div key={review.id} className="animate-fade-in group">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-lg">
                        {review.userName.charAt(0)}
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-gray-900">{review.userName}</span>
                        <span className="block text-[10px] text-gray-400 uppercase font-black tracking-widest">Contractor Member</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "" : "text-gray-200"} />
                        ))}
                      </div>
                      <span className="text-xs font-black text-gray-900 uppercase tracking-tighter">Verified Industrial Quality</span>
                    </div>

                    <div className="text-[10px] text-gray-400 font-bold mb-4">Posted on {new Date(review.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>

                    <div className="text-sm text-gray-700 leading-relaxed mb-4 font-medium bg-gray-50/50 p-4 rounded-lg border-l-4 border-accent">
                      "{review.comment}"
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleHelpful(review.id)}
                        className="text-[10px] font-black uppercase tracking-widest bg-white hover:bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 shadow-sm transition-all flex items-center gap-2 text-gray-600 active:scale-95"
                      >
                        <ThumbsUp size={12} /> Helpful
                      </button>
                      <button
                        onClick={() => handleReport(review.id)}
                        className="text-[10px] font-bold text-gray-400 hover:text-red-600 flex items-center gap-1.5 transition-colors uppercase tracking-widest bg-gray-50/50 hover:bg-red-50 px-3 py-1.5 rounded-full border border-transparent hover:border-red-100"
                        title="Report this review as inappropriate"
                      >
                        <Flag size={12} /> Report
                      </button>
                    </div>
                  </div>
                )) : (
                  <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 text-gray-400">
                    <MessageSquare size={48} className="mx-auto mb-4 opacity-10" />
                    <p className="font-bold">No verified reports yet for this SKU.</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Technical Features Section */}
        <div className="mt-20">
          <div className="bg-primary rounded-2xl shadow-2xl overflow-hidden mb-12">
            <div className="bg-accent text-white py-5 px-8 flex items-center justify-between">
              <h2 className="text-2xl font-black font-heading uppercase tracking-widest">Material Excellence Program</h2>
              <ShieldCheck size={32} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="p-10 text-center hover:bg-white/5 transition-colors group">
                <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent group-hover:scale-110 transition-transform">
                  <Clock size={40} />
                </div>
                <h3 className="font-black text-white text-xl mb-3 uppercase tracking-tighter">30+ Year Lifecycle</h3>
                <p className="text-sm text-gray-400 leading-relaxed">Our hot-dip galvanization process creates a permanent metallurgical bond for unmatched longevity.</p>
              </div>
              <div className="p-10 text-center hover:bg-white/5 transition-colors group">
                <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent group-hover:scale-110 transition-transform">
                  <Sun size={40} />
                </div>
                <h3 className="font-black text-white text-xl mb-3 uppercase tracking-tighter">UV Protected Finish</h3>
                <p className="text-sm text-gray-400 leading-relaxed">Specially treated to resist the harsh sun of the USA and Middle East regions without brittling.</p>
              </div>
              <div className="p-10 text-center hover:bg-white/5 transition-colors group">
                <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent group-hover:scale-110 transition-transform">
                  <CheckCircle size={40} />
                </div>
                <h3 className="font-black text-white text-xl mb-3 uppercase tracking-tighter">ASTM Certified</h3>
                <p className="text-sm text-gray-400 leading-relaxed">Verified by third-party laboratories to meet or exceed ASTM F626 and F1912 standards.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-start gap-6 hover:shadow-xl transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-125"></div>
              <div className="bg-primary p-4 rounded-xl text-white z-10 shadow-lg">
                <Wrench size={32} />
              </div>
              <div className="z-10">
                <h3 className="text-2xl font-black font-heading text-primary mb-3 uppercase tracking-tighter">Contractor Friendly</h3>
                <p className="text-gray-600 leading-relaxed">Precision fitment means zero rework on-site. Every component is quality-checked for dimension accuracy before export.</p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-start gap-6 hover:shadow-xl transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-125"></div>
              <div className="bg-primary p-4 rounded-xl text-white z-10 shadow-lg">
                <Globe size={32} />
              </div>
              <div className="z-10">
                <h3 className="text-2xl font-black font-heading text-primary mb-3 uppercase tracking-tighter">Export Ready Packaging</h3>
                <p className="text-gray-600 leading-relaxed">Each bulk order is packed in reinforced export-grade pallets to ensure zero transit damage across international borders.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Trust Signals */}
        <div className="mt-20 border-t border-gray-200 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-accent transition-all">
              <div className="bg-white p-4 rounded-full mb-4 shadow-sm">
                <RotateCcw className="text-accent" size={28} />
              </div>
              <h4 className="font-black text-xs text-primary uppercase tracking-widest">30-Day Guarantee</h4>
              <p className="text-[10px] text-gray-400 mt-2 font-bold">Standard Return Policy</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-accent transition-all">
              <div className="bg-white p-4 rounded-full mb-4 shadow-sm">
                <ShieldCheck className="text-accent" size={28} />
              </div>
              <h4 className="font-black text-xs text-primary uppercase tracking-widest">5 Year Warranty</h4>
              <p className="text-[10px] text-gray-400 mt-2 font-bold">On Structural Integrity</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-accent transition-all">
              <div className="bg-white p-4 rounded-full mb-4 shadow-sm">
                <Truck className="text-accent" size={28} />
              </div>
              <h4 className="font-black text-xs text-primary uppercase tracking-widest">Global Ports</h4>
              <p className="text-[10px] text-gray-400 mt-2 font-bold">Houston / Dubai / Mumbai</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-accent transition-all">
              <div className="bg-white p-4 rounded-full mb-4 shadow-sm">
                <Lock className="text-accent" size={28} />
              </div>
              <h4 className="font-black text-xs text-primary uppercase tracking-widest">Bank Transfer LC</h4>
              <p className="text-[10px] text-gray-400 mt-2 font-bold">Safe B2B Transactions</p>
            </div>
          </div>
        </div>

      </div>

      <WholesaleModal
        isOpen={wholesaleModalOpen}
        onClose={() => setWholesaleModalOpen(false)}
        initialProduct={`${product.sku} - ${product.title}`}
      />
    </div>
  );
};

const ArrowRight = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
);

const ChevronDown = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const Globe = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20M2 12h20" />
  </svg>
);
