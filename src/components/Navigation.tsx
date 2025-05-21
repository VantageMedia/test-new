import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { title: "HOME", href: "/" },
    { title: "PORTFOLIO", href: "/portfolio" },
    { title: "SERVICES", href: "/services" },
    { title: "CASE STUDIES", href: "/case-studies" },
    { title: "CONTACT US", href: "/contact" },
  ];
  
  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-2' : 'bg-white/60 backdrop-blur-md py-4'}`} style={{boxShadow: isScrolled ? '0 2px 24px 0 rgba(100,100,255,0.10)' : '0 2px 24px 0 rgba(100,100,255,0.08)'}}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="font-bold text-xl">Vantage Media</a>
          </div>
          
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
            <Button className="bg-blue-500 hover:bg-blue-600 text-white" asChild>
              <a href="mailto:hello@vantagemediaus.com">FREE CONSULTATION</a>
            </Button>
          </nav>
          
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
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
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full" asChild>
                    <a href="mailto:hello@vantagemediaus.com">FREE CONSULTATION</a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
