import React, { Component, useRef, useEffect, useContext } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { BookingModalContext } from '@/App';

const services = [
  {
    title: 'Custom Website Design',
    desc: 'Bespoke, conversion-focused websites built for speed, SEO, and seamless user experience. No templates—every pixel is tailored to your brand.',
    icon: '🌐',
    features: ['UX/UI Strategy', 'Mobile-First', 'SEO Optimized', 'Lightning Fast', 'CMS Integration'],
    img: '/services/web-dev.png',
  },
  {
    title: 'App Development',
    desc: 'End-to-end mobile and web app development for startups and enterprises. We build scalable, secure, and beautiful apps that users love.',
    icon: '📱',
    features: ['iOS & Android', 'Cross-Platform', 'Custom APIs', 'App Store Launch', 'Ongoing Support'],
    img: '/services/app-dev.png',
  },
  {
    title: 'E-Commerce Solutions',
    desc: 'High-converting online stores with custom product flows, secure payments, and advanced analytics. Built for growth and retention.',
    icon: '🛒',
    features: ['Shopify/Custom', 'Payment Integration', 'Product Management', 'Analytics', 'Abandonment Recovery'],
    img: '/services/ecommerce.png',
  },
  {
    title: 'Branding & Creative',
    desc: 'Logo design, brand identity, and creative assets that make your business unforgettable.',
    icon: '🎨',
    features: ['Logo Design', 'Brand Guidelines', 'Creative Assets', 'Messaging', 'Visual Storytelling'],
    img: '/services/branding.png',
  },
  {
    title: 'Automation & Integrations',
    desc: 'Automate your marketing, sales, and operations with custom integrations and workflow automation.',
    icon: '🤖',
    features: ['CRM Integration', 'Email/SMS Automation', 'API Connections', 'Custom Workflows', 'Reporting'],
    img: '/services/automation.png',
  },
];

const pricing = [
  {
    name: 'Launch Website',
    price: '$1,499 flat',
    monthly: '$49/mo hosting & support',
    features: [
      'Up to 5 custom pages',
      'Mobile responsive',
      'Basic SEO',
      '1 integration (e.g. analytics)',
      '1 round of revisions',
      'Go live in 2 weeks',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth Platform',
    price: '$3,200 flat',
    monthly: '$99/mo growth suite',
    features: [
      'Up to 15 custom pages',
      'Advanced SEO',
      '3 integrations (e.g. CRM, analytics, chat)',
      'Conversion copywriting',
      'A/B testing',
      'Priority support',
    ],
    cta: 'Most Popular',
    popular: true,
  },
  {
    name: 'App & Web Suite',
    price: 'from $7,500',
    monthly: 'Custom support',
    features: [
      'Web + iOS/Android app',
      'Custom API & backend',
      'Unlimited integrations',
      'Product strategy workshops',
      'Ongoing optimization',
      'Dedicated project manager',
    ],
    cta: 'Request Proposal',
    popular: false,
  },
];

const faqs = [
  {
    q: 'How fast can you launch my website or app?',
    a: 'Most websites launch in 2–4 weeks. Apps depend on complexity, but we deliver MVPs in as little as 6 weeks.'
  },
  {
    q: 'Do you offer post-launch support?',
    a: 'Yes! All plans include ongoing support, updates, and growth optimization.'
  },
  {
    q: 'Can you migrate my existing site or app?',
    a: 'Absolutely. We handle migrations from any platform with zero downtime.'
  },
  {
    q: 'Is my project a fit for your team?',
    a: "If you want a high-performing website or app that drives results, we're the right partner."
  },
];

const testimonials = [
  {
    name: 'Ava R.',
    company: 'Retail Startup',
    quote: "Our new app launched on time and doubled our user engagement in the first month. The team's process was seamless and transparent.",
    img: '/services/users-img.png',
  },
  {
    name: 'Marcus T.',
    company: 'B2B SaaS',
    quote: "The website redesign not only looks amazing, but our conversion rate jumped by 38%. Highly recommend for any serious business.",
    img: '/services/users-img.png',
  },
  {
    name: 'Lila S.',
    company: 'E-Commerce Brand',
    quote: "From branding to automation, they handled everything. Our store runs smoother and our sales are up 60% year-over-year.",
    img: '/services/users-img.png',
  },
];

function MacbookModel({ open }: { open: boolean }) {
  const { scene } = useGLTF('/models/macbook_pro_m3_16_inch_2024.glb');
  useFrame((state) => {
    scene.rotation.x = open ? -0.5 : 1.2;
  });
  return <primitive object={scene} scale={2.2} position={[0, -0.5, 0]} />;
}

function IphoneModel({ spin }: { spin: boolean }) {
  const { scene } = useGLTF('/models/iphone_16_pro_max.glb');
  useFrame((state) => {
    scene.rotation.y = spin ? state.clock.getElapsedTime() * 2 : 0;
    scene.position.x = spin ? 2.5 : 0;
  });
  return <primitive object={scene} scale={1.2} position={[2.5, -0.5, 0]} />;
}

const DeviceShowcase3DSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [open, setOpen] = React.useState(false);
  const [spin, setSpin] = React.useState(false);
  useEffect(() => {
    if (inView) {
      setTimeout(() => setOpen(true), 300);
      setTimeout(() => setSpin(true), 800);
    }
  }, [inView]);
  return (
    <section ref={ref} className="relative w-full flex flex-col items-center justify-center py-32 bg-gradient-to-br from-blue-100 via-white to-purple-100 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">Websites & Apps, Seamlessly Delivered</h2>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl">See your vision come to life on every device. Our team crafts stunning websites and powerful apps that work together beautifully.</p>
      </div>
      <div className="w-full flex justify-center items-center" style={{ minHeight: 500 }}>
        <Canvas camera={{ position: [0, 0, 7], fov: 45 }} style={{ width: '900px', height: '500px', background: 'transparent' }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={0.7} />
          <MacbookModel open={open} />
          <IphoneModel spin={spin} />
          <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2.2} minPolarAngle={Math.PI / 2.8} />
        </Canvas>
      </div>
    </section>
  );
};

