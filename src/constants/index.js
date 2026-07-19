/**
 * Single source of truth for all site content.
 * Editing copy, links, or imagery only ever happens here.
 * Placeholder imagery is served from Unsplash (royalty-free).
 */

export const SITE = {
  name: 'Stratos Digital',
  tagline: 'Full-service digital agency',
  phone: '+1 (555) 014-2890',
  email: 'hello@stratosdigital.agency',
  address: '4th Floor, Harbour Point, 120 Marine Drive, Mumbai 400002',
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
];

export const STATS = [
  { value: 12, suffix: '+', label: 'Years building brands' },
  { value: 480, suffix: '+', label: 'Projects delivered' },
  { value: 96, suffix: '%', label: 'Client retention' },
  { value: 38, suffix: '', label: 'Industry awards' },
];

export const TRUSTED_BRANDS = [
  'Northwind',
  'Aurelia Labs',
  'Vantage Retail',
  'Helios Bank',
  'Brightline Health',
  'Cobalt Motors',
  'Terraform Realty',
  'Lumen Foods',
];

export const SERVICES = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    blurb: 'SEO, paid media and social programs engineered around revenue, not vanity metrics.',
    icon: 'Megaphone',
    items: ['Search Engine Optimization', 'Performance Ads', 'Social Media Marketing', 'Reputation Management'],
    image:
      'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=70',
  },
  {
    id: 'design-development',
    title: 'Design & Development',
    blurb: 'High-conversion websites, e-commerce storefronts and native apps built to perform.',
    icon: 'Code2',
    items: ['Website Design', 'Web Development', 'iOS & Android Apps', 'E-commerce Platforms'],
    image:
      'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=70',
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    blurb: 'Product engineering, data platforms and DevOps that modernize how you operate.',
    icon: 'Workflow',
    items: ['Product Engineering', 'Data Engineering', 'DevOps & SecOps', 'IoT Solutions'],
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=70',
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    blurb: 'Generative AI, machine learning and process automation applied to real workflows.',
    icon: 'BrainCircuit',
    items: ['Generative AI', 'Machine Learning', 'Process Automation', 'Conversational AI'],
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=70',
  },
  {
    id: 'cloud-security',
    title: 'Cloud & Security',
    blurb: 'Cloud migration, managed services and security hardening for resilient infrastructure.',
    icon: 'ShieldCheck',
    items: ['Cloud Migration', 'Managed Services', 'Pen Testing', 'Compliance Assessment'],
    image:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=70',
  },
  {
    id: 'consulting',
    title: 'Strategy & Consulting',
    blurb: 'Brand, product and growth strategy backed by competitive research and trend data.',
    icon: 'Compass',
    items: ['Brand Strategy', 'Product Strategy', 'Growth Strategy', 'Competitive Audits'],
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=70',
  },
];

export const INDUSTRIES = [
  {
    id: 'ecommerce',
    name: 'E-commerce',
    note: 'Storefronts, marketplaces and retention engines that scale.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1000&q=70',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    note: 'Compliant patient journeys and clinical platforms.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=70',
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    note: 'Lead generation and virtual experiences for property.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=70',
  },
  {
    id: 'bfsi',
    name: 'BFSI',
    note: 'Secure digital banking, insurance and fintech products.',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1000&q=70',
  },
  {
    id: 'saas',
    name: 'SaaS & IT',
    note: 'Pipeline programs and product-led growth for software.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=70',
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    note: 'Direct-booking growth for hotels, food and travel.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=70',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    note: 'Industrial IoT, B2B demand and digital catalogues.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=70',
  },
  {
    id: 'fashion',
    name: 'Fashion & FMCG',
    note: 'Launch campaigns and D2C brand-building at speed.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=70',
  },
];

export const WHY_US = [
  {
    icon: 'Target',
    title: 'Outcome-first engagements',
    text: 'Every scope starts with the metric it must move — pipeline, revenue, retention — and reports against it monthly.',
  },
  {
    icon: 'Layers',
    title: 'One team, full stack',
    text: 'Strategists, engineers and media buyers work in a single pod, so nothing gets lost between agencies.',
  },
  {
    icon: 'Gauge',
    title: 'Ship in weeks, not quarters',
    text: 'Two-week sprint cadence with a live dashboard you can open any time — no waiting for the monthly deck.',
  },
  {
    icon: 'Handshake',
    title: 'No lock-in contracts',
    text: 'Rolling engagements you can pause or scale. We keep clients by performing, not by penalty clauses.',
  },
];

