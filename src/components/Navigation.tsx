import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Menu, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { BookingModalContext } from '@/App';

const navItems = [
  { title: 'Services', id: 'services' },
  { title: 'Process', id: 'process' },
  { title: 'Work', id: 'work' },
  { title: 'Results', id: 'results' },
];

interface NavigationProps {
  isScrolled?: boolean;
  onNavigate?: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isScrolled = false, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { open } = useContext(BookingModalContext);

  const openBooking = () => {
    setIsMenuOpen(false);
    open();
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 py-4 lg:px-6">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between border px-3 py-2 transition-all duration-300 ${
          isScrolled
            ? 'border-[#10131f]/14 bg-[#fffdf4]/45 shadow-[0_18px_55px_rgba(16,19,31,.1)] backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <Link
          to="/"
          onClick={(event) => {
            if (onNavigate) {
              event.preventDefault();
              onNavigate('home');
            }
          }}
          className="flex min-w-0 items-center gap-3"
          aria-label="Vantage Media home"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#10131f] text-[#d4ff43]">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="min-w-0">
            <span className="block text-lg font-black leading-none text-[#10131f]">Vantage</span>
            <span className="block text-[10px] font-black uppercase text-[#174cff]">Media</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.title}
              href={`#${item.id}`}
              onClick={(event) => {
                if (onNavigate) {
                  event.preventDefault();
                  onNavigate(item.id);
                }
              }}
              className="px-4 py-3 text-sm font-black text-[#10131f]/78 transition hover:bg-[#10131f] hover:text-white"
            >
              {item.title}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="mailto:hello@vantagemediaus.com"
            className="text-sm font-black text-[#10131f]/70 transition hover:text-[#174cff]"
          >
            hello@vantagemediaus.com
          </a>
          <Button
            onClick={openBooking}
            className="h-11 rounded-full bg-[#10131f] px-5 font-black text-white hover:bg-[#174cff]"
          >
            Start
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-11 w-11 rounded-none border border-[#10131f]/12 bg-[#fffdf4]/55 backdrop-blur">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-[#fff8e7]">
              <nav className="mt-12 flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.title}
                    href={`#${item.id}`}
                    onClick={(event) => {
                      if (onNavigate) {
                        event.preventDefault();
                        onNavigate(item.id);
                      }
                      setIsMenuOpen(false);
                    }}
                    className="border-b border-[#10131f]/12 py-5 text-3xl font-black text-[#10131f]"
                  >
                    {item.title}
                  </a>
                ))}
                <Button
                  onClick={openBooking}
                  className="mt-5 h-14 rounded-full bg-[#174cff] px-6 text-base font-black text-white hover:bg-[#10131f]"
                >
                  Start a build
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
