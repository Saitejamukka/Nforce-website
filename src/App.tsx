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
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { AboutSection } from './components/sections/AboutSection';
import { StatsStrip } from './components/sections/StatsStrip';
import { SolutionsExplorer } from './components/sections/SolutionsExplorer';
import { ServiceFinder } from './components/sections/ServiceFinder';
import { IndustriesSection } from './components/sections/IndustriesSection';
import { PartnersMarquee } from './components/sections/PartnersMarquee';
import { CareersSection } from './components/sections/CareersSection';
import { ContactSection } from './components/sections/ContactSection';
import { CtaBanner } from './components/sections/CtaBanner';
import { FaqSection } from './components/sections/FaqSection';
import { ChatWidget } from './components/sections/ChatWidget';

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--nf-gray-100)', color: 'var(--nf-ink-950)' }}>
      {/* 2px Scroll Progress Bar */}
      <ScrollProgress />

      {/* Sticky Header with Desktop Quick Nav & Menu Overlay */}
      <Header onToggleMenu={() => setMenuOpen((prev) => !prev)} />

      {/* Fullscreen Navigation Overlay */}
      <FullscreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* 1. Hero Section (#top) */}
      <HeroSection />

      {/* 2. 4 Strategic Capabilities Pillars (#capabilities) */}
      <CapabilitiesSection />

      {/* 3. Strategic Domain Differentiator: Telecom (#telecom) */}
      <TelecomSection />

      {/* 4. Innovation & Products: 12 Proprietary Platforms (#products) */}
      <ProductsSection />

      {/* 5. Real Outcomes & Validated Case Studies (#outcomes) */}
      <CaseStudiesSection />

      {/* 6. How We Engage: 6 Delivery & Governance Models (#engagement) */}
      <EngagementModelsSection />

      {/* 7. Client Testimonials & Social Proof */}
      <TestimonialsSection />

      {/* 8. Editorial About Section (#about) */}
      <AboutSection />

      {/* 9. Stats Strip: Scale & Metrics */}
      <StatsStrip />

      {/* 10. Solutions Explorer (#solutions) */}
      <SolutionsExplorer />

      {/* 11. Service Finder Catalog */}
      <ServiceFinder />

      {/* 12. Industries Section (#industries) */}
      <IndustriesSection />

      {/* 13. Enterprise Partners Marquee */}
      <PartnersMarquee />

      {/* 14. Careers & Culture with Employee Voices (#careers) */}
      <CareersSection />

      {/* 15. Enterprise Contact & Capability Consultation (#contact) */}
      <ContactSection />

      {/* 16. High-Impact CTA Banner */}
      <CtaBanner />

      {/* 17. FAQ Section (#faq) */}
      <FaqSection />

      {/* 18. Footer */}
      <Footer />

      {/* Floating Helpers */}
      <ScrollToTop />
      <ChatWidget />
    </div>
  );
}

export default App;
