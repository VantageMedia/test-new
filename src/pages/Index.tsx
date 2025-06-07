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

          {/* Modern, Professional Integrations Section */}
          <section className="w-full py-24 px-4 bg-white">
            <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
              <h2 className="text-5xl font-extrabold mb-3 text-gray-900 text-center tracking-tight">Here, there, and everywhere</h2>
              <p className="text-xl text-gray-700 mb-10 max-w-2xl text-center">Expand your reach with targeted marketing and seamless integrations across major platforms.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {/* Invoice and payment system card */}
                <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center min-h-[260px] transition-transform duration-200 hover:scale-[1.025] hover:shadow-2xl">
                  {/* Simple icon */}
                  <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="mb-4"><rect x="8" y="12" width="32" height="24" rx="4" fill="#6366f1"/><rect x="14" y="18" width="20" height="12" rx="2" fill="#fff"/></svg>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 text-center">Invoice and payment system</h3>
                  <p className="text-base text-gray-500 text-center">Seamless invoicing and payments, fully integrated with your business workflow.</p>
                </div>
                {/* Integrate with leading platforms card */}
                <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center min-h-[260px] transition-transform duration-200 hover:scale-[1.025] hover:shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Integrate with leading platforms</h3>
                  <div className="grid grid-cols-2 gap-6 mb-4">
                    <div className="bg-white rounded-2xl shadow flex items-center justify-center p-4 transition-transform duration-200 hover:scale-105"><img src="/shopify-logo.png" alt="Shopify logo" className="h-10 w-10 object-contain" /></div>
                    <div className="bg-white rounded-2xl shadow flex items-center justify-center p-4 transition-transform duration-200 hover:scale-105"><img src="/squarespace-logo.png" alt="Squarespace logo" className="h-10 w-10 object-contain" /></div>
                    <div className="bg-white rounded-2xl shadow flex items-center justify-center p-4 transition-transform duration-200 hover:scale-105"><img src="/stripe-logo.jpeg" alt="Stripe logo" className="h-10 w-10 object-contain" /></div>
                    <div className="bg-white rounded-2xl shadow flex items-center justify-center p-4 transition-transform duration-200 hover:scale-105"><img src="/paypal-logo.png" alt="PayPal logo" className="h-10 w-10 object-contain" /></div>
                  </div>
                  <div className="text-base text-gray-500 text-center">Shopify, Stripe, Squarespace, PayPal & more</div>
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
