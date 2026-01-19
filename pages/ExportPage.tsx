
import React from 'react';
import { 
  Truck, 
  Anchor, 
  Container, 
  PackageCheck, 
  ShieldCheck, 
  Clock, 
  Globe, 
  FileText,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const CONTAINER_SPECS = [
  { 
    type: "20ft General Purpose", 
    capacity: "33.2 cbm", 
    maxWeight: "28,200 kg", 
    usage: "Ideal for high-density fittings like tension bands and hinges." 
  },
  { 
    type: "40ft General Purpose", 
    capacity: "67.7 cbm", 
    maxWeight: "26,600 kg", 
    usage: "Suitable for bulk orders involving larger post caps and rails." 
  },
  { 
    type: "40ft High Cube", 
    capacity: "76.4 cbm", 
    maxWeight: "26,500 kg", 
    usage: "Best for lightweight ornamental fittings requiring maximum volume." 
  }
];

const TRANSIT_TIMES = [
  { port: "Jebel Ali (UAE)", time: "4-6 Days", frequency: "Weekly" },
  { port: "Rotterdam (Netherlands)", time: "18-22 Days", frequency: "Weekly" },
  { port: "Houston (USA)", time: "28-32 Days", frequency: "Bi-Weekly" },
  { port: "Los Angeles (USA)", time: "24-28 Days", frequency: "Weekly" },
  { port: "Felixstowe (UK)", time: "22-26 Days", frequency: "Bi-Weekly" }
];

export const ExportPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-primary text-white">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" alt="Shipping port" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-accent font-black uppercase tracking-widest text-xs mb-4">Export Excellence</h2>
            <h1 className="text-5xl md:text-7xl font-heading font-black mb-6">Global Supply <span className="text-accent underline decoration-white/20 underline-offset-8">Direct</span> from Source</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Based at the gateway of Mundra Port, we provide seamless container-load logistics for the world's largest fencing projects.
            </p>
          </div>
        </div>
      </section>

      {/* Logistics Process */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-xs font-black text-accent uppercase tracking-[0.3em] mb-4">Workflow</h2>
          <h3 className="text-4xl font-heading font-black text-primary">From Production to Port</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-100 hidden md:block -z-10 translate-y-[-50px]"></div>
          
          {[
            { icon: Factory, title: "Precision QC", desc: "Every batch is tested for ASTM compliance before loading." },
            { icon: PackageCheck, title: "Export Packing", desc: "Reinforced wooden pallets with plastic shrink-wrap and banding." },
            { icon: Truck, title: "Inland Transit", desc: "Secured fleet transport from Gujarat to Mundra Port." },
            { icon: Anchor, title: "Ocean Freight", desc: "Partnerships with Maersk and MSC for guaranteed sailing." }
          ].map((step, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="w-20 h-20 bg-white rounded-full border-4 border-gray-50 shadow-xl flex items-center justify-center mx-auto text-accent group hover:bg-accent hover:text-white transition-all cursor-default">
                <step.icon size={32} />
              </div>
              <h4 className="text-xl font-black text-primary">{step.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Container Loading Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-xs font-black text-accent uppercase tracking-[0.3em] mb-4">Vessel Loading</h2>
              <h3 className="text-4xl font-heading font-black text-primary mb-8">Optimize Your Payload</h3>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Our logistics experts maximize every cubic meter of your container. We provide detailed packing lists and loading plans to ensure the safety and integrity of the hardware during ocean transit.
              </p>
              
              <div className="space-y-6">
                {CONTAINER_SPECS.map((spec, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-6 hover:shadow-lg transition-all group">
                    <div className="bg-gray-100 p-4 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Container size={24} />
                    </div>
                    <div>
                      <div className="font-black text-lg mb-1">{spec.type}</div>
                      <div className="flex gap-4 text-xs font-bold mb-3">
                        <span className="text-accent uppercase">Cap: {spec.capacity}</span>
                        <span className="text-gray-400 uppercase">Max: {spec.maxWeight}</span>
                      </div>
                      <p className="text-sm text-gray-500">{spec.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary rounded-[3rem] p-12 text-white relative shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent rounded-bl-full opacity-20 -mr-16 -mt-16"></div>
                <Globe size={64} className="text-accent mb-8" />
                <h4 className="text-3xl font-black mb-6">Mundra Port Gateway</h4>
                <p className="text-gray-400 mb-10 leading-relaxed">
                  Located just 20km from the Adani Mundra Port, we avoid the heavy congestion of Mumbai, providing faster turnaround times for vessel bookings and container grounding.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-accent" />
                    <span className="text-sm font-bold uppercase tracking-wider">Fast-Track Customs Documentation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-accent" />
                    <span className="text-sm font-bold uppercase tracking-wider">Direct Port Entry (DPE) Facility</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-accent" />
                    <span className="text-sm font-bold uppercase tracking-wider">Real-Time GPS Tracking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transit Times Table */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-xs font-black text-accent uppercase tracking-[0.3em] mb-4">Estimated Timelines</h2>
          <h3 className="text-4xl font-heading font-black text-primary">Global Shipping Corridors</h3>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-white text-xs font-black uppercase tracking-widest text-left">
                <th className="p-6">Destination Port</th>
                <th className="p-6">Est. Transit Time</th>
                <th className="p-6">Sailing Frequency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {TRANSIT_TIMES.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="p-6 font-bold text-gray-900">{row.port}</td>
                  <td className="p-6 text-accent font-black">{row.time}</td>
                  <td className="p-6 text-gray-500 font-medium">{row.frequency}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-6 bg-gray-50 border-t border-gray-100 text-center text-xs text-gray-400 font-bold uppercase tracking-widest">
            *Transit times are indicative. Specific bookings are confirmed at the time of order placement.
          </div>
        </div>
      </section>

      {/* Documentations */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-xs font-black text-accent uppercase tracking-[0.3em]">Trade Compliance</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-black leading-tight">Zero-Friction Documentation</h3>
              <p className="text-xl text-gray-400 leading-relaxed">
                We handle the complex paperwork required for international trade, so you can focus on your construction timelines.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Certificate of Origin",
                  "MTR (Mill Test Reports)",
                  "Commercial Invoice & Packing List",
                  "Bill of Lading",
                  "Galvanization Certifications",
                  "Phytosanitary Cert (for Pallets)"
                ].map((doc, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    <FileText size={20} className="text-accent" />
                    <span className="text-sm font-bold">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-96">
               <div className="bg-accent p-12 rounded-3xl shadow-2xl text-center transform rotate-2">
                  <ShieldCheck size={48} className="mx-auto mb-6" />
                  <h4 className="text-2xl font-black mb-4">Insured Cargo</h4>
                  <p className="text-orange-100 font-bold leading-relaxed mb-8">
                    Every shipment is covered by comprehensive maritime insurance to protect your investment.
                  </p>
                  <button className="bg-white text-accent font-black py-4 px-8 rounded-xl shadow-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2 mx-auto">
                    Download Export Guide <ArrowRight size={18} />
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Factory = ({size, className}: {size: number, className?: string}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/>
    </svg>
);
