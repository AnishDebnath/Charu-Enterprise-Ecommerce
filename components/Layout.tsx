import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, ChevronDown, MapPin, Factory, ShieldCheck, Truck, X, Phone, Globe, Sun, Moon } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { useRegion, REGIONS } from '../context/RegionContext';
import { UserRegion } from '../types';
import { CATEGORIES } from '../constants';
import { WholesaleModal } from './WholesaleModal';
import charuLogo from '../assets/products/charu-logo.png';

// REGIONS moved to context

export const Header = () => {
  const { cartCount } = useCart();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { region, setRegion } = useRegion();
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wholesaleModalOpen, setWholesaleModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-primary dark:bg-slate-950 text-white shadow-lg transition-colors">
        {/* Top Bar - Micro interactions */}
        <div className="bg-[#06182a] dark:bg-black text-xs py-1.5 px-4 hidden md:flex justify-between items-center text-gray-300">
          <div className="flex space-x-4">
            <span className="flex items-center gap-1"><Globe size={12} /> Global Manufacturer & Exporter</span>
            <span className="text-gray-500">|</span>
            <span className="flex items-center gap-1"><ShieldCheck size={12} /> ISO 9001:2015 Certified</span>
          </div>
          <div className="flex space-x-6 items-center">
            <button
              onClick={toggleDarkMode}
              className="flex items-center gap-2 hover:text-white transition-colors"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? <Sun size={14} className="text-yellow-400" /> : <Moon size={14} />}
              <span className="hidden sm:inline">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
            <Link to="/contact" className="hover:text-white flex items-center gap-1 hover:underline">
              Request Callback
            </Link>
            <button onClick={() => setWholesaleModalOpen(true)} className="hover:text-white flex items-center gap-1 hover:underline">
              Bulk Quotes
            </button>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 min-w-fit">
            <img src={charuLogo} alt="Charu Logo" className="h-10 w-10 object-contain" />
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-bold font-heading tracking-tight text-white">CHARU</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">Enterprise</span>
            </div>
          </Link>

          {/* Region & Location (Desktop) */}
          <div className="hidden lg:flex items-center text-sm min-w-fit cursor-pointer hover:outline outline-1 outline-white p-2 rounded" onClick={() => navigate('/export')}>
            <MapPin size={16} className="mr-1 text-white" />
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-gray-300">Deliver to</span>
              <span className="font-bold">{region.country}</span>
            </div>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-3xl hidden md:flex h-10 rounded-md overflow-hidden bg-white focus-within:ring-2 focus-within:ring-accent">
            <div className="flex items-center px-3 bg-gray-100 border-r border-gray-300 text-gray-600 text-xs cursor-pointer hover:bg-gray-200 transition-colors">
              All <ChevronDown size={12} className="ml-1" />
            </div>
            <input
              type="text"
              placeholder="Search fence fittings, hinges, caps..."
              className="flex-1 px-4 text-black outline-none placeholder:text-gray-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="bg-accent hover:bg-accent-hover text-white px-5 flex items-center justify-center transition-colors">
              <Search size={20} />
            </button>
          </form>

          {/* Right Actions */}
          <div className="flex items-center space-x-2 md:space-x-6 min-w-fit text-sm">

            {/* Theme Toggle (Mobile) */}
            <button onClick={toggleDarkMode} className="md:hidden p-2 text-white">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Region Switcher */}
            {/* Region Switcher */}
            <div className="hidden md:flex items-center cursor-pointer p-2 hover:outline outline-1 outline-white rounded" onClick={() => {
              const currentIndex = REGIONS.findIndex(r => r.currency === region.currency);
              const nextIndex = (currentIndex + 1) % REGIONS.length;
              setRegion(REGIONS[nextIndex]);
            }}>
              <span className="text-xl mr-1">{region.flag}</span>
              <span className="font-bold">{region.currency}</span>
              <ChevronDown size={12} className="ml-1 text-gray-400" />
            </div>

            {/* Account */}
            <div className="hidden md:flex flex-col leading-tight cursor-pointer p-2 hover:outline outline-1 outline-white rounded">
              <span className="text-xs text-gray-300">Hello, Sign in</span>
              <span className="font-bold flex items-center">Account & Lists <ChevronDown size={12} className="ml-1" /></span>
            </div>

            {/* Cart */}
            <Link to="/cart" className="flex items-center relative cursor-pointer p-2 hover:outline outline-1 outline-white rounded">
              <div className="relative">
                <ShoppingCart size={32} />
                <span className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              </div>
              <span className="hidden md:inline font-bold mt-3 ml-1">Cart</span>
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden px-4 pb-3">
          <form onSubmit={handleSearch} className="flex h-10 rounded-md overflow-hidden bg-white focus-within:ring-2 focus-within:ring-accent">
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 px-4 text-black outline-none placeholder:text-gray-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="bg-accent hover:bg-accent-hover text-white px-4 flex items-center justify-center">
              <Search size={20} />
            </button>
          </form>
        </div>

        {/* Sub-Header / Navigation (Desktop) */}
        <div className="bg-[#193652] dark:bg-slate-900 text-white text-sm py-2 px-4 hidden md:flex items-center overflow-x-auto whitespace-nowrap scrollbar-hide border-t border-white/5">
          <button onClick={() => setMobileMenuOpen(true)} className="flex items-center font-bold mr-6 hover:text-accent transition-colors">
            <Menu size={20} className="mr-1" /> All
          </button>
          <div className="flex space-x-6">
            {CATEGORIES.map(cat => (
              <Link key={cat.id} to={`/category/${cat.id}`} className="hover:text-accent transition-colors">{cat.name}</Link>
            ))}
            <span className="border-l border-gray-500 mx-2"></span>
            <span className="font-bold text-accent cursor-pointer" onClick={() => setWholesaleModalOpen(true)}>Wholesale Center</span>
            <Link to="/export" className="hover:text-accent transition-colors">Export & Shipping</Link>
            <Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] flex">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="relative w-[80%] max-w-[300px] bg-white dark:bg-slate-900 h-full shadow-2xl flex flex-col animate-slide-right transition-colors">
            <div className="bg-primary dark:bg-slate-950 text-white p-4 flex items-center justify-between">
              <span className="font-bold text-lg">Browse Charu</span>
              <button onClick={() => setMobileMenuOpen(false)}><X size={24} /></button>
            </div>
            <div className="flex-1 overflow-y-auto py-2">
              <div className="px-4 py-2 text-lg font-bold text-gray-800 dark:text-gray-200 border-b dark:border-slate-800">Trending</div>
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800">Best Sellers</Link>
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800">New Arrivals</Link>

              <div className="px-4 py-2 mt-2 text-lg font-bold text-gray-800 dark:text-gray-200 border-b dark:border-slate-800">Categories</div>
              {CATEGORIES.map(cat => (
                <Link key={cat.id} to={`/category/${cat.id}`} onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800">
                  {cat.name}
                </Link>
              ))}

              <div className="px-4 py-2 mt-2 text-lg font-bold text-gray-800 dark:text-gray-200 border-b dark:border-slate-800">Corporate</div>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800">About Our Company</Link>
              <Link to="/export" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800">Export & Shipping</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800">Contact & Support</Link>
              <div onClick={() => { setWholesaleModalOpen(true); setMobileMenuOpen(false) }} className="block px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer text-accent font-bold">Request Bulk Quote</div>
              <Link to="/cart" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800">Cart</Link>
              <div onClick={toggleDarkMode} className="block px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer">
                Theme: {isDarkMode ? 'Light' : 'Dark'}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Wholesale Modal */}
      <WholesaleModal isOpen={wholesaleModalOpen} onClose={() => setWholesaleModalOpen(false)} />
    </>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-slate-950 text-white mt-12 transition-colors">
      <div className="bg-[#2c455e] dark:bg-slate-900 py-4 text-center cursor-pointer hover:bg-[#385470] dark:hover:bg-slate-800 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span className="text-sm font-medium">Back to top</span>
      </div>

      <div className="container mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 dark:border-slate-800">
        <div>
          <h3 className="font-bold mb-4 font-heading text-base md:text-lg">Get to Know Us</h3>
          <ul className="space-y-2 text-xs md:text-sm text-gray-300 dark:text-gray-400">
            <li><Link to="/about" className="hover:underline">About Charu Enterprise</Link></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><Link to="/about" className="hover:underline">Factory Tour</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 font-heading text-base md:text-lg">Export Services</h3>
          <ul className="space-y-2 text-xs md:text-sm text-gray-300 dark:text-gray-400">
            <li><Link to="/export" className="hover:underline">Container Loading</Link></li>
            <li><a href="#" className="hover:underline">Custom Fabrication</a></li>
            <li><a href="#" className="hover:underline">Private Labeling</a></li>
            <li><Link to="/export" className="hover:underline">Global Logistics</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 font-heading text-base md:text-lg">Payment Products</h3>
          <ul className="space-y-2 text-xs md:text-sm text-gray-300 dark:text-gray-400">
            <li><a href="#" className="hover:underline">Business Credit</a></li>
            <li><a href="#" className="hover:underline">Letter of Credit (LC)</a></li>
            <li><a href="#" className="hover:underline">Wire Transfers</a></li>
            <li><a href="#" className="hover:underline">Currency Converter</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 font-heading text-base md:text-lg">Let Us Help You</h3>
          <ul className="space-y-2 text-xs md:text-sm text-gray-300 dark:text-gray-400">
            <li><a href="#" className="hover:underline">Your Account</a></li>
            <li><a href="#" className="hover:underline">Track Orders</a></li>
            <li><a href="#" className="hover:underline">Shipping Rates</a></li>
            <li><a href="#" className="hover:underline">Returns & Claims</a></li>
            <li><Link to="/contact" className="hover:underline">Help Center</Link></li>
          </ul>
        </div>
      </div>

      <div className="bg-[#06182a] dark:bg-black py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-gray-400">
          <div className="flex items-center gap-2">
            <Factory size={20} />
            <span className="text-sm">50+ Years Manufacturing</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={20} />
            <span className="text-sm">ISO 9001 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck size={20} />
            <span className="text-sm">Global Shipping (USA/ME)</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={20} />
            <span className="text-sm">24/7 Export Support</span>
          </div>
        </div>
        <div className="text-center mt-8 text-xs text-gray-500">
          &copy; 2024 Charu Enterprise, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
