import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const industries = [
  {
    name: 'SaaS & Tech',
    desc: 'Accelerate user acquisition and reduce churn with our SaaS growth playbook.',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=600&q=80',
    highlights: ['Product onboarding flows', 'In-app messaging', 'Churn reduction campaigns'],
  },
  {
    name: 'E-commerce',
    desc: 'Boost AOV and LTV with advanced e-commerce marketing and retention strategies.',
    img: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=facearea&w=600&q=80',
    highlights: ['Cart recovery automation', 'Personalized product recommendations', 'Multi-channel retargeting'],
  },
  {
    name: 'Local & Service Businesses',
    desc: 'Dominate your local market and fill your calendar with high-value leads.',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=facearea&w=600&q=80',
    highlights: ['Google Maps optimization', 'Review generation', 'Hyperlocal ad targeting'],
  },
  {
    name: 'Enterprise & B2B',
    desc: 'Shorten sales cycles and nurture high-value accounts with ABM and content.',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=600&q=80',
    highlights: ['Account-based marketing', 'Sales enablement', 'Thought leadership content'],
  },
];

const timeline = [
  {
    step: '01',
    title: 'Deep-Dive Discovery',
    desc: 'We audit your industry, competitors, and customer journey to uncover hidden growth levers.',
    icon: '🔎',
  },
  {
    step: '02',
    title: 'Custom Roadmap',
    desc: 'You get a visual, step-by-step plan with milestones, KPIs, and quick wins.',
    icon: '🗺️',
  },
  {
    step: '03',
    title: 'Full-Funnel Execution',
    desc: 'Our team implements, tests, and optimizes every campaign and touchpoint.',
    icon: '🚀',
  },
  {
    step: '04',
    title: 'Transparent Reporting',
    desc: 'You see real-time results in your custom dashboard—no black box, ever.',
    icon: '📊',
  },
];

const caseStudies = [
  {
    client: 'BluePeak SaaS',
    before: 'Flat user growth, high churn',
    after: '+220% signups, -35% churn in 6 months',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=600&q=80',
    summary: 'Revamped onboarding, launched referral program, and automated lifecycle emails.'
  },
  {
    client: 'Urban Market',
    before: 'Low repeat purchases, abandoned carts',
    after: '3x repeat buyers, +18% AOV',
    img: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=facearea&w=600&q=80',
    summary: 'Personalized product flows, SMS winbacks, and loyalty program.'
  },
  {
    client: 'ProService B2B',
    before: 'Long sales cycles, few inbound leads',
    after: '2x pipeline, +40% SQLs',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=600&q=80',
    summary: 'ABM campaigns, LinkedIn outreach, and gated content.'
  },
];

const team = [
  {
    name: 'Jordan Kim',
    role: 'Head of Strategy',
    img: 'https://randomuser.me/api/portraits/men/52.jpg',
    badges: ['HubSpot Certified', 'Google Analytics Pro'],
    bio: 'Jordan architects growth systems for SaaS and B2B brands.'
  },
  {
    name: 'Maya Singh',
    role: 'Lead Creative',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    badges: ['Shopify Partner', 'Klaviyo Master'],
    bio: 'Maya brings brands to life with conversion-focused design.'
  },
  {
    name: 'Carlos Rivera',
    role: 'Automation Engineer',
    img: 'https://randomuser.me/api/portraits/men/44.jpg',
    badges: ['Zapier Expert', 'Meta Ads Specialist'],
    bio: 'Carlos automates workflows and scales paid campaigns.'
  },
];

