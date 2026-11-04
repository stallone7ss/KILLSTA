import React, { useState } from 'react';
import {
  FileText,
  ShieldCheck,
  Award,
  Users,
  Compass,
  Building,
  GraduationCap,
  Briefcase,
  MapPin,
  Phone,
  Mail,
  Printer,
  ChevronRight,
  Layers,
  CheckCircle2,
  PieChart,
  Target,
  Sparkles,
} from 'lucide-react';
import { KilstaLogo } from './KilstaLogo';
import { KILSTA_PROFILE, KEY_PERSONNEL, SERVICES, TeamMember } from '../data/content';

interface CompanyProfileViewProps {
  onOpenAuditModal: () => void;
}

export const CompanyProfileView: React.FC<CompanyProfileViewProps> = ({ onOpenAuditModal }) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Business' | 'ICT Infrastructure' | 'ICT Training'>('All');

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-10 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
      {/* Profile Header Dossier */}
      <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0c1e48] via-[#0b1938] to-[#07132c] border border-blue-500/30 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 pb-8 border-b border-blue-900/60">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div className="shrink-0 p-3 bg-white rounded-full shadow-2xl ring-4 ring-white/10">
              <KilstaLogo size="xl" />
            </div>
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Official Corporate Company Profile</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {KILSTA_PROFILE.businessName}
              </h1>
              <p className="text-sm sm:text-base font-semibold text-blue-200">
                {KILSTA_PROFILE.businessType}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                100% Owned and Operated by Professionals from Milne Bay Province, Papua New Guinea.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-medium text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-2"
            >
              <Printer className="w-4 h-4 text-slate-300" />
              <span>Print Profile Document</span>
            </button>
            <button
              onClick={onOpenAuditModal}
              className="px-6 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-yellow-500/20 transition-all flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-slate-950" />
              <span>Request Quotation / Tender Bid</span>
            </button>
          </div>
        </div>

        {/* Legal Credentials Badges Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-xs text-slate-200">
          <div className="p-3.5 rounded-xl bg-blue-950/60 border border-blue-900/60">
            <div className="text-slate-400 font-medium">IPA Registration #</div>
            <div className="text-base font-black text-yellow-400 tracking-wide mt-0.5">
              {KILSTA_PROFILE.ipaRegistrationNumber}
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-blue-950/60 border border-blue-900/60">
            <div className="text-slate-400 font-medium">Tax ID Number (TIN)</div>
            <div className="text-base font-black text-yellow-400 tracking-wide mt-0.5">
              {KILSTA_PROFILE.tinNumber}
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-blue-950/60 border border-blue-900/60">
            <div className="text-slate-400 font-medium">Entity Establishment</div>
            <div className="text-base font-black text-emerald-400 tracking-wide mt-0.5">
              Conceived 2022 • Reg 2024
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-blue-950/60 border border-blue-900/60">
            <div className="text-slate-400 font-medium">Principal Director</div>
            <div className="text-base font-black text-white tracking-wide mt-0.5">
              Wilson Hugh
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: BUSINESS & ADMINISTRATIVE INFORMATION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 p-8 rounded-3xl bg-[#0e214d]/70 border border-blue-900/50 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">Section 1</span>
              <h2 className="text-2xl font-bold text-white">Business &amp; Administrative Data</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-xs text-slate-400 font-semibold uppercase">Official Registered Entity</span>
              <div className="font-bold text-white">{KILSTA_PROFILE.businessName}</div>
              <div className="text-xs text-yellow-400">{KILSTA_PROFILE.businessType}</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-xs text-slate-400 font-semibold uppercase">Ownership Structure</span>
              <div className="font-bold text-white">Sole Proprietorship / Partnership</div>
              <div className="text-xs text-emerald-400">{KILSTA_PROFILE.ownershipType}</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-xs text-slate-400 font-semibold uppercase">Physical Operations Address</span>
              <div className="flex items-start gap-2 text-white">
                <MapPin className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>{KILSTA_PROFILE.physicalAddress}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-xs text-slate-400 font-semibold uppercase">Postal Mailing Address</span>
              <div className="font-bold text-white">{KILSTA_PROFILE.postalAddress}</div>
              <div className="text-xs text-slate-400">Alotau Post Office, MBP</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-xs text-slate-400 font-semibold uppercase">Direct Telephone Contact</span>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                <a href={`tel:${KILSTA_PROFILE.phone.replace(/\s+/g, '')}`} className="font-bold text-yellow-400 hover:underline">
                  {KILSTA_PROFILE.phone}
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-xs text-slate-400 font-semibold uppercase">Official E-mail Channel</span>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-yellow-400 shrink-0" />
                <a href={`mailto:${KILSTA_PROFILE.email}`} className="font-bold text-white hover:underline break-all">
                  {KILSTA_PROFILE.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Banking & Compliance Info Box */}
        <div className="p-8 rounded-3xl bg-[#0e214d]/70 border border-blue-900/50 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Banking &amp; Settlements</span>
            </div>
            <h3 className="text-xl font-bold text-white">Commercial Compliance</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              KILSTA maintains registered business bank accounts with authorized commercial institutions in Papua New Guinea for electronic EFT payments, government cheque settlement, and tax receipting.
            </p>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Bank Details:</span>
                <span className="font-semibold text-white">Available on Official Invoice</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Payment Modes:</span>
                <span className="font-semibold text-emerald-400">Direct Deposit / EFT / Cheque</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Tax Invoicing:</span>
                <span className="font-semibold text-yellow-400">TIN Compliant Receipts</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-yellow-400/10 border border-yellow-400/30 text-xs text-yellow-200">
            Official Certificate of Compliance and statutory company documents are available to prospective corporate clients and government tender committees upon request.
          </div>
        </div>
      </div>

      {/* SECTION 2: COMPANY HISTORY & BACKGROUND */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#0e214d]/70 border border-blue-900/50 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">Section 2</span>
            <h2 className="text-2xl font-bold text-white">Company History &amp; Narrative</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-sm text-slate-300 leading-relaxed">
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              Origins &amp; Conception (2022)
            </h4>
            <p>
              KILSTA Business &amp; ICT Consultants was conceived in 2022 by several elite professionals from Milne Bay Province. While members initially worked across diverse government, business, and educational sectors nationwide, the team coalesced upon returning to Alotau to turn the vision into reality.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Official Registration (2024)
            </h4>
            <p>
              Recognizing the vast unmet demand for high-grade Business and ICT services within Milne Bay, KILSTA was formally registered with the Investment Promotion Authority in 2024. Today, our four permanent managers lead an agile team delivering on-site and remote solutions across the province.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              Youth Empowerment Mandate
            </h4>
            <p>
              While delivering professional client services, KILSTA actively creates job opportunities and career trajectories for youths from surrounding communities and the province, utilizing an apprentice model guided by senior Computer Science and Economics professionals.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 3: STRATEGY - VISION, MISSION, VALUES & GOALS */}
      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Section 3</span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">
            Strategic Direction &amp; Core Values
          </h2>
          <p className="text-slate-300 text-sm mt-2">
            The guiding principles shaping our commercial operations, client relationships, and community engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0f2558] to-[#0a1838] border border-blue-500/40 space-y-4">
            <div className="flex items-center gap-2.5 text-yellow-400 font-bold text-sm uppercase tracking-wider">
              <Target className="w-5 h-5" />
              <span>Vision Statement</span>
            </div>
            <p className="text-lg text-white font-medium leading-relaxed italic">
              "{KILSTA_PROFILE.vision}"
            </p>
          </div>

          {/* Mission */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0f2558] to-[#0a1838] border border-blue-500/40 space-y-4">
            <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-sm uppercase tracking-wider">
              <Compass className="w-5 h-5" />
              <span>Mission Statement</span>
            </div>
            <p className="text-lg text-white font-medium leading-relaxed italic">
              "{KILSTA_PROFILE.mission}"
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KILSTA_PROFILE.values.map((val, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#0e214d]/70 border border-blue-900/50 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-yellow-400/10 text-yellow-400 flex items-center justify-center font-bold text-sm">
                0{idx + 1}
              </div>
              <h4 className="text-base font-bold text-white">{val.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>

        {/* 3 Major Goals & Objectives */}
        <div className="p-8 rounded-3xl bg-[#0e214d]/70 border border-blue-900/50 space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-400" />
            <span>Three Major Business Goals &amp; Objectives</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {KILSTA_PROFILE.strategicGoals.map((goal, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 4: FULL SERVICES CATALOGUE */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Section 4</span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">
              Scope of Services &amp; Training Programs
            </h2>
            <p className="text-slate-300 text-sm mt-1">
              Covering both Business Formalization and Information Communication Technology.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {(['All', 'Business', 'ICT Infrastructure', 'ICT Training'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeCategory === cat
                    ? 'bg-yellow-400 text-slate-950 font-bold'
                    : 'bg-blue-950/70 text-slate-300 hover:text-white border border-blue-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((serv) => (
            <div
              key={serv.id}
              className="p-6 rounded-2xl bg-[#0e214d]/70 border border-blue-900/50 hover:border-yellow-400/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-900/50 text-blue-300 border border-blue-800">
                    {serv.category}
                  </span>
                  <button
                    onClick={onOpenAuditModal}
                    className="text-[11px] font-bold text-yellow-400 hover:underline"
                  >
                    Inquire
                  </button>
                </div>
                <h3 className="text-lg font-bold text-white">{serv.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{serv.shortDesc}</p>
                <ul className="space-y-1.5 pt-2">
                  {serv.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 mt-4 border-t border-blue-900/40 text-[11px] text-blue-200">
                <strong className="text-yellow-400">Deliverable: </strong>
                {serv.deliverable}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 5: MANAGEMENT, OWNERSHIP & KEY PERSONNEL QUALIFICATIONS */}
      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Section 5</span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">
            Management, Ownership &amp; Key Qualifications
          </h2>
          <p className="text-slate-300 text-sm mt-2">
            Meet the experienced leaders and shareholders driving KILSTA Business &amp; ICT Consultants.
          </p>
        </div>

        {/* Ownership Structure Breakdown */}
        <div className="p-8 rounded-3xl bg-[#0e214d]/70 border border-blue-900/50 space-y-4">
          <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider">
            <PieChart className="w-4 h-4" />
            <span>Ownership &amp; Shareholding Distribution</span>
          </div>
          <h3 className="text-xl font-bold text-white">Equity &amp; Capital Contributions</h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Wilson Hugh is the listed legal owner and principal director. Staff members have contributed capital, tools, and equipment:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-blue-950/60 border border-blue-900/60 text-center">
              <div className="text-3xl font-black text-yellow-400">40%</div>
              <div className="text-sm font-bold text-white mt-1">Wilson Hugh</div>
              <div className="text-xs text-slate-400">Director &amp; Legal Owner</div>
            </div>
            <div className="p-4 rounded-2xl bg-blue-950/60 border border-blue-900/60 text-center">
              <div className="text-3xl font-black text-emerald-400">30%</div>
              <div className="text-sm font-bold text-white mt-1">Clifford Jones</div>
              <div className="text-xs text-slate-400">Training Manager &amp; Shareholder</div>
            </div>
            <div className="p-4 rounded-2xl bg-blue-950/60 border border-blue-900/60 text-center">
              <div className="text-3xl font-black text-blue-400">30%</div>
              <div className="text-sm font-bold text-white mt-1">Stallone Yabom</div>
              <div className="text-xs text-slate-400">ICT Manager &amp; Shareholder</div>
            </div>
          </div>
        </div>

        {/* Key Personnel Cards with Academic Degrees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {KEY_PERSONNEL.map((person, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#0e214d]/70 border border-blue-900/50 hover:border-yellow-400/40 transition-all space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 font-black text-xl">
                  {person.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{person.name}</h4>
                  <div className="text-xs font-semibold text-yellow-400 mt-0.5">{person.role}</div>
                  <div className="text-[11px] text-emerald-400 mt-0.5">{person.ownership}</div>
                </div>

                <div className="space-y-2 pt-2 border-t border-blue-900/60">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                    <span>Qualifications:</span>
                  </div>
                  <ul className="space-y-1.5">
                    {person.education.map((deg, i) => (
                      <li key={i} className="text-xs text-slate-200 font-medium flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                        <span>{deg}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed pt-2">
                  {person.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-blue-900/40 flex items-center justify-between text-xs text-slate-400">
                <span>Verified Credentials</span>
                <span className="text-emerald-400 font-semibold">Active Director</span>
              </div>
            </div>
          ))}
        </div>

        {/* Organizational Structure & Staffing Model */}
        <div className="p-8 rounded-3xl bg-[#0e214d]/70 border border-blue-900/50 space-y-4">
          <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider">
            <Users className="w-4 h-4" />
            <span>Operational Structure &amp; Workforce</span>
          </div>
          <h3 className="text-xl font-bold text-white">Office Personnel &amp; Field Crew</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            {KILSTA_PROFILE.headcount}. The three managers carry out their duties within their respective sections while the four assistants work cross-functionally under any manager whenever project deployments require.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
            <div className="p-3 bg-blue-950/60 rounded-xl border border-blue-900/50 text-center">
              <div className="font-bold text-white">General &amp; Admin</div>
              <div className="text-slate-400 text-[11px]">Led by Wilson Hugh</div>
            </div>
            <div className="p-3 bg-blue-950/60 rounded-xl border border-blue-900/50 text-center">
              <div className="font-bold text-white">ICT &amp; Technical Assets</div>
              <div className="text-slate-400 text-[11px]">Led by Stallone Yabom</div>
            </div>
            <div className="p-3 bg-blue-950/60 rounded-xl border border-blue-900/50 text-center">
              <div className="font-bold text-white">Training Operations</div>
              <div className="text-slate-400 text-[11px]">Led by Clifford Jones</div>
            </div>
            <div className="p-3 bg-blue-950/60 rounded-xl border border-blue-900/50 text-center">
              <div className="font-bold text-white">Liaison &amp; Logistics</div>
              <div className="text-slate-400 text-[11px]">Provincial Coordination</div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 6 & 7: SERVICE PLEDGE & TENDER INVITATION */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-950 via-[#0B1E4A] to-blue-950 border border-blue-700/50 space-y-6">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">
            Our Service Pledge &amp; Commercial Commitment
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to Partner with KILSTA on Your Next Project
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed italic">
            "{KILSTA_PROFILE.servicePledge}"
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={onOpenAuditModal}
            className="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold text-sm rounded-xl shadow-xl shadow-yellow-500/20 transition-all hover:scale-105"
          >
            Engage KILSTA / Request Proposal
          </button>
          <a
            href={`tel:${KILSTA_PROFILE.phone.replace(/\s+/g, '')}`}
            className="px-6 py-3 bg-blue-900/50 hover:bg-blue-900/70 border border-blue-700 text-white font-semibold text-sm rounded-xl transition-all"
          >
            Direct Call: {KILSTA_PROFILE.phone}
          </a>
        </div>
      </div>
    </div>
  );
};
