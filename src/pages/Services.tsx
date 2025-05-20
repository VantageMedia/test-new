import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const services = [
  {
    title: 'Website Development',
    img: '/services/web-dev.png',
    desc: 'Custom, conversion-focused websites built for speed and results.'
  },
  {
    title: 'Social Media',
    img: '/services/social.png',
    desc: 'Grow your audience and engagement with expert social strategies.'
  },
  {
    title: 'Ad Campaigns',
    img: '/services/AD-CAMPAIGNS.png',
    desc: 'ROI-driven paid ads on Google, Meta, and more.'
  },
  {
    title: 'SEO',
    img: '/services/seo.png',
    desc: 'Rank higher and get found by your ideal customers.'
  },
  {
    title: 'Email Marketing',
    img: '/services/email.png',
    desc: 'Automated, personalized campaigns that nurture and convert.'
  },
  {
    title: 'SMS Campaigns',
    img: '/services/message.png',
    desc: 'Instantly reach your audience with high-converting SMS.'
  },
];

const process = [
  {
    title: 'Discovery Call',
    icon: '📞',
    desc: 'We learn about your goals, challenges, and vision.'
  },
  {
    title: 'Custom Strategy',
    icon: '📝',
    desc: 'We craft a tailored plan for your business growth.'
  },
  {
    title: 'Execution & Results',
    icon: '🚀',
    desc: 'We launch, optimize, and deliver measurable results.'
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
    name: 'Jane Smith',
    company: 'Acme Corp',
    quote: 'Vantage Media transformed our online presence and delivered real ROI. Highly recommended!',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'John Doe',
    company: 'Tech Innovators',
    quote: 'Professional, responsive, and results-driven. Our leads and sales have never been better.',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
];

const trustBullets = [
  'Proven track record with Fortune 500 clients',
  'Transparent reporting & communication',
  'Dedicated account manager for every client',
  'No long-term contracts—results keep you with us',
];

const Services: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-blue-50 to-white relative overflow-x-hidden">
      {/* Decorative bubbles/gradient */}
      <div className="absolute left-0 top-0 w-full h-64 pointer-events-none z-0">
        <div className="absolute left-10 top-8 w-32 h-32 bg-gradient-to-br from-blue-300 to-purple-200 rounded-full opacity-70 blur-2xl" />
        <div className="absolute left-40 top-24 w-16 h-16 bg-gradient-to-br from-blue-200 to-purple-100 rounded-full opacity-60 blur-xl" />
      </div>
      <Navigation />
      <main className="flex-1 z-10 relative">
        {/* HERO SECTION */}
        <section className="relative py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Unlock Your Brand's <span className="text-blue-500">Full Potential</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Get more leads, sales, and growth with our expert digital marketing services—trusted by industry leaders.
            </p>
            <a href="#cta" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg text-lg transition">Get My Free Strategy Call</a>
          </div>
          {/* Placeholder for hero image/team photo */}
          <div className="mt-10 flex justify-center">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=400&q=80" alt="Team" className="rounded-2xl shadow-xl w-64 h-48 object-cover object-top border-4 border-white" />
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 tracking-wide">
            Our <span className="text-blue-500">Services</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <img src={service.img} alt={service.title} className="h-14 mb-4" />
                <h3 className="text-lg font-bold mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 tracking-wide">
            How <span className="text-blue-500">It Works</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((step, i) => (
              <div key={step.title} className="bg-blue-50 rounded-2xl shadow border border-blue-100 p-8 flex flex-col items-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-gray-600 text-center text-sm">{step.desc}</p>
                {i < process.length - 1 && <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl text-blue-200">→</div>}
              </div>
            ))}
          </div>
        </section>

        {/* CLIENT LOGOS */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h3 className="text-center text-lg font-semibold mb-6 text-gray-700">Trusted by leading brands</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {logos.map((logo, i) => (
              <img key={i} src={logo} alt="Client logo" className="h-10 grayscale opacity-80 hover:opacity-100 transition" />
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 tracking-wide">
            What Our <span className="text-blue-500">Clients Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 flex flex-col items-center">
                <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-blue-100" />
                <p className="text-gray-700 italic mb-4 text-center">"{t.quote}"</p>
                <div className="font-bold text-blue-500">{t.name}</div>
                <div className="text-xs text-gray-500">{t.company}</div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide">
            Why <span className="text-blue-500">Choose Us?</span>
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trustBullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 bg-blue-50 rounded-xl p-5 border border-blue-100 shadow">
                <span className="text-blue-500 text-2xl mt-1">✔️</span>
                <span className="text-gray-700 font-medium">{b}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* STICKY CTA (mobile) */}
        <div id="cta" className="fixed bottom-4 left-0 w-full flex justify-center z-50 md:hidden pointer-events-none">
          <a href="#" className="pointer-events-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg text-lg transition">Get My Free Strategy Call</a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services; 