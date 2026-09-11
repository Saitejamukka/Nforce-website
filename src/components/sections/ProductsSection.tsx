import React, { useState } from 'react';
import { NFORCE_PRODUCTS } from '../../data/products';
import { ProductCategoryData } from '../products/ProductCategoryCard';
import { ProductCategoryGrid } from '../products/ProductCategoryGrid';
import { ProductPreview } from '../products/ProductPreview';
import { ImpactMetric } from '../products/ImpactMetric';
import { ArrowRight } from 'lucide-react';

const CATEGORIES_DATA: (ProductCategoryData & { productIds: string[] })[] = [
  {
    id: 'ai-automation',
    name: 'AI & Automation',
    sentence: 'Intelligent automation for smarter enterprise operations.',
    iconName: 'BrainCircuit',
    productCount: 2,
    productIds: ['qforce-ai', 'ask-navi'],
  },
  {
    id: 'operations-data',
    name: 'Operations & Data',
    sentence: 'Real-time insights for better decisions.',
    iconName: 'BarChart3',
    productCount: 2,
    productIds: ['sync', 'nforce-retailops'],
  },
  {
    id: 'enterprise-platforms',
    name: 'Enterprise Platforms',
    sentence: 'Scalable platforms for every enterprise.',
    iconName: 'Box',
    productCount: 2,
    productIds: ['onehr', 'tracktion'],
  },
  {
    id: 'customer-media',
    name: 'Customer & Media',
    sentence: 'Engage, support, and delight customers.',
    iconName: 'Users',
    productCount: 2,
    productIds: ['nforce-arena', 'modozo'],
  },
  {
    id: 'ai-accelerators',
    name: 'AI & Accelerators',
    sentence: 'Next-gen AI testing & acceleration suites.',
    iconName: 'Rocket',
    productCount: 2,
    productIds: ['aiktra', 'auraface'],
  },
  {
    id: 'sre-observability',
    name: 'SRE & Observability',
    sentence: 'Ensure reliability and performance.',
    iconName: 'Gauge',
    productCount: 1,
    productIds: ['pulse'],
  },
  {
    id: 'aviation-logistics',
    name: 'Aviation & Logistics',
    sentence: 'Optimize fleet & mission operations.',
    iconName: 'Plane',
    productCount: 1,
    productIds: ['flightops'],
  },
  {
    id: 'digital-experience',
    name: 'Digital Experience',
    sentence: 'Composable digital experience platform.',
    iconName: 'LayoutGrid',
    productCount: 1,
    productIds: ['modozo'],
  },
];

const IMPACT_METRICS = [
  { value: '65%', label: 'Faster Test Authoring' },
  { value: '99.9%', label: 'System Reliability' },
  { value: '10×', label: 'Faster Time to Market' },
  { value: '75%', label: 'Improved Customer Satisfaction' },
];

export const ProductsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<(ProductCategoryData & { productIds: string[] }) | null>(null);

  const selectedProducts = selectedCategory
    ? NFORCE_PRODUCTS.filter((p) => selectedCategory.productIds.includes(p.id))
    : [];

  return (
    <section
      id="products"
      style={{
        padding: '84px 32px 72px',
        background: '#FFFFFF',
        color: 'var(--nf-ink-950)',
        position: 'relative',
        borderTop: '1px solid #EDF0F3',
        borderBottom: '1px solid #EDF0F3',
      }}
    >
      <div style={{ maxWidth: '1380px', margin: '0 auto' }}>
        {/* 1. Hero / Header Introduction */}
        <div style={{ maxWidth: '820px', marginBottom: '38px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--nf-red)',
              marginBottom: '16px',
            }}
          >
            PROPRIETARY TECHNOLOGY &amp; ACCELERATORS
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 4.4vw, 62px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: 'var(--nf-ink-950)',
              margin: '0 0 20px',
            }}
          >
            Innovation &amp; Products. <br />
            <span style={{ color: 'var(--nf-red)' }}>We Build Technology.</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(16px, 1.3vw, 19px)',
              lineHeight: 1.6,
              color: '#555d6e',
              margin: '0 0 24px',
              maxWidth: '680px',
            }}
          >
            Beyond delivery services, NForce engineers production platforms, AI accelerators, and
            operational suites that help global enterprises move faster.
          </p>

          <a
            href="#capabilities"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-display)',
              fontSize: '15px',
              fontWeight: 700,
              color: 'var(--nf-red)',
              textDecoration: 'none',
              transition: 'gap 200ms ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.gap = '10px')}
            onMouseLeave={(e) => (e.currentTarget.style.gap = '6px')}
          >
            Explore our capabilities <ArrowRight size={16} />
          </a>
        </div>

        {/* 2. Main Product Exploration Heading */}
        <div style={{ marginBottom: '36px' }}>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 2.6vw, 36px)',
              fontWeight: 800,
              letterSpacing: '-0.015em',
              color: 'var(--nf-ink-950)',
              margin: '0 0 8px',
            }}
          >
            Explore Our Product Suite
          </h3>
          <p style={{ fontSize: '15px', color: '#667085', margin: 0 }}>
            Technology built around the challenges that matter most.
          </p>
        </div>

        {/* 3. 4x2 Responsive Category Tiles Grid */}
        <ProductCategoryGrid
          categories={CATEGORIES_DATA}
          onSelectCategory={(cat) => {
            const fullCat = CATEGORIES_DATA.find((c) => c.id === cat.id) || null;
            setSelectedCategory(fullCat);
          }}
        />

        {/* 4. Subtle Impact / Proof Strip */}
        <div
          style={{
            background: '#FAFAFC',
            border: '1px solid #EDF0F3',
            borderRadius: '16px',
            padding: '16px 24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            alignItems: 'center',
          }}
        >
          {IMPACT_METRICS.map((metric, i) => (
            <ImpactMetric key={i} value={metric.value} label={metric.label} />
          ))}
        </div>
      </div>

      {/* 5. Category -> Product Discovery Modal Dialog */}
      {selectedCategory && (
        <ProductPreview
          categoryName={selectedCategory.name}
          categorySentence={selectedCategory.sentence}
          products={selectedProducts}
          isOpen={Boolean(selectedCategory)}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </section>
  );
};
