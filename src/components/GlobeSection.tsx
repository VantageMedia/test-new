import React, { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';

const GlobeSection: React.FC = () => {
  const globeEl = useRef<any>();

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  return (
    <section className="w-full bg-gray-900 py-20 px-4 flex flex-col md:flex-row items-center justify-center gap-12">
      <div className="w-full md:w-1/2 flex justify-center">
        <div style={{ width: '350px', height: '350px' }}>
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
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Rock steady<br />
          <span className="text-blue-400">and blazing fast</span>
        </h2>
        <p className="text-lg text-blue-100 bg-blue-800 bg-opacity-40 rounded px-4 py-3 inline-block">
          Vantage Media puts your business within milliseconds of every customer on the planet, with the capacity to handle even the most epic product launches.
        </p>
      </div>
    </section>
  );
};

export default GlobeSection; 