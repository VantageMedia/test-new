
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronRight } from 'lucide-react';

interface CarouselItem {
  title: string;
  description: React.ReactNode;
  image?: string;
}

interface GrowthCarouselProps {
  title: string;
  phase: string;
  items: CarouselItem[];
}

const GrowthPlanCarousel: React.FC<GrowthCarouselProps> = ({ title, phase, items }) => {
  return (
    <div className="relative">
      <div className="mb-6">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
          PHASE {phase}
        </span>
        <h3 className="text-2xl font-bold mt-2">{title}</h3>
      </div>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/1">
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-0">
                  <div className="p-6">
                    <h4 className="text-lg font-semibold mb-3">{item.title}</h4>
                    <div className="text-gray-600 mb-4">{item.description}</div>
                    {item.image && (
                      <div className="rounded-lg overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2" />
      </Carousel>
      
      <div className="mt-4 text-right">
        <a href="#" className="inline-flex items-center text-blue-500 hover:text-blue-700 text-sm font-medium group">
          Learn more <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default GrowthPlanCarousel;
