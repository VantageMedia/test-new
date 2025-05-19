import React from 'react';

const partners = [
  {
    name: 'Disney',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/df/The_Walt_Disney_Company_Logo.svg',
  },
  {
    name: 'Mattel',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Mattel_Logo.svg',
  },
  {
    name: 'Apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
  },
];

const Partners: React.FC = () => (
  <section className="py-16 px-4 bg-white border-t border-b border-gray-100">
    <div className="container mx-auto max-w-5xl text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-900">
        Trusted by <span className="text-blue-500">Fortune 500</span> Companies
      </h2>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
        We're proud to have partnered with some of the world's most recognized brands.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-10">
        {partners.map((partner) => (
          <div key={partner.name} className="flex flex-col items-center">
            <img src={partner.logo} alt={partner.name + ' logo'} className="h-16 md:h-20 w-auto mb-2 grayscale hover:grayscale-0 transition duration-300" />
            <span className="text-gray-700 font-medium text-lg mt-2">{partner.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Partners; 