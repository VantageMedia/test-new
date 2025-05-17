import React, { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Globe from 'react-globe.gl';

const GlobalBusiness: React.FC = () => {
  const globeEl = useRef<any>();

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
      globeEl.current.controls().enableZoom = false;
      globeEl.current.controls().enablePan = false;
      globeEl.current.controls().enableRotate = false;
    }
  }, []);

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
          <div className="lg:w-2/5 flex justify-center items-center">
            <div className="rounded-lg shadow-lg overflow-hidden bg-white" style={{ width: '100%', maxWidth: 400, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '100%', height: '100%' }}>
                <Globe
                  ref={globeEl}
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  backgroundColor="rgba(0,0,0,0)"
                  showAtmosphere={true}
                  atmosphereColor="#3b82f6"
                  atmosphereAltitude={0.25}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalBusiness;
