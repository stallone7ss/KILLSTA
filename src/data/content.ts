export interface ServiceItem {
  id: string;
  title: string;
  category: 'Business' | 'ICT Infrastructure' | 'ICT Training';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  deliverable: string;
}

export interface TeamMember {
  name: string;
  role: string;
  ownership: string;
  education: string[];
  bio: string;
}

export const KILSTA_PROFILE = {
  businessName: 'KILSTA BUSINESS & ICT CONSULTANTS',
  businessType: 'BUSINESS & ICT TRAINING, AND SERVICES',
  ipaRegistrationNumber: '6-129295384',
  tinNumber: '502603269',
  physicalAddress: 'Gumini Village, Huhu LLG, Alotau District, MBP, PNG',
  postalAddress: 'P.O Box 424, Alotau, Milne Bay Province, PNG',
  phone: '+675 82545274',
  email: 'kilsta2023@gmail.com',
  conceivedYear: '2022',
  registeredYear: '2024',
  ownershipType: '100% Papua New Guinean Owned (Milne Bay Professionals)',
  headcount: '7 Full-time staff (Director, 3 Managers, 4 Technical/Admin Assistants) plus casual project personnel',
  vision: 'To be a reputable Business and ICT solutions provider to our surrounding communities and in the corporate world in Milne Bay as well as an agent of positive change in our local communities and the province as a whole.',
  mission: 'To be competitive in providing affordable, quality, effective, and efficient services to fulfil all our clients’ needs as well as to provide as many job opportunities and career paths as possible for our youths from our local communities and the province.',
  values: [
    {
      title: 'Adherence to PNG Laws & Constitution',
      desc: 'We operate in strict compliance with PNG constitution, labour laws, and corporate regulations.',
    },
    {
      title: 'Client Satisfaction',
      desc: 'We produce top-quality output within allocated timeframes and budget, ensuring full customer satisfaction.',
    },
    {
      title: 'Employee Recognition & Professionalism',
      desc: 'Performance appraisal systems reward committed, loyal, and experienced staff who work with minimal supervision.',
    },
    {
      title: 'Community Development & Youth Empowerment',
      desc: 'We create tangible career paths for youths in Milne Bay and bring positive development to local communities.',
    },
  ],
  strategicGoals: [
    'Provide affordable, quality, and reliable services to both individuals and corporate clients.',
    'Expand operations and become a reputable Business and ICT entity within Milne Bay province and other provinces.',
    'Make a lasting difference in our communities, especially in the lives and careers of as many youths as possible.',
  ],
  servicePledge: 'We KILSTA Business & ICT Consultants treasure our clients as vital components in our business. Therefore, we pledge to provide high quality, efficient services at appropriate and negotiable rates to our regular and loyal clients to maintain our enduring relationship with them.',
  businessModel: 'Centralized project management office currently based in Gumini Village / Alotau, with future plans to establish a downtown Alotau Town central office as commercial operations scale.',
  valueChain: 'Starting as an agile local provider, we serve as specialized sub-contractors to established entities as well as direct contractors delivering turnkey ICT solutions and grassroots community trainings.',
};

export const KILSTA_CONTACT = {
  phone: KILSTA_PROFILE.phone,
  email: KILSTA_PROFILE.email,
  address: 'Gumini Village, Huhu LLG, Alotau District, MBP, PNG',
  postal: 'P.O Box 424, Alotau, Milne Bay Province, PNG',
  ipa: KILSTA_PROFILE.ipaRegistrationNumber,
  tin: KILSTA_PROFILE.tinNumber,
  hours: 'Mon – Fri: 8:00 AM – 5:00 PM, Sat: 9:00 AM – 1:00 PM',
};

