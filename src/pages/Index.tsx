import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Braces,
  ChartNoAxesCombined,
  CircleDot,
  Compass,
  Layers3,
  MousePointer2,
  Rocket,
  Sparkles,
  Zap,
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { BookingModalContext } from '@/App';

const asset = (file: string) => `/generated/web-design-redesign-assets/${file}`;

const proofPoints = [
  { value: '48 hr', label: 'first concept sprint' },
  { value: '3.2x', label: 'avg. landing-page lift target' },
  { value: '90+', label: 'launch checks before handoff' },
];

const services = [
  { title: 'Conversion strategy', detail: 'Offer architecture, audience paths, page goals', icon: Compass },
  { title: 'UX and art direction', detail: 'Layouts, hierarchy, responsive interaction systems', icon: MousePointer2 },
  { title: 'Web development', detail: 'Fast React builds, CMS-ready components, clean handoff', icon: Braces },
  { title: 'Brand expression', detail: 'Visual language, type systems, launch-ready assets', icon: Sparkles },
  { title: 'E-commerce flows', detail: 'Product pages, carts, checkout confidence signals', icon: BadgeCheck },
  { title: 'Performance tuning', detail: 'Speed, SEO structure, analytics, conversion QA', icon: Zap },
];

const processSteps = [
  ['01', 'Decode', 'Offer, objections, proof, and conversion moments.'],
  ['02', 'Design', 'Visual system, hierarchy, and premium page direction.'],
  ['03', 'Develop', 'Fast responsive build with production-level details.'],
  ['04', 'Launch', 'QA, tracking, handoff, and confident release.'],
  ['05', 'Improve', 'Data, heatmaps, and iteration after launch.'],
];

const portfolioItems = [
  'SaaS launch page',
  'Local service funnel',
  'High-ticket booking site',
  'E-commerce landing page',
  'Founder-led brand site',
];

const systemItems = [
  'Responsive component library',
  'CMS and content model',
  'Analytics events',
  'SEO structure',
  'Performance budget',
  'Reusable design tokens',
];

const metrics = [
  { value: '+64%', label: 'lead quality focus' },
  { value: '1.1s', label: 'speed budget target' },
  { value: '7 days', label: 'lean launch path' },
  { value: '0 guesswork', label: 'tracked decisions' },
];

const sectionIds = ['home', 'problem', 'services', 'process', 'work', 'systems', 'results', 'start', 'footer'];