const Services: React.FC = () => {
  const { open } = useContext(BookingModalContext);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />

      {/* 1. Services Overview */}
      <section className="w-full bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Digital Solutions That Drive Growth</h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">From stunning websites to powerful apps, we build what your business needs to win online. Explore our full suite of services below.</p>
      </section>

      {/* 2. Core Services Grid - World-Class Redesign */}
      <section className="w-full py-28 px-4 bg-gradient-to-br from-[#181c22] via-[#23272f] to-[#181c22] relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse z-0" />
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
          {/* Card 1: Website Design */}
          <div className="bg-[#20242b] rounded-3xl shadow-xl p-12 flex flex-col justify-between min-h-[340px] transition-transform duration-200 hover:scale-[1.03] hover:shadow-2xl group">
            <div className="mb-8 flex items-center justify-center h-28">
              {/* Custom SVG: Modern website window with layered tabs */}
              <svg width="110" height="70" viewBox="0 0 110 70" fill="none"><rect x="8" y="18" width="94" height="44" rx="10" fill="#fff"/><rect x="8" y="8" width="70" height="16" rx="6" fill="#6366f1"/><rect x="20" y="30" width="70" height="18" rx="4" fill="#a5b4fc"/><rect x="30" y="52" width="50" height="6" rx="3" fill="#e0e7ef"/></svg>
            </div>
            <div>
              <h2 className="font-extrabold text-2xl mb-3 text-white tracking-tight">Custom Website Design</h2>
              <p className="text-gray-300 text-lg leading-relaxed font-normal">Bespoke, conversion-focused websites built for speed, SEO, and seamless user experience. Every pixel is tailored to your brand.</p>
            </div>
          </div>
          {/* Card 2: App Development */}
          <div className="bg-[#20242b] rounded-3xl shadow-xl p-12 flex flex-col justify-between min-h-[340px] transition-transform duration-200 hover:scale-[1.03] hover:shadow-2xl group">
            <div className="mb-8 flex items-center justify-center h-28">
              {/* Custom SVG: Mobile app with layered screens */}
              <svg width="70" height="110" viewBox="0 0 70 110" fill="none"><rect x="10" y="10" width="50" height="90" rx="14" fill="#6366f1"/><rect x="18" y="22" width="34" height="66" rx="8" fill="#fff"/><rect x="28" y="80" width="14" height="8" rx="4" fill="#a5b4fc"/></svg>
            </div>
            <div>
              <h2 className="font-extrabold text-2xl mb-3 text-white tracking-tight">App Development</h2>
              <p className="text-gray-300 text-lg leading-relaxed font-normal">End-to-end mobile and web app development for startups and enterprises. Beautiful, scalable, and secure apps users love.</p>
            </div>
          </div>
          {/* Card 3: E-Commerce Solutions */}
          <div className="bg-[#20242b] rounded-3xl shadow-xl p-12 flex flex-col justify-between min-h-[340px] transition-transform duration-200 hover:scale-[1.03] hover:shadow-2xl group">
            <div className="mb-8 flex items-center justify-center h-28">
              {/* Custom SVG: Shopping bag with credit card */}
              <svg width="90" height="70" viewBox="0 0 90 70" fill="none"><rect x="20" y="20" width="50" height="40" rx="10" fill="#facc15"/><rect x="30" y="30" width="30" height="16" rx="4" fill="#fff"/><rect x="40" y="50" width="10" height="6" rx="3" fill="#a5b4fc"/><rect x="60" y="10" width="18" height="12" rx="3" fill="#6366f1"/></svg>
            </div>
            <div>
              <h2 className="font-extrabold text-2xl mb-3 text-white tracking-tight">E-Commerce Solutions</h2>
              <p className="text-gray-300 text-lg leading-relaxed font-normal">High-converting online stores with custom product flows, secure payments, and advanced analytics. Built for growth and retention.</p>
            </div>
          </div>
          {/* Card 4: Branding & Creative */}
          <div className="bg-[#20242b] rounded-3xl shadow-xl p-12 flex flex-col justify-between min-h-[340px] transition-transform duration-200 hover:scale-[1.03] hover:shadow-2xl group">
            <div className="mb-8 flex items-center justify-center h-28">
              {/* Custom SVG: Paint palette and pen */}
              <svg width="80" height="70" viewBox="0 0 80 70" fill="none"><ellipse cx="40" cy="40" rx="30" ry="20" fill="#f472b6"/><circle cx="30" cy="40" r="4" fill="#fff"/><circle cx="40" cy="50" r="3" fill="#fff"/><circle cx="50" cy="38" r="3" fill="#fff"/><rect x="60" y="20" width="8" height="28" rx="4" fill="#6366f1"/></svg>
            </div>
            <div>
              <h2 className="font-extrabold text-2xl mb-3 text-white tracking-tight">Branding & Creative</h2>
              <p className="text-gray-300 text-lg leading-relaxed font-normal">Logo design, brand identity, and creative assets that make your business unforgettable. Elevate your brand presence.</p>
            </div>
          </div>
          {/* Card 5: Automation & Integrations */}
          <div className="bg-[#20242b] rounded-3xl shadow-xl p-12 flex flex-col justify-between min-h-[340px] transition-transform duration-200 hover:scale-[1.03] hover:shadow-2xl group md:col-span-2">
            <div className="mb-8 flex items-center justify-center h-28">
              {/* Custom SVG: Gears and connection lines */}
              <svg width="110" height="60" viewBox="0 0 110 60" fill="none"><circle cx="35" cy="30" r="12" fill="#22d3ee"/><circle cx="75" cy="30" r="10" fill="#6366f1"/><rect x="50" y="28" width="20" height="4" rx="2" fill="#a5b4fc"/><rect x="60" y="40" width="30" height="6" rx="3" fill="#e0e7ef"/></svg>
            </div>
            <div>
              <h2 className="font-extrabold text-2xl mb-3 text-white tracking-tight">Automation & Integrations</h2>
              <p className="text-gray-300 text-lg leading-relaxed font-normal">Automate your marketing, sales, and operations with custom integrations and workflow automation. Work smarter, not harder.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Device Showcase Section Replacement */}
      <section className="relative w-full flex flex-col items-center justify-center py-32 bg-gradient-to-br from-blue-100 via-white to-purple-100 overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col items-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">Websites & Apps, Seamlessly Delivered</h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl">See your vision come to life on every device. Our team crafts stunning websites and powerful apps that work together beautifully.</p>
        </div>
        <div className="w-full flex justify-center items-center" style={{ minHeight: 400 }}>
          {/* Animated SVG Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col md:flex-row items-center gap-12"
          >
            {/* MacBook SVG */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="shadow-2xl rounded-3xl bg-white p-6"
            >
              <svg width="260" height="160" viewBox="0 0 260 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="20" width="240" height="120" rx="16" fill="#e0e7ef" />
                <rect x="30" y="40" width="200" height="80" rx="8" fill="#fff" />
                <rect x="40" y="50" width="180" height="60" rx="6" fill="#c7d2fe" />
                <rect x="120" y="130" width="20" height="6" rx="3" fill="#a5b4fc" />
              </svg>
              <div className="text-center mt-2 font-semibold text-blue-700">Your Website</div>
            </motion.div>
            {/* Animated Arrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="hidden md:block"
            >
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M10 40 Q40 10 70 40 Q40 70 10 40 Z"
                  fill="#a5b4fc"
                  animate={{ rotate: [0, 360] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                />
                <motion.polygon
                  points="60,40 70,35 70,45"
                  fill="#6366f1"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>
            {/* iPhone SVG */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1.5 }}
              className="shadow-2xl rounded-3xl bg-white p-6"
            >
              <svg width="90" height="180" viewBox="0 0 90 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="70" height="160" rx="18" fill="#e0e7ef" />
                <rect x="20" y="30" width="50" height="120" rx="10" fill="#fff" />
                <rect x="25" y="40" width="40" height="100" rx="8" fill="#c7d2fe" />
                <rect x="40" y="150" width="10" height="6" rx="3" fill="#a5b4fc" />
              </svg>
              <div className="text-center mt-2 font-semibold text-purple-700">Your App</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. App Development Feature Section */}
      <section className="w-full bg-gradient-to-r from-blue-50 to-purple-50 py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4 text-left">App Development, Evolved</h2>
            <p className="text-lg text-gray-700 mb-6 text-left">We design and build custom mobile and web apps that scale with your business. From MVP to enterprise, our team delivers beautiful, secure, and high-performance apps—on time, every time.</p>
            <ul className="text-base text-gray-700 mb-6 text-left space-y-2">
              <li>• Native iOS & Android or cross-platform</li>
              <li>• Custom backend & API integrations</li>
              <li>• App Store/Play Store launch support</li>
              <li>• Post-launch analytics & growth</li>
            </ul>
            <button onClick={open} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full shadow-lg text-lg transition">Start Your App Project</button>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="/services/app-dev.png" alt="App Development" className="rounded-3xl shadow-2xl w-full max-w-md object-contain" />
          </div>
        </div>
      </section>

      {/* 4. Pricing Tiers */}
      <section className="w-full bg-white py-20 px-6" id="pricing">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Transparent Pricing, Real Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {pricing.map((tier) => (
              <div key={tier.name} className={`rounded-3xl shadow-2xl p-8 flex flex-col items-center border-4 ${tier.popular ? 'border-blue-600 scale-105 bg-blue-50' : 'border-gray-100 bg-white'} transition-transform`}>
                {tier.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full font-bold text-xs shadow-lg">Most Popular</div>}
                <h3 className="font-bold text-2xl mb-2">{tier.name}</h3>
                <div className="text-3xl font-extrabold mb-1">{tier.price}</div>
                <div className="text-lg text-blue-600 mb-4">{tier.monthly}</div>
                <ul className="text-sm text-gray-700 mb-6 space-y-1 text-left w-full max-w-xs mx-auto">
                  {tier.features.map((f, i) => <li key={i}>• {f}</li>)}
                </ul>
                <button onClick={open} className={`mt-auto px-8 py-3 rounded-full font-bold text-lg shadow-lg transition ${tier.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-blue-700 hover:bg-blue-100'}`}>{tier.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Process Timeline */}
      <section className="w-full bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">How We Work</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold">1</div>
                <div>
                  <div className="font-bold text-lg">Discovery & Strategy</div>
                  <div className="text-gray-600 text-sm">We learn your goals, audience, and vision to craft a custom plan.</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold">2</div>
                <div>
                  <div className="font-bold text-lg">Design & Build</div>
                  <div className="text-gray-600 text-sm">Our team designs, develops, and iterates with your feedback.</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold">3</div>
                <div>
                  <div className="font-bold text-lg">Launch & Grow</div>
                  <div className="text-gray-600 text-sm">We launch, optimize, and support your site or app for ongoing success.</div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img src="/services/plan-img-1.png" alt="Process" className="rounded-3xl shadow-2xl w-full max-w-md object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-xl p-8 flex flex-col items-center">
                <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full mb-4 object-cover" />
                <div className="font-bold text-lg mb-1">{t.name}</div>
                <div className="text-blue-600 text-sm mb-2">{t.company}</div>
                <div className="text-gray-700 text-base mb-2 italic">"{t.quote}"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-6">
                <div className="font-bold text-lg mb-2">{faq.q}</div>
                <div className="text-gray-700 text-base">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-Commerce Integration Section */}
      <section className="w-full py-24 px-4 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* Illustration */}
          <div className="flex-1 flex justify-center">
            <svg width="220" height="180" viewBox="0 0 220 180" fill="none">
              <rect x="30" y="40" width="160" height="100" rx="18" fill="#6366f1"/>
              <rect x="50" y="60" width="120" height="60" rx="10" fill="#fff"/>
              <rect x="90" y="130" width="40" height="10" rx="5" fill="#a5b4fc"/>
              <rect x="60" y="80" width="100" height="20" rx="6" fill="#e0e7ef"/>
              <rect x="80" y="100" width="60" height="10" rx="5" fill="#c7d2fe"/>
            </svg>
          </div>
          {/* Content */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">Seamless E-Commerce Integration</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-md">We build websites and apps that connect effortlessly with the world's leading e-commerce and payment platforms—so you can sell, scale, and get paid anywhere.</p>
            <div className="flex flex-wrap gap-6 items-center mb-4">
              <img src="/shopify-logo.svg" alt="Shopify" className="h-10" />
              <img src="/stripe-logo.svg" alt="Stripe" className="h-10" />
              <img src="/squarespace-logo.svg" alt="Squarespace" className="h-10" />
              <img src="/paypal.svg" alt="PayPal" className="h-10" />
              <img src="/amazon.svg" alt="Amazon" className="h-10" />
            </div>
            <div className="text-sm text-gray-500">Shopify, Stripe, Squarespace, PayPal, Amazon & more</div>
          </div>
        </div>
      </section>

      {/* Trusted by Fortune 500 Companies (Partners) Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-blue-50 to-white border-t border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30" style={{background: 'radial-gradient(circle at 60% 40%, #60a5fa33 0%, transparent 70%)'}} />
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">
            Trusted by <span className="text-blue-500">Fortune 500</span> Companies
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
            We build high-converting, visually stunning websites for the world's most recognized brands—and we can do the same for you.
          </p>
          {/* Seamless Animated Marquee of Logos */}
          <div className="overflow-x-hidden w-full py-6 relative">
            <div className="marquee-track flex items-center gap-16 whitespace-nowrap" style={{ animation: 'marquee 30s linear infinite' }}>
              {/* ...partner logos here... */}
            </div>
            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .marquee-track {
                width: max-content;
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Integrations/Platforms Section (Shopify-style) */}
      <section className="w-full py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* Mockup Illustration */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 text-left">Here, there, and everywhere</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-lg text-left">Expand your reach with targeted marketing and seamless integrations across major platforms.</p>
            <div className="grid grid-cols-2 gap-6 mb-4">
              <div className="flex items-center justify-center bg-gray-50 rounded-xl shadow p-4">
                <img src="/shopify-logo.svg" alt="Shopify" className="h-10" />
              </div>
              <div className="flex items-center justify-center bg-gray-50 rounded-xl shadow p-4">
                <img src="/squarespace-logo.svg" alt="Squarespace" className="h-10" />
              </div>
              <div className="flex items-center justify-center bg-gray-50 rounded-xl shadow p-4">
                <img src="/stripe-logo.svg" alt="Stripe" className="h-10" />
              </div>
              <div className="flex items-center justify-center bg-gray-50 rounded-xl shadow p-4">
                <img src="/paypal.svg" alt="PayPal" className="h-10" />
              </div>
            </div>
            <div className="text-sm text-gray-500 text-left">Shopify, Stripe, Squarespace, PayPal & more</div>
          </div>
          {/* Browser/App Mockup */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="rounded-2xl shadow-2xl bg-white p-6">
                <svg width="320" height="180" viewBox="0 0 320 180" fill="none">
                  <rect x="20" y="30" width="280" height="120" rx="18" fill="#f1f5f9"/>
                  <rect x="40" y="50" width="240" height="80" rx="10" fill="#fff"/>
                  <rect x="100" y="140" width="120" height="12" rx="6" fill="#a5b4fc"/>
                  <rect x="60" y="80" width="200" height="20" rx="6" fill="#e0e7ef"/>
                  <rect x="120" y="110" width="80" height="10" rx="5" fill="#c7d2fe"/>
                </svg>
              </div>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 bg-white rounded-2xl shadow-xl p-4 flex flex-col items-center">
                <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                  <rect x="10" y="5" width="60" height="30" rx="10" fill="#6366f1"/>
                  <rect x="20" y="15" width="40" height="10" rx="5" fill="#fff"/>
                </svg>
                <div className="text-xs text-gray-500 mt-2">Mobile App</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="w-full bg-blue-600 py-20 px-6 text-center text-white">
        <h2 className="text-4xl font-extrabold mb-4">Let's Build Something Amazing</h2>
        <p className="text-xl mb-8">Ready to launch your next website or app? Get in touch for a free, no-pressure consultation.</p>
        <button onClick={open} className="inline-block bg-white text-blue-700 font-bold px-10 py-5 rounded-full shadow-lg text-xl transition hover:bg-blue-100">Book My Free Consultation</button>
      </section>

      <Footer />
    </div>
  );
};

export default Services; 