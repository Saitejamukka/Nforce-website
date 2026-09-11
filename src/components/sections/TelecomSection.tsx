import React, { useState } from 'react';
import { TELECOM_AREAS, TELECOM_HERO_STATS } from '../../data/telecom';
import { Eyebrow } from '../ui/Eyebrow';
import { IntelligentTransformationFlow } from './IntelligentTransformationFlow';
import { Radio, ShieldCheck, Layers, Cpu, Activity, ArrowRight, CheckCircle2 } from 'lucide-react';

export const TelecomSection: React.FC = () => {
  const [activeAreaId, setActiveAreaId] = useState(TELECOM_AREAS[0].id);
  const activeArea = TELECOM_AREAS.find((a) => a.id === activeAreaId) || TELECOM_AREAS[0];

  const getAreaIcon = (id: string) => {
    switch (id) {
      case 'oss-bss':
        return <Layers size={22} color="var(--nf-red)" />;
      case 'telecom-qe':
        return <ShieldCheck size={22} color="var(--nf-red)" />;
      case 'ai-cx-voice':
        return <Radio size={22} color="var(--nf-red)" />;
      case 'network-field-ops':
        return <Cpu size={22} color="var(--nf-red)" />;
      case 'telecom-data':
      default:
        return <Activity size={22} color="var(--nf-red)" />;
    }
  };

  return (
    <section
      id="telecom"
      style={{
        background: '#0c0c0e',
        color: '#ffffff',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '130px 32px 110px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background cyber wave radial accents */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(224, 31, 38, 0.14), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header Block */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px' }}>
          <Eyebrow>Strategic Domain Differentiator</Eyebrow>
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
            Mission-Critical Telecom Engineering <br />
            <span style={{ color: 'var(--nf-red)' }}>& OSS/BSS Transformation</span>
          </h2>
          <p
            style={{
              fontSize: 'clamp(15px, 1.3vw, 18px)',
              color: 'rgba(255, 255, 255, 0.75)',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Tier-1 telco operators trust NForce One to validate billing accuracy across millions of
            subscribers, accelerate 5G provisioning cycles, automate voice IVR flows, and run real-time
            CDR telemetry with zero downtime.
          </p>
        </div>

        {/* Telemetry Stats Strip */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            marginBottom: '48px',
          }}
        >
          {TELECOM_HERO_STATS.map((stat, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.10)',
                backdropFilter: 'blur(12px)',
                borderRadius: '14px',
                padding: '24px 20px',
                textAlign: 'center',
                transition: 'border-color 200ms ease',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '36px',
                  fontWeight: 800,
                  color: 'var(--nf-red)',
                  marginBottom: '4px',
                  textShadow: '0 0 24px rgba(224, 31, 38, 0.45)',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.50)', fontFamily: 'var(--font-mono)' }}>
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Telecom Architecture Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: '32px',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.10)',
            borderRadius: '20px',
            padding: '36px',
            backdropFilter: 'blur(16px)',
          }}
          className="nf-cap-grid"
        >
          {/* Left: Domain Area Selector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'rgba(255, 255, 255, 0.45)',
                marginBottom: '6px',
              }}
            >
              Select Telecom Specialty
            </div>
            {TELECOM_AREAS.map((area) => {
              const isSelected = area.id === activeArea.id;
              return (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => setActiveAreaId(area.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '16px 18px',
                    borderRadius: '12px',
                    background: isSelected ? 'rgba(224, 31, 38, 0.16)' : 'transparent',
                    border: isSelected ? '1px solid var(--nf-red)' : '1px solid rgba(255, 255, 255, 0.06)',
                    color: '#ffffff',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 200ms ease',
                  }}
                >
                  <div style={{ flexShrink: 0 }}>{getAreaIcon(area.id)}</div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 700 }}>
                      {area.title}
                    </div>
                    <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.50)', marginTop: '2px' }}>
                      {area.badge}
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    color={isSelected ? 'var(--nf-red)' : 'rgba(255, 255, 255, 0.3)'}
                    style={{ transform: isSelected ? 'translateX(4px)' : 'none', transition: 'transform 200ms' }}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Active Telecom Area Details & Intelligent Transformation Flow */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.10)',
              borderRadius: '16px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {/* Active Badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--nf-red)' }} />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--nf-red-bright)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    fontWeight: 700,
                  }}
                >
                  {activeArea.badge}
                </span>
              </div>

              {/* Title & Story */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(22px, 2.2vw, 32px)',
                  fontWeight: 800,
                  margin: '4px 0 12px',
                  color: '#ffffff',
                }}
              >
                {activeArea.title}
              </h3>
              <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.80)', lineHeight: 1.6, marginBottom: '20px' }}>
                {activeArea.story}
              </p>

              {/* Intelligent Transformation Flow: TELECOM → CLOUD → AI → AUTOMATION → DIGITAL */}
              <IntelligentTransformationFlow
                activeAreaId={activeAreaId}
                onSelectArea={(newId) => setActiveAreaId(newId)}
              />

              {/* Capabilities checklist */}
              <div style={{ marginBottom: '28px' }}>
                <div
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'rgba(255, 255, 255, 0.50)',
                    marginBottom: '12px',
                  }}
                >
                  Production Capabilities
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
                  {activeArea.capabilities.map((cap, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                      }}
                    >
                      <CheckCircle2 size={15} color="var(--nf-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.90)', lineHeight: 1.4 }}>
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Proof Metric & CTA */}
            <div
              style={{
                paddingTop: '20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <div>
                <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.50)', fontFamily: 'var(--font-mono)' }}>
                  VERIFIED OUTCOME
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#34D399', marginTop: '2px' }}>
                  ✓ {activeArea.metrics}
                </div>
              </div>

              <a
                href="#contact"
                className="nf-btn-primary"
                style={{
                  padding: '12px 22px',
                  fontSize: '13px',
                }}
              >
                Discuss Telecom Transformation <ArrowRight size={14} />
              </a>

            </div>
          </div>
        </div>

        {/* Enterprise Network Infrastructure Banner */}
        <div
          style={{
            marginTop: '44px',
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            minHeight: '120px',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80"
            alt="Tier-1 Enterprise Telecom Datacenter & Fiber Core"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0, filter: 'brightness(0.45)' }}
          />
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '24px 32px',
              background: 'linear-gradient(90deg, rgba(12, 12, 14, 0.88) 0%, rgba(12, 12, 14, 0.4) 100%)',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--nf-red)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                Enterprise Network Testing & Lab Validation
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 800, color: '#ffffff' }}>
                Simulating 100M+ Daily Call Events, 5G Core Latency & OSS/BSS Billing Cycles
              </div>
            </div>
            <a
              href="#contact"
              className="nf-btn-primary"
              style={{ padding: '10px 20px', fontSize: '13px', whiteSpace: 'nowrap' }}
            >
              Discuss Telecom Infrastructure <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
