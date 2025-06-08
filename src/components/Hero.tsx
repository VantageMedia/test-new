import React, { useContext } from 'react';
import { Button } from "@/components/ui/button";
import { BookingModalContext } from "@/App";

const Hero: React.FC = () => {
  const { open } = useContext(BookingModalContext);
  return (
    <section className="py-20 px-4 bg-gray-50 min-h-[60vh] flex items-center justify-center">
      <div className="container mx-auto max-w-4xl flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          It's not just a <span className="text-blue-500">business</span>, its<br />
          your <span className="text-blue-500">dream</span>.
        </h1>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 mb-12 mt-2" onClick={open}>
          FREE CONSULTATION
        </Button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200 pt-8 w-full">
          <div>
            <p className="font-bold text-2xl">4,410+</p>
            <p className="text-sm text-gray-600">online business case studies</p>
          </div>
          <div>
            <p className="font-bold text-2xl">Used by 12,000+</p>
            <p className="text-sm text-gray-600">happy customers</p>
          </div>
          <div>
            <p className="font-bold text-2xl">$16,244,563+</p>
            <p className="text-sm text-gray-600">revenue generated for clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
