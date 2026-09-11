import React from 'react';
import { PARTNERS } from '../../data/companyData';
import { Eyebrow } from '../ui/Eyebrow';

export const PartnersMarquee: React.FC = () => {
  const partnersLoop = [...PARTNERS, ...PARTNERS];

  return (
    <section
      style={{
        padding: '80px 0',
        background: 'var(--nf-gray-100)',
        borderTop: '1px solid var(--border-light)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center', padding: '0 32px' }}>
        <Eyebrow>Partners</Eyebrow>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '20px',
            fontWeight: 700,
            margin: '14px 0 40px',
          }}
        >
          Recognized &amp; Trusted by Leading Technology Providers
        </div>
      </div>

      <div
        style={{
          overflow: 'hidden',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
          maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
        }}
      >
        <div
          className="nf-marquee-track"
          style={{
            display: 'flex',
            gap: '16px',
            width: 'max-content',
            animation: 'nfMarquee 20s linear infinite',
          }}
        >
          {partnersLoop.map((p, idx) => (
            <div
              key={idx}
              style={{
                padding: '14px 26px',
                border: '1px solid var(--nf-gray-300)',
                borderRadius: 'var(--radius-pill)',
                color: 'var(--nf-gray-500)',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '0.03em',
                whiteSpace: 'nowrap',
              }}
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