const techStack = [
  { name: 'HubSpot', img: 'https://cdn.worldvectorlogo.com/logos/hubspot.svg' },
  { name: 'Shopify', img: 'https://cdn.shopify.com/assets/images/logos/shopify-bag.png' },
  { name: 'Klaviyo', img: 'https://cdn.worldvectorlogo.com/logos/klaviyo.svg' },
  { name: 'Zapier', img: 'https://cdn.worldvectorlogo.com/logos/zapier.svg' },
  { name: 'Meta Ads', img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png' },
  { name: 'Google Analytics', img: 'https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg' },
];

const faqs = [
  {
    q: 'Do you work with my industry?',
    a: 'We specialize in SaaS, e-commerce, local, and B2B/enterprise, but love a new challenge!'
  },
  {
    q: 'How do you report results?',
    a: 'You get a live dashboard, weekly recaps, and a dedicated Slack channel.'
  },
  {
    q: "What's your minimum engagement?",
    a: 'Most clients start with a 3-month roadmap, but we offer project-based sprints too.'
  },
  {
    q: 'Can I talk to a strategist before signing?',
    a: 'Absolutely—book a free roadmap call and get actionable insights, no strings attached.'
  },
];

const pricing = [
  {
    name: 'Starter Plan',
    price: '$1399 FLAT',
    monthly: '$45 / month',
    features: [
      'Up to 5 pages (Home, About, Contact, 2 subpages)',
      '1 integration (Shopify, Klaviyo, or Zapier)',
      'Responsive design',
      'Cancel any time',
    ],
  },
  {
    name: 'Expansion Tier',
    price: '$2999 FLAT',
    monthly: '$75 / month',
    features: [
      'Up to 15 pages (main + subpages)',
      'Up to 3 integrations (Shopify, Klaviyo, Zapier, Google Analytics, etc.)',
      'Advanced SEO setup',
      'Customer retention tools',
      'Cancel any time',
    ],
  },
  {
    name: 'Premier Business',
    price: '$4999 FLAT',
    monthly: '$200 / month',
    features: [
      'Unlimited pages & subpages',
      'All integrations included (Shopify, Klaviyo, Zapier, Google Analytics, Meta Ads, etc.)',
      'Product management system',
      'Email/SMS campaigns',
      'Custom branding & design',
      'Cancel any time',
    ],
  },
];

const Services: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />
      {/* HERO - complex, layered */}
      <section className="relative w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 px-6 flex flex-col md:flex-row items-center gap-16 overflow-hidden">
        <div className="flex-1 max-w-xl z-10">
          <h1 className="text-5xl font-extrabold mb-6 text-left leading-tight drop-shadow-xl">
            Your Industry. <span className="text-blue-500">Your Growth.</span> Our Expertise.
          </h1>
          <p className="text-xl text-gray-700 mb-8 text-left">
            We build custom growth engines for SaaS, e-commerce, local, and B2B brands—no templates, no guesswork, just results.
          </p>
          <a href="#roadmap" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-5 rounded-full shadow-lg text-xl transition">Get My Custom Roadmap</a>
        </div>
        <div className="flex-1 flex flex-col gap-8 z-10">
          <div className="flex gap-6">
            {industries.slice(0,2).map((ind) => (
              <div key={ind.name} className="bg-white/90 rounded-2xl shadow-xl p-6 w-64 relative overflow-hidden group hover:scale-105 transition-transform border-t-4 border-blue-400">
                <img src={ind.img} alt={ind.name} className="w-full h-28 object-cover rounded-xl mb-3" />
                <h3 className="font-bold text-lg mb-1">{ind.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{ind.desc}</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  {ind.highlights.map((h, i) => <li key={i}>• {h}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex gap-6">
            {industries.slice(2).map((ind) => (
              <div key={ind.name} className="bg-white/90 rounded-2xl shadow-xl p-6 w-64 relative overflow-hidden group hover:scale-105 transition-transform border-t-4 border-purple-400">
                <img src={ind.img} alt={ind.name} className="w-full h-28 object-cover rounded-xl mb-3" />
                <h3 className="font-bold text-lg mb-1">{ind.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{ind.desc}</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  {ind.highlights.map((h, i) => <li key={i}>• {h}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Decorative background shapes */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-3xl z-0" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-200 rounded-full opacity-30 blur-3xl z-0" />
      </section>

      {/* TIMELINE - interactive, horizontal */}
      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-left">How We Deliver Results</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 flex flex-row md:flex-col gap-8 md:gap-0 md:space-y-8">
              {timeline.map((step, i) => (
                <div key={step.step} className="flex flex-col md:flex-row items-center md:items-start group">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 border-4 border-blue-200 text-3xl font-bold mb-2 md:mb-0 md:mr-6 group-hover:bg-blue-200 transition-all">{step.icon}</div>
                  <div>
                    <div className="font-bold text-lg mb-1">{step.title}</div>
                    <div className="text-gray-600 text-sm mb-2">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 flex justify-center">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=600&q=80" alt="Process" className="rounded-3xl shadow-2xl w-full max-w-md object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES - carousel style */}
      <section className="w-full bg-gradient-to-r from-blue-50 to-purple-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-left">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {caseStudies.map((cs) => (
              <div key={cs.client} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-start relative overflow-hidden group hover:scale-105 transition-transform border-l-4 border-blue-400">
                <img src={cs.img} alt={cs.client} className="w-full h-32 object-cover rounded-xl mb-4" />
                <div className="font-bold text-blue-500 mb-1">{cs.client}</div>
                <div className="text-xs text-gray-500 mb-2">Before: {cs.before}</div>
                <div className="text-xs text-green-600 mb-2">After: {cs.after}</div>
                <div className="text-gray-700 text-sm mb-2">{cs.summary}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM - grid with badges */}
      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-left">Meet the Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member) => (
              <div key={member.name} className="bg-blue-50 rounded-2xl shadow-lg p-8 flex flex-col items-center relative overflow-hidden group hover:scale-105 transition-transform border-b-4 border-blue-400">
                <img src={member.img} alt={member.name} className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-blue-100" />
                <div className="font-bold text-blue-500 mb-1">{member.name}</div>
                <div className="text-xs text-gray-500 mb-2">{member.role}</div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {member.badges.map((b, i) => <span key={i} className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">{b}</span>)}
                </div>
                <p className="text-gray-700 text-center text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK - logos and blurbs */}
      <section className="w-full bg-gradient-to-r from-blue-50 to-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-left">Our Tech & Integrations</h2>
          <div className="flex flex-wrap gap-8 items-center justify-center">
            {techStack.map((t) => (
              <div key={t.name} className="flex flex-col items-center gap-2 bg-white rounded-xl shadow p-4 w-32 h-32 justify-center hover:scale-105 transition-transform">
                <img src={t.img} alt={t.name} className="h-10 mb-2" />
                <span className="text-xs text-gray-700 font-semibold text-center">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - advanced, accordion style */}
      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-left">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-blue-50 rounded-xl p-6 border border-blue-100 shadow group">
                <summary className="font-semibold text-gray-800 cursor-pointer mb-2 group-open:text-blue-600 transition-all">{faq.q}</summary>
                <div className="text-gray-700 text-sm mt-2">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING & PACKAGING SECTION */}
      <section className="w-full bg-gray-100 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-left">Pricing & Packaging</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {pricing.map((plan) => (
              <div key={plan.name} className="bg-green-50 rounded-2xl shadow-xl p-10 flex flex-col items-center border border-gray-300 hover:scale-105 transition-transform">
                <h3 className="text-3xl font-bold mb-4 text-center">{plan.name}</h3>
                <div className="text-2xl font-extrabold mb-2">{plan.price}</div>
                <div className="text-xl font-bold mb-4">+<br />{plan.monthly}</div>
                <ul className="mb-6 text-gray-700 text-center space-y-2">
                  {plan.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <a href="#roadmap" className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full shadow text-lg transition">Get Started</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - complex, layered */}
      <section id="roadmap" className="relative w-full bg-gradient-to-r from-blue-600 to-purple-500 py-24 px-6 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center z-10 relative">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-xl">Get Your Custom Roadmap</h2>
          <p className="text-lg text-blue-100 mb-8">Book a free, no-pressure call with a strategist. Get a tailored action plan—no sales pitch, just value.</p>
          <a href="mailto:hello@vantagemediaus.com" className="bg-white text-blue-700 font-bold px-10 py-5 rounded-full shadow-lg text-xl transition hover:bg-blue-100">Book My Free Call</a>
        </div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full opacity-30 blur-3xl z-0" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-300 rounded-full opacity-20 blur-3xl z-0" />
      </section>
      <Footer />
    </div>
  );
};

export default Services; 