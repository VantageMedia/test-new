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

          {/* Shopify-style Integrations Section - Exact Match to Reference */}
          <section className="w-full py-28 px-4 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col items-start gap-14">
              {/* Headline and subheadline */}
              <h2 className="text-6xl font-black mb-3 text-gray-900 leading-tight text-left tracking-tight">Here, there, and everywhere</h2>
              <p className="text-2xl text-gray-700 mb-12 max-w-2xl text-left font-medium">Expand your reach with targeted marketing and seamless integrations across major platforms.</p>
              {/* Browser mockup with iPhone overlay and gradient bg */}
              <div className="relative w-full max-w-3xl mb-20 animate-fade-in">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#f5f7fa] to-[#e4ecf7] blur-sm z-0" style={{filter:'blur(24px)'}}></div>
                <div className="relative rounded-2xl shadow-2xl bg-white overflow-hidden w-full z-10">
                  <img src="/browser-mockup.png" alt="Website browser mockup for Vantage Media" className="w-full h-auto" />
                </div>
                {/* 3D iPhone image, angled and overlapping */}
                <img src="/iphone-3d.png" alt="iPhone 16 Pro showing app UI" className="absolute -bottom-20 left-1/2 -translate-x-1/2 rotate-[-18deg] w-60 h-auto drop-shadow-2xl rounded-2xl z-20" />
              </div>
              {/* Feature cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                {/* Invoice and payment system card */}
                <div className="bg-white rounded-2xl shadow-xl p-12 flex flex-col items-center min-h-[340px] transition-transform duration-200 hover:scale-[1.025] hover:shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center tracking-tight">Invoice and payment system</h3>
                  <div className="relative w-36 h-72 flex items-center justify-center mb-4">
                    <img src="/iphone-3d.png" alt="iPhone showing invoice UI" className="w-full h-auto object-contain rotate-[-12deg] drop-shadow-xl" />
                  </div>
                  <div className="text-base text-gray-500 text-center font-medium">Mobile App</div>
                </div>
                {/* Integrate with leading platforms card */}
                <div className="bg-white rounded-2xl shadow-xl p-12 flex flex-col items-center min-h-[340px] transition-transform duration-200 hover:scale-[1.025] hover:shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center tracking-tight">Integrate with leading platforms</h3>
                  <div className="grid grid-cols-2 gap-6 mb-4">
                    <div className="bg-white rounded-2xl shadow flex items-center justify-center p-5 transition-transform duration-200 hover:scale-105"><img src="/shopify-logo.png" alt="Shopify logo" className="h-12 w-12 object-contain" /></div>
                    <div className="bg-white rounded-2xl shadow flex items-center justify-center p-5 transition-transform duration-200 hover:scale-105"><img src="/squarespace-logo.png" alt="Squarespace logo" className="h-12 w-12 object-contain" /></div>
                    <div className="bg-white rounded-2xl shadow flex items-center justify-center p-5 transition-transform duration-200 hover:scale-105"><img src="/stripe-logo.jpeg" alt="Stripe logo" className="h-12 w-12 object-contain" /></div>
                    <div className="bg-white rounded-2xl shadow flex items-center justify-center p-5 transition-transform duration-200 hover:scale-105"><img src="/paypal-logo.png" alt="PayPal logo" className="h-12 w-12 object-contain" /></div>
                  </div>
                  <div className="text-base text-gray-500 text-center font-medium">Shopify, Stripe, Squarespace, PayPal & more</div>
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
