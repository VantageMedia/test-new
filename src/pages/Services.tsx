import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const services = [
  { title: 'WEBSITE DEVELOPMENT', img: '/services/web-dev.png' },
  { title: 'SOCIAL MEDIA', img: '/services/social.png' },
  { title: 'AD CAMPAIGNS', img: '/services/AD-CAMPAIGNS.png' },
  { title: 'SEO', img: '/services/seo.png' },
  { title: 'EMAIL MARKETING', img: '/services/email.png' },
  { title: 'SMS CAMPAIGNS', img: '/services/message.png' },
];

const planItems = [
  { title: 'BREAKDOWN YOUR REVENUE', img: '/services/plan-img-1.png' },
  { title: 'CONTROL YOUR DEMOGRAPHIC', img: '/services/plan-img-2.png' },
];

const achievements = [
  { title: '80M+', desc: 'People reached', img: '/services/users-img.png' },
  { title: '500+', desc: 'Satisfied Clients', img: '/services/personalcard-img.png' },
  { title: '$16.2M+', desc: 'Revenue Generated', img: '/services/revenue-img.png' },
  { title: '5000+', desc: 'Social Media Posts', img: '/services/social-img.png' },
  { title: '100,000+', desc: 'Customers Acquired', img: '/services/sr-sendchat.png' },
  { title: '200+', desc: 'Ad campaigns', img: '/services/sr-signal-high.png' },
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
        <section className="max-w-4xl mx-auto px-4 pt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide">
            OUR <span className="text-blue-400">SERVICES</span>
          </h2>
          <div className="bg-white rounded-2xl shadow-[0_0_32px_0_rgba(100,100,255,0.25)] border border-gray-300 p-6 md:p-10 mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300">
              {services.map((service, i) => (
                <div key={service.title} className="flex flex-col items-center justify-center py-8 px-4">
                  <img src={service.img} alt={service.title} className="h-12 mb-4" />
                  <h3 className="text-base font-semibold text-center tracking-wide">{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-8">
            <span className="text-blue-400">EXECUTE</span> A PLAN
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {planItems.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl shadow-[0_0_32px_0_rgba(100,100,255,0.18)] border border-gray-300 p-8 flex flex-col items-center">
                <img src={item.img} alt={item.title} className="h-40 mb-4 object-contain" />
                <h3 className="text-lg font-semibold text-center tracking-wide">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-[#eaefff] rounded-2xl shadow-[0_0_32px_0_rgba(100,100,255,0.18)] border border-gray-300 p-8 flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">BOOK A FREE <span className="block text-blue-400">CONSULTATION</span></h3>
              <h5 className="text-lg text-gray-500 mb-2">yes...we did say free</h5>
            </div>
            <button className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition text-lg">BOOK NOW</button>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            SOME OF <span className="text-blue-400">OUR ACHIEVEMENTS</span>
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center">
              <p className="mb-6 text-base md:text-lg text-gray-800">At Vantage Media, we believe in results-driven marketing that turns vision into impact. With over 80 million people reached and more than 100,000 customers acquired for clients, our strategies are designed to help brands grow and thrive. With a track record of success and over 500+ satisfied clients, we are committed to creating meaningful connections between businesses and their audiences. Whether you're looking to scale your reach or optimize your digital presence, our expertise ensures you get the results you need.</p>
              <a href="#" className="inline-block bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-semibold shadow transition">REACH OUT TODAY</a>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-6">
              {achievements.map((item) => (
                <div key={item.title} className="flex flex-col items-center bg-gray-100 rounded-xl p-6 shadow border border-gray-200">
                  <img src={item.img} alt={item.desc} className="h-12 mb-2" />
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-xs text-gray-600 text-center">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services; 