import React, { useState } from 'react';
import {
  FileCheck,
  FileText,
  Wifi,
  ShieldCheck,
  Receipt,
  GraduationCap,
  Laptop,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ExternalLink,
  Building2,
  Store,
  Palmtree,
  Ship,
  ChevronRight,
  ShieldAlert,
  Server,
  Zap,
} from 'lucide-react';
import { KilstaLogo } from './components/KilstaLogo';
import { Navigation, NavTab } from './components/Navigation';
import { Footer } from './components/Footer';
import { AuditModal } from './components/AuditModal';
import { CompanyProfileView } from './components/CompanyProfileView';
import { SERVICES, INDUSTRIES, TESTIMONIALS, KILSTA_CONTACT, KEY_PERSONNEL, KILSTA_PROFILE } from './data/content';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('Home');
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);

  // Icon mapping helper
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-yellow-400" />;
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-yellow-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-yellow-400" />;
      case 'Receipt':
        return <Receipt className="w-6 h-6 text-yellow-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-yellow-400" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-yellow-400" />;
      default:
        return <Server className="w-6 h-6 text-yellow-400" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B1938] text-slate-100 font-sans selection:bg-yellow-400 selection:text-slate-950">
      {/* Top Banner and Navigation */}
      <Navigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* ===================== HOME TAB ===================== */}
        {activeTab === 'Home' && (
          <div>
            {/* HERO SECTION
                Requirement: "in the home tab only put the logo to the left, and adjust
                'this Enhancing Milne Bay through business & ICT innovation' to align nicely
                beside it while using a clean, professional sans-serif typeface for readability."
            */}
            <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1938] via-[#091530] to-[#0B1938] pt-10 pb-16 sm:pt-14 sm:pb-24 border-b border-blue-900/40">
              {/* Subtle background ambient lighting */}
              <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-7xl mx-auto px-4 sm:px-8">
                {/* Refined Professional Layout: Smaller Logo on the left, cleanly aligned with the headline */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 lg:gap-10">
                  {/* Small, crisp professional logo on the left */}
                  <div className="shrink-0 pt-1 flex flex-col items-center sm:items-start">
                    <div className="relative group">
                      <div className="absolute inset-0 rounded-full bg-yellow-400/15 blur-xl group-hover:scale-110 transition-transform duration-300" />
                      {/* Authentic white circular disk backing */}
                      <div className="relative rounded-full bg-white p-1.5 sm:p-2 shadow-xl shadow-blue-950/70 ring-2 ring-white/20 flex items-center justify-center">
                        <KilstaLogo size="hero" />
                      </div>
                    </div>
                  </div>

                  {/* Headline & writing aligned cleanly beside the logo */}
                  <div className="flex-1 space-y-5 text-center sm:text-left">
                    {/* Badge: Locally owned in Alotau since 2023 */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132247] border border-blue-500/30 text-slate-200 text-xs sm:text-sm font-medium shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                      <span>Locally owned in Alotau since 2023</span>
                    </div>

                    {/* Main Headline: business and ICT innovation kept together on the same line */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2]">
                      Enhancing through{' '}
                      <span className="inline-block text-yellow-400 font-black whitespace-nowrap">
                        business and ICT innovation
                      </span>
                    </h1>

                    {/* Subtitle / Value Proposition in clean sans-serif */}
                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal">
                      IPA registration and IRC tax compliance, reliable networks and CCTV, and hands-on computer training — delivered on-site by a registered local team.
                    </p>

                    {/* Primary & Secondary Call to Actions */}
                    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 pt-2">
                      <button
                        onClick={() => setIsAuditModalOpen(true)}
                        className="w-full sm:w-auto px-7 py-3 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold text-sm sm:text-base rounded-xl shadow-xl shadow-yellow-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                      >
                        <span>Book a Free Systems Audit</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('Services')}
                        className="w-full sm:w-auto px-6 py-3 bg-blue-900/30 hover:bg-blue-900/50 border border-blue-700/50 hover:border-blue-500 text-white font-semibold text-sm sm:text-base rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group"
                      >
                        <span>Explore Services</span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all" />
                      </button>
                    </div>

                    {/* Trust Proof Metrics / Stats Bar with Official Credentials */}
                    <div className="pt-6 border-t border-blue-900/60 grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl text-center sm:text-left">
                      <div>
                        <div className="text-xl sm:text-2xl font-black text-yellow-400 tracking-tight">
                          100%
                        </div>
                        <div className="text-[11px] sm:text-xs text-slate-300 font-medium">
                          Milne Bay Owned
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          IPA Reg #
                        </div>
                        <div className="text-sm sm:text-base font-black text-white tracking-wide font-mono">
                          {KILSTA_PROFILE.ipaRegistrationNumber}
                        </div>
                        <div className="text-[10px] text-emerald-400 font-medium">
                          Official Entity
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          Tax TIN #
                        </div>
                        <div className="text-sm sm:text-base font-black text-yellow-400 tracking-wide font-mono">
                          {KILSTA_PROFILE.tinNumber}
                        </div>
                        <div className="text-[10px] text-slate-300 font-medium">
                          IRC Compliant
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CORE SERVICES OVERVIEW GRID */}
            <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">
                  What We Deliver
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
                  Complete Business &amp; ICT Solutions in Alotau
                </h2>
                <p className="text-slate-300 text-base mt-3">
                  Tailored specifically for businesses, government agencies, and organizations operating in Milne Bay Province.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {SERVICES.map((service) => (
                  <div
                    key={service.id}
                    className="p-6 sm:p-7 rounded-2xl bg-[#0e214d]/70 border border-blue-900/50 hover:border-yellow-400/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/60 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                          {getServiceIcon(service.iconName)}
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-900/50 text-blue-300 border border-blue-800/60">
                          {service.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">
                        {service.shortDesc}
                      </p>

                      <ul className="mt-4 space-y-2">
                        {service.features.slice(0, 3).map((feat, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 mt-6 border-t border-blue-900/40 flex items-center justify-between">
                      <button
                        onClick={() => setIsAuditModalOpen(true)}
                        className="text-xs font-bold text-yellow-400 hover:text-yellow-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
                      >
                        <span>Request Service</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setActiveTab('Services')}
                        className="text-xs text-slate-400 hover:text-white"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* WHY MILNE BAY BUSINESSES CHOOSE KILSTA */}
            <section className="py-16 bg-[#07132c] border-y border-blue-900/40 px-4 sm:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">
                      Local Advantage
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      Why Choose a Local Alotau Partner Over Port Moresby Contractors?
                    </h2>
                    <p className="text-slate-300 text-base leading-relaxed">
                      Most businesses in Milne Bay face costly travel delays and inflated travel invoices when hiring IT technicians from outside the province. Kilsta is based directly in Alotau, providing immediate hands-on response.
                    </p>

                    <div className="space-y-4 pt-2">
                      <div className="flex items-start gap-3.5 p-4 rounded-xl bg-blue-950/40 border border-blue-900/40">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-sm">
                          01
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white">Same-Day On-Site Response</h4>
                          <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                            When your POS terminal crashes or CCTV goes dark, we are on-site in Alotau within hours, not days.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3.5 p-4 rounded-xl bg-blue-950/40 border border-blue-900/40">
                        <div className="w-8 h-8 rounded-lg bg-yellow-500/10 text-yellow-400 flex items-center justify-center shrink-0 font-bold text-sm">
                          02
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white">Built for Coastal &amp; Maritime Realities</h4>
                          <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                            We use corrosion-resistant enclosures, surge protection for local grid instability, and solar UPS configurations.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3.5 p-4 rounded-xl bg-blue-950/40 border border-blue-900/40">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 font-bold text-sm">
                          03
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white">Official PNG Regulatory Fluency</h4>
                          <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                            From IPA corporate filings to IRC GST lodgments, our business consulting team keeps your enterprise in full compliance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Systems Assessment Card */}
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0f2352] to-[#0a1838] border border-blue-500/30 shadow-2xl relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl" />
                    
                    <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-2">
                      <Sparkles className="w-4 h-4" />
                      <span>Free Diagnostic Tool</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Is Your Milne Bay Business Ready for Growth?
                    </h3>
                    <p className="text-sm text-slate-300 mt-2">
                      Select what your business currently needs to improve:
                    </p>

                    <div className="space-y-3 my-6">
                      {[
                        'Fast & reliable internet across offices or resort bungalows (Starlink)',
                        'Secure CCTV surveillance with remote viewing on mobile',
                        'Official IPA certificate, TIN and tax compliance papers',
                        'Automated POS inventory to stop stock shrinkage',
                        'Staff computer training in Excel and email security',
                      ].map((item, idx) => (
                        <label
                          key={idx}
                          className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-700/60 hover:border-yellow-400/50 cursor-pointer transition-colors"
                        >
                          <input
                            type="checkbox"
                            defaultChecked={idx === 0 || idx === 1}
                            className="mt-1 rounded border-slate-600 text-yellow-400 focus:ring-yellow-400"
                          />
                          <span className="text-xs sm:text-sm text-slate-200">{item}</span>
                        </label>
                      ))}
                    </div>

                    <button
                      onClick={() => setIsAuditModalOpen(true)}
                      className="w-full py-3.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold text-sm rounded-xl shadow-lg shadow-yellow-500/20 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Request Free On-Site System Audit</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* COMPANY PROFILE & LEADERSHIP SPOTLIGHT */}
            <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto border-b border-blue-900/40">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">
                    Proven Leadership &amp; Credentials
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
                    Qualified Personnel from Business, Education &amp; ICT
                  </h2>
                  <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
                    100% owned and run by Milne Bay professionals. Our team brings degrees from UPNG, PNG Unitech, University of Goroka, and the University of Southern Queensland.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('Company Profile');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-blue-900/40 hover:bg-blue-900/60 border border-blue-600/50 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center gap-2 shrink-0 self-start md:self-auto"
                >
                  <FileText className="w-4 h-4 text-yellow-400" />
                  <span>View Full Company Profile Document</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {KEY_PERSONNEL.map((person, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-2xl bg-[#0e214d]/70 border border-blue-900/50 space-y-4 flex flex-col justify-between hover:border-yellow-400/40 transition-colors"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 font-black text-lg">
                          {person.name.split(' ').map((n) => n[0]).join('')}
                        </div>
                        <span className="text-[11px] font-bold text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-950/50 border border-emerald-800/60">
                          {person.ownership}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-white">{person.name}</h4>
                        <div className="text-xs font-semibold text-yellow-400 mt-0.5">{person.role}</div>
                      </div>

                      <div className="pt-2 border-t border-blue-900/50 space-y-1">
                        <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1">
                          <GraduationCap className="w-3 h-3 text-blue-400" />
                          <span>Key Qualifications:</span>
                        </div>
                        <div className="text-xs text-slate-200 leading-snug">
                          {person.education[0]}
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed pt-1 line-clamp-3">
                        {person.bio}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-blue-900/40 text-[11px] text-slate-400 flex items-center justify-between">
                      <span>Milne Bay Native Team</span>
                      <button
                        onClick={() => {
                          setActiveTab('Company Profile');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-yellow-400 hover:underline font-semibold"
                      >
                        Read Profile
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">
                  Client Feedback
                </span>
                <h2 className="text-3xl font-extrabold text-white tracking-tight mt-2">
                  Trusted by Milne Bay Enterprises
                </h2>
                <p className="text-slate-300 text-sm mt-2">
                  Real feedback from local organizations who rely on Kilsta for technology and business support.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {TESTIMONIALS.map((t, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-[#0e214d]/60 border border-blue-900/40 flex flex-col justify-between"
                  >
                    <p className="text-sm text-slate-200 leading-relaxed italic">
                      "{t.quote}"
                    </p>
                    <div className="mt-6 pt-4 border-t border-blue-900/50">
                      <div className="font-bold text-white text-sm">{t.author}</div>
                      <div className="text-xs font-semibold text-yellow-400">{t.company}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{t.location}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ===================== COMPANY PROFILE TAB ===================== */}
        {activeTab === 'Company Profile' && (
          <CompanyProfileView onOpenAuditModal={() => setIsAuditModalOpen(true)} />
        )}

        {/* ===================== SERVICES TAB ===================== */}
        {activeTab === 'Services' && (
          <div className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">
                Full Service Directory
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
                Professional ICT &amp; Business Services
              </h1>
              <p className="text-slate-300 text-base sm:text-lg mt-3">
                From initial business registration to enterprise Starlink deployment and cybersecurity.
              </p>
            </div>

            <div className="space-y-8">
              {SERVICES.map((s, idx) => (
                <div
                  key={s.id}
                  className="p-6 sm:p-8 rounded-3xl bg-[#0e214d]/80 border border-blue-900/50 hover:border-yellow-400/40 transition-all flex flex-col lg:flex-row gap-8 items-start justify-between"
                >
                  <div className="space-y-4 max-w-3xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center">
                        {getServiceIcon(s.iconName)}
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-yellow-400 uppercase tracking-wide">
                          {s.category}
                        </span>
                        <h2 className="text-2xl font-bold text-white">
                          {s.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {s.fullDesc}
                    </p>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Included Deliverables &amp; Features:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {s.features.map((f, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 bg-blue-950/60 border border-blue-800/40 rounded-xl text-xs text-blue-200">
                      <strong className="text-yellow-400 font-semibold">Key Deliverable: </strong>
                      {s.deliverable}
                    </div>
                  </div>

                  <div className="w-full lg:w-72 shrink-0 p-5 rounded-2xl bg-blue-950/60 border border-blue-900/60 space-y-4">
                    <div className="text-xs text-slate-400 uppercase font-semibold">
                      Service Deployment
                    </div>
                    <div className="text-sm text-slate-200 space-y-1">
                      <div>• On-site across Milne Bay</div>
                      <div>• Official tax invoice provided</div>
                      <div>• Free initial scope &amp; quote</div>
                    </div>
                    <button
                      onClick={() => setIsAuditModalOpen(true)}
                      className="w-full py-2.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold text-xs rounded-xl shadow transition-colors"
                    >
                      Book Free Scope Consultation
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===================== INDUSTRIES TAB ===================== */}
        {activeTab === 'Industries' && (
          <div className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">
                Sectors We Serve
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
                Tailored for Milne Bay Provincial Industries
              </h1>
              <p className="text-slate-300 text-base sm:text-lg mt-3">
                Solutions engineered for the geographical, logistical, and commercial landscape of our island province.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {INDUSTRIES.map((ind, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-[#0e214d]/70 border border-blue-900/50 hover:border-yellow-400/40 transition-all space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-900/40 border border-blue-700/40 flex items-center justify-center text-yellow-400">
                    {ind.icon === 'Palmtree' && <Palmtree className="w-6 h-6" />}
                    {ind.icon === 'Store' && <Store className="w-6 h-6" />}
                    {ind.icon === 'Ship' && <Ship className="w-6 h-6" />}
                    {ind.icon === 'Building2' && <Building2 className="w-6 h-6" />}
                  </div>

                  <h3 className="text-2xl font-bold text-white">{ind.name}</h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {ind.desc}
                  </p>

                  <div className="pt-2 text-xs font-semibold text-yellow-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{ind.stats}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-900/60 to-indigo-950/60 border border-blue-700/40 text-center space-y-4">
              <h3 className="text-2xl font-bold text-white">Do You Operate in Outer Islands?</h3>
              <p className="text-slate-300 text-sm max-w-xl mx-auto">
                We service commercial clients across Samarai, Goodenough, Fergusson, Misima, and Woodlark islands. We prepare pre-configured kits for boat transit and on-site deployment.
              </p>
              <button
                onClick={() => setIsAuditModalOpen(true)}
                className="px-6 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold text-sm rounded-xl shadow-md"
              >
                Inquire for Outer Islands
              </button>
            </div>
          </div>
        )}

        {/* ===================== ABOUT TAB ===================== */}
        {activeTab === 'About' && (
          <div className="py-12 sm:py-16 px-4 sm:px-8 max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">
                Our Story &amp; Values
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                About KILSTA Business &amp; ICT Consultants
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
                Rooted in Alotau, Milne Bay Province since 2023. Dedicated to closing the digital divide and enabling local economic autonomy.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#0e214d]/70 border border-blue-900/50 space-y-6 text-slate-200 leading-relaxed">
              <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-blue-900/50">
                <KilstaLogo size="lg" />
                <div>
                  <h3 className="text-xl font-bold text-white">Our Founding Purpose</h3>
                  <p className="text-sm text-slate-300 mt-1">
                    Kilsta was established to provide reliable, professional, and registered ICT engineering and business consultancy services directly inside Milne Bay Province.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-300">
                <p>
                  For years, local enterprises and institutions in Milne Bay were forced to either settle for unmaintained systems or pay astronomical travel allowances to fly in IT technicians from Port Moresby. When minor glitches arose, weeks of business downtime followed.
                </p>
                <p>
                  Kilsta changed this paradigm. By building deep local technical capacity in Alotau, we provide rapid same-day response, hands-on training for Papua New Guinean staff, and transparent business compliance with the Investment Promotion Authority (IPA) and Internal Revenue Commission (IRC).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-900/60 text-center">
                  <div className="text-2xl font-black text-yellow-400">2023</div>
                  <div className="text-xs text-slate-300 mt-1">Established in Alotau</div>
                </div>
                <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-900/60 text-center">
                  <div className="text-2xl font-black text-emerald-400">100%</div>
                  <div className="text-xs text-slate-300 mt-1">Papua New Guinean Owned</div>
                </div>
                <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-900/60 text-center">
                  <div className="text-2xl font-black text-blue-400">Milne Bay</div>
                  <div className="text-xs text-slate-300 mt-1">Provincial Reach</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================== RESOURCES TAB ===================== */}
        {activeTab === 'Resources' && (
          <div className="py-12 sm:py-16 px-4 sm:px-8 max-w-6xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">
                Knowledge &amp; Compliance Hub
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
                Business &amp; Tech Resources for Milne Bay
              </h1>
              <p className="text-slate-300 text-base sm:text-lg mt-3">
                Practical guides and checklists to keep your company compliant, connected, and secure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#0e214d]/70 border border-blue-900/50 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-400/10 text-yellow-400 flex items-center justify-center">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">IPA &amp; IRC Filing Checklist</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Required documents for registering a Business Name, obtaining a TIN, applying for a Certificate of Compliance (COC), and annual filing rules in PNG.
                </p>
                <button
                  onClick={() => setIsAuditModalOpen(true)}
                  className="text-xs font-bold text-yellow-400 hover:underline flex items-center gap-1"
                >
                  <span>Request Full Checklist PDF</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-[#0e214d]/70 border border-blue-900/50 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-blue-400/10 text-blue-400 flex items-center justify-center">
                  <Wifi className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Starlink Maritime Best Practices</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Preventing salt corrosion, grounding against tropical lightning, and mounting Starlink dishes on island resort rooftops and vessels in Milne Bay.
                </p>
                <button
                  onClick={() => setIsAuditModalOpen(true)}
                  className="text-xs font-bold text-yellow-400 hover:underline flex items-center gap-1"
                >
                  <span>Read Installation Guide</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-[#0e214d]/70 border border-blue-900/50 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-400/10 text-emerald-400 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">CCTV Storage &amp; Night Vision</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  How many terabytes of hard drive storage you need for 4 to 16 cameras, and configuring solar battery backup during town power blackouts.
                </p>
                <button
                  onClick={() => setIsAuditModalOpen(true)}
                  className="text-xs font-bold text-yellow-400 hover:underline flex items-center gap-1"
                >
                  <span>Calculate CCTV Storage</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ===================== CONTACT TAB ===================== */}
        {activeTab === 'Contact' && (
          <div className="py-12 sm:py-16 px-4 sm:px-8 max-w-6xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">
                Get In Touch
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
                Contact Kilsta in Alotau
              </h1>
              <p className="text-slate-300 text-base sm:text-lg mt-3">
                Call, email, or send us a direct message for prompt assistance with your systems.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Direct Info */}
              <div className="space-y-6">
                <div className="p-8 rounded-3xl bg-[#0e214d]/70 border border-blue-900/50 space-y-6">
                  <h3 className="text-xl font-bold text-white">Alotau Office &amp; Operations</h3>
                  
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-yellow-400/10 text-yellow-400 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">Location</div>
                        <div className="text-slate-300">{KILSTA_CONTACT.address}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-yellow-400/10 text-yellow-400 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">Phone &amp; WhatsApp</div>
                        <a
                          href={`tel:${KILSTA_CONTACT.phone.replace(/\s+/g, '')}`}
                          className="text-yellow-400 hover:underline font-bold"
                        >
                          {KILSTA_CONTACT.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-yellow-400/10 text-yellow-400 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">Email</div>
                        <a
                          href={`mailto:${KILSTA_CONTACT.email}`}
                          className="text-yellow-400 hover:underline font-semibold"
                        >
                          {KILSTA_CONTACT.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-yellow-400/10 text-yellow-400 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">Business Hours</div>
                        <div className="text-slate-300">{KILSTA_CONTACT.hours}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-yellow-400/10 border border-yellow-400/30 text-yellow-200 text-xs sm:text-sm flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-yellow-400 shrink-0" />
                  <span>
                    Need an urgent on-site visit for broken network or camera issues in Alotau town? Call <strong>{KILSTA_CONTACT.phone}</strong> for rapid response.
                  </span>
                </div>
              </div>

              {/* Direct Form */}
              <div className="p-8 rounded-3xl bg-[#0e214d]/70 border border-blue-900/50">
                {!contactSuccess ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setContactSuccess(true);
                    }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">Send an Instant Message</h3>
                    
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 bg-slate-900/80 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                        <input
                          required
                          type="tel"
                          placeholder="+675 ..."
                          className="w-full px-3.5 py-2.5 bg-slate-900/80 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Email</label>
                        <input
                          type="email"
                          placeholder="email@example.com"
                          className="w-full px-3.5 py-2.5 bg-slate-900/80 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Subject</label>
                      <input
                        type="text"
                        placeholder="e.g. Starlink Quote for Resort"
                        className="w-full px-3.5 py-2.5 bg-slate-900/80 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Message Details *</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your requirements or problems..."
                        className="w-full px-3.5 py-2.5 bg-slate-900/80 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-colors"
                    >
                      Send Message to Kilsta
                    </button>
                  </form>
                ) : (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Message Dispatched!</h4>
                    <p className="text-sm text-slate-300">
                      Thank you. Our team in Alotau will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setContactSuccess(false)}
                      className="px-5 py-2 bg-slate-800 text-white rounded-lg text-xs"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onTabChange={setActiveTab}
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
      />

      {/* Book Free Audit Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </div>
  );
}
