import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { KilstaLogo } from './KilstaLogo';
import { KILSTA_CONTACT, SERVICES } from '../data/content';
import { NavTab } from './Navigation';

interface FooterProps {
  onTabChange: (tab: NavTab) => void;
  onOpenAuditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onTabChange, onOpenAuditModal }) => {
  return (
    <footer className="bg-[#050D20] border-t border-blue-900/50 text-slate-300">
      {/* Top Pre-footer CTA banner */}
      <div className="bg-gradient-to-r from-blue-950 via-[#0B1E4A] to-blue-950 border-b border-blue-900/40 py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Serving all districts of Milne Bay Province
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to modernize your business or ICT systems?
            </h3>
            <p className="text-sm text-slate-300 mt-1 max-w-xl">
              Get an on-site evaluation in Alotau. We verify your IPA compliance, test network speeds, and audit camera security.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenAuditModal}
              className="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold text-sm rounded-xl shadow-xl shadow-yellow-500/20 transition-all hover:scale-105 active:scale-95"
            >
              Book a Free Systems Audit
            </button>
            <a
              href={`tel:${KILSTA_CONTACT.phone.replace(/\s+/g, '')}`}
              className="px-5 py-3 bg-blue-900/40 hover:bg-blue-900/60 border border-blue-700/50 text-white font-semibold text-sm rounded-xl transition-all"
            >
              Call {KILSTA_CONTACT.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-white rounded-full shadow-md">
                <KilstaLogo size="md" />
              </div>
              <div>
                <span className="block text-xl font-black tracking-wider text-white">
                  KILSTA
                </span>
                <span className="block text-xs font-semibold text-blue-300 -mt-0.5">
                  Business &amp; ICT Consultants
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Enhancing through business and ICT innovation. Registered team providing end-to-end tech solutions, government compliance, and hands-on training.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-2 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>Locally owned &amp; registered in Alotau since 2023</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-blue-900/60 pb-2">
              Our Core Services
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onTabChange('Services')}
                    className="text-slate-400 hover:text-yellow-400 transition-colors flex items-center gap-1.5 group text-left"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-blue-500 group-hover:text-yellow-400 transition-colors" />
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-blue-900/60 pb-2">
              Milne Bay Focus
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => onTabChange('Company Profile')} className="text-yellow-400 hover:underline font-semibold flex items-center gap-1.5 transition-colors">
                  <span>★ Official Company Profile</span>
                </button>
              </li>
              <li>
                <button onClick={() => onTabChange('About')} className="hover:text-yellow-400 transition-colors">
                  About Our Alotau Team
                </button>
              </li>
              <li>
                <button onClick={() => onTabChange('Industries')} className="hover:text-yellow-400 transition-colors">
                  Tourism &amp; Coastal Lodges Solutions
                </button>
              </li>
              <li>
                <button onClick={() => onTabChange('Industries')} className="hover:text-yellow-400 transition-colors">
                  Retail &amp; Supermarket POS
                </button>
              </li>
              <li>
                <button onClick={() => onTabChange('Resources')} className="hover:text-yellow-400 transition-colors">
                  IPA &amp; IRC Tax Filing Checklist
                </button>
              </li>
              <li>
                <button onClick={() => onTabChange('Contact')} className="hover:text-yellow-400 transition-colors">
                  Office Location &amp; Directions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-blue-900/60 pb-2">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">{KILSTA_CONTACT.address}</span>
              </div>
              <div className="text-xs text-slate-400 pl-6.5">
                {KILSTA_CONTACT.postal}
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                <a
                  href={`tel:${KILSTA_CONTACT.phone.replace(/\s+/g, '')}`}
                  className="text-slate-300 hover:text-yellow-400 font-semibold transition-colors"
                >
                  {KILSTA_CONTACT.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-yellow-400 shrink-0" />
                <a
                  href={`mailto:${KILSTA_CONTACT.email}`}
                  className="text-slate-300 hover:text-yellow-400 transition-colors break-all"
                >
                  {KILSTA_CONTACT.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{KILSTA_CONTACT.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-950 bg-[#030814] py-6 px-4 sm:px-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2024–2026 KILSTA Business &amp; ICT Consultants. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-2">
            <span>IPA: <strong className="text-white">{KILSTA_CONTACT.ipa}</strong></span>
            <span>•</span>
            <span>TIN: <strong className="text-white">{KILSTA_CONTACT.tin}</strong></span>
            <span>•</span>
            <span className="text-yellow-400">P.O Box 424, Alotau, Milne Bay Province</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
