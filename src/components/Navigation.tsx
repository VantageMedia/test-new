import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingModal from './BookingModal';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { title: "HOME", href: "/" },
    { title: "SERVICES", href: "/services" },
    { title: "BLOG", href: "/blog" },
  ];
  
  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-2' : 'bg-white/60 backdrop-blur-md py-4'}`} style={{boxShadow: isScrolled ? '0 2px 24px 0 rgba(100,100,255,0.10)' : '0 2px 24px 0 rgba(100,100,255,0.08)'}}>
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#6366f1]">Vantage Media</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href} 
                  className="text-sm font-medium hover:text-blue-500 transition-colors"
                >
                  {item.title}
                </a>
              ))}
              <Button
                asChild
                className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-full text-white bg-[#6366f1] hover:bg-[#4f46e5] transition-colors shadow-sm hover:shadow-md"
              >
                <a href="mailto:hello@vantagemediaus.com">FREE CONSULTATION</a>
              </Button>
            </nav>
            
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <nav className="flex flex-col space-y-4 mt-8">
                    {navItems.map((item, index) => (
                      <a 
                        key={index} 
                        href={item.href} 
                        className="text-lg font-medium hover:text-blue-500 transition-colors"
                      >
                        {item.title}
                      </a>
                    ))}
                    <Button
                      asChild
                      className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-full text-white bg-[#6366f1] hover:bg-[#4f46e5] transition-colors shadow-sm hover:shadow-md"
                    >
                      <a href="mailto:hello@vantagemediaus.com">FREE CONSULTATION</a>
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  );
};

export default Navigation;
