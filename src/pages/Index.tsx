import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import RevenueServices from '@/components/RevenueServices';
import GrowthPlan from '@/components/GrowthPlan';
import GlobalBusiness from '@/components/GlobalBusiness';
import FreeOffer from '@/components/FreeOffer';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';

const platformLogos = [
  '/shopify-logo.png',
  '/squarespace-logo.png',
  '/stripe-new-logo.png',
  '/paypal-logo.png',
  '/google-logo.png',
  '/wave-logo.png',
];

function shuffleArray(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const Index: React.FC = () => {
  const [shuffledLogos, setShuffledLogos] = useState(platformLogos);
  const [isShuffling, setIsShuffling] = useState(false);
  const [shake, setShake] = React.useState([false, false, false, false, false, false]);
  const [swing, setSwing] = React.useState([false, false, false, false, false, false]);
  const animTimeouts = useRef([]);

  useEffect(() => {
    let tick = 0;
    const interval = setInterval(() => {
      setIsShuffling(true);
      setShuffledLogos((prev) => shuffleArray(prev));
      setSwing([true, true, true, true, true, true]);
      setShake([true, true, true, true, true, true]);
      animTimeouts.current.forEach(clearTimeout);
      animTimeouts.current = [0,1,2,3,4,5].map((i) => setTimeout(() => {
        setSwing((prev) => { const next = [...prev]; next[i] = false; return next; });
        setShake((prev) => { const next = [...prev]; next[i] = false; return next; });
      }, 600 + i * 50));
      setTimeout(() => setIsShuffling(false), 600);
      tick++;
    }, 3000);
    return () => {
      clearInterval(interval);
      animTimeouts.current.forEach(clearTimeout);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Vantage Media | Business Growth Experts</title>
        <meta name="description" content="Vantage Media helps businesses generate more revenue through website development, SEO optimization, social media marketing, and customer retention strategies." />
        <meta name="keywords" content="business growth, SEO, website development, social media marketing, customer retention, digital marketing, online business" />
        <meta property="og:title" content="Vantage Media | Business Growth Experts" />
        <meta property="og:description" content="Generate more revenue for your business with our customized growth strategies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vantagemedia.com" />
        <link rel="canonical" href="https://vantagemedia.com" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navigation />
        
        <main>
          <Hero />
          <RevenueServices />
          <GrowthPlan />
          <GlobalBusiness />
          <FreeOffer />
          <Partners />

          {/* Premium, On-Brand Integrations Section: 1-over-2 grid */}
          <section className="relative w-full py-28 px-4 bg-gradient-to-br from-[#f5f7fa] via-[#eef2ff] to-[#e0e7ff] overflow-hidden">
            {/* Floating SVG shape for depth */}
            <svg className="absolute -top-24 -left-24 w-[480px] h-[480px] opacity-30 blur-2xl z-0" viewBox="0 0 480 480" fill="none"><circle cx="240" cy="240" r="200" fill="#6366f1" /></svg>
            <div className="max-w-5xl mx-auto flex flex-col items-center gap-12 relative z-10">
              <h2 className="text-6xl font-black mb-3 text-gray-900 text-center tracking-tight leading-tight">
                Here, there, and <span className="text-[#6366f1]">everywhere</span>
              </h2>
              <p className="text-2xl text-gray-700 mb-12 max-w-2xl text-center font-medium">Expand your reach with targeted marketing and seamless integrations across major platforms.</p>
              {/* Top: Large, immersive block */}
              <div className="w-full mb-8 animate-fade-in">
                <div className="bg-gradient-to-r from-[#6366f1]/90 to-[#818cf8]/90 rounded-3xl shadow-2xl p-14 flex flex-col md:flex-row items-center justify-between gap-8">
                  {/* Icon/illustration */}
                  <div className="flex-shrink-0 mb-6 md:mb-0">
                    <svg width="72" height="72" fill="none" viewBox="0 0 72 72"><rect x="8" y="20" width="56" height="32" rx="10" fill="#fff"/><rect x="16" y="28" width="40" height="16" rx="4" fill="#6366f1"/><rect x="28" y="36" width="16" height="4" rx="2" fill="#a5b4fc"/></svg>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-extrabold text-white mb-2">Unified Platform</h3>
                    <p className="text-lg text-white/90 font-medium">All your business tools, integrations, and analytics in one seamless, powerful platform—built for growth and scale.</p>
                  </div>
                </div>
              </div>
              {/* Below: Three cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {/* Invoice and payment system card */}
                <div className="bg-white/95 border border-[#6366f1]/20 rounded-2xl p-8 flex flex-col items-center min-h-[260px] will-change-transform animate-bounce-slow backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-8 text-gray-900 text-center">Invoice and payment system</h3>
                  <div className="flex flex-row items-center justify-between w-full h-72 relative overflow-visible">
                    {/* iPhone - large, left, cut off by border */}
                    <div className="flex-shrink-0 -ml-20 z-10">
                      <img
                        src="/iphone.avif"
                        alt="iPhone"
                        className="h-72 w-auto object-contain drop-shadow-xl"
                        style={{ borderRadius: '2rem 0 0 2rem' }}
                      />
                    </div>
                    {/* Spacer for balance */}
                    <div className="flex-1" />
                    {/* POS system - large, right */}
                    <div className="flex-shrink-0 -mr-20 z-10">
                      <img
                        src="/fixedpos.png"
                        alt="POS System"
                        className="h-60 w-auto object-contain drop-shadow-xl"
                        style={{ borderRadius: '0 2rem 2rem 0' }}
                      />
                    </div>
                  </div>
                </div>
                {/* Integrate with leading platforms card */}
                <div className="bg-white/95 border border-[#6366f1]/20 rounded-2xl p-8 flex flex-col items-center min-h-[260px] will-change-transform animate-bounce-slow backdrop-blur-sm overflow-hidden">
                  <h3 className="text-xl font-bold mb-6 text-gray-900 text-center leading-tight">Integrate with leading<br/>platforms</h3>
                  <div className="flex flex-1 items-center justify-center w-full">
                    <div className={`grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-4 justify-items-center items-center ${isShuffling ? 'card-shuffle' : ''}`}
                      style={{minHeight: '220px'}}>
                      {shuffledLogos.slice(0, 6).map((src, i) => (
                        <div key={src} className={`bg-white rounded-xl flex items-center justify-center w-24 h-24 shadow-md z-10${i % 3 !== 0 ? ' -ml-4' : ''}${i > 2 ? ' -mt-4' : ''}`}>
                          <img src={src} alt="Platform logo" className="max-w-[48%] max-h-[48%] object-contain mx-auto my-auto" loading="lazy" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Analytics and Insights card */}
                <div className="bg-white/95 border border-[#6366f1]/20 rounded-2xl p-8 flex flex-col items-center min-h-[260px] will-change-transform animate-bounce-slow backdrop-blur-sm">
                  {/* Large accent icon */}
                  <svg width="48" height="48" fill="none" viewBox="0 0 56 56" className="mb-4">
                    <path d="M28 8C16.954 8 8 16.954 8 28s8.954 20 20 20 20-8.954 20-20S39.046 8 28 8zm0 36c-8.837 0-16-7.163-16-16S19.163 12 28 12s16 7.163 16 16-7.163 16-16 16z" fill="#6366f1"/>
                    <path d="M28 16v12l8 8" stroke="#6366f1" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 text-center">Analytics and Insights</h3>
                  <p className="text-base text-gray-500 text-center">Real-time analytics and actionable insights to drive your business growth.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
      <style>{`
      @keyframes card-shuffle {
        0% { transform: translateX(0); }
        10% { transform: translateX(-6px) rotate(-1deg); }
        20% { transform: translateX(6px) rotate(1deg); }
        30% { transform: translateX(-4px) rotate(-0.5deg); }
        40% { transform: translateX(4px) rotate(0.5deg); }
        50% { transform: translateX(-2px); }
        60% { transform: translateX(2px); }
        70% { transform: translateX(-1px); }
        80% { transform: translateX(1px); }
        100% { transform: translateX(0); }
      }
      .card-shuffle {
        animation: card-shuffle 1.2s cubic-bezier(0.45,0.05,0.55,0.95);
      }
      `}</style>
    </>
  );
};

export default Index;
