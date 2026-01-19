import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import {
  ChevronRight,
  ChevronLeft,
  Quote,
  Star,
  Building2,
  Globe2,
  ShieldCheck,
  Users,
  History,
  ArrowUpRight,
  MapPin,
  CheckCircle2,
  Factory,
  Zap,
  HardHat,
  Anchor,
  Box,
  Ship,
  Activity,
  Navigation,
  ExternalLink,
  Timer
} from 'lucide-react';

const Award = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const BANNERS = [
  {
    id: 1,
    title: "Precision Engineered Excellence",
    subtitle: "Global Leaders in Industrial Fence Fittings & Gate Hardware",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200",
    cta: "Download Catalog"
  },
  {
    id: 2,
    title: "Scale Your Distribution",
    subtitle: "Manufacturer-Direct Bulk Pricing for Container Loads",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    cta: "Open B2B Account"
  }
];

const CERTIFICATIONS = [
  { name: "ISO 9001:2015", icon: ShieldCheck, desc: "Quality Management Systems" },
  { name: "ASTM F626", icon: CheckCircle2, desc: "Fencing Standards Compliant" },
  { name: "Bureau Veritas", icon: Award, desc: "Verified Manufacturing Unit" },
  { name: "CE Certified", icon: ShieldCheck, desc: "European Safety Standards" }
];

