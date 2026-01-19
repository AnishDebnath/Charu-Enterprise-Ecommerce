import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  PhoneCall, 
  Globe, 
  ShieldCheck, 
  MessageCircle, 
  Building, 
  Truck, 
  ChevronDown,
  Plus,
  Minus,
  CheckCircle2,
  Users
} from 'lucide-react';
import { useToast } from '../context/ToastContext';

const DEPARTMENTS = [
  {
    name: "Export Logistics",
    email: "logistics@charuenterprise.com",
    phone: "+91 281 456 7890",
    icon: Truck,
    desc: "Shipping, container tracking, and customs documentation."
  },
  {
    name: "Technical Engineering",
    email: "eng@charuenterprise.com",
    phone: "+91 281 456 7891",
    icon: ShieldCheck,
    desc: "ASTM standards, custom fabrication, and material specs."
  },
  {
    name: "Global Sales",
    email: "sales@charuenterprise.com",
    phone: "+1 (800) CHARU-ENT",
    icon: Globe,
    desc: "Wholesale pricing, project bids, and account management."
  }
];

const FAQS = [
  {
    q: "What is your typical lead time for international shipments?",
    a: "For standard catalog items, we maintain a 48-hour dispatch to Mundra Port. Transit times depend on the destination port (e.g., 22-28 days to Houston, 4-6 days to Dubai)."
  },
  {
    q: "Do you provide MTRs (Mill Test Reports)?",
    a: "Yes, Mill Test Reports (MTR) and hot-dip galvanization certification are provided with every batch to ensure full ASTM compliance."
  },
  {
    q: "Can I request custom branded packaging?",
    a: "Absolutely. We offer private labeling and custom box printing for high-volume distributors. Contact our sales department for details."
  },
  {
    q: "What are your standard payment terms for bulk orders?",
    a: "We support Letter of Credit (LC), Wire Transfer (TT), and offer Net-30 terms for verified trade accounts in the USA and UAE."
  }
];

