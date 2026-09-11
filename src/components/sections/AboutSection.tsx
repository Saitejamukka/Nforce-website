import React from 'react';
import { Eyebrow } from '../ui/Eyebrow';
import { MILESTONES, CULTURAL_VALUES } from '../../data/companyData';
import { MapPin, Globe } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      style={{
        padding: '120px 32px 110px',
        background: '#FFFFFF',
        color: '#0F172A',
        borderTop: '1px solid #EDEDED',
        borderBottom: '1px solid #EDEDED',
      }}
    >
      <div style={{ maxWidth: '1380px', margin: '0 auto' }}>
        {/* Editorial Split Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: '48px',
            alignItems: 'end',
            marginBottom: '64px',
          }}
        >
          <div>
            <Eyebrow>Who We Are</Eyebrow>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 4.4vw, 56px)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                lineHeight: 1.12,
                color: '#0F172A',
                margin: '16px 0 0',
              }}
            >
              Enterprise Engineering <br />
              <span style={{ color: 'var(--nf-red)' }}>With a Human Foundation.</span>
            </h2>
          </div>

          <div>
            <p
              style={{
                fontSize: '17px',
                color: '#475569',
                lineHeight: 1.65,
                margin: '0 0 24px',
              }}
            >
              Headquartered in Dallas, Texas with world-class engineering centers in Hyderabad, India,
              NForce One combines US strategic leadership with high-velocity global engineering hubs.
              We build systems that scale without sacrificing craftsmanship or accountability.
            </p>

            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 800, color: 'var(--nf-red)' }}>
                  15+
                </div>
                <div style={{ fontSize: '12.5px', color: '#64748B', fontWeight: 600 }}>
                  Years Delivering
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 800, color: 'var(--nf-red)' }}>
                  100+
                </div>
                <div style={{ fontSize: '12.5px', color: '#64748B', fontWeight: 600 }}>
                  Senior Engineers
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 800, color: 'var(--nf-red)' }}>
                  2
                </div>
                <div style={{ fontSize: '12.5px', color: '#64748B', fontWeight: 600 }}>
                  Global Delivery Hubs
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Photography & Dual-Shore Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '24px',
            marginBottom: '80px',
          }}
        >
          {/* Photo 1: US Leadership Hub */}
          <div
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              minHeight: '340px',
              boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="NForce One North American Leadership Office"
              loading="lazy"
              decoding="async"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.08) 0%, rgba(15, 23, 42, 0.85) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '28px',
                color: '#FFFFFF',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <MapPin size={16} color="var(--nf-red)" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11.5px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Dallas, Texas · United States
                </span>
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 800, margin: '0 0 6px' }}>
                Client Leadership & Architecture Hub
              </h4>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5, margin: 0 }}>
                Onsite sprint leadership, enterprise governance, compliance auditing, and executive stakeholder alignment.
              </p>
            </div>
          </div>

          {/* Photo 2: Global Delivery Hub */}
          <div
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              minHeight: '340px',
              boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="NForce One Global Engineering Center"
              loading="lazy"
              decoding="async"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.08) 0%, rgba(15, 23, 42, 0.85) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '28px',
                color: '#FFFFFF',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <Globe size={16} color="var(--nf-red)" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11.5px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Hyderabad · India
                </span>
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 800, margin: '0 0 6px' }}>
                High-Velocity Engineering Center
              </h4>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5, margin: 0 }}>
                24/7 follow-the-sun continuous test execution, microservices development, and scalable squad delivery.
              </p>
            </div>
          </div>

          {/* Photo 3: Advanced AI & Platform Labs */}
          <div
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              minHeight: '340px',
              boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
              alt="NForce One Advanced AI & Quality Engineering Labs"
              loading="lazy"
              decoding="async"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.08) 0%, rgba(15, 23, 42, 0.85) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '28px',
                color: '#FFFFFF',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--nf-red)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11.5px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Innovation & Research Labs
                </span>
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 800, margin: '0 0 6px' }}>
                AI & Quality Engineering CoE
              </h4>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5, margin: 0 }}>
                Autonomous multi-agent testing harnesses, LLM evaluation pipelines, and chaos engineering simulations.
              </p>
            </div>
          </div>
        </div>

        {/* Client Milestones */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ marginBottom: '32px' }}>
            <Eyebrow>Proven Track Record</Eyebrow>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(26px, 3.2vw, 38px)',
                fontWeight: 800,
                letterSpacing: '-0.015em',
                color: '#0F172A',
                margin: '12px 0 0',
              }}
            >
              Enterprise Transformations Delivered
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '20px',
            }}
          >
            {MILESTONES.map((m) => (
              <div
                key={m.client}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '16px',
                  padding: '30px 28px',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'var(--nf-red)',
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11.5px',
                      fontWeight: 700,
                      color: 'var(--nf-red)',
                      background: 'rgba(224, 31, 38, 0.08)',
                      padding: '3px 9px',
                      borderRadius: '9999px',
                    }}
                  >
                    {m.year}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#94A3B8',
                      textTransform: 'uppercase',
                    }}
                  >
                    {m.tag}
                  </span>
                </div>

                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '20px',
                    fontWeight: 800,
                    color: '#0F172A',
                    margin: '0 0 10px',
                  }}
                >
                  {m.client}
                </h4>
                <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Cultural Pillars (G.R.O.W.) */}
        <div>
          <div style={{ marginBottom: '32px' }}>
            <Eyebrow>Core Culture</Eyebrow>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(26px, 3.2vw, 38px)',
                fontWeight: 800,
                letterSpacing: '-0.015em',
                color: '#0F172A',
                margin: '12px 0 0',
              }}
            >
              The G.R.O.W. Framework
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
            }}
          >
            {CULTURAL_VALUES.map((val) => (
              <div
                key={val.title}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(224, 31, 38, 0.08)',
                    color: 'var(--nf-red)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '18px',
                    marginBottom: '14px',
                  }}
                >
                  {val.letter}
                </div>
                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '17px',
                    fontWeight: 700,
                    color: '#0F172A',
                    margin: '0 0 8px',
                  }}
                >
                  {val.title}
                </h4>
                <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.55, margin: 0 }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
