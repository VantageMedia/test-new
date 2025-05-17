import React, { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';

const GlobeSection: React.FC = () => {
  const globeEl = useRef<any>();

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
      // Disable user interaction
      globeEl.current.controls().enableZoom = false;
      globeEl.current.controls().enablePan = false;
      globeEl.current.controls().enableRotate = false;
    }
  }, []);

  return (
    <section className="w-full bg-gray-50 py-24 px-4 min-h-[320px]">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-16">
        {/* Globe on the left */}
        <div className="flex-shrink-0 md:pr-0 pr-4 md:order-1 order-1" style={{ alignSelf: 'center' }}>
          <div style={{ width: '320px', height: '320px', pointerEvents: 'none' }}>
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
        {/* Text on the right */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left md:order-2 order-2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Rock steady<br />
            <span className="text-blue-500">and blazing fast</span>
          </h2>
          <p className="text-lg text-blue-700 bg-blue-100 bg-opacity-60 rounded px-4 py-3 inline-block max-w-xl">
            Vantage Media puts your business within milliseconds of every customer on the planet, with the capacity to handle even the most epic product launches.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobeSection; 