export const ContactPage = () => {
  const { addToast } = useToast();
  const [callbackForm, setCallbackForm] = useState({
    name: '',
    phone: '',
    time: 'Morning (9AM - 12PM)',
    subject: 'Bulk Quote Inquiry',
    details: ''
  });
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      addToast("Callback request received! An expert will reach out soon.", "success");
      setCallbackForm({ name: '', phone: '', time: 'Morning (9AM - 12PM)', subject: 'Bulk Quote Inquiry', details: '' });
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Visual Hero Section */}
      <div className="relative bg-primary text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-b from-primary to-transparent"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
              alt="Manufacturing" 
              className="w-full h-full object-cover"
            />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 px-3 py-1 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-6">
              <MessageCircle size={14} fill="currentColor" /> Global Support Desk
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
              Let's Build Your <span className="text-accent underline decoration-white/20 underline-offset-8">Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Connect with our specialized departments for engineering support, global logistics, or bulk procurement inquiries.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 pb-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Contact Form Section */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-5">
                
                {/* Contact Info Sidebar */}
                <div className="md:col-span-2 bg-gray-50 p-10 border-r border-gray-100">
                  <h3 className="text-2xl font-bold text-primary mb-8 font-heading">Global Reach</h3>
                  
                  <div className="space-y-10">
                    <div className="flex gap-4">
                      <div className="bg-white p-3 rounded-xl shadow-sm h-fit">
                        <MapPin className="text-accent" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">HQ & Manufacturing</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          Plot 42, Industrial Area,<br />
                          Gujarat, India 360021
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="bg-white p-3 rounded-xl shadow-sm h-fit">
                        <Building className="text-accent" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">USA Logistics Hub</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          Commerce Blvd, Suite 400<br />
                          Houston, TX 77002
                        </p>
                      </div>
                    </div>

                    <div className="pt-10 border-t border-gray-200">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Office Status: Active</span>
                      </div>
                      <div className="flex flex-col gap-2">
                         <span className="text-sm font-bold text-primary flex items-center gap-2"><Phone size={16}/> +1 (800) CHARU-ENT</span>
                         <span className="text-sm font-bold text-primary flex items-center gap-2"><Mail size={16}/> export@charuenterprise.com</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* The Form */}
                <div className="md:col-span-3 p-10">
                  <div className="mb-10">
                    <h2 className="text-3xl font-bold text-primary mb-2 font-heading">Request a Callback</h2>
                    <p className="text-gray-500 text-sm">Our specialists typically respond within 2 business hours.</p>
                  </div>

                  <form onSubmit={handleCallbackSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-tighter">Your Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Full name"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent focus:bg-white transition-all outline-none"
                          value={callbackForm.name}
                          onChange={(e) => setCallbackForm({...callbackForm, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-tighter">Phone Number</label>
                        <input 
                          required
                          type="tel" 
                          placeholder="+1 ..."
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent focus:bg-white transition-all outline-none"
                          value={callbackForm.phone}
                          onChange={(e) => setCallbackForm({...callbackForm, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-tighter">Inquiry Type</label>
                      <select 
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent focus:bg-white transition-all outline-none cursor-pointer"
                        value={callbackForm.subject}
                        onChange={(e) => setCallbackForm({...callbackForm, subject: e.target.value})}
                      >
                        <option>Bulk Quote Inquiry</option>
                        <option>Technical Specifications</option>
                        <option>Export / Logistics Question</option>
                        <option>Custom Manufacturing Request</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-tighter">Preferred Time</label>
                      <div className="relative">
                        <select 
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent focus:bg-white transition-all outline-none cursor-pointer"
                          value={callbackForm.time}
                          onChange={(e) => setCallbackForm({...callbackForm, time: e.target.value})}
                        >
                          <option>Morning (9AM - 12PM)</option>
                          <option>Afternoon (12PM - 4PM)</option>
                          <option>Evening (4PM - 7PM)</option>
                        </select>
                        <Clock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" size={16} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-tighter">Brief Message (Optional)</label>
                      <textarea 
                        rows={4}
                        placeholder="Project details, SKU, or specific requirements..."
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent focus:bg-white transition-all outline-none"
                        value={callbackForm.details}
                        onChange={(e) => setCallbackForm({...callbackForm, details: e.target.value})}
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={loading}
                      className="w-full bg-accent hover:bg-accent-hover text-white rounded-xl py-4 font-bold text-lg shadow-lg shadow-orange-100 transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-50"
                    >
                      {loading ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <><Send size={20} /> Request Expert Callback</>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Departmental Directory */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              {DEPARTMENTS.map((dept, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                   <div className="bg-primary text-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                      <dept.icon size={28} />
                   </div>
                   <h3 className="text-xl font-bold text-primary mb-2 font-heading">{dept.name}</h3>
                   <p className="text-sm text-gray-500 mb-6 leading-relaxed">{dept.desc}</p>
                   <div className="space-y-2 pt-4 border-t border-gray-50">
                      <a href={`mailto:${dept.email}`} className="text-xs font-bold text-accent hover:underline flex items-center gap-2">
                        <Mail size={14}/> {dept.email}
                      </a>
                      <div className="text-xs font-bold text-primary flex items-center gap-2">
                        <Phone size={14}/> {dept.phone}
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side Content: FAQ & Quick Stats */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Support Stats */}
            <div className="bg-primary text-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent rounded-bl-full -mr-16 -mt-16 opacity-20"></div>
               <Users size={48} className="text-accent mb-6" />
               <h3 className="text-2xl font-bold mb-4 font-heading">Global Support Team</h3>
               <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                 Our dedicated export agents are fluent in 6 languages and handle thousands of international inquiries monthly.
               </p>
               <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle2 size={16} className="text-green-500" />
                    <span>2-Hour Average Response</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle2 size={16} className="text-green-500" />
                    <span>24/7 Portal Access</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle2 size={16} className="text-green-500" />
                    <span>Dedicated Project Manager</span>
                  </div>
               </div>
            </div>

            {/* Interactive FAQ */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-primary mb-8 font-heading">Project FAQ</h3>
              <div className="space-y-4">
                {FAQS.map((faq, i) => (
                  <div key={i} className="border-b border-gray-100 pb-4 last:border-0">
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between text-left gap-4 group"
                    >
                      <span className={`text-sm font-bold transition-colors ${openFaq === i ? 'text-accent' : 'text-gray-900 group-hover:text-accent'}`}>{faq.q}</span>
                      {openFaq === i ? <Minus size={16} className="text-accent flex-shrink-0" /> : <Plus size={16} className="text-gray-300 flex-shrink-0" />}
                    </button>
                    {openFaq === i && (
                      <p className="mt-3 text-sm text-gray-500 leading-relaxed animate-fade-in">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-gray-900 text-white p-8 rounded-2xl">
              <h4 className="font-bold flex items-center gap-2 mb-6 text-accent">
                <Clock size={18} /> Working Hours (IST)
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="font-bold">09:00 - 19:00</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Saturday</span>
                  <span className="font-bold">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-accent font-bold">Logistics Support Only</span>
                </div>
              </div>
              <p className="mt-6 text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">
                *Support portal is active 24/7 for order status and technical documentation downloads.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="border-t border-gray-100 py-20 bg-gray-50/50">
        <div className="container mx-auto px-4 text-center">
           <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-12">Verified Industrial Partner</h3>
           <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-30">
              <div className="flex items-center gap-3"><ShieldCheck size={32}/><span className="font-black text-xl">ISO 9001</span></div>
              <div className="flex items-center gap-3"><Globe size={32}/><span className="font-black text-xl">EXPORT READY</span></div>
              <div className="flex items-center gap-3"><Truck size={32}/><span className="font-black text-xl">CARRIER DIRECT</span></div>
              <div className="flex items-center gap-3"><CheckCircle2 size={32}/><span className="font-black text-xl">ASTM CERTIFIED</span></div>
           </div>
        </div>
      </div>
    </div>
  );
};
