import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import RevenueServices from '@/components/RevenueServices';
import GrowthPlan from '@/components/GrowthPlan';
import GlobalBusiness from '@/components/GlobalBusiness';
import FreeOffer from '@/components/FreeOffer';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
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

          {/* Premium, On-Brand Integrations Section */}
          <section className="relative w-full py-28 px-4 bg-gradient-to-br from-[#f5f7fa] via-[#eef2ff] to-[#e0e7ff] overflow-hidden">
            {/* Floating SVG shape for depth */}
            <svg className="absolute -top-24 -left-24 w-[480px] h-[480px] opacity-30 blur-2xl z-0" viewBox="0 0 480 480" fill="none"><circle cx="240" cy="240" r="200" fill="#6366f1" /></svg>
            <div className="max-w-5xl mx-auto flex flex-col items-center gap-12 relative z-10">
              <h2 className="text-6xl font-black mb-3 text-gray-900 text-center tracking-tight leading-tight">
                Here, there, and <span className="text-[#6366f1]">everywhere</span>
              </h2>
              <p className="text-2xl text-gray-700 mb-12 max-w-2xl text-center font-medium">Expand your reach with targeted marketing and seamless integrations across major platforms.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                {/* Invoice and payment system card */}
                <div className="bg-white/90 border-2 border-[#6366f1]/10 rounded-3xl shadow-2xl p-12 flex flex-col items-center min-h-[280px] transition-transform duration-200 hover:scale-[1.03] hover:shadow-3xl animate-fade-in">
                  {/* Large accent icon */}
                  <svg width="56" height="56" fill="none" viewBox="0 0 56 56" className="mb-5"><rect x="8" y="14" width="40" height="28" rx="6" fill="#6366f1"/><rect x="16" y="22" width="24" height="12" rx="3" fill="#fff"/></svg>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 text-center">Invoice and payment system</h3>
                  <p className="text-lg text-gray-500 text-center">Seamless invoicing and payments, fully integrated with your business workflow.</p>
                </div>
                {/* Integrate with leading platforms card */}
                <div className="bg-white/90 border-2 border-[#6366f1]/10 rounded-3xl shadow-2xl p-12 flex flex-col items-center min-h-[280px] transition-transform duration-200 hover:scale-[1.03] hover:shadow-3xl animate-fade-in">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Integrate with leading platforms</h3>
                  <div className="grid grid-cols-2 gap-7 mb-5">
                    <div className="bg-white rounded-2xl shadow flex items-center justify-center p-5 transition-transform duration-200 hover:scale-110"><img src="/shopify-logo.png" alt="Shopify logo" className="h-12 w-12 object-contain" /></div>
                    <div className="bg-white rounded-2xl shadow flex items-center justify-center p-5 transition-transform duration-200 hover:scale-110"><img src="/squarespace-logo.png" alt="Squarespace logo" className="h-12 w-12 object-contain" /></div>
                    <div className="bg-white rounded-2xl shadow flex items-center justify-center p-5 transition-transform duration-200 hover:scale-110"><img src="/stripe-logo.jpeg" alt="Stripe logo" className="h-12 w-12 object-contain" /></div>
                    <div className="bg-white rounded-2xl shadow flex items-center justify-center p-5 transition-transform duration-200 hover:scale-110"><img src="/paypal-logo.png" alt="PayPal logo" className="h-12 w-12 object-contain" /></div>
                  </div>
                  <div className="text-lg text-gray-500 text-center">Shopify, Stripe, Squarespace, PayPal & more</div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
