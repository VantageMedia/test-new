import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  {
    name: 'Disney',
    logo: '/partners/disney.svg',
  },
  {
    name: 'Mattel',
    logo: '/partners/mattel.png',
  },
  {
    name: 'Apple',
    logo: '/partners/apple.png',
  },
];

const testimonials = [
  {
    quote: "Vantage Media delivered a website that exceeded our expectations. The process was seamless and the results were immediate!",
    name: "Director of Digital, Disney",
    company: "Disney"
  },
  {
    quote: "Our new site is fast, beautiful, and converts better than ever. We couldn't be happier!",
    name: "VP of Marketing, Mattel",
    company: "Mattel"
  },
  {
    quote: "The Vantage Media team is world-class. Our Apple project launched on time and on budget.",
    name: "Product Manager, Apple",
    company: "Apple"
  },
];

const logoVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.7, type: 'spring' } }),
};

const testimonialVariants = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7, type: 'spring' } },
  exit: { opacity: 0, x: -40, transition: { duration: 0.5 } },
};

const [current, setCurrent] = [0, () => {}]; // placeholder for carousel logic

const Partners: React.FC = () => {
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-blue-50 to-white border-t border-b border-gray-100 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{background: 'radial-gradient(circle at 60% 40%, #60a5fa33 0%, transparent 70%)'}} />
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">
          Trusted by <span className="text-blue-500">Fortune 500</span> Companies
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
          We build high-converting, visually stunning websites for the world's most recognized brands—and we can do the same for you.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 mb-12">
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
              <div className="flex items-center justify-center h-24 w-40 bg-transparent mb-2">
                <img
                  src={partner.logo}
                  alt={partner.name + ' logo'}
                  className="max-h-20 max-w-36 object-contain mx-auto"
                  style={{ display: 'block' }}
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
        {/* Testimonial Carousel */}
        <div className="max-w-2xl mx-auto mb-10">
          <motion.div
            key={current}
            className="bg-white rounded-xl shadow-lg px-8 py-8 md:py-10 mb-4 border border-blue-100"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={testimonialVariants}
          >
            <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-4">“{testimonials[current].quote}”</p>
            <div className="text-gray-700 font-medium">{testimonials[current].name}</div>
            <div className="text-gray-400 text-sm">{testimonials[current].company}</div>
          </motion.div>
          <div className="flex justify-center gap-2 mt-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${idx === current ? 'bg-blue-500' : 'bg-gray-300'} transition-all`}
                onClick={() => setCurrent(idx)}
                aria-label={`Show testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300"
        >
          Get Your Website
        </motion.a>
      </div>
    </section>
  );
};

export default Partners; 