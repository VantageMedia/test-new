import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const packages = [
  {
    name: 'Growth Accelerator',
    desc: 'For ambitious brands ready to scale fast. Includes multi-channel campaigns, advanced analytics, and weekly strategy calls.',
    features: ['Multi-channel marketing', 'Weekly strategy calls', 'Advanced analytics dashboard', 'Dedicated growth manager'],
    price: 'Custom',
  },
  {
    name: 'Brand Builder',
    desc: 'Perfect for businesses looking to establish a strong digital presence. Includes website, branding, and social media setup.',
    features: ['Custom website', 'Brand identity kit', 'Social media setup', 'SEO foundation'],
    price: 'From $2,500/mo',
  },
  {
    name: 'Lead Machine',
    desc: 'For local businesses and service providers. Focused on lead generation, local SEO, and conversion optimization.',
    features: ['Local SEO', 'Landing pages', 'Lead magnets', 'Conversion tracking'],
    price: 'From $1,200/mo',
  },
];

const caseStudy = {
  client: 'GreenLeaf Health',
  challenge: 'Low online visibility and stagnant leads',
  solution: 'Implemented a full-funnel digital strategy, including a new website, local SEO, and targeted ad campaigns.',
  result: '+320% increase in qualified leads in 6 months',
  image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80',
};

const team = [
  {
    name: 'Alex Rivera',
    role: 'Lead Strategist',
    img: 'https://randomuser.me/api/portraits/men/45.jpg',
    bio: '10+ years in digital marketing, Google Ads Certified, passionate about helping brands grow.'
  },
  {
    name: 'Priya Patel',
    role: 'Creative Director',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
    bio: 'Branding expert and design lead. Loves turning ideas into beautiful, high-converting assets.'
  },
];

const faqs = [
  {
    q: 'How long before I see results?',
    a: 'Most clients see measurable improvements within 60 days, with compounding growth over time.'
  },
  {
    q: 'Is there a long-term contract?',
    a: 'No. We work month-to-month—our results are what keep clients with us.'
  },
  {
    q: 'What makes you different?',
    a: 'We offer full transparency, real-time reporting, and a dedicated strategist for every client.'
  },
  {
    q: 'What if I'm not satisfied?',
    a: 'We offer a 30-day satisfaction guarantee. If you're not happy, you don't pay for the next month.'
  },
];

const Services: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-blue-50 to-white relative overflow-x-hidden">
      <Navigation />
      <main className="flex-1 z-10 relative">
        {/* HERO SECTION */}
        <section className="relative py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Your Growth Partner—<span className="text-blue-500">Done-For-You Digital Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              We don't just offer services—we become your digital marketing team. Tailored strategies. Transparent results. No long-term contracts.
            </p>
            <a href="#unique-cta" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg text-lg transition">Get a Free Marketing Audit</a>
          </div>
          <div className="mt-10 flex justify-center">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=400&q=80" alt="Workspace" className="rounded-2xl shadow-xl w-64 h-48 object-cover object-top border-4 border-white" />
          </div>
        </section>

        {/* SERVICE PACKAGES */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 tracking-wide">
            Our <span className="text-blue-500">Packages</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.name} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2 text-center">{pkg.name}</h3>
                <p className="text-gray-600 text-center text-sm mb-4">{pkg.desc}</p>
                <ul className="mb-4 text-sm text-left list-disc list-inside text-gray-700">
                  {pkg.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <div className="font-bold text-blue-500 text-lg mt-auto">{pkg.price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* VALUE PROPOSITION */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide">
            What Makes Us <span className="text-blue-500">Different?</span>
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <li className="flex items-start gap-3 bg-blue-50 rounded-xl p-5 border border-blue-100 shadow"><span className="text-blue-500 text-2xl mt-1">🔍</span> <span className="text-gray-700 font-medium">No cookie-cutter campaigns—every strategy is custom.</span></li>
            <li className="flex items-start gap-3 bg-blue-50 rounded-xl p-5 border border-blue-100 shadow"><span className="text-blue-500 text-2xl mt-1">📊</span> <span className="text-gray-700 font-medium">Real-time reporting dashboard for full transparency.</span></li>
            <li className="flex items-start gap-3 bg-blue-50 rounded-xl p-5 border border-blue-100 shadow"><span className="text-blue-500 text-2xl mt-1">🤝</span> <span className="text-gray-700 font-medium">Monthly strategy calls and unlimited support.</span></li>
            <li className="flex items-start gap-3 bg-blue-50 rounded-xl p-5 border border-blue-100 shadow"><span className="text-blue-500 text-2xl mt-1">💡</span> <span className="text-gray-700 font-medium">We treat your business like our own—your success is our mission.</span></li>
          </ul>
        </section>

        {/* CASE STUDY PREVIEW */}
        <section className="max-w-4xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
          <img src={caseStudy.image} alt="Case study" className="rounded-2xl shadow-xl w-64 h-48 object-cover border-4 border-white" />
          <div>
            <h3 className="text-xl font-bold mb-2">Case Study: {caseStudy.client}</h3>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Challenge:</span> {caseStudy.challenge}</p>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Solution:</span> {caseStudy.solution}</p>
            <p className="text-blue-500 font-bold text-lg mt-2">{caseStudy.result}</p>
          </div>
        </section>

        {/* TEAM/EXPERTISE */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide">
            Meet Your <span className="text-blue-500">Team</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 flex flex-col items-center w-64">
                <img src={member.img} alt={member.name} className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-blue-100" />
                <div className="font-bold text-blue-500 mb-1">{member.name}</div>
                <div className="text-xs text-gray-500 mb-2">{member.role}</div>
                <p className="text-gray-700 text-center text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide">
            Frequently Asked <span className="text-blue-500">Questions</span>
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-blue-50 rounded-xl p-5 border border-blue-100 shadow">
                <div className="font-semibold text-gray-800 mb-2">{faq.q}</div>
                <div className="text-gray-700 text-sm">{faq.a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* UNIQUE CTA */}
        <section id="unique-cta" className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="bg-blue-500 rounded-2xl shadow-lg p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to See What's Possible?</h2>
            <p className="text-blue-100 mb-6">Request your free, no-obligation marketing audit and get a custom action plan for your business.</p>
            <a href="mailto:hello@vantagemediaus.com" className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-full shadow-lg text-lg transition hover:bg-blue-100">Request My Free Audit</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services; 