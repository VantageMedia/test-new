import React, { Component, useRef, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

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
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />

      {/* 1. Services Overview */}
      <section className="w-full bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Digital Solutions That Drive Growth</h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">From stunning websites to powerful apps, we build what your business needs to win online. Explore our full suite of services below.</p>
      </section>

      {/* 2. Core Services Grid - Redesigned */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <div
              key={svc.title}
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col items-start transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 mb-6">
                {/* Modern SVG icon for each service */}
                {idx === 0 && (
                  <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="4" y="8" width="24" height="16" rx="4" fill="#6366f1"/><rect x="8" y="12" width="16" height="8" rx="2" fill="#fff"/></svg>
                )}
                {idx === 1 && (
                  <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="8" y="4" width="16" height="24" rx="4" fill="#6366f1"/><rect x="12" y="8" width="8" height="16" rx="2" fill="#fff"/></svg>
                )}
                {idx === 2 && (
                  <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="6" y="10" width="20" height="12" rx="3" fill="#6366f1"/><rect x="10" y="14" width="12" height="4" rx="1.5" fill="#fff"/></svg>
                )}
                {idx === 3 && (
                  <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="#6366f1"/><rect x="10" y="10" width="12" height="12" rx="3" fill="#fff"/></svg>
                )}
                {idx === 4 && (
                  <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="6" y="14" width="20" height="4" rx="2" fill="#6366f1"/><rect x="14" y="6" width="4" height="20" rx="2" fill="#6366f1"/></svg>
                )}
              </div>
              <h2 className="font-bold text-xl mb-2 text-gray-900">{svc.title}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{svc.desc}</p>
              <ul className="text-sm text-gray-700 mb-4 space-y-1 pl-2">
                {svc.features.map((f, i) => <li key={i} className="list-disc">{f}</li>)}
              </ul>
            </div>
          ))}
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
            <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full shadow-lg text-lg transition">Start Your App Project</a>
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
                <a href="#contact" className={`mt-auto px-8 py-3 rounded-full font-bold text-lg shadow-lg transition ${tier.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-blue-700 hover:bg-blue-100'}`}>{tier.cta}</a>
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

      {/* 8. Final CTA */}
      <section className="w-full bg-blue-600 py-20 px-6 text-center text-white">
        <h2 className="text-4xl font-extrabold mb-4">Let's Build Something Amazing</h2>
        <p className="text-xl mb-8">Ready to launch your next website or app? Get in touch for a free, no-pressure consultation.</p>
        <a href="#contact" className="inline-block bg-white text-blue-700 font-bold px-10 py-5 rounded-full shadow-lg text-xl transition hover:bg-blue-100">Book My Free Consultation</a>
      </section>

      <Footer />
    </div>
  );
};

export default Services; 