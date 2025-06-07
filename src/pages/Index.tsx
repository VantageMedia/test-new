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

          {/* Integrations/Platforms Section (Shopify-style, with real 3D iPhone image) */}
          <section className="w-full py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
              {/* Left: Headline and subheadline */}
              <div className="flex-1 flex flex-col items-start justify-center mb-10 md:mb-0">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">Here, there, and everywhere</h2>
                <p className="text-lg text-gray-700 mb-8 max-w-lg">Expand your reach with targeted marketing and seamless integrations across major platforms.</p>
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
                <div className="text-sm text-gray-500">Shopify, Stripe, Squarespace, PayPal & more</div>
              </div>
              {/* Right: Browser mockup and 3D iPhone image */}
              <div className="flex-1 flex flex-col items-center justify-center relative">
                <div className="rounded-2xl shadow-2xl bg-white p-6 mb-8 w-full max-w-lg">
                  <svg width="320" height="180" viewBox="0 0 320 180" fill="none">
                    <rect x="20" y="30" width="280" height="120" rx="18" fill="#f1f5f9"/>
                    <rect x="40" y="50" width="240" height="80" rx="10" fill="#fff"/>
                    <rect x="100" y="140" width="120" height="12" rx="6" fill="#a5b4fc"/>
                    <rect x="60" y="80" width="200" height="20" rx="6" fill="#e0e7ef"/>
                    <rect x="120" y="110" width="80" height="10" rx="5" fill="#c7d2fe"/>
                  </svg>
                </div>
                {/* 3D iPhone image or fallback */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-40 flex flex-col items-center">
                  {/* If you want to use a real 3D model, you can use react-three-fiber here. For now, using a PNG fallback. */}
                  <img src="/models/iphone-16-pro-mockup.png" alt="iPhone 16 Pro" className="w-32 h-auto drop-shadow-2xl rounded-2xl" />
                  <div className="text-xs text-gray-500 mt-2">Mobile App</div>
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
