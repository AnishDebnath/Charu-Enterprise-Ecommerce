import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShieldCheck, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { useRegion } from '../context/RegionContext';

export const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, cartCount, totalAmount, clearCart } = useCart();
  const { addToast } = useToast();
  const { formatPrice } = useRegion();
  const navigate = useNavigate();

  const handleCheckout = () => {
    addToast("Redirecting to secure checkout...", "info");
    setTimeout(() => {
      // In a real app, this would go to a checkout process
      clearCart();
      addToast("Order placed successfully! Check your email for details.", "success");
      navigate('/');
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] bg-white container mx-auto px-4 py-8 mt-4 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold mb-4">Your Charu Cart is empty</h2>
        <p className="text-gray-600 mb-6">Check out today's deals or browse categories to find parts.</p>
        <Link to="/" className="bg-accent hover:bg-accent-hover text-white px-8 py-2 rounded-md font-bold shadow transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Cart Items List */}
          <div className="lg:col-span-3 bg-white p-6 rounded shadow-sm">
            <div className="flex justify-between items-end border-b pb-4 mb-4">
              <h1 className="text-2xl font-medium">Shopping Cart</h1>
              <span className="text-sm text-gray-500">Price</span>
            </div>

            <div className="space-y-6">
              {cart.map((item) => {
                const isBulk = item.quantity >= item.moq;
                const unitPrice = isBulk ? item.bulkPrice : item.price;

                return (
                  <div key={item.id} className="flex flex-col md:flex-row gap-4 border-b border-gray-100 pb-6 last:border-0">
                    <div className="w-full md:w-48 h-48 md:h-32 flex-shrink-0 bg-gray-50 flex items-center justify-center p-2 rounded border border-gray-200">
                      <img src={item.image} alt={item.title} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                    </div>

                    <div className="flex-1">
                      <Link to={`/product/${item.id}`} className="text-lg font-medium text-gray-900 hover:text-orange-600 hover:underline">
                        {item.title}
                      </Link>
                      <div className="text-xs text-green-700 font-bold my-1">In Stock</div>
                      <div className="text-xs text-gray-500 mb-1">SKU: {item.sku}</div>
                      {isBulk && (
                        <div className="inline-block bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded border border-green-200 mb-2">
                          Bulk Discount Applied
                        </div>
                      )}

                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center border border-gray-300 rounded shadow-sm bg-gray-50">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 hover:bg-gray-200 text-gray-600"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            readOnly
                            className="w-12 text-center bg-transparent border-x border-gray-300 text-sm py-1 focus:outline-none"
                          />
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 hover:bg-gray-200 text-gray-600"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-sm text-blue-700 hover:underline flex items-center gap-1">
                          <Trash2 size={14} /> Delete
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-lg font-bold">{formatPrice(unitPrice * item.quantity)}</div>
                      <div className="text-xs text-gray-500">{formatPrice(unitPrice)} / each</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-right pt-4">
              <span className="text-lg">Subtotal ({cartCount} items): <span className="font-bold">{formatPrice(totalAmount)}</span></span>
            </div>
          </div>

          {/* Checkout Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-4 rounded shadow-sm sticky top-24">
              <div className="text-lg font-medium mb-4">
                Subtotal ({cartCount} items): <span className="font-bold">{formatPrice(totalAmount)}</span>
              </div>

              <div className="flex items-center gap-2 mb-4 text-sm text-green-700">
                <ShieldCheck size={16} />
                <span>Your order qualifies for FREE Shipping</span>
              </div>

              <button onClick={handleCheckout} className="w-full bg-[#F7CA00] hover:bg-[#F0B800] border border-[#FCD200] rounded-lg py-2 text-sm font-medium shadow-sm mb-4 transition-colors flex items-center justify-center gap-2">
                Proceed to checkout <ArrowRight size={16} />
              </button>

              <div className="bg-gray-50 p-3 rounded border border-gray-200 text-xs text-gray-600 text-center">
                <span className="font-bold block mb-1">Buying for work?</span>
                <span className="block mb-2">Request a net-30 account for your business.</span>
                <button className="text-blue-700 hover:underline">Apply Now</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};