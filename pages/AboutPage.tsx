
import React from 'react';
import { 
  History, 
  Award, 
  Users, 
  Factory, 
  Target, 
  ShieldCheck, 
  Globe2, 
  Heart 
} from 'lucide-react';

const VALUES = [
  { icon: ShieldCheck, title: "Precision First", desc: "Every millimeter matters in industrial hardware. We maintain a zero-tolerance policy for sizing errors." },
  { icon: Globe2, title: "Global Reliability", desc: "Supporting infrastructure in 45+ countries requires a robust, transparent supply chain." },
  { icon: Factory, title: "Vertical Integration", desc: "From raw steel sourcing to final galvanization, we control the entire manufacturing lifecycle." },
  { icon: Heart, title: "Client Partnership", desc: "We don't just sell parts; we provide technical consultation to ensure your project's success." }
];

const TIMELINE = [
  { year: "1974", event: "Charu Enterprise founded as a small steel fabrication unit in Gujarat, India." },
  { year: "1988", event: "Expansion into industrial-scale hot-dip galvanization facilities." },
  { year: "1995", event: "First international export shipment to the Middle East (Dubai)." },
  { year: "2005", event: "ISO 9001:2000 certification achieved, standardizing global quality protocols." },
  { year: "2015", event: "Launch of specialized North American export division for ASTM-compliant fittings." },
  { year: "2024", event: "Leading global provider with over 25,000 tons of annual output capacity." }
];

export const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=2000" alt="Factory background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-black mb-6">Five Decades of <span className="text-accent">Integrity</span></h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From a regional workshop to a global manufacturing powerhouse, Charu Enterprise remains committed to the precision of industrial infrastructure.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-xs font-black text-accent uppercase tracking-[0.3em] mb-4">Our Legacy</h2>
            <h3 className="text-4xl font-heading font-black text-primary mb-8 leading-tight">Engineering the Future of Perimeter Security</h3>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Founded in 1974, Charu Enterprise was built on a simple premise: Industrial hardware should never be the weak link in a project. In the decades since, we have specialized in the high-stakes world of fence fitting and gate hardware.
              </p>
              <p>
                Operating out of our 250,000 sq. ft. manufacturing hub in Gujarat, India, we blend traditional metallurgy with modern robotic precision to serve the world's most demanding infrastructure projects.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden shadow-2xl relative">
              <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200" alt="Factory floor" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/20"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
              <div className="text-4xl font-black text-primary mb-1">50+</div>
              <div className="text-xs font-black text-accent uppercase tracking-widest">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black text-accent uppercase tracking-[0.3em] mb-4">Foundation</h2>
            <h3 className="text-4xl font-heading font-black text-primary">What Defines Us</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((val, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="bg-primary text-white w-16 h-16 rounded-xl flex items-center justify-center mb-8 group-hover:bg-accent transition-colors">
                  <val.icon size={32} />
                </div>
                <h4 className="text-xl font-black text-primary mb-4">{val.title}</h4>
                <p className="text-gray-500 leading-relaxed text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 container mx-auto px-4 overflow-hidden">
        <h2 className="text-center text-xs font-black text-accent uppercase tracking-[0.3em] mb-4">Journey</h2>
        <h3 className="text-center text-4xl font-heading font-black text-primary mb-20">A Half-Century Milestone</h3>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-24">
            {TIMELINE.map((item, i) => (
              <div key={i} className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse text-right'}`}>
                <div className="flex-1">
                  <div className={`p-8 bg-white border border-gray-100 rounded-3xl shadow-sm ${i % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    <div className="text-3xl font-black text-accent mb-2">{item.year}</div>
                    <p className="text-gray-600">{item.event}</p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-primary rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center text-white">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                </div>
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="bg-primary text-white rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="relative z-10">
            <h3 className="text-4xl md:text-6xl font-heading font-black mb-8">Trusted by Global Leaders</h3>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join the network of over 1,200 distributors and infrastructure firms that rely on Charu Enterprise for their perimeter hardware needs.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-accent hover:bg-accent-hover text-white px-12 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-accent/20">
                Partner With Us
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-12 py-5 rounded-2xl font-black text-lg transition-all">
                View Global Reach
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