const PROJECTS = [
  { title: "Mundra Port Security", location: "India", category: "Infrastructure", image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=400" },
  { title: "Texas Solar Farm", location: "USA", category: "Energy", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=400" },
  { title: "Dubai Logistics Park", location: "UAE", category: "Logistics", image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80&w=400" }
];

const STATS = [
  { label: 'Export Countries', value: '45+', icon: Globe2 },
  { label: 'Annual Tonnage', value: '25k+', icon: Factory },
  { label: 'Expert Staff', value: '800+', icon: Users },
  { label: 'Years Active', value: '50+', icon: History },
];

export const HomePage = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const featuredProducts = PRODUCTS.slice(0, 16); // Show 16 products as requested

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % BANNERS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#F8FAFC] dark:bg-slate-900 min-h-screen transition-colors duration-300">
      {/* Dynamic Hero Section */}
      <section className="relative h-[400px] md:h-[650px] bg-primary dark:bg-slate-950 overflow-hidden">
        {BANNERS.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === currentBanner ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
            style={{
              backgroundImage: `linear-gradient(to right, rgba(10, 37, 64, 0.9), rgba(10, 37, 64, 0.3)), url(${banner.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="container mx-auto h-full flex items-center px-4 md:px-8">
              <div className="max-w-3xl text-white">
                <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 px-3 py-1 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in-up">
                  <Zap size={14} fill="currentColor" /> ISO 9001:2015 Certified Manufacturer
                </div>
                <h1 className="text-4xl md:text-7xl font-heading font-black mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  {banner.title}
                </h1>
                <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  {banner.subtitle}
                </p>
                <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <button className="bg-accent hover:bg-accent-hover text-white font-bold py-4 px-10 rounded shadow-2xl shadow-accent/20 transition-all transform hover:-translate-y-1">
                    {banner.cta}
                  </button>
                  <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-10 rounded transition-all">
                    Virtual Factory Tour
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button onClick={() => setCurrentBanner((prev) => (prev - 1 + BANNERS.length) % BANNERS.length)} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-20 hidden md:block">
          <ChevronLeft size={48} />
        </button>
        <button onClick={() => setCurrentBanner((prev) => (prev + 1) % BANNERS.length)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-20 hidden md:block">
          <ChevronRight size={48} />
        </button>

        {/* Hero Footer Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8FAFC] dark:from-slate-900 to-transparent z-10"></div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-12 container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {STATS.map((stat, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 md:p-8 flex items-center gap-4 md:gap-6 border border-gray-100 dark:border-slate-700 hover:border-accent dark:hover:border-accent transition-colors group">
              <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg text-primary dark:text-accent group-hover:bg-primary dark:group-hover:bg-accent group-hover:text-white dark:group-hover:text-white transition-all">
                <stat.icon size={32} />
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-black text-primary dark:text-gray-100 mb-1">{stat.value}</div>
                <div className="text-[10px] md:text-xs text-gray-400 dark:text-gray-500 uppercase font-black tracking-widest">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industrial Showcase Section - Expanded to 16 products */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-xs font-black text-accent uppercase tracking-[0.3em] mb-3">Industrial Catalog</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-black text-primary dark:text-gray-100">Industrial Showcase</h3>
          </div>
          <Link to="/search" className="group flex items-center gap-2 text-primary dark:text-accent font-bold hover:text-accent dark:hover:text-white transition-colors">
            View All Products <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Certification Showcase */}
      <section className="py-16 container mx-auto px-4 border-t border-gray-100 dark:border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-gray-100 dark:border-slate-700 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
              <cert.icon size={22} className="text-accent" />
              <div>
                <div className="font-bold text-gray-900 dark:text-gray-100 text-sm">{cert.name}</div>
                <div className="text-[10px] text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">{cert.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Logistics Excellence Section */}
      <section className="py-12 bg-[#0A192F] dark:bg-black text-white overflow-hidden relative border-y border-white/5 transition-colors">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            <div className="w-full lg:w-1/3 flex flex-col justify-between">
              <div>
                <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-3">Global Logistics</h2>
                <h3 className="text-3xl font-heading font-black mb-4 tracking-tight">Supply Chain Efficiency</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Strategically located <span className="text-white font-bold">20km from Mundra Port</span>, we leverage Direct Port Entry (DPE) to bypass regional bottlenecks.
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-xl flex items-center justify-between transition-colors cursor-default">
                  <div className="flex items-center gap-3">
                    <Timer size={18} className="text-accent" />
                    <span className="text-xs font-bold uppercase tracking-wider">Fast Dispatch</span>
                  </div>
                  <span className="text-sm font-black text-accent">48H Catalog Items</span>
                </div>
                <div className="bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-xl flex items-center justify-between transition-colors cursor-default">
                  <div className="flex items-center gap-3">
                    <Ship size={18} className="text-accent" />
                    <span className="text-xs font-bold uppercase tracking-wider">Transit to UAE</span>
                  </div>
                  <span className="text-sm font-black">4-6 Business Days</span>
                </div>
                <div className="bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-xl flex items-center justify-between transition-colors cursor-default">
                  <div className="flex items-center gap-3">
                    <Globe2 size={18} className="text-accent" />
                    <span className="text-xs font-bold uppercase tracking-wider">US/EU Lanes</span>
                  </div>
                  <span className="text-sm font-black">Weekly Direct Sailings</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <Link to="/export" className="text-xs font-black uppercase tracking-widest text-white hover:text-accent flex items-center gap-2 group">
                  Logistics Guide <ExternalLink size={14} className="group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <span className="text-gray-700">|</span>
                <button className="text-xs font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Port Schedules</button>
              </div>
            </div>

            <div className="w-full lg:w-2/3 relative min-h-[300px] lg:min-h-0">
              <div className="absolute inset-0 bg-[#1E293B] rounded-[2rem] overflow-hidden border border-white/10 group shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1400"
                  alt="Global Export Hub"
                  className="w-full h-full object-cover opacity-20 grayscale scale-105 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-transparent to-transparent"></div>

                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="bg-black/50 backdrop-blur-md border border-white/10 p-3 rounded-lg inline-flex items-center gap-3">
                      <Anchor size={20} className="text-accent" />
                      <div className="text-left leading-none">
                        <div className="text-[10px] font-black uppercase text-gray-500 tracking-widest mb-1">Origin Port</div>
                        <div className="text-sm font-black text-white">MUNDRA, IN</div>
                      </div>
                    </div>

                    <div className="hidden md:flex gap-3">
                      <div className="bg-accent text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">ISO 9001 Unit</div>
                      <div className="bg-white/10 backdrop-blur-md text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest border border-white/10">ASTM F626 Ready</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border-l-2 border-accent pl-4">
                      <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">North America</div>
                      <div className="text-sm font-bold">Houston & LA Hubs</div>
                      <div className="text-[9px] font-medium text-accent uppercase mt-1">Direct Container Load</div>
                    </div>
                    <div className="border-l-2 border-blue-500 pl-4">
                      <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Middle East</div>
                      <div className="text-sm font-bold">Jebel Ali Logistics</div>
                      <div className="text-[9px] font-medium text-blue-500 uppercase mt-1">Weekly Feeder Network</div>
                    </div>
                    <div className="border-l-2 border-gray-500 pl-4">
                      <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">European Union</div>
                      <div className="text-sm font-bold">Rotterdam Gateway</div>
                      <div className="text-[9px] font-medium text-gray-400 uppercase mt-1">Customs Cleared EXW</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-[60%] -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-50"></div>
                    <div className="relative z-10 w-4 h-4 bg-accent rounded-full border-2 border-white shadow-[0_0_15px_rgba(249,115,22,1)]"></div>
                    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 backdrop-blur-sm text-[8px] font-black px-2 py-0.5 rounded text-white tracking-widest uppercase border border-white/10">
                      Primary Factory
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Departments */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-xs font-black text-accent uppercase tracking-[0.3em] mb-3">Our Core Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-black text-primary dark:text-gray-100">Browse Product Lines</h3>
          </div>
          <Link to="/search" className="group flex items-center gap-2 text-primary dark:text-accent font-bold hover:text-accent dark:hover:text-white transition-colors">
            Explore All Categories <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => {
            // Get a product from this category to display
            const categoryProduct = PRODUCTS.find(p => p.category === cat.name);
            const displayImage = categoryProduct ? categoryProduct.image : cat.image;

            return (
              <Link key={cat.id} to={`/category/${cat.id}`} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all group border border-gray-100 dark:border-slate-800">
                <div className="h-64 overflow-hidden relative">
                  <img src={displayImage} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white font-bold text-lg">View Products &rarr;</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-black text-xl text-primary dark:text-gray-100 mb-2">{cat.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold">Industrial Grade</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Industry Insights Section */}
      <section className="py-24 bg-[#0A2540] dark:bg-[#0A192F] transition-colors relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-4xl md:text-6xl font-heading font-black text-white">Industry Insights</h3>
            <Link to="/search" className="flex items-center gap-2 text-accent font-bold hover:text-white transition-colors text-lg">
              Technical Resources <ChevronRight size={24} className="mt-1" />
            </Link>
          </div>

          <div className="p-6 md:p-10 border border-[#4D88FF] rounded-[2rem] bg-transparent">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                { title: "Hot-Dip Galvanization vs Electro-Galvanization", cat: "TECHNICAL", date: "Oct 20, 2024", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" },
                { title: "Optimizing Container Payload for B2B Export", cat: "LOGISTICS", date: "Oct 15, 2024", img: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&q=80&w=600" },
                { title: "ASTM F626 Compliance for Project Bids", cat: "COMPLIANCE", date: "Oct 08, 2024", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" }
              ].map((blog, i) => (
                <div key={i} className="bg-[#1E293B] dark:bg-[#112240] rounded-[2rem] overflow-hidden flex flex-col h-[500px] border border-transparent hover:border-[#4D88FF]/30 transition-all shadow-2xl">
                  {blog.img ? (
                    <div className="h-64 relative overflow-hidden">
                      <img src={blog.img} alt={blog.title} className="w-full h-full object-cover" />
                      <div className="absolute top-6 left-6 bg-[#0A192F] text-white text-[10px] font-black uppercase px-4 py-2 rounded-lg tracking-widest">{blog.cat}</div>
                    </div>
                  ) : (
                    <div className="h-24 p-6">
                      <div className="bg-[#0A192F] text-white text-[10px] font-black uppercase px-4 py-2 rounded-lg tracking-widest w-fit">{blog.cat}</div>
                    </div>
                  )}
                  <div className="p-10 flex-1 flex flex-col justify-end">
                    <div className="text-xs text-gray-500 font-bold mb-4 uppercase tracking-wider">{blog.date}</div>
                    <h4 className="text-2xl font-black text-white mb-10 leading-snug">{blog.title}</h4>
                    <button className="flex items-center gap-2 text-xs font-black text-accent uppercase tracking-[0.2em] hover:gap-4 transition-all">
                      READ ANALYSIS <ChevronRight size={18} className="rotate-[-45deg]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scale Your Project Section */}
      <section className="py-24 bg-[#0A2540] dark:bg-black transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-8xl font-heading font-black text-white mb-10 leading-[1.1]">
              Scale Your Project
            </h2>
            <p className="text-xl md:text-3xl text-gray-400 mb-12 max-w-3xl leading-relaxed">
              Partner with Charu Enterprise for industrial hardware that exceeds global standards. Request your technical consultation today.
            </p>
            <div className="flex flex-wrap gap-8">
              <Link to="/contact" className="bg-accent hover:bg-accent-hover text-white px-12 py-5 rounded-full font-black text-xl transition-all shadow-2xl shadow-accent/20">
                Request Callback
              </Link>
              <Link to="/export" className="flex items-center gap-4 text-white font-black text-xl hover:text-accent transition-colors group">
                Our Global Logistics <ChevronRight size={32} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};