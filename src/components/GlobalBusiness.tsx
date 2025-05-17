
import React from 'react';
import { Button } from "@/components/ui/button";

const GlobalBusiness: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Turn your local business into a <span className="text-blue-500">global</span> phenomenon.
            </h2>
            
            <p className="text-gray-700 mb-6">
              Your business has the potential to grow beyond its neighborhood limits. With our expert-crafted strategies, we help you expand your online presence, attract the right audience, and turn local success into worldwide recognition.
            </p>
            
            <p className="text-gray-700 mb-6">
              In today's digital world, a strong online presence isn't just an advantage—it's essential. Whether you're a small business looking to scale or an established brand aiming for greater market share, our comprehensive digital solutions make long-term success feel within reach, so your big ambitions don't feel so far away.
            </p>
            
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2">
              Get Started Today
            </Button>
          </div>
          
          <div className="lg:w-2/5">
            <img 
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
              alt="Global Business Reach" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalBusiness;
