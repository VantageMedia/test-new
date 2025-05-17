
import React from 'react';
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const FreeOffer: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-lg p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 transform translate-x-1/4 -translate-y-1/4">
            <div className="w-full h-full bg-red-500 rounded-full opacity-70 animate-pulse"></div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">GET A FREE</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">WEBSITE DESIGN</h3>
            <p className="text-xl text-gray-600 mb-8">yes...we did say free</p>
            
            <div className="flex justify-center">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-6 text-xl rounded-full shadow-md hover:shadow-lg transition-all">
                CLAIM OFFER <TrendingUp className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <p className="text-xs text-gray-500 mt-4">limited time only</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeOffer;
