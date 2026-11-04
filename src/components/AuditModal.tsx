import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Clock, MapPin, Phone, Mail, Building, ShieldCheck } from 'lucide-react';
import { KILSTA_CONTACT } from '../data/content';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    phone: '',
    email: '',
    serviceInterest: 'Comprehensive IT & Business Audit',
    location: 'Alotau Town',
    preferredDate: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#0d1e44] border border-blue-500/30 rounded-2xl shadow-2xl overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header decoration */}
        <div className="h-2 w-full bg-gradient-to-r from-yellow-400 via-amber-500 to-red-500" />

        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {!submitted ? (
            <>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Book a Free Systems Audit
                  </h3>
                  <p className="text-sm text-slate-300">
                    On-site in Milne Bay or remote consultation with our technical team
                  </p>
                </div>
              </div>

              <div className="my-4 p-3 bg-blue-950/60 border border-blue-800/50 rounded-xl text-xs text-blue-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-ping" />
                <span>100% Free • No obligation • Direct assessment of your IT &amp; business compliance</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Business or Organization Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Milne Bay Traders Ltd"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900/80 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Contact Person Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. John K."
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900/80 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+675 7... or 8..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900/80 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="yourname@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900/80 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Primary Area of Need
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900/80 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                    >
                      <option>Comprehensive Business &amp; ICT Audit</option>
                      <option>Business Name Registration with IPA</option>
                      <option>TIN Application with IRC</option>
                      <option>Business Profile &amp; Project Proposal Write-ups</option>
                      <option>Computer Network Setups &amp; Starlink Kit Installation</option>
                      <option>Computer Repair Services &amp; Hardware Diagnostics</option>
                      <option>Sales of Computer Parts &amp; ICT Products</option>
                      <option>Database Development &amp; Website Design</option>
                      <option>Basic Computing &amp; Digital Literacy Training</option>
                      <option>Microsoft Office Training (Word, Excel, PowerPoint)</option>
                      <option>School Timetabling Software Training</option>
                      <option>Business Admin &amp; Basic Bookkeeping Training</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Location in Milne Bay
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900/80 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                    >
                      <option>Alotau Town Center</option>
                      <option>Alotau Port / Waterfront</option>
                      <option>East Cape / North Coast</option>
                      <option>Samarai-Murua District</option>
                      <option>Esa'ala / Goodenough Island</option>
                      <option>Remote / Outer Milne Bay Islands</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Describe any specific challenges (optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Frequent internet disconnects, need 4 cameras for retail shop, or overdue IPA annual return"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-900/80 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between gap-4">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-yellow-400" />
                    <span>Or call direct: <strong className="text-white">{KILSTA_CONTACT.phone}</strong></span>
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold text-sm rounded-lg shadow-lg shadow-yellow-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Confirm Booking Request
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 animate-in zoom-in">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-white">
                Audit Request Received!
              </h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <strong className="text-yellow-400">{formData.contactName || 'Valued Client'}</strong>. Our Alotau-based technical lead will review your request for <strong className="text-white">{formData.businessName || 'your business'}</strong> and reach out to you via <strong className="text-white">{formData.phone}</strong> within 4 business hours.
              </p>

              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl text-left text-xs text-slate-300 space-y-1.5 max-w-sm mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-400">Selected Service:</span>
                  <span className="font-semibold text-white">{formData.serviceInterest}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Coverage Location:</span>
                  <span className="font-semibold text-white">{formData.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Direct Contact:</span>
                  <span className="font-semibold text-yellow-400">{KILSTA_CONTACT.phone}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={resetAndClose}
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg text-sm transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