export const KEY_PERSONNEL: TeamMember[] = [
  {
    name: 'Wilson Hugh',
    role: 'Principal Director & Administration Manager',
    ownership: '40% Ownership Share',
    education: [
      'Bachelor in Pure Economics (University of Papua New Guinea - UPNG)',
      'Diploma in Accounting (University of Papua New Guinea - UPNG)',
    ],
    bio: 'Sole legal director overseeing general business administration, corporate governance, fiscal management, and business administration trainings. Brings extensive leadership experience across government agencies and private sector enterprises in PNG.',
  },
  {
    name: 'Clifford Jones',
    role: 'Training Manager & Co-Owner',
    ownership: '30% Ownership Share',
    education: [
      'Post Graduate Diploma in Professional Computing (University of Southern Queensland, QLD, Australia)',
      'Bachelor in Computer Science (PNG University of Technology - Unitech)',
      'Diploma in Computer Science (PNG University of Technology - Unitech)',
      'Diploma in Business Management (International Training Institute - ITI)',
    ],
    bio: 'Leads curriculum design, corporate training programs, and software application courses. Combines world-class Australian computing postgraduate credentials with deep cross-functional business management expertise.',
  },
  {
    name: 'Stallone Yabom',
    role: 'ICT Manager & Co-Owner',
    ownership: '30% Ownership Share',
    education: [
      'Bachelor in Computer Science (University of Goroka)',
    ],
    bio: 'Leads Kilsta’s technical ICT department, managing enterprise asset deployments, Starlink satellite installations, network engineering, database architecture, and computer diagnostic maintenance across Milne Bay.',
  },
];

