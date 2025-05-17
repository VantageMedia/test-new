
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceCard = ({ 
  title, 
  description, 
  icon,
  delay = 0
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div 
      className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="flex justify-center items-center mb-6">
        <div className="bg-blue-50 p-5 rounded-full">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-center mb-4">{title}</h3>
      <p className="text-gray-600 text-center mb-6">{description}</p>
      <div className="flex justify-center">
        <a href="#" className="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium group">
          Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
};

const RevenueServices: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto max-w-7xl">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          SEE HOW <span className="text-blue-500">WE</span> CAN GENERATE <br className="hidden md:block" /> REVENUE FOR <span className="text-blue-500">YOU</span>
        </motion.h2>
        
        <motion.p 
          className="text-gray-600 text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our expert team provides comprehensive business growth solutions tailored to your unique needs, 
          helping you achieve sustainable success in today's competitive digital landscape.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            title="Website Development"
            description="Custom-built, responsive websites designed to convert visitors into loyal customers. Optimized for performance, user experience, and search engines."
            icon={<svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>}
            delay={0.1}
          />
          
          <ServiceCard
            title="SEO Optimization"
            description="Data-driven strategies that boost your visibility in search engines and drive high-quality organic traffic to your website, increasing your market reach."
            icon={<svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path></svg>}
            delay={0.2}
          />
          
          <ServiceCard
            title="Social Media Marketing"
            description="Engaging campaigns that build brand awareness, foster community, and drive conversions through strategic content creation and audience targeting."
            icon={<svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
            delay={0.3}
          />
          
          <ServiceCard
            title="Customer Retention"
            description="Proven strategies that increase loyalty, boost customer lifetime value, and transform satisfied customers into passionate brand advocates."
            icon={<svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default RevenueServices;
