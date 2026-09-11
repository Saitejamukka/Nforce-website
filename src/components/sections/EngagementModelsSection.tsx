import React from 'react';
import { ENGAGEMENT_MODELS } from '../../data/engagementModels';
import { Eyebrow } from '../ui/Eyebrow';
import { MapPin, Globe, Sun, ShieldCheck, FileText, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export const EngagementModelsSection: React.FC = () => {
  const getModelIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin size={22} color="var(--nf-red)" />;
      case 'Globe':
        return <Globe size={22} color="var(--nf-red)" />;
      case 'Sun':
        return <Sun size={22} color="var(--nf-red)" />;
      case 'ShieldCheck':
        return <ShieldCheck size={22} color="var(--nf-red)" />;
      case 'FileText':
        return <FileText size={22} color="var(--nf-red)" />;
      case 'Users':
      default:
        return <Users size={22} color="var(--nf-red)" />;
    }
  };

  return (
    <section
      id="engagement"
      style={{
        background: '#09090b',
        color: '#ffffff',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '130px 32px 110px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 64px' }}>
          <Eyebrow>Flexible Commercial & Delivery Architecture</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 54px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              margin: '16px 0 18px',
              lineHeight: 1.12,
            }}
          >
            How We Engage: <br />
            <span style={{ color: 'var(--nf-red)' }}>Precision Delivery for Every Stage.</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6, margin: 0 }}>
            Whether you need a full-ownership Managed Delivery team, a specialized hybrid squad for 24/7
            follow-the-sun acceleration, or targeted staff augmentation, we adapt to your governance model.
          </p>
        </div>

        {/* 6 Models Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          {ENGAGEMENT_MODELS.map((model) => (
            <div
              key={model.id}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.10)',
                borderRadius: '18px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backdropFilter: 'blur(16px)',
                transition: 'all 240ms var(--ease-out)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(224, 31, 38, 0.45)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.10)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <div>
                {/* Header Icon + Name */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(224, 31, 38, 0.12)',
                      border: '1px solid rgba(224, 31, 38, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getModelIcon(model.icon)}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 800, margin: 0 }}>
                      {model.name}
                    </h3>
                  </div>
                </div>

                <div style={{ fontSize: '13px', color: 'var(--nf-red-bright)', fontWeight: 600, marginBottom: '14px' }}>
                  {model.tagline}
                </div>

                <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6, marginBottom: '18px' }}>
                  {model.deliveryFocus}
                </p>

                {/* Best For Tag */}
                <div
                  style={{
                    padding: '10px 12px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    marginBottom: '20px',
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.85)',
                  }}
                >
                  <strong style={{ color: '#ffffff' }}>Best for: </strong>
                  {model.bestFor}
                </div>

                {/* Key Benefits Checklist */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  {model.keyBenefits.map((benefit, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <CheckCircle2 size={14} color="var(--nf-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.4 }}>
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  transition: 'background 200ms ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--nf-red)';
                  e.currentTarget.style.borderColor = 'var(--nf-red)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                }}
              >
                Inquire About {model.name} <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