export const SERVICES: ServiceItem[] = [
  // --- BUSINESS SERVICES ---
  {
    id: 'ipa-registration',
    title: 'Business Name Registration with IPA',
    category: 'Business',
    shortDesc: 'Official business name lodgment, company registration, and compliance records with the Investment Promotion Authority.',
    fullDesc: 'End-to-end processing for local Milne Bay entrepreneurs and organizations seeking formal registration. We handle all paperwork, online portal submissions, and official business certificates through the Investment Promotion Authority of PNG.',
    iconName: 'FileCheck',
    features: [
      'IPA Business Name Reservation & Registration',
      'Company Incorporation & Shareholder Filing',
      'Annual Returns Lodgment & Entity Reinstatement',
      'Official IPA Certificate Delivery in Alotau',
    ],
    deliverable: 'Certified IPA Registration Certificate and legal corporate paperwork delivered on-site.',
  },
  {
    id: 'tin-application',
    title: 'TIN Application with IRC & Tax Support',
    category: 'Business',
    shortDesc: 'Internal Revenue Commission Tax Identification Number (TIN) registration and compliance guidance.',
    fullDesc: 'Ensure your enterprise is fully recognized and compliant with PNG tax authorities. We prepare and lodge TIN applications, assist with Certificate of Compliance (COC) documentation, and guide you on IRC requirements.',
    iconName: 'Receipt',
    features: [
      'New Tax Identification Number (TIN) Lodgment',
      'IRC Tax Portal Access & Entity Linking',
      'Certificate of Compliance (COC) Advisory',
      'GST & Salary Wages Tax (SWT) Guidance',
    ],
    deliverable: 'Official IRC TIN Certificate and compliance filing documentation.',
  },
  {
    id: 'profile-proposal-writeups',
    title: 'Business Profile & Project Proposal Write-ups',
    category: 'Business',
    shortDesc: 'High-impact corporate company profiles, tender bid proposals, and funding feasibility documents.',
    fullDesc: 'Crafted by our Director (Bachelor in Pure Economics UPNG). We research, write, and format professional capability statements, grant proposals, and competitive tender bidding documents designed to win contracts and secure institutional financing.',
    iconName: 'Building2',
    features: [
      'Corporate Company Profile & Capability Statements',
      'Commercial Tender & Government Bid Proposals',
      'Project Feasibility & Economic Costing Analyses',
      'Bank Loan & Investor Funding Documentation',
    ],
    deliverable: 'Bound presentation-ready PDF & printed proposal dossiers.',
  },
  {
    id: 'admin-bookkeeping-training',
    title: 'Business Admin & Basic Bookkeeping Training',
    category: 'Business',
    shortDesc: 'Hands-on workshops in daily bookkeeping, cash flow records, filing systems, and office administration.',
    fullDesc: 'Equipping SME owners, managers, and administrative clerks with fundamental financial and managerial skills. Learn how to maintain daily cash books, record income and expenses, issue invoices, and manage office workflows with minimal supervision.',
    iconName: 'GraduationCap',
    features: [
      'Cash Book Maintenance & Bank Reconciliation',
      'Invoicing, Receipting & Credit Control Procedures',
      'Filing Systems & Records Retention Systems',
      'Petty Cash Management & Administrative Protocols',
    ],
    deliverable: 'Workbook guides, practical spreadsheet templates, and Certificates of Completion.',
  },

  // --- ICT SERVICES ---
  {
    id: 'network-starlink',
    title: 'Computer Network Setups & Starlink Kit Installation',
    category: 'ICT Infrastructure',
    shortDesc: 'Structured LAN/Wi-Fi cabling, Starlink satellite dish mounting, routers, and network troubleshooting.',
    fullDesc: 'Engineered specifically for tropical coastal and island conditions in Milne Bay. We install and configure Starlink high-speed satellite dishes, CAT6 structured cabling, Ubiquiti mesh Wi-Fi access points, and enterprise network security.',
    iconName: 'Wifi',
    features: [
      'Starlink Satellite Kit Mounts (Island & Coastal)',
      'Structured Ethernet Cabling & Patch Panel Terminations',
      'Office, Lodge & Warehouse Wi-Fi Coverage',
      'Bandwidth Limiting & Guest Network Segregation',
    ],
    deliverable: 'Tested high-speed network with site topology map and router admin handover.',
  },
  {
    id: 'computer-repairs',
    title: 'Computer Repair Services & Hardware Diagnostics',
    category: 'ICT Infrastructure',
    shortDesc: 'On-site troubleshooting, component diagnostics, OS reinstalls, virus removal, and preventative maintenance.',
    fullDesc: 'Fast technical turnaround by certified Computer Science personnel. We diagnose hardware crashes, replace damaged laptop screens and power supplies, clean thermal paste, and remove spyware to restore optimal performance.',
    iconName: 'Laptop',
    features: [
      'Desktop & Laptop Component Level Troubleshooting',
      'Windows & Linux OS Clean Installs & Driver Setups',
      'Virus, Malware & Ransomware Eradication',
      'Dust Cleaning, Fan Servicing & Thermal Management',
    ],
    deliverable: 'Repaired workstation with diagnostic inspection report and warranty guarantee.',
  },
  {
    id: 'parts-sales',
    title: 'Sales of Computer Parts & ICT Products',
    category: 'ICT Infrastructure',
    shortDesc: 'Quality replacement SSDs, RAM, power supplies, external drives, Wi-Fi adapters, and original cables.',
    fullDesc: 'Access verified business-grade IT components locally without waiting for weeks of shipping from Port Moresby. We supply solid-state drives, memory upgrades, networking switches, UPS power protectors, and essential accessories.',
    iconName: 'Store',
    features: [
      'High-Speed NVMe & SATA Solid State Drives (SSDs)',
      'RAM Upgrades (DDR4 / DDR5 for Desktops & Laptops)',
      'Surge Protectors & Pure Sine-Wave UPS Batteries',
      'Original USB-C Adapters, HDMI Cables & Wi-Fi Dongles',
    ],
    deliverable: 'Genuine computer components tested and installed with local warranty.',
  },
  {
    id: 'database-web-design',
    title: 'Database Development & Website Design',
    category: 'ICT Infrastructure',
    shortDesc: 'Custom relational databases, web portal design, inventory trackers, and e-Library system deployments.',
    fullDesc: 'Engineered by our qualified Computer Science graduates (PNG Unitech, Uni of Goroka, USQ Australia). We build tailored relational databases, modern responsive company websites, staff management tools, and digital e-Library solutions for schools and organizations.',
    iconName: 'Server',
    features: [
      'Custom Relational Database Architecture (Postgres/MySQL)',
      'Responsive Corporate Website Design & Hosting',
      'Digital E-Library Systems for Schools & Institutions',
      'Inventory Stock Records & Asset Tracking Databases',
    ],
    deliverable: 'Deployed website or database with source code, user manual, and staff training.',
  },

  // --- ICT TRAININGS ---
  {
    id: 'basic-computing-training',
    title: 'Basic Computing & Digital Literacy Training',
    category: 'ICT Training',
    shortDesc: 'Foundational computer skills for youths, school leavers, and entry-level staff.',
    fullDesc: 'Conducted under the direction of Training Manager Clifford Jones. Designed to build confidence and practical digital competence for beginners. Covers computer anatomy, Windows navigation, mouse & keyboard mastery, file organization, and safe computing.',
    iconName: 'GraduationCap',
    features: [
      'Hardware & Operating System Fundamentals',
      'File & Folder Organization and USB Backup',
      'Touch Typing & Keyboard Shortcuts',
      'Safe Internet Surfing & Email Etiquette',
    ],
    deliverable: 'Hands-on guided practice and Certificate of Digital Literacy.',
  },
  {
    id: 'microsoft-office-training',
    title: 'Microsoft Office Applications (Word, Excel, PowerPoint)',
    category: 'ICT Training',
    shortDesc: 'Practical document formatting, Excel calculations, formulas, charts, and slide presentations.',
    fullDesc: 'Master the core productivity suite used across all modern PNG offices. Learn to write polished business letters, design budgets with formulas and SUM/VLOOKUP functions in Excel, and craft compelling slide presentations.',
    iconName: 'FileCheck',
    features: [
      'Microsoft Word: Professional Formatting & Tables',
      'Microsoft Excel: Formulas, Functions, Budgets & Charts',
      'Microsoft PowerPoint: Slide Layouts & Visuals',
      'Document Export, PDF Generation & Printing Protocols',
    ],
    deliverable: 'Template libraries, sample exercise files, and formal Course Certificates.',
  },
  {
    id: 'timetabling-software',
    title: 'School Timetabling Software Training',
    category: 'ICT Training',
    shortDesc: 'Specialized automated master scheduling software training for schools, secondary colleges, and TVET centers.',
    fullDesc: 'Solves the complex challenge of clash-free school timetable scheduling. We configure educational timetabling software and train school principals, deputy principals (academic), and senior subject teachers on auto-generating master class schedules.',
    iconName: 'Clock',
    features: [
      'Teacher Subject Allocation & Room Matrix Setup',
      'Clash-Free Master Period Timetable Generation',
      'Individual Teacher & Class Timetable Printouts',
      'Mid-Year Timetable Adjustments & Exam Period Schedules',
    ],
    deliverable: 'Configured timetabling software installed on school computers with staff fully trained.',
  },
  {
    id: 'internet-services-training',
    title: 'Internet Services & Cloud Collaboration Training',
    category: 'ICT Training',
    shortDesc: 'Email communication, Google Workspace, cloud backups, online research, and cyber safety.',
    fullDesc: 'Learn how to effectively utilize internet connectivity for business productivity and learning. Covers corporate email communication, shared Google Drive / OneDrive folders, online government portal navigation, and cybersecurity awareness against phishing.',
    iconName: 'Wifi',
    features: [
      'Professional Email Creation & In-box Organization',
      'Cloud Document Sharing & Team Collaboration',
      'Searching Information & Reliable Sourcing',
      'Password Hygiene & Cyber Fraud Defense',
    ],
    deliverable: 'Step-by-step digital reference guide and hands-on laboratory exercises.',
  },
];

