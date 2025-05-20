import React from 'react';

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
    <main className="py-12 bg-white min-h-screen">
      <section className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">OUR <span className="text-blue-500">SERVICES</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col items-center bg-blue-50 rounded-lg p-6 shadow hover:shadow-lg transition">
              <img src={service.img} alt={service.title} className="h-24 mb-4" />
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8"><span className="text-blue-500">EXECUTE</span> A PLAN</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {planItems.map((item) => (
            <div key={item.title} className="flex flex-col items-center bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
              <img src={item.img} alt={item.title} className="h-32 mb-4" />
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 mb-16">
        <div className="bg-blue-100 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8 flex-1">
            <h3 className="text-2xl font-bold mb-2">BOOK A FREE</h3>
            <h2 className="text-3xl font-bold mb-2">CONSULTATION</h2>
            <h5 className="text-lg text-blue-500 mb-4">yes...we did say free</h5>
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition font-semibold">BOOK NOW</button>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">SOME OF <span className="text-blue-500">OUR ACHIEVEMENTS</span></h2>
        <div className="md:flex md:space-x-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="mb-6 text-lg">At Vantage Media, we believe in results-driven marketing that turns vision into impact. With over 80 million people reached and more than 100,000 customers acquired for clients, our strategies are designed to help brands grow and thrive. With a track record of success and over 500+ satisfied clients, we are committed to creating meaningful connections between businesses and their audiences. Whether you're looking to scale your reach or optimize your digital presence, our expertise ensures you get the results you need.</p>
            <a href="#" className="inline-block bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-2 rounded font-semibold shadow hover:from-blue-500 hover:to-blue-700 transition">REACH OUT TODAY</a>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-6">
            {achievements.map((item) => (
              <div key={item.title} className="flex flex-col items-center bg-white rounded-lg p-4 shadow">
                <img src={item.img} alt={item.desc} className="h-16 mb-2" />
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services; 