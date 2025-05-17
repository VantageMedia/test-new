import React, { useRef, useEffect, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import Globe from 'react-globe.gl';

// Helper to generate random lat/lon
function randomLatLon() {
  return {
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360
  };
}

const NUM_ARCS = 18;
const NUM_POINTS = 30;

// Types for arcs and points
interface ArcDatum {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: string;
}
interface PointDatum {
  lat: number;
  lng: number;
  size: number;
  color: string;
}

const GlobalBusiness: React.FC = () => {
  const globeEl = useRef<any>();

  // Generate fake arcs and points only once
  const arcsData: ArcDatum[] = useMemo(() =>
    Array.from({ length: NUM_ARCS }).map(() => {
      const start = randomLatLon();
      const end = randomLatLon();
      return {
        startLat: start.lat,
        startLng: start.lng,
        endLat: end.lat,
        endLng: end.lng,
        color: ['#60a5fa', '#22d3ee', '#facc15'][Math.floor(Math.random() * 3)]
      };
    }), []);

  const pointsData: PointDatum[] = useMemo(() =>
    Array.from({ length: NUM_POINTS }).map(() => {
      const { lat, lng } = randomLatLon();
      return {
        lat,
        lng,
        size: Math.random() * 0.6 + 0.7,
        color: '#22d3ee'
      };
    }), []);

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
            <div style={{ width: 640, height: 640, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Globe
                ref={globeEl}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                backgroundColor="rgba(0,0,0,0)"
                showAtmosphere={true}
                atmosphereColor="#60a5fa"
                atmosphereAltitude={0.25}
                width={640}
                height={640}
                arcsData={arcsData}
                arcColor={(d: ArcDatum) => d.color}
                arcDashLength={0.4}
                arcDashGap={0.2}
                arcDashAnimateTime={2000}
                arcStroke={1.5}
                pointsData={pointsData}
                pointLat={(d: PointDatum) => d.lat}
                pointLng={(d: PointDatum) => d.lng}
                pointColor={(d: PointDatum) => d.color}
                pointAltitude={0.01}
                pointRadius={(d: PointDatum) => d.size * 0.8 / 100}
                pointResolution={12}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalBusiness;
