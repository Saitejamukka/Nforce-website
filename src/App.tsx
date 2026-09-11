import { useState } from 'react';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { Header } from './components/layout/Header';
import { FullscreenMenu } from './components/layout/FullscreenMenu';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';

import { HeroSection } from './components/sections/HeroSection';
import { CapabilitiesSection } from './components/sections/CapabilitiesSection';
import { TelecomSection } from './components/sections/TelecomSection';
import { ProductsSection } from './components/sections/ProductsSection';
import { CaseStudiesSection } from './components/sections/CaseStudiesSection';
import { EngagementModelsSection } from './components/sections/EngagementModelsSection';
import { PartnersMarquee } from './components/sections/PartnersMarquee';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { FaqSection } from './components/sections/FaqSection';
import { ChatWidget } from './components/sections/ChatWidget';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', color: 'var(--nf-ink-950)' }}>
      {/* 2px Scroll Progress Bar */}
      <ScrollProgress />

      {/* Sticky Header with Desktop Quick Nav & Menu Overlay */}
      <Header onToggleMenu={() => setMenuOpen((prev) => !prev)} />

      {/* Fullscreen Navigation Overlay */}
      <FullscreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Hero Benchmark (#top) */}
      <HeroSection />

      {/* Chapter 1: WHAT WE DO -> Capabilities (#capabilities) */}
      <CapabilitiesSection />

      {/* Strategic Domain Anchor: Telecom Infrastructure (#telecom) */}
      <TelecomSection />

      {/* Chapter 2: WHAT WE BUILD -> Products (#products) */}
      <ProductsSection />

      {/* Chapter 3: WHAT WE ACHIEVE -> Real Outcomes (#outcomes) */}
      <CaseStudiesSection />

      {/* Chapter 4: HOW WE ENGAGE -> 3 Editorial Paths (#engagement) */}
      <EngagementModelsSection />

      {/* Enterprise Trust: Client Marquee */}
      <PartnersMarquee />

      {/* Who We Are: Strategic Photography & Culture (#about) */}
      <AboutSection />

      {/* Chapter 5: LET'S TALK -> Contact Consultation (#contact) */}
      <ContactSection />

      {/* Common Enterprise Questions (#faq) */}
      <FaqSection />

      {/* Global Footer */}
      <Footer />

      {/* Floating Helpers */}
      <ScrollToTop />
      <ChatWidget />
    </div>
  );
}
