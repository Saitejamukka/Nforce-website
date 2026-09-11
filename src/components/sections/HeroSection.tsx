import React, { useState } from 'react';
import { HERO_WORDS } from '../../data/codeSnippets';
import { CTA } from '../ui/CTA';
import heroBgTechSquad from '../../assets/background-variants/hero-v2-tech-squad-2160p.jpg';
import { ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {

  const [primaryTf, setPrimaryTf] = useState('translate(0px, 0px)');
  const [secondaryTf, setSecondaryTf] = useState('translate(0px, 0px)');

  const handleMagneticMove = (
    e: React.MouseEvent<HTMLDivElement>,
    setter: (val: string) => void
  ) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 12;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 10;
    setter(`translate(${x}px, ${y}px)`);
  };

  const handleMagneticLeave = (setter: (val: string) => void) => {
    setter('translate(0px, 0px)');
  };

  return (
    <section
      id="top"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '160px 32px 80px',
        overflow: 'hidden',
        background: 'var(--nf-ink-950)',
      }}
    >
      {/* 1. Full Screen-Size Red Mesh Wave & Atmospheric Depth Layers */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        {/* 4K Tech Squad Background */}
        <img
          src={heroBgTechSquad}
          alt="NForceOne Engineering Squad Floor"
          className="nf-hero-globe-bg"
          style={{
            objectPosition: 'center 38%',
          }}
        />

        {/* Ultra-Fine Perspective Dot-Matrix Grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)',
            opacity: 0.20,
          }}
        />

        {/* Microscopic Monochromatic Film Grain Texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
            mixBlendMode: 'overlay',
            opacity: 0.20,
          }}
        />

        {/* Responsive horizontal & vertical readability gradient: crystal-clear text on left, glowing globe on right */}
        <div className="nf-hero-readability-grad" />

        {/* Top blend for sticky header and smooth bottom exit */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(10, 10, 11, 0.45) 0%, transparent 15%, transparent 82%, rgba(10, 10, 11, 0.88) 100%)',
          }}
        />
      </div>

      {/* Hero Content */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div style={{ maxWidth: '680px' }}>
          {/* Illuminated Enterprise Trust Pill */}
          <div
            style={{
              opacity: 0,
              animation: 'nfFadeUp 600ms var(--ease-out) 40ms both',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '7px 16px',
              borderRadius: 'var(--radius-pill)',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              marginBottom: '22px',
              boxShadow: '0 4px 20px -4px rgba(0, 0, 0, 0.4)',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#10B981',
                display: 'inline-block',
                animation: 'nfBeaconPing 2s infinite',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.92)',
              }}
            >
              Global Enterprise QA & Engineering
            </span>
            <span style={{ color: 'rgba(255, 255, 255, 0.3)', fontSize: '11px' }}>|</span>
            <span
              style={{
                fontSize: '12px',
                color: 'var(--nf-red-bright)',
                fontWeight: 600,
              }}
            >
              US & India Delivery Hubs
            </span>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4.4vw, 68px)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.015em',
              margin: '0 0 22px',
            }}
          >
            {HERO_WORDS.map((w, i) => (
              <span
                key={i}
                style={{
                  display: 'inline-block',
                  opacity: 0,
                  animation: `nfWordIn 750ms var(--ease-out) ${120 + i * 70}ms both`,
                  color: w.red ? 'var(--nf-red)' : '#ffffff',
                  marginRight: '0.26em',
                }}
              >
                {w.text}
              </span>
            ))}
          </h1>

          {/* Subtitle Paragraph */}
          <p
            style={{
              opacity: 0,
              animation: 'nfFadeUp 700ms var(--ease-out) 620ms both',
              fontSize: 'clamp(15px, 1.4vw, 19px)',
              color: 'rgba(255, 255, 255, 0.84)',
              lineHeight: 1.6,
              maxWidth: '620px',
              margin: '0 0 32px',
            }}
          >
            Engineering enterprise-scale software, autonomous AI solutions, and zero-defect QA systems
            with deep Telecom expertise and scalable US + India delivery hubs.
          </p>

          {/* Elevated CTAs */}
          <div
            style={{
              opacity: 0,
              animation: 'nfFadeUp 700ms var(--ease-out) 740ms both',
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              alignItems: 'center',
              marginBottom: '36px',
            }}
          >
            {/* Primary CTA with Ambient Glow & Shimmer */}
            <div
              onMouseMove={(e) => handleMagneticMove(e, setPrimaryTf)}
              onMouseLeave={() => handleMagneticLeave(setPrimaryTf)}
              style={{
                transform: primaryTf,
                transition: 'transform 200ms var(--ease-out)',
                position: 'relative',
              }}
            >
              <CTA
                href="#contact"
                size="lg"
                style={{
                  boxShadow: '0 0 32px rgba(224, 31, 38, 0.5), 0 8px 24px rgba(0, 0, 0, 0.4)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                Talk to an Expert
                <span
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    background:
                      'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.22) 50%, transparent 100%)',
                    animation: 'nfShimmer 4s infinite ease-in-out',
                    pointerEvents: 'none',
                  }}
                />
              </CTA>
            </div>

            {/* Secondary CTA: Liquid Glass with sliding arrow */}
            <div
              onMouseMove={(e) => handleMagneticMove(e, setSecondaryTf)}
              onMouseLeave={() => handleMagneticLeave(setSecondaryTf)}
              style={{
                transform: secondaryTf,
                transition: 'transform 200ms var(--ease-out)',
              }}
            >
              <a
                href="#capabilities"
                className="nf-hero-secondary-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '16px 28px',
                  fontSize: '15px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  letterSpacing: '0.01em',
                  textDecoration: 'none',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.22)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  borderRadius: 'var(--radius-pill)',
                  boxShadow: '0 4px 20px -4px rgba(0, 0, 0, 0.3)',
                  transition: 'all 240ms var(--ease-out)',
                }}
              >
                Explore Our Capabilities
                <ArrowRight size={16} className="nf-cta-arrow" style={{ transition: 'transform 240ms var(--ease-out)' }} />
              </a>
            </div>
          </div>

          {/* Frosted Glass Metric Capsules */}
          <div
            style={{
              opacity: 0,
              animation: 'nfFadeUp 700ms var(--ease-out) 860ms both',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '12px',
              marginBottom: '24px',
            }}
          >
            {/* Capsule 1 */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(255, 255, 255, 0.10)',
                borderRadius: '12px',
                padding: '14px 16px',
                transition: 'border-color 200ms, background 200ms',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--nf-red)' }} />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 800, color: '#ffffff' }}>
                  100+
                </span>
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.65)', fontWeight: 500 }}>
                Specialists · US & India Hubs
              </div>
            </div>

            {/* Capsule 2 */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(255, 255, 255, 0.10)',
                borderRadius: '12px',
                padding: '14px 16px',
                transition: 'border-color 200ms, background 200ms',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 800, color: '#ffffff' }}>
                  99.98%
                </span>
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.65)', fontWeight: 500 }}>
                Worldwide Enterprise QA
              </div>
            </div>

            {/* Capsule 3 */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(255, 255, 255, 0.10)',
                borderRadius: '12px',
                padding: '14px 16px',
                transition: 'border-color 200ms, background 200ms',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F59E0B' }} />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 800, color: '#ffffff' }}>
                  24/7
                </span>
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.65)', fontWeight: 500 }}>
                Follow-the-Sun Engineering
              </div>
            </div>
          </div>

          {/* In-Hero Certified Partner Ecosystem */}
          <div
            style={{
              opacity: 0,
              animation: 'nfFadeUp 700ms var(--ease-out) 920ms both',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              flexWrap: 'wrap',
              paddingTop: '18px',
              borderTop: '1px solid rgba(255, 255, 255, 0.10)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.45)',
              }}
            >
              Certified Partners:
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              {['AWS Partner', 'Google Cloud', 'Microsoft', 'Salesforce', 'Pega'].map((p) => (
                <span
                  key={p}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'rgba(255, 255, 255, 0.70)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '4px',
                    padding: '3px 8px',
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Scroll Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '36px',
          left: '32px',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
        }}
      >
        <span
          style={{
            width: '1px',
            height: '38px',
            background: 'rgba(255, 255, 255, 0.25)',
            display: 'inline-block',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '14px',
              background: 'var(--nf-red)',
              animation: 'nfPulse 2s ease-in-out infinite',
            }}
          />
        </span>
        SCROLL
      </div>
    </section>
  );
};
