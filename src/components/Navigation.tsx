import React, { useState } from 'react';
import { MapPin, Phone, Mail, Menu, X, CalendarCheck2 } from 'lucide-react';
import { KilstaLogo } from './KilstaLogo';
import { KILSTA_CONTACT } from '../data/content';

export type NavTab = 'Home' | 'Company Profile' | 'Services' | 'Industries' | 'About' | 'Resources' | 'Contact';

interface NavigationProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  onOpenAuditModal: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  onTabChange,
  onOpenAuditModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs: NavTab[] = ['Home', 'Company Profile', 'Services', 'Industries', 'About', 'Resources', 'Contact'];

  const handleTabClick = (tab: NavTab) => {
    onTabChange(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full select-none">
      {/* Top Utility Contact Bar */}
      <div className="bg-[#06122c] border-b border-blue-900/40 text-slate-300 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Location & Legal Registration */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-medium">
            <div className="flex items-center gap-1.5 text-yellow-400">
              <MapPin className="w-3.5 h-3.5 shrink-0 text-yellow-400" />
              <span className="text-slate-200">{KILSTA_CONTACT.address}</span>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-slate-400">
              <span>•</span>
              <span>IPA Reg: <strong className="text-white">{KILSTA_CONTACT.ipa}</strong></span>
              <span>•</span>
              <span>TIN: <strong className="text-white">{KILSTA_CONTACT.tin}</strong></span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex items-center gap-4 sm:gap-6 font-medium">
            <a
              href={`tel:${KILSTA_CONTACT.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span className="tracking-wide text-slate-200">{KILSTA_CONTACT.phone}</span>
            </a>
            <a
              href={`mailto:${KILSTA_CONTACT.email}`}
              className="flex items-center gap-1.5 text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span className="text-slate-200 hidden xs:inline">{KILSTA_CONTACT.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-[#0B1938]/95 backdrop-blur-md border-b border-blue-900/30 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo & Name */}
          <button
            onClick={() => handleTabClick('Home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            aria-label="Kilsta Home"
          >
            <div className="p-0.5 bg-white rounded-full shadow-md group-hover:scale-105 transition-transform duration-200">
              <KilstaLogo size="md" />
            </div>
            <div>
              <span className="block text-xl font-black tracking-wider text-white group-hover:text-yellow-400 transition-colors font-sans">
                KILSTA
              </span>
              <span className="block text-[11px] font-semibold text-blue-200/90 tracking-tight -mt-1">
                Business &amp; ICT Consultants
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'text-yellow-400 bg-blue-900/40 shadow-sm'
                      : 'text-slate-200 hover:text-white hover:bg-blue-900/20'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Action Button & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAuditModal}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#173a82] hover:bg-[#1d47a0] border border-blue-400/30 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-950/50 hover:shadow-blue-900/50 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <CalendarCheck2 className="w-4 h-4 text-yellow-400" />
              <span>Book Free Audit</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-blue-900/40 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-blue-900/50 mt-3 space-y-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-yellow-400 text-slate-950'
                      : 'text-slate-200 hover:bg-blue-900/40 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
            <div className="pt-2 px-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuditModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold text-sm rounded-lg shadow-md"
              >
                <CalendarCheck2 className="w-4 h-4 text-slate-950" />
                <span>Book Free Systems Audit</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