export const PROCESS_STEPS = [
  {
    id: '01',
    title: 'Explore',
    text: 'Deep-dive workshops, analytics audits and competitor teardowns to map where growth is hiding.',
  },
  {
    id: '02',
    title: 'Engineer',
    text: 'Strategy becomes a roadmap: channels, creative, architecture and the KPIs each one owns.',
  },
  {
    id: '03',
    title: 'Execute',
    text: 'Sprint-based delivery across media, design and code — shipped, measured and iterated fortnightly.',
  },
  {
    id: '04',
    title: 'Elevate',
    text: 'Compounding optimization: scale what works, kill what doesn’t, and expand into new channels.',
  },
];

export const PORTFOLIO = [
  {
    id: 'helios-bank',
    client: 'Helios Bank',
    category: 'BFSI · Web Platform',
    title: 'Rebuilding digital onboarding for a challenger bank',
    result: '3.2× more completed applications in 90 days',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=70',
    summary:
      'A ground-up rebuild of the account-opening journey with progressive KYC, cutting drop-off at every step.',
  },
  {
    id: 'lumen-foods',
    client: 'Lumen Foods',
    category: 'FMCG · Performance Marketing',
    title: 'Scaling a D2C snack brand past ₹40Cr ARR',
    result: '218% revenue growth at a 4.6 blended ROAS',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=70',
    summary:
      'Full-funnel media across Meta, Google and quick-commerce marketplaces, with creative refreshed weekly.',
  },
  {
    id: 'terraform-realty',
    client: 'Terraform Realty',
    category: 'Real Estate · SEO + CRO',
    title: 'Owning high-intent property search in three metros',
    result: '412% organic traffic growth, 61% cheaper leads',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=70',
    summary:
      'Programmatic SEO across 1,800 locality pages paired with landing-page CRO for site-visit bookings.',
  },
  {
    id: 'brightline-health',
    client: 'Brightline Health',
    category: 'Healthcare · Product Engineering',
    title: 'A telehealth platform patients actually finish using',
    result: '92% appointment completion, 4.8★ app rating',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=70',
    summary:
      'HIPAA-ready video consults, e-prescriptions and reminders shipped across iOS, Android and web.',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'Stratos rebuilt our entire acquisition engine. Within two quarters, cost per qualified lead fell by half while volume doubled. They report like an internal team, not a vendor.',
    name: 'Priya Deshmukh',
    role: 'CMO, Helios Bank',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=70',
  },
  {
    quote:
      'The rare agency that is genuinely strong at both media and engineering. One pod handled our storefront rebuild and the campaigns that filled it — no hand-offs, no excuses.',
    name: 'Arjun Mehta',
    role: 'Founder, Lumen Foods',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=70',
  },
  {
    quote:
      'Their sprint dashboard changed how our board sees marketing. Every rupee is traceable to pipeline. Three years in, they still surprise us every quarter.',
    name: 'Sarah Kulkarni',
    role: 'VP Growth, Vantage Retail',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=70',
  },
  {
    quote:
      'From cloud migration to the AI copilot on top of it, Stratos shipped in five months what our previous partner scoped for eighteen. Exceptional engineering discipline.',
    name: 'David Fernandes',
    role: 'CTO, Cobalt Motors',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=70',
  },
];

