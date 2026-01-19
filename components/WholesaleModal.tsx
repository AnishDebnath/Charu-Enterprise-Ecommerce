import React, { useState } from 'react';
import { X, Factory, Send } from 'lucide-react';
import { useToast } from '../context/ToastContext';

interface WholesaleModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const WholesaleModal: React.FC<WholesaleModalProps> = ({ isOpen, onClose, initialProduct }) => {
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      addToast("Quote request sent successfully! A representative will contact you shortly.", "success");
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg overflow-hidden">
        {/* Header */}
        <div className="bg-primary text-white p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Factory size={20} className="text-accent" />
            <h2 className="font-heading font-bold text-lg">Request Wholesale Quote</h2>
          </div>
          <button onClick={onClose} className="hover:text-accent transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6">
          <p className="text-sm text-gray-600 mb-4">
            Get exclusive pricing for container loads and bulk orders. Direct from manufacturer.
          </p>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">First Name</label>
                <input required type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Last Name</label>
                <input required type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Company / Organization</label>
              <input required type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                <input required type="email" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number</label>
                <input required type="tel" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
              </div>
            </div>

            <div>
               <label className="block text-xs font-bold text-gray-700 mb-1">Product of Interest</label>
               <input type="text" defaultValue={initialProduct} placeholder="e.g. 5000x Tension Bands" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Message / Project Details</label>
              <textarea rows={3} className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"></textarea>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
             <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">Cancel</button>
             <button type="submit" disabled={loading} className="bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded text-sm font-bold shadow-md flex items-center gap-2 disabled:opacity-50">
               {loading ? 'Sending...' : <><Send size={16} /> Send Request</>}
             </button>
          </div>
        </form>
      </div>
    </div>
  );
};