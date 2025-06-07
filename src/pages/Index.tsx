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
          <section className="w-full py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
              {/* Left: Headline and subheadline */}
              <div className="flex-1 flex flex-col items-start justify-center mb-10 md:mb-0">
                <h2 className="text-5xl font-extrabold mb-4 text-gray-900 leading-tight">Here, there, and everywhere</h2>
                <p className="text-xl text-gray-700 mb-10 max-w-lg">Expand your reach with targeted marketing and seamless integrations across major platforms.</p>
                {/* Browser mockup */}
                <div className="w-full max-w-lg rounded-2xl shadow-2xl bg-white p-0 mb-12 overflow-hidden relative">
                  <img src="/browser-mockup.png" alt="Browser Mockup" className="w-full h-auto" />
                  {/* 3D iPhone image overlapping */}
                  <img src="/iphone-3d.png" alt="iPhone 16 Pro" className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-40 h-auto drop-shadow-2xl rounded-2xl z-10" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                  {/* Invoice and payment system card */}
                  <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Invoice and payment system</h3>
                    <img src="/iphone-3d.png" alt="iPhone Invoice" className="w-24 h-auto mb-2" />
                    <div className="text-sm text-gray-500 text-center">Mobile App</div>
                  </div>
                  {/* Integrate with leading platforms card */}
                  <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Integrate with leading platforms</h3>
                    <div className="grid grid-cols-2 gap-4 mb-2">
                      <img src="/shopify-logo.png" alt="Shopify" className="h-10" />
                      <img src="/squarspace-logo.png" alt="Squarespace" className="h-10" />
                      <img src="/stripe-logo.jpeg" alt="Stripe" className="h-10" />
                      <img src="/paypal.svg" alt="PayPal" className="h-10" />
                    </div>
                    <div className="text-sm text-gray-500 text-center">Shopify, Stripe, Squarespace, PayPal & more</div>
                  </div>
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
