import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const features = [
  {
    title: 'Omnichannel Marketing',
    desc: 'Reach your customers wherever they are—web, social, email, and more.',
    icon: '📣',
  },
  {
    title: 'Conversion Optimization',
    desc: 'Turn more visitors into customers with data-driven design and testing.',
    icon: '📈',
  },
  {
    title: 'Real-Time Analytics',
    desc: 'Track every click, sale, and campaign in a beautiful dashboard.',
    icon: '📊',
  },
  {
    title: 'Automated Workflows',
    desc: 'Save time and scale faster with smart automations for your business.',
    icon: '🤖',
  },
];

const logos = [
  '/partners/disney.svg',
  '/partners/mattel.png',
  '/partners/apple.png',
  '/partners/qualcomm.png',
  '/partners/energytransfer.png',
  '/partners/kroger.png',
  '/partners/cvs.png',
  '/partners/Home-Depot-Logo-1989.png',
];

const testimonials = [
  {
    name: 'Sarah Lee',
    company: 'BrightPath',
    quote: 'The Vantage team helped us double our online sales in just 3 months. Their process is seamless and results-driven.',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Michael Chen',
    company: 'Urban Roots',
    quote: 'We finally have a marketing partner who understands our business and delivers real ROI.',
    img: 'https://randomuser.me/api/portraits/men/36.jpg',
  },
];

const trustBadges = [
  { label: 'Google Partner', img: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_2015_logo.svg' },
  { label: 'Meta Business Partner', img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png' },
  { label: 'Shopify Expert', img: 'https://cdn.shopify.com/assets/images/logos/shopify-bag.png' },
  { label: 'Clutch Top Agency', img: 'https://static.clutch.co/static/img/logos/clutch-logo.svg' },
];

const process = [
  {
    title: 'Discovery & Audit',
    desc: 'We analyze your business, audience, and competitors to find growth opportunities.',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=600&q=80',
  },
  {
    title: 'Strategy & Planning',
    desc: 'We craft a custom roadmap with clear milestones and KPIs.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=600&q=80',
  },
  {
    title: 'Execution & Optimization',
    desc: 'We launch, test, and optimize campaigns for maximum ROI.',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=600&q=80',
  },
];

const ctas = [
  {
    label: 'Get Your Free Audit',
    desc: 'See how we can unlock your next stage of growth—no obligation.',
    href: 'mailto:hello@vantagemediaus.com',
  },
  {
    label: 'See Our Work',
    desc: 'Explore real client results and case studies.',
    href: '/portfolio',
  },
];

const Services: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />
      {/* HERO - full width, left-aligned */}
      <section className="w-full bg-gradient-to-r from-blue-50 via-white to-purple-50 py-20 px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-left leading-tight">
            Grow Faster. Sell Smarter.<br />
            <span className="text-blue-500">All-in-One Digital Services</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-left">
            From strategy to execution, we help brands like yours scale with proven marketing, automation, and design—just like Shopify's top sellers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={ctas[0].href} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full shadow-lg text-lg transition w-full sm:w-auto text-center">{ctas[0].label}</a>
            <a href={ctas[1].href} className="bg-white border border-blue-600 text-blue-600 font-bold px-8 py-4 rounded-full shadow text-lg transition w-full sm:w-auto text-center hover:bg-blue-50">{ctas[1].label}</a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=600&q=80" alt="Digital marketing" className="rounded-3xl shadow-2xl w-full max-w-md object-cover" />
        </div>
      </section>

      {/* LOGO BAR - full width */}
      <section className="w-full bg-white py-8 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-10">
          {logos.map((logo, i) => (
            <img key={i} src={logo} alt="Client logo" className="h-10 grayscale opacity-80 hover:opacity-100 transition" />
          ))}
        </div>
      </section>

      {/* FEATURES - full width, cards */}
      <section className="w-full bg-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-left">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS - alternating layouts */}
      {process.map((step, i) => (
        <section key={step.title} className={`w-full py-20 px-6 ${i % 2 === 0 ? 'bg-white' : 'bg-blue-50'}`}>
          <div className={`max-w-6xl mx-auto flex flex-col md:flex-row ${i % 2 === 0 ? '' : 'md:flex-row-reverse'} items-center gap-12`}>
            <div className="flex-1">
              <img src={step.img} alt={step.title} className="rounded-3xl shadow-2xl w-full max-w-md object-cover" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left">{step.title}</h2>
              <p className="text-lg text-gray-700 text-left">{step.desc}</p>
            </div>
          </div>
        </section>
      ))}

      {/* TRUST BADGES */}
      <section className="w-full bg-white py-12 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-10">
          {trustBadges.map((badge, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={badge.img} alt={badge.label} className="h-10 mb-2" />
              <span className="text-xs text-gray-500 font-semibold">{badge.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS - full width */}
      <section className="w-full bg-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-left">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start">
                <div className="flex items-center mb-4">
                  <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-blue-100 mr-4" />
                  <div>
                    <div className="font-bold text-blue-500">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.company}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - full width */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-purple-500 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Ready to Grow?</h2>
          <p className="text-lg text-blue-100 mb-8">Get your free, no-obligation audit and see how we can help you scale—just like the world's best brands.</p>
          <a href="mailto:hello@vantagemediaus.com" className="bg-white text-blue-700 font-bold px-10 py-5 rounded-full shadow-lg text-xl transition hover:bg-blue-100">Get My Free Audit</a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services; 