export const FAQS = [
  {
    q: 'What does a typical engagement look like?',
    a: 'Most clients start with a 4-week discovery sprint that produces a growth roadmap, then move into rolling 2-week delivery sprints. You get a dedicated pod — strategist, specialists, and a delivery lead — plus a live KPI dashboard from day one.',
  },
  {
    q: 'Do you work with startups or only enterprises?',
    a: 'Both. Roughly half our clients are funded startups scaling from ₹1Cr to ₹50Cr in revenue; the other half are mid-market and enterprise teams modernizing legacy systems or channels. Pricing scales with scope, not company size.',
  },
  {
    q: 'How do you measure and report results?',
    a: 'Every engagement is anchored to one north-star metric agreed in discovery. You get an always-on dashboard, a fortnightly sprint review, and a monthly business review that ties spend to pipeline or revenue — never just impressions.',
  },
  {
    q: 'Can you take over from an existing agency or in-house team?',
    a: 'Yes, and we make transitions boring on purpose: a structured 2-week handover covering accounts, tracking, creative assets and institutional knowledge, with zero downtime on live campaigns.',
  },
  {
    q: 'What are your contract terms?',
    a: 'Rolling monthly engagements after the initial sprint, with 30-day notice to pause or stop. We don’t do 12-month lock-ins — retention has to be earned by performance.',
  },
  {
    q: 'Which tools and platforms do you specialize in?',
    a: 'Google & Meta ads, GA4, HubSpot and Salesforce on the marketing side; React, Node, AWS, Azure and modern data stacks on engineering; plus custom GPT-class model integrations for AI work.',
  },
];

export const BLOG_POSTS = [
  {
    id: 'ai-search-2026',
    title: 'AI answer engines just changed SEO. Here’s the playbook.',
    excerpt: 'How to keep winning organic demand when half your audience never clicks a blue link again.',
    category: 'SEO',
    date: 'Jul 08, 2026',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=70',
  },
  {
    id: 'cro-checklist',
    title: 'The 27-point CRO checklist we run on every landing page',
    excerpt: 'The exact audit that lifted conversion rates for 40+ clients — steal it before your competitors do.',
    category: 'CRO',
    date: 'Jun 24, 2026',
    readTime: '11 min',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=70',
  },
  {
    id: 'cloud-cost',
    title: 'FinOps in practice: cutting cloud spend 38% without downtime',
    excerpt: 'A case-backed walkthrough of rightsizing, reservations and the dashboards that keep costs honest.',
    category: 'Cloud',
    date: 'Jun 10, 2026',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=70',
  },
  {
    id: 'brand-strategy',
    title: 'Why most rebrands fail (and the 4 that didn’t)',
    excerpt: 'Positioning lessons from four rebrands that moved revenue, not just logos.',
    category: 'Strategy',
    date: 'May 28, 2026',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?auto=format&fit=crop&w=1200&q=70',
  },
  {
    id: 'first-party-data',
    title: 'Life after cookies: a first-party data plan that actually ships',
    excerpt: 'Consent, CDPs and the quick wins most teams skip on the road to privacy-proof marketing.',
    category: 'Data',
    date: 'May 12, 2026',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=70',
  },
  {
    id: 'app-retention',
    title: 'Retention is the new acquisition: 6 loops that keep users back',
    excerpt: 'Product-led retention mechanics we build into every app engagement, with benchmarks.',
    category: 'Product',
    date: 'Apr 30, 2026',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=70',
  },
];

export const JOBS = [
  { id: 'sr-seo', title: 'Senior SEO Strategist', dept: 'Marketing', type: 'Full-time', location: 'Mumbai / Hybrid' },
  { id: 'react-eng', title: 'React Engineer (Frontend)', dept: 'Engineering', type: 'Full-time', location: 'Remote, India' },
  { id: 'media-buyer', title: 'Performance Media Buyer', dept: 'Marketing', type: 'Full-time', location: 'Mumbai' },
  { id: 'ux-designer', title: 'Product / UX Designer', dept: 'Design', type: 'Full-time', location: 'Mumbai / Hybrid' },
  { id: 'data-eng', title: 'Data Engineer', dept: 'Engineering', type: 'Full-time', location: 'Remote, India' },
  { id: 'content-lead', title: 'Content & Editorial Lead', dept: 'Marketing', type: 'Full-time', location: 'Mumbai' },
];

export const TECH_PILLARS = [
  {
    icon: 'Sparkles',
    title: 'Generative AI in production',
    text: 'Copilots, content engines and support automation built on GPT-class models — grounded in your data, guarded by evals.',
  },
  {
    icon: 'Database',
    title: 'Data you can act on',
    text: 'Warehouses, pipelines and dashboards that turn scattered events into a single source of decision-ready truth.',
  },
  {
    icon: 'Bot',
    title: 'Automation that scales teams',
    text: 'RPA and workflow automation that removes repetitive work so your people focus on judgment calls.',
  },
];
