import React from 'react';
import { motion } from 'framer-motion';

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

const logoVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.7, type: 'spring' } }),
};

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
        {partners.map((partner, i) => (
          <motion.div
            key={partner.name}
            className="flex flex-col items-center"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={logoVariants}
            whileHover={{ scale: 1.12, filter: 'grayscale(0%)', zIndex: 2 }}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={partner.logo}
              alt={partner.name + ' logo'}
              className="h-16 md:h-20 w-auto mb-2 grayscale transition duration-300"
              style={{ maxWidth: 120, objectFit: 'contain', background: 'transparent' }}
              loading="lazy"
            />
            <span className="text-gray-700 font-medium text-lg mt-2">{partner.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Partners; 