const Index: React.FC = () => {
  const { open } = useContext(BookingModalContext);
  const activeSectionRef = useRef(0);
  const isLockedRef = useRef(false);
  const touchStartYRef = useRef<number | null>(null);
  const [activeSection, setActiveSection] = useState(0);

  const goToSection = useCallback((nextIndex: number, shouldLock = true) => {
    const boundedIndex = Math.max(0, Math.min(nextIndex, sectionIds.length - 1));
    if (boundedIndex === activeSectionRef.current) return;

    activeSectionRef.current = boundedIndex;
    setActiveSection(boundedIndex);
    window.history.replaceState(null, '', `#${sectionIds[boundedIndex]}`);

    if (shouldLock) {
      isLockedRef.current = true;
      window.setTimeout(() => {
        isLockedRef.current = false;
      }, 760);
    }
  }, []);

  const goToSectionId = useCallback((sectionId: string) => {
    const sectionIndex = sectionIds.indexOf(sectionId);
    if (sectionIndex >= 0) {
      goToSection(sectionIndex);
    }
  }, [goToSection]);

  const isActive = (sectionIndex: number) => activeSection === sectionIndex;

  const reveal = (sectionIndex: number, delay = 0, offset = { y: 26 }) => ({
    initial: false,
    animate: isActive(sectionIndex)
      ? { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, filter: 'blur(0px)' }
      : { opacity: 0, scale: 0.985, filter: 'blur(8px)', ...offset },
    transition: { duration: 0.68, delay, ease: [0.22, 1, 0.36, 1] },
  });

  const imageReveal = (sectionIndex: number, delay = 0, rotate = 0) => ({
    initial: false,
    animate: isActive(sectionIndex)
      ? { opacity: 1, x: 0, y: 0, scale: 1, rotate, filter: 'blur(0px)' }
      : { opacity: 0, y: 34, scale: 0.96, rotate: rotate - 1.5, filter: 'blur(10px)' },
    transition: { duration: 0.82, delay, ease: [0.16, 1, 0.3, 1] },
  });

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest('[role="dialog"]')) return;
      if (event.ctrlKey || Math.abs(event.deltaY) < 12) return;

      event.preventDefault();
      if (isLockedRef.current) return;

      goToSection(activeSectionRef.current + (event.deltaY > 0 ? 1 : -1));
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartYRef.current = event.touches[0]?.clientY ?? null;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (touchStartYRef.current === null || isLockedRef.current) return;

      const touchEndY = event.changedTouches[0]?.clientY ?? touchStartYRef.current;
      const deltaY = touchStartYRef.current - touchEndY;
      touchStartYRef.current = null;

      if (Math.abs(deltaY) < 48) return;
      goToSection(activeSectionRef.current + (deltaY > 0 ? 1 : -1));
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA' || target?.closest('[role="dialog"]')) return;

      const forwardKeys = ['ArrowDown', 'PageDown', ' '];
      const backwardKeys = ['ArrowUp', 'PageUp'];

      if (![...forwardKeys, ...backwardKeys].includes(event.key)) return;
      event.preventDefault();

      if (isLockedRef.current) return;
      goToSection(activeSectionRef.current + (forwardKeys.includes(event.key) ? 1 : -1));
    };

    const initialHashIndex = sectionIds.indexOf(window.location.hash.replace('#', ''));
    if (initialHashIndex > 0) {
      goToSection(initialHashIndex, false);
    }

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToSection]);

  return (
    <>
      <Helmet>
        <title>Vantage Media | Premium Landing Pages and Websites</title>
        <meta
          name="description"
          content="Vantage Media designs, builds, launches, and improves premium websites and landing pages for companies that need sharper positioning and better conversions."
        />
        <meta
          name="keywords"
          content="landing page design, website design, conversion strategy, web development, Vantage Media"
        />
        <meta property="og:title" content="Vantage Media | Premium Landing Pages and Websites" />
        <meta
          property="og:description"
          content="Strategic, art-directed, high-performing websites for companies ready to look sharper and convert better."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vantagemedia.com" />
        <link rel="canonical" href="https://vantagemedia.com" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="h-[100svh] overflow-hidden bg-[#f8f4ea] text-[#10131f]">
        <Navigation isScrolled={activeSection > 0} onNavigate={goToSectionId} />
        <div className="pointer-events-auto fixed bottom-8 right-6 z-40 hidden flex-col gap-2 lg:flex">
          {sectionIds.slice(0, -1).map((sectionId, index) => (
            <button
              key={sectionId}
              type="button"
              onClick={() => goToSection(index)}
              className="group flex h-7 w-7 items-center justify-center"
              aria-label={`Go to ${sectionId} section`}
            >
              <motion.span
                className="block rounded-full border border-[#10131f]/35 bg-[#fffdf4]/70 backdrop-blur"
                animate={{
                  width: activeSection === index ? 18 : 7,
                  height: activeSection === index ? 18 : 7,
                  backgroundColor: activeSection === index ? '#d4ff43' : 'rgba(255, 253, 244, 0.72)',
                  borderColor: activeSection === index ? '#10131f' : 'rgba(16, 19, 31, 0.35)',
                }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              />
            </button>
          ))}
        </div>

        <main
          className="h-[100svh] transition-transform duration-700 will-change-transform"
          style={{
            transform: `translate3d(0, -${activeSection * 100}svh, 0)`,
            transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)',
          }}
        >
          <section
            id="home"
            data-scroll-section
            className="relative isolate h-[100svh] snap-start snap-always overflow-hidden px-4 pb-8 pt-28 sm:pt-32 lg:px-6 lg:pt-28"
          >
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,#fff7d8_0%,#b9f4ff_42%,#f2ddff_68%,#fff1df_100%)]" />
            <div className="absolute inset-x-0 top-0 -z-10 h-24 bg-[repeating-linear-gradient(90deg,rgba(16,19,31,.08)_0_1px,transparent_1px_88px)]" />

            <div className="mx-auto grid h-full max-w-7xl gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
              <motion.div
                {...reveal(0, 0.08, { x: -26 })}
                className="relative z-10 pt-2"
              >
                <motion.div
                  className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#10131f]/15 bg-white/55 px-4 py-2 text-xs font-black uppercase text-[#174cff] shadow-[0_16px_60px_rgba(23,76,255,.12)] backdrop-blur"
                  initial={false}
                  animate={isActive(0) ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -16, scale: 0.92 }}
                  transition={{ duration: 0.5, delay: isActive(0) ? 0.12 : 0, ease: [0.22, 1, 0.36, 1] }}
                >
                  <CircleDot className="h-3.5 w-3.5 fill-[#d4ff43] text-[#10131f]" />
                  Websites built to sell
                </motion.div>
                <motion.h1
                  className="max-w-5xl text-5xl font-black leading-[0.88] text-[#10131f] sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl"
                  initial={false}
                  animate={isActive(0) ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 32, scale: 0.96 }}
                  transition={{ duration: 0.62, delay: isActive(0) ? 0.18 : 0, ease: [0.16, 1, 0.3, 1] }}
                >
                  Landing pages with unfair visual gravity.
                </motion.h1>
                <motion.p
                  className="mt-6 max-w-xl text-base font-medium leading-7 text-[#2d3140] sm:text-lg"
                  initial={false}
                  animate={isActive(0) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.48, delay: isActive(0) ? 0.3 : 0, ease: [0.22, 1, 0.36, 1] }}
                >
                  Vantage Media designs and builds premium websites that make companies look sharper, explain their value faster, and turn traffic into real pipeline.
                </motion.p>
                <motion.div
                  className="mt-7 flex flex-col gap-3 sm:flex-row"
                  initial={false}
                  animate={isActive(0) ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                  transition={{ duration: 0.46, delay: isActive(0) ? 0.4 : 0, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Button
                    onClick={open}
                    className="h-14 rounded-full bg-[#10131f] px-7 text-base font-black text-white shadow-[0_16px_40px_rgba(16,19,31,.22)] hover:bg-[#174cff]"
                  >
                    Start a build
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <a
                    href="#work"
                    onClick={(event) => {
                      event.preventDefault();
                      goToSectionId('work');
                    }}
                    className="inline-flex h-14 items-center justify-center rounded-full border border-[#10131f]/20 bg-white/50 px-7 text-base font-black text-[#10131f] backdrop-blur transition hover:border-[#174cff] hover:text-[#174cff]"
                  >
                    See the system
                  </a>
                </motion.div>
              </motion.div>

              <motion.div
                {...imageReveal(0, 0.16, 0.4)}
                className="relative min-h-[360px] transform-gpu lg:h-[min(620px,68svh)] lg:min-h-0"
                style={{ perspective: 1200 }}
                animate={isActive(0)
                  ? { opacity: 1, y: 0, scale: 1, rotateX: 0, rotateY: -2, rotate: 0.4, filter: 'blur(0px)' }
                  : { opacity: 0, y: 34, scale: 0.94, rotateX: 8, rotateY: -8, rotate: -1.5, filter: 'blur(10px)' }}
                transition={{ duration: 0.86, delay: isActive(0) ? 0.12 : 0, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={asset('01-hero-website-assembly.png')}
                  alt="Layered browser windows and design components assembling into a premium website"
                    className="absolute inset-0 h-full w-full rounded-[1.4rem] object-cover shadow-[0_28px_90px_rgba(23,76,255,.24)] lg:rounded-[2rem]"
                />
                <div className="absolute -bottom-4 left-4 right-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {proofPoints.map((point, index) => (
                    <motion.div
                      key={point.label}
                      className="border border-[#10131f]/10 bg-[#fffdf4]/82 p-4 backdrop-blur-xl transform-gpu"
                      initial={false}
                      animate={isActive(0) ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 24, rotateX: -18 }}
                      transition={{ duration: 0.44, delay: isActive(0) ? 0.42 + index * 0.08 : 0, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="text-3xl font-black text-[#10131f]">{point.value}</p>
                      <p className="mt-1 text-xs font-black uppercase text-[#174cff]">{point.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section
            id="problem"
            data-scroll-section
            className="relative h-[100svh] snap-start snap-always overflow-hidden bg-[#e9fff7] px-4 pb-10 pt-28 lg:px-6 lg:pb-12 lg:pt-28"
          >
            <div className="mx-auto grid h-full max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
              <motion.div
                {...reveal(1, 0.08, { x: -32 })}
              >
                <p className="mb-4 text-sm font-black uppercase text-[#ff573d]">The problem</p>
                <h2 className="text-4xl font-black leading-[0.94] text-[#10131f] sm:text-5xl lg:text-6xl xl:text-7xl">
                  Most pages leak trust before they ask for action.
                </h2>
                <p className="mt-5 max-w-lg text-base font-medium leading-7 text-[#2e3742] sm:text-lg">
                  Slow pages, generic sections, weak hierarchy, and fuzzy offers make good companies look average. We turn that mess into a page that feels inevitable.
                </p>
              </motion.div>

              <motion.div className="relative" {...imageReveal(1, 0.18, -0.3)}>
                <motion.img
                  src={asset('02-problem-clarity-transform.png')}
                  alt="Chaotic website parts transforming into a clear organized landing page system"
                  className="h-[min(460px,58svh)] w-full object-cover shadow-[14px_14px_0_#10131f] lg:shadow-[18px_18px_0_#10131f]"
                  initial={false}
                  animate={isActive(1)
                    ? { clipPath: 'inset(0% 0% 0% 0%)' }
                    : { clipPath: 'inset(0% 22% 0% 0%)' }}
                  transition={{ duration: 0.78, delay: isActive(1) ? 0.2 : 0, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.div
                  className="absolute -left-2 top-8 max-w-[15rem] bg-[#10131f] p-4 text-white shadow-[0_20px_45px_rgba(16,19,31,.2)] sm:left-8"
                  initial={false}
                  animate={isActive(1) ? { opacity: 1, x: 0, rotate: -2 } : { opacity: 0, x: -40, rotate: -8 }}
                  transition={{ duration: 0.48, delay: isActive(1) ? 0.34 : 0, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-xs font-black uppercase text-[#d4ff43]">Before</p>
                  <p className="mt-2 text-sm font-semibold leading-5">Random sections, unclear proof, no conversion path.</p>
                </motion.div>
                <motion.div
                  className="absolute -bottom-8 right-2 max-w-[16rem] bg-[#d4ff43] p-5 text-[#10131f] shadow-[0_22px_50px_rgba(16,19,31,.22)] sm:right-10"
                  initial={false}
                  animate={isActive(1) ? { opacity: 1, x: 0, rotate: 2 } : { opacity: 0, x: 44, rotate: 8 }}
                  transition={{ duration: 0.48, delay: isActive(1) ? 0.42 : 0, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-xs font-black uppercase">After</p>
                  <p className="mt-2 text-sm font-black leading-5">A sharp offer, premium trust, and a page built around action.</p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          <section
            id="services"
            data-scroll-section
            className="relative h-[100svh] snap-start snap-always overflow-hidden bg-[#f6e8ff] px-4 pb-10 pt-28 lg:px-6 lg:pb-12 lg:pt-28"
          >
            <div className="mx-auto flex h-full max-w-7xl flex-col justify-center">
              <motion.div className="max-w-7xl" {...reveal(2, 0.06, { y: 30 })}>
                <p className="mb-4 text-sm font-black uppercase text-[#174cff]">What we build</p>
                <h2 className="max-w-4xl text-4xl font-black leading-[0.96] text-[#10131f] sm:text-5xl lg:text-6xl xl:text-7xl">
                  The whole machine, not a prettier template.
                </h2>
              </motion.div>

              <div className="mt-7 grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
                <motion.div className="relative h-[min(340px,37svh)] overflow-hidden bg-[#fff3bf] shadow-[12px_12px_0_#174cff]" {...imageReveal(2, 0.16, 0)}>
                  <img
                    src={asset('03-services-design-lab.png')}
                    alt="Creative design lab with modular website services and interface controls"
                    className="h-full w-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#d4ff43]/40 to-transparent"
                    initial={false}
                    animate={isActive(2) ? { x: ['-100%', '760%'], opacity: [0, 1, 0] } : { x: '-100%', opacity: 0 }}
                    transition={{ duration: 1.1, delay: isActive(2) ? 0.32 : 0, ease: 'easeInOut' }}
                  />
                </motion.div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1400 }}>
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <motion.div
                        key={service.title}
                        initial={false}
                        animate={isActive(2)
                          ? { opacity: 1, y: 0, rotateX: 0, rotateY: 0, rotateZ: index % 2 === 0 ? -0.35 : 0.35, scale: 1 }
                          : { opacity: 0, y: 32, rotateX: 28, rotateY: index % 2 === 0 ? -18 : 18, rotateZ: index % 2 === 0 ? -3 : 3, scale: 0.9 }}
                        transition={{ duration: 0.58, delay: isActive(2) ? 0.18 + index * 0.075 : 0, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ y: -8, rotateX: 3, rotateY: index % 2 === 0 ? -3 : 3, scale: 1.015, transition: { duration: 0.18 } }}
                        className="group border border-[#10131f]/12 bg-[#fffdf4]/70 p-4 backdrop-blur transition-colors hover:bg-[#10131f] hover:text-white"
                      >
                        <motion.div
                          className="mb-4 flex h-10 w-10 items-center justify-center bg-[#d4ff43] text-[#10131f]"
                          initial={false}
                          animate={isActive(2) ? { scale: 1, rotate: [index % 2 === 0 ? -18 : 18, 0] } : { scale: 0.55, rotate: -24 }}
                          transition={{ duration: 0.42, delay: isActive(2) ? 0.28 + index * 0.075 : 0, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <Icon className="h-5 w-5" />
                        </motion.div>
                        <h3 className="text-lg font-black">{service.title}</h3>
                        <p className="mt-2 text-sm font-semibold leading-5 text-[#4a4c58] transition group-hover:text-white">
                          {service.detail}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section
            id="process"
            data-scroll-section
            className="relative h-[100svh] snap-start snap-always overflow-hidden bg-[#fff1d7] px-4 pb-10 pt-28 lg:px-6 lg:pb-12 lg:pt-28"
          >
            <div className="mx-auto flex h-full max-w-7xl flex-col justify-center">
              <motion.div className="space-y-6" {...reveal(3, 0.06, { y: 32 })}>
                <div className="max-w-5xl">
                  <p className="mb-4 text-sm font-black uppercase text-[#ff573d]">Process</p>
                  <h2 className="max-w-4xl text-4xl font-black leading-[0.96] text-[#10131f] sm:text-5xl lg:text-6xl">
                    From first thought to launched page.
                  </h2>
                </div>
                <div className="grid gap-4 md:grid-cols-5">
                  {processSteps.map(([number, title, detail], index) => {
                    const stepDelay = index * 0.24;

                    return (
                      <div
                        key={number}
                        className="relative min-h-[196px] min-w-0 overflow-hidden"
                      >
                        <motion.div
                          className="absolute inset-x-0 bottom-[50px] h-[146px] origin-bottom bg-[#10131f]"
                          initial={false}
                          animate={isActive(3) ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
                          transition={{ duration: 0.5, delay: isActive(3) ? 0.3 + stepDelay : 0, ease: [0.22, 1, 0.36, 1] }}
                        />
                        <motion.div
                          className="absolute left-0 right-0 bottom-[50px] h-1 origin-left bg-[#10131f]"
                          initial={false}
                          animate={isActive(3) ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                          transition={{ duration: 0.4, delay: isActive(3) ? 0.1 + stepDelay : 0, ease: [0.22, 1, 0.36, 1] }}
                        />
                        <motion.p
                          className="absolute left-5 right-5 top-5 text-sm font-semibold leading-6 text-white"
                          initial={false}
                          animate={isActive(3) ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                          transition={{ duration: 0.34, delay: isActive(3) ? 0.58 + stepDelay : 0, ease: [0.22, 1, 0.36, 1] }}
                        >
                          {detail}
                        </motion.p>
                        <motion.div
                          className="absolute inset-x-0 bottom-0 flex min-w-0 items-baseline gap-2 px-5 pb-1 pt-4"
                          initial={false}
                          animate={isActive(3) ? { opacity: 1, x: 0 } : { opacity: 0, x: -18 }}
                          transition={{ duration: 0.34, delay: isActive(3) ? 0.18 + stepDelay : 0, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <p className="text-xl font-black leading-none text-[#174cff] lg:text-2xl">{number}</p>
                          <p className="min-w-0 text-xl font-black leading-none lg:text-2xl">{title}</p>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div className="relative mx-auto mt-6 w-full overflow-hidden" {...imageReveal(3, 0.16, 0)}>
                <img
                  src={asset('04-process-launch-path.png')}
                  alt="Looping process path showing discovery, design, build, test, launch, and growth"
                  className="mx-auto h-[min(360px,35svh)] w-full object-cover object-center"
                />
              </motion.div>
            </div>
          </section>

          <section
            id="work"
            data-scroll-section
            className="relative h-[100svh] snap-start snap-always overflow-hidden bg-[#dff3ff] px-4 pb-10 pt-28 lg:px-6 lg:pb-12 lg:pt-28"
          >
            <div className="mx-auto flex h-full max-w-7xl flex-col justify-center">
              <motion.div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start" {...reveal(4, 0.06, { x: -28 })}>
                <div>
                  <p className="mb-4 text-sm font-black uppercase text-[#174cff]">Portfolio direction</p>
                  <h2 className="max-w-5xl text-4xl font-black leading-[0.96] text-[#10131f] sm:text-5xl lg:text-6xl xl:text-7xl">
                    Every business gets its own world.
                  </h2>
                </div>
                <div className="space-y-2 lg:pt-8">
                  {portfolioItems.map((item, index) => (
                    <motion.div
                      key={item}
                      className="flex items-center justify-between border-b border-[#10131f]/18 py-3"
                      initial={false}
                      animate={isActive(4) ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
                      transition={{ duration: 0.36, delay: isActive(4) ? 0.14 + index * 0.045 : 0, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span className="font-black">{item}</span>
                      <span className="text-sm font-black text-[#ff573d]">0{index + 1}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div className="mt-8 overflow-hidden bg-[#10131f] p-3 shadow-[16px_16px_0_#d4ff43] lg:shadow-[22px_22px_0_#d4ff43]" {...imageReveal(4, 0.18, -0.2)}>
                <motion.img
                  src={asset('05-portfolio-floating-sites.png')}
                  alt="Floating browser previews showing different website project directions"
                  className="h-[min(500px,54svh)] w-full object-cover"
                  initial={false}
                  animate={isActive(4)
                    ? { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', scale: 1 }
                    : { clipPath: 'polygon(8% 8%, 92% 0, 100% 86%, 0 100%)', scale: 1.04 }}
                  transition={{ duration: 0.82, delay: isActive(4) ? 0.22 : 0, ease: [0.16, 1, 0.3, 1] }}
                />
              </motion.div>
            </div>
          </section>

          <section
            id="systems"
            data-scroll-section
            className="relative h-[100svh] snap-start snap-always overflow-hidden bg-[#efffe0] px-4 pb-10 pt-28 lg:px-6 lg:pb-12 lg:pt-28"
          >
            <div className="mx-auto grid h-full max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <motion.div className="relative order-2 lg:order-1" {...imageReveal(5, 0.1, -0.5)}>
                <img
                  src={asset('06-technology-interface-system.png')}
                  alt="Interface architecture showing design systems, responsive grids, CMS, analytics, and performance"
                  className="h-[min(530px,62svh)] w-full object-cover shadow-[-14px_14px_0_#174cff] lg:shadow-[-18px_18px_0_#174cff]"
                />
                <motion.div
                  className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#d4ff43]/45 to-transparent mix-blend-multiply"
                  initial={false}
                  animate={isActive(5) ? { y: ['-30%', '520%'], opacity: [0, 0.9, 0] } : { y: '-30%', opacity: 0 }}
                  transition={{ duration: 1.2, delay: isActive(5) ? 0.28 : 0, ease: 'easeInOut' }}
                />
              </motion.div>
              <motion.div className="order-1 lg:order-2" {...reveal(5, 0.16, { x: 28 })}>
                <p className="mb-4 text-sm font-black uppercase text-[#ff573d]">Systems</p>
                <h2 className="text-4xl font-black leading-[0.96] text-[#10131f] sm:text-5xl lg:text-6xl xl:text-7xl">
                  Beautiful on the surface. Serious underneath.
                </h2>
                <p className="mt-5 max-w-xl text-base font-medium leading-7 text-[#2d3727] sm:text-lg">
                  A premium page still has to load fast, scale cleanly, edit easily, and tell you what is working. We build the structure behind the style.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {systemItems.map((item, index) => (
                    <motion.div
                      key={item}
                      className="flex items-center gap-3 bg-[#fffdf4]/72 px-4 py-3 font-black shadow-[8px_8px_0_rgba(16,19,31,.08)]"
                      initial={false}
                      animate={isActive(5) ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: index % 2 === 0 ? -18 : 18, y: 10 }}
                      transition={{ duration: 0.34, delay: isActive(5) ? 0.24 + index * 0.035 : 0, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Layers3 className="h-5 w-5 text-[#174cff]" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section
            id="results"
            data-scroll-section
            className="relative h-[100svh] snap-start snap-always overflow-hidden bg-[#f7e8dc] px-4 pb-10 pt-28 lg:px-6 lg:pb-12 lg:pt-28"
          >
            <div className="mx-auto flex h-full max-w-7xl flex-col justify-center">
              <motion.div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end" {...reveal(6, 0.06, { y: 30 })}>
                <div>
                  <p className="mb-4 text-sm font-black uppercase text-[#174cff]">Impact</p>
                  <h2 className="text-4xl font-black leading-[0.96] text-[#10131f] sm:text-5xl lg:text-6xl xl:text-7xl">
                    Good design is a revenue instrument.
                  </h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-4">
                  {metrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      className="bg-[#10131f] p-4 text-white"
                      initial={false}
                      animate={isActive(6) ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 18, scale: 0.96 }}
                      transition={{ duration: 0.38, delay: isActive(6) ? 0.12 + index * 0.055 : 0, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="text-2xl font-black text-[#d4ff43] lg:text-3xl">{metric.value}</p>
                      <p className="mt-2 text-xs font-black uppercase text-white/72">{metric.label}</p>
                      <div className="mt-4 h-1 overflow-hidden bg-white/12">
                        <motion.div
                          className="h-full bg-[#d4ff43]"
                          initial={false}
                          animate={isActive(6) ? { width: `${58 + index * 10}%` } : { width: '0%' }}
                          transition={{ duration: 0.72, delay: isActive(6) ? 0.28 + index * 0.06 : 0, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div className="relative mt-8 h-[min(500px,54svh)] overflow-hidden" {...imageReveal(6, 0.18, 0)}>
                <img
                  src={asset('07-results-growth-visualization.png')}
                  alt="Creative data visualization showing leads, speed, conversion, and growth"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <motion.div
                  className="absolute bottom-4 left-4 max-w-md bg-[#fffdf4]/86 p-5 shadow-[0_18px_55px_rgba(16,19,31,.18)] backdrop-blur lg:bottom-6 lg:left-6 lg:p-6"
                  initial={false}
                  animate={isActive(6) ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
                  transition={{ duration: 0.48, delay: isActive(6) ? 0.34 : 0, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ChartNoAxesCombined className="mb-4 h-8 w-8 text-[#174cff]" />
                  <p className="text-2xl font-black">Measure what makes the page worth more.</p>
                  <p className="mt-3 text-sm font-semibold leading-6 text-[#4a4c58]">
                    We structure every launch around speed, clarity, credibility, tracking, and the next action.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          <section
            id="start"
            data-scroll-section
            className="relative h-[100svh] snap-start snap-always overflow-hidden bg-[#e8edff] px-4 pb-10 pt-28 lg:px-6 lg:pb-12 lg:pt-28"
          >
            <div className="mx-auto grid h-full max-w-7xl gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <motion.div {...reveal(7, 0.08, { x: -30 })}>
                <p className="mb-4 text-sm font-black uppercase text-[#ff573d]">Start building</p>
                <h2 className="text-5xl font-black leading-[0.9] text-[#10131f] sm:text-6xl lg:text-7xl xl:text-8xl">
                  Your next website should feel impossible to ignore.
                </h2>
                <p className="mt-6 max-w-xl text-base font-medium leading-7 text-[#2e3140] sm:text-lg">
                  Bring us the offer. We will turn it into a page with strategy, taste, speed, and enough visual confidence to sell the work before your sales call begins.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button
                    onClick={open}
                    className="h-14 rounded-full bg-[#174cff] px-7 text-base font-black text-white shadow-[0_18px_45px_rgba(23,76,255,.28)] hover:bg-[#10131f]"
                  >
                    Book the first sprint
                    <Rocket className="ml-2 h-5 w-5" />
                  </Button>
                  <a
                    href="mailto:hello@vantagemediaus.com"
                    className="inline-flex h-14 items-center justify-center rounded-full border border-[#10131f]/20 bg-[#fffdf4]/65 px-7 text-base font-black text-[#10131f] backdrop-blur transition hover:border-[#ff573d] hover:text-[#ff573d]"
                  >
                    hello@vantagemediaus.com
                  </a>
                </div>
              </motion.div>
              <motion.div className="relative h-[min(560px,66svh)] overflow-hidden shadow-[14px_14px_0_#ff573d] lg:shadow-[18px_18px_0_#ff573d]" {...imageReveal(7, 0.16, 0.4)}>
                <img
                  src={asset('08-cta-launch-portal.png')}
                  alt="Browser-window portal with website components launching into a finished digital experience"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <motion.div
                  className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#174cff]/45"
                  initial={false}
                  animate={isActive(7) ? { scale: [0.8, 1.35], opacity: [0, 0.9, 0] } : { scale: 0.8, opacity: 0 }}
                  transition={{ duration: 1.3, delay: isActive(7) ? 0.35 : 0, repeat: isActive(7) ? Infinity : 0, repeatDelay: 0.6, ease: 'easeOut' }}
                />
                <motion.div
                  className="absolute right-8 top-8 bg-[#d4ff43] px-4 py-3 text-sm font-black uppercase text-[#10131f] shadow-[10px_10px_0_rgba(16,19,31,.16)]"
                  initial={false}
                  animate={isActive(7) ? { opacity: 1, y: 0, rotate: 2 } : { opacity: 0, y: -22, rotate: -8 }}
                  transition={{ duration: 0.45, delay: isActive(7) ? 0.42 : 0, ease: [0.22, 1, 0.36, 1] }}
                >
                  Launch ready
                </motion.div>
              </motion.div>
            </div>
          </section>
          <footer
            id="footer"
            data-scroll-section
            className="flex h-[100svh] items-center bg-[#10131f] px-4 py-10 text-white lg:px-6"
          >
          <motion.div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between" {...reveal(8, 0.08, { y: 24 })}>
            <div>
              <p className="text-xl font-black">Vantage Media</p>
              <p className="mt-2 text-sm font-semibold text-white/58">Premium landing pages, websites, and launch systems.</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-black text-white/72">
              <a href="#services" onClick={(event) => { event.preventDefault(); goToSectionId('services'); }} className="hover:text-[#d4ff43]">Services</a>
              <a href="#process" onClick={(event) => { event.preventDefault(); goToSectionId('process'); }} className="hover:text-[#d4ff43]">Process</a>
              <a href="#work" onClick={(event) => { event.preventDefault(); goToSectionId('work'); }} className="hover:text-[#d4ff43]">Work</a>
              <a href="#start" onClick={(event) => { event.preventDefault(); goToSectionId('start'); }} className="hover:text-[#d4ff43]">Start</a>
            </div>
          </motion.div>
          </footer>
        </main>
      </div>
    </>
  );
};

export default Index;