export const INDUSTRIES = [
  {
    name: 'Tourism & Island Resorts',
    desc: 'Uninterrupted guest Wi-Fi via Starlink, digital guest check-in systems, and reliable power backup for secluded coastal lodges in Milne Bay.',
    icon: 'Palmtree',
    stats: 'Starlink & Wi-Fi engineered for island geography',
  },
  {
    name: 'Retail, Wholesalers & Supermarkets',
    desc: 'Inventory databases, barcode POS solutions, accounting training, and fast computer repairs for trade stores and pharmacies.',
    icon: 'Store',
    stats: 'Bookkeeping & stock control support in Alotau',
  },
  {
    name: 'Schools, Secondary Colleges & TVETs',
    desc: 'Computer lab installations, school timetabling software, e-Libraries, and teacher digital literacy upskilling workshops.',
    icon: 'GraduationCap',
    stats: 'Proven timetable & e-library software solutions',
  },
  {
    name: 'Small Businesses & Milne Bay Entrepreneurs',
    desc: 'IPA Business Name registration, IRC TIN lodgment, bankable project proposals, and business profile write-ups.',
    icon: 'Building2',
    stats: 'Official PNG compliance & tender readiness',
  },
];

export const TESTIMONIALS = [
  {
    quote: "Kilsta handled our business registration with IPA and set up our TIN with IRC seamlessly. Being able to meet their director right here in Alotau gave us complete confidence.",
    author: "Local Enterprise Founder",
    company: "Milne Bay Commercial Supplies",
    location: "Alotau Town",
  },
  {
    quote: "Their team installed our Starlink dish and mesh Wi-Fi with extreme care for the coastal weather. Our staff and guests now have fast internet, and on-site support is just a call away.",
    author: "Operations Supervisor",
    company: "Coastal Eco-Lodge",
    location: "Huhu LLG, Milne Bay",
  },
  {
    quote: "The hands-on Microsoft Excel and administrative bookkeeping training delivered by Wilson and Clifford transformed our office clerks' accuracy. Highly professional and patient instructors.",
    author: "School Principal",
    company: "Community High School",
    location: "Alotau District",
  },
];
