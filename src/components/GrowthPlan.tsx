
import React from 'react';
import GrowthPlanCarousel from './GrowthPlanCarousel';
import { motion } from 'framer-motion';

const GrowthPlan: React.FC = () => {
  const phaseOneItems = [
    {
      title: "Analyze your business",
      description: "We conduct a thorough analysis of your current business model, industry position, and competitive landscape to identify your unique strengths and opportunities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Set clear goals",
      description: "Together, we establish measurable objectives and KPIs that align with your long-term vision and create a roadmap for sustainable growth.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Break down revenue",
      description: "We identify all your revenue streams and determine which ones have the highest growth potential to focus our efforts where they'll make the biggest impact.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Craft winning strategy",
      description: "Based on our findings, we create a customized strategy tailored specifically to your business needs, industry, and target audience.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=500"
    },
  ];
  
  const phaseTwoItems = [
    {
      title: "Website Optimization",
      description: "We enhance your website's user experience, loading speed, and conversion paths to maximize effectiveness and capture more leads.",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Content Development",
      description: "Our team creates engaging, SEO-friendly content that resonates with your target audience and establishes you as an industry authority.",
      image: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Marketing Framework",
      description: "We implement a multi-channel marketing approach to reach your ideal customers where they are most active and receptive.",
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Analytics Setup",
      description: "We deploy advanced tracking systems to monitor performance and gather actionable insights that inform our ongoing optimization efforts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500"
    },
  ];
  
  const phaseThreeItems = [
    {
      title: "Website goes live",
      description: "Your fully optimized website launches, ready to convert visitors into customers with strategic CTAs and seamless user journeys.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "SEO Improvements",
      description: "We continuously refine your SEO strategy to improve rankings and drive organic traffic, adapting to algorithm changes and emerging trends.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "SMS & Email campaigns",
      description: "Automated marketing sequences nurture leads and guide prospects through your sales funnel with personalized, timely communications.",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Social Media ads",
      description: "Targeted advertising campaigns expand your reach and attract qualified leads to your business through precision demographic targeting.",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&q=80&w=500"
    },
  ];
  
  const phaseFourItems = [
    {
      title: "Performance Review",
      description: "Regular analysis of all marketing efforts to identify what's working and opportunities for improvement, ensuring maximum ROI on your investment.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Strategy Refinement",
      description: "Continuous optimization of your growth strategy based on real-world results and market changes to maintain competitive advantage.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Scaling Successful Channels",
      description: "Increased investment in your most effective marketing channels to accelerate growth and capitalize on proven success formulas.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Long-term Growth Planning",
      description: "Development of expanded strategies to sustain momentum and explore new revenue opportunities that build on your established success.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=500"
    },
  ];
  
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            CUSTOMIZED BUSINESS <span className="text-blue-500">GROWTH PLAN</span> 🚀
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Our proven four-phase approach helps businesses achieve sustainable growth through strategic planning and implementation tailored to your unique needs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div 
            className="bg-white rounded-xl shadow-md p-8 border border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <GrowthPlanCarousel 
              title="Discovery & Strategy" 
              phase="ONE" 
              items={phaseOneItems} 
            />
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl shadow-md p-8 border border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <GrowthPlanCarousel 
              title="Implementation & Setup" 
              phase="TWO" 
              items={phaseTwoItems} 
            />
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl shadow-md p-8 border border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <GrowthPlanCarousel 
              title="Launch & Engagement" 
              phase="THREE" 
              items={phaseThreeItems} 
            />
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl shadow-md p-8 border border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <GrowthPlanCarousel 
              title="Optimization & Scaling" 
              phase="FOUR" 
              items={phaseFourItems} 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GrowthPlan;
