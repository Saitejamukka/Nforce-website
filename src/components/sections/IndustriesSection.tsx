import React from 'react';
import { INDUSTRIES } from '../../data/industries';
import { Eyebrow } from '../ui/Eyebrow';
import { DynamicIcon } from '../ui/DynamicIcon';

export const IndustriesSection: React.FC = () => {
  const industriesLoop = [...INDUSTRIES, ...INDUSTRIES];

  return (
    <section
      id="industries"
      style={{
        padding: '140px 0',
        background: 'var(--nf-gray-100)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto 64px', padding: '0 32px' }}>
        <Eyebrow>Industries We Serve</Eyebrow>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(30px, 4vw, 48px)',
            fontWeight: 800,
            letterSpacing: '-0.01em',
            margin: '16px 0 0',
            maxWidth: '720px',
          }}
        >
          Powering innovation across every industry we touch.
        </h2>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div
        style={{
          overflow: 'hidden',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)',
          maskImage: 'linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)',
          marginBottom: '20px',
        }}
      >
        <div
          className="nf-marquee-track"
          style={{
            display: 'flex',
            gap: '56px',
            width: 'max-content',
            animation: 'nfMarquee 30s linear infinite',
          }}
        >
          {industriesLoop.map((ind, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                whiteSpace: 'nowrap',
              }}
            >
              <div style={{ color: 'var(--nf-gray-400)', display: 'flex', alignItems: 'center' }}>
                <DynamicIcon name={ind.icon} size={22} strokeWidth={1.5} />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'var(--nf-gray-500)',
                }}
              >
                {ind.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 11 Photographic Grid */}
      <div
        className="nf-ind-grid"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '16px',
        }}
      >
        {INDUSTRIES.map((indPhoto) => (
          <a
            key={indPhoto.label}
            href="#contact"
            className="nf-ind-card"
            style={{
              position: 'relative',
              aspectRatio: '1',
              borderRadius: '8px',
              overflow: 'hidden',
              display: 'block',
              textDecoration: 'none',
            }}
          >
            <img
              src={indPhoto.img}
              alt={indPhoto.label}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 400ms var(--ease-out)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.72) 100%)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: '12px',
                right: '12px',
                bottom: '10px',
                fontFamily: 'var(--font-display)',
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--nf-white)',
                lineHeight: 1.25,
                pointerEvents: 'none',
              }}
            >
              {indPhoto.label}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
