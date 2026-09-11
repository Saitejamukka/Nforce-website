import React from 'react';
import { CASE_STUDIES } from '../../data/caseStudies';
import { Eyebrow } from '../ui/Eyebrow';
import { ArrowRight } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  return (
    <section
      id="outcomes"
      style={{
        background: '#0d0d10',
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
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px' }}>
          <Eyebrow>Validated Client Impact</Eyebrow>
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
            Real Outcomes: <br />
            <span style={{ color: 'var(--nf-red)' }}>Measured in Velocity & Accuracy.</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6, margin: 0 }}>
            Every engagement is measured by strict business outcomes — from compressing multi-week telecom
            regression cycles into hours, to safeguarding high-throughput banking cores and HIPAA AI data.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
            gap: '28px',
          }}
          className="nf-cap-grid"
        >
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.10)',
                borderRadius: '20px',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backdropFilter: 'blur(16px)',
                position: 'relative',
                transition: 'all 240ms var(--ease-out)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(224, 31, 38, 0.40)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.10)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <div>
                {/* Header Pills */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontFamily: 'var(--font-mono)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: 'rgba(224, 31, 38, 0.18)',
                      color: 'var(--nf-red-bright)',
                      border: '1px solid rgba(224, 31, 38, 0.30)',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {study.badge}
                  </span>
                  <span
                    style={{
                      fontSize: '11px',
                      fontFamily: 'var(--font-mono)',
                      color: 'rgba(255, 255, 255, 0.50)',
                    }}
                  >
                    {study.industry}
                  </span>
                </div>

                {/* Client Descriptor */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '24px',
                    fontWeight: 800,
                    margin: '0 0 14px',
                    color: '#ffffff',
                    lineHeight: 1.25,
                  }}
                >
                  {study.client}
                </h3>

                {/* Challenge & Solution Summary */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.70)', lineHeight: 1.6, marginBottom: '12px' }}>
                    <strong style={{ color: '#ffffff' }}>Challenge: </strong>
                    {study.challenge}
                  </div>
                  <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.70)', lineHeight: 1.6 }}>
                    <strong style={{ color: 'var(--nf-red-bright)' }}>Solution: </strong>
                    {study.solution}
                  </div>
                </div>

                {/* Measurable Outcome Metric Badges */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px',
                    padding: '16px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    marginBottom: '20px',
                  }}
                >
                  {study.outcomes.map((outc, idx) => (
                    <div key={idx}>
                      <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.50)', fontFamily: 'var(--font-mono)' }}>
                        {outc.label}
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: 800, color: '#34D399', marginTop: '2px' }}>
                        {outc.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Impact Summary */}
                <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.85)', fontWeight: 500, lineHeight: 1.5, marginBottom: '20px' }}>
                  💡 {study.impactSummary}
                </p>
              </div>

              {/* Bottom Footer: Delivery Model & Action */}
              <div
                style={{
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.50)', fontFamily: 'var(--font-mono)' }}>
                  Model: {study.deliveryModel}
                </div>
                <a
                  href="#contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--nf-red-bright)',
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                  }}
                >
                  Discuss Similar Challenge <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
