import React, { useState } from 'react';
import { NFORCE_PRODUCTS } from '../../data/products';
import { Eyebrow } from '../ui/Eyebrow';
import {
  BrainCircuit,
  ShieldCheck,
  Users,
  Radio,
  Activity,
  Workflow,
  Compass,
  Plane,
  Eye,
  Sparkles,
  MessageSquare,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const CATEGORIES = [
  'All Products (12)',
  'AI & Automation',
  'Operations & Data',
  'Enterprise & HR',
  'Customer & Media',
] as const;

export const ProductsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products (12)');

  const filteredProducts = NFORCE_PRODUCTS.filter((p) => {
    if (selectedCategory === 'All Products (12)') return true;
    return p.category === selectedCategory;
  });

  const getProductIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit size={24} color="var(--nf-red)" />;
      case 'ShieldCheck':
        return <ShieldCheck size={24} color="var(--nf-red)" />;
      case 'Users':
        return <Users size={24} color="var(--nf-red)" />;
      case 'Radio':
        return <Radio size={24} color="var(--nf-red)" />;
      case 'Activity':
        return <Activity size={24} color="var(--nf-red)" />;
      case 'Workflow':
        return <Workflow size={24} color="var(--nf-red)" />;
      case 'Compass':
        return <Compass size={24} color="var(--nf-red)" />;
      case 'Plane':
        return <Plane size={24} color="var(--nf-red)" />;
      case 'Eye':
        return <Eye size={24} color="var(--nf-red)" />;
      case 'Sparkles':
        return <Sparkles size={24} color="var(--nf-red)" />;
      case 'MessageSquare':
        return <MessageSquare size={24} color="var(--nf-red)" />;
      case 'ShoppingBag':
      default:
        return <ShoppingBag size={24} color="var(--nf-red)" />;
    }
  };

  return (
    <section
      id="products"
      style={{
        background: '#0a0a0c',
        color: '#ffffff',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '130px 32px 110px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background subtle scarlet glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(224, 31, 38, 0.10), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header Block */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '32px',
            marginBottom: '48px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <Eyebrow>Proprietary Technology & Accelerators</Eyebrow>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 3.8vw, 52px)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                margin: '14px 0 0',
                lineHeight: 1.15,
                color: '#ffffff',
              }}
            >
              Innovation & Products: <br />
              <span style={{ color: 'var(--nf-red)' }}>We Build Technology.</span>
            </h2>
          </div>
          <div style={{ maxWidth: '440px' }}>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.70)', lineHeight: 1.6, margin: '0 0 16px' }}>
              Beyond delivery services, NForce One engineers production platforms, AI accelerators, and
              operational suites that slash time-to-market for global enterprises.
            </p>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--nf-red-bright)',
                textDecoration: 'none',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '14px',
              }}
            >
              Request a 1-on-1 Product Demo <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '12px',
            marginBottom: '40px',
          }}
        >
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                style={{
                  background: isSelected ? 'var(--nf-red)' : 'rgba(255, 255, 255, 0.05)',
                  color: '#ffffff',
                  border: isSelected ? '1px solid var(--nf-red)' : '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: 'var(--radius-pill)',
                  padding: '8px 18px',
                  fontSize: '13px',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: isSelected ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 200ms cubic-bezier(.16,1,.3,1)',
                  whiteSpace: 'nowrap',
                  boxShadow: isSelected ? '0 4px 16px rgba(224, 31, 38, 0.40)' : 'none',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
            gap: '24px',
          }}
        >
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.10)',
                borderRadius: '16px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 240ms var(--ease-out)',
                backdropFilter: 'blur(12px)',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(224, 31, 38, 0.45)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 36px -10px rgba(0, 0, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.10)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                {/* Top Row: Icon + Badges */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(224, 31, 38, 0.12)',
                      border: '1px solid rgba(224, 31, 38, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getProductIcon(prod.icon)}
                  </div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                    <span
                      style={{
                        fontSize: '10px',
                        fontFamily: 'var(--font-mono)',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        color: 'rgba(255, 255, 255, 0.80)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {prod.category}
                    </span>
                    <span
                      style={{
                        fontSize: '10px',
                        fontFamily: 'var(--font-mono)',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: 'rgba(224, 31, 38, 0.20)',
                        color: 'var(--nf-red-bright)',
                        border: '1px solid rgba(224, 31, 38, 0.35)',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                      }}
                    >
                      {prod.badge}
                    </span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '22px',
                    fontWeight: 800,
                    margin: '0 0 6px',
                    color: '#ffffff',
                  }}
                >
                  {prod.name}
                </h3>
                <div
                  style={{
                    fontSize: '13px',
                    color: 'var(--nf-red-bright)',
                    fontWeight: 600,
                    marginBottom: '14px',
                    lineHeight: 1.4,
                  }}
                >
                  {prod.tagline}
                </div>

                {/* Problem & Solution Accordion/Summary */}
                <p
                  style={{
                    fontSize: '13px',
                    color: 'rgba(255, 255, 255, 0.72)',
                    lineHeight: 1.6,
                    marginBottom: '16px',
                  }}
                >
                  {prod.solution}
                </p>

                {/* Key Features Bullet Points */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                  {prod.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <CheckCircle2 size={14} color="var(--nf-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.82)', lineHeight: 1.4 }}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
                  {prod.techStack.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        padding: '2px 7px',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: 'rgba(255, 255, 255, 0.60)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Value & Action */}
              <div
                style={{
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div style={{ fontSize: '12px', color: '#34D399', fontWeight: 600, maxWidth: '65%' }}>
                  ✓ {prod.businessValue}
                </div>

                <a
                  href="#contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-pill)',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: '12px',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    transition: 'background 200ms ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--nf-red)';
                    e.currentTarget.style.borderColor = 'var(--nf-red)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
                  }}
                >
                  Demo <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
