import React from 'react';
import { MENU_LINKS } from '../../data/companyData';
import { SOLUTIONS } from '../../data/solutions';
import logoCircle from '../../assets/nf1-logo-circle.png';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FullscreenMenu: React.FC<FullscreenMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 400,
        background: 'var(--nf-black)',
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'auto' : 'none',
        transition: 'opacity 380ms var(--ease-out)',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-8%',
          width: '640px',
          height: '640px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(224,31,38,0.16), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Watermark */}
      <div
        style={{
          position: 'absolute',
          left: '-4%',
          bottom: '-14%',
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(140px, 26vw, 420px)',
          lineHeight: 0.8,
          color: 'var(--nf-ink-800)',
          letterSpacing: '-0.02em',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        MENU
      </div>

      {/* Header bar in overlay */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '28px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <img
          src={logoCircle}
          alt="NForceOne"
          style={{
            height: '54px',
            width: '54px',
            borderRadius: '50%',
            display: 'block',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.45)',
          }}
        />
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="nf-menu-close-btn"
          style={{
            background: 'none',
            border: '1px solid var(--nf-ink-700)',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            color: '#fff',
            fontSize: '18px',
            cursor: 'pointer',
            transition: 'border-color 200ms, transform 200ms',
          }}
        >
          ✕
        </button>
      </div>

      {/* Nav Content Grid */}
      <div
        className="nf-nav-grid"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '20px 32px 60px',
          display: 'grid',
          gridTemplateColumns: '1.3fr 1fr',
          gap: '64px',
          position: 'relative',
        }}
      >
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {MENU_LINKS.map((ml, i) => (
            <a
              key={ml.label}
              href={ml.href}
              onClick={onClose}
              className="nf-menu-link"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0px)' : 'translateY(24px)',
                transition: `opacity 420ms var(--ease-out) ${i * 45}ms, transform 200ms var(--ease-out), padding 200ms var(--ease-out), background 200ms, color 200ms`,
                color: '#fff',
                textDecoration: 'none',
                fontFamily: 'var(--font-display)',
                display: 'flex',
                alignItems: 'baseline',
                gap: '20px',
                padding: '12px 4px',
                borderBottom: '1px solid var(--nf-ink-800)',
              }}
            >
              <span
                style={{
                  fontSize: '12px',
                  color: 'var(--nf-gray-500)',
                  flex: '0 0 auto',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                0{i + 1}
              </span>
              <span style={{ fontSize: 'clamp(24px, 3.4vw, 42px)', fontWeight: 800, flex: 1 }}>
                {ml.label}
              </span>
              <svg
                className="nf-menu-arrow"
                width="30"
                height="16"
                viewBox="0 0 30 16"
                fill="none"
              >
                <path
                  d="M0 8h27M21 2l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </nav>

        <div
          style={{
            opacity: isOpen ? 1 : 0,
            transition: 'opacity 420ms var(--ease-out) 260ms',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '12px',
              letterSpacing: 'var(--ls-eyebrow)',
              textTransform: 'uppercase',
              color: 'var(--nf-gray-500)',
              marginBottom: '16px',
            }}
          >
            Get in touch
          </div>
          <a
            href="tel:18003568933"
            className="nf-contact-link"
            style={{
              display: 'block',
              color: '#fff',
              textDecoration: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: '19px',
              marginBottom: '10px',
              transition: 'color 200ms',
            }}
          >
            1-800-356-8933
          </a>
          <a
            href="mailto:contact@nforceone.com"
            className="nf-contact-link-alt"
            style={{
              display: 'block',
              color: 'var(--nf-gray-400)',
              textDecoration: 'none',
              fontSize: '15px',
              marginBottom: '28px',
              transition: 'color 200ms',
            }}
          >
            contact@nforceone.com
          </a>

          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '12px',
              letterSpacing: 'var(--ls-eyebrow)',
              textTransform: 'uppercase',
              color: 'var(--nf-gray-500)',
              marginBottom: '14px',
            }}
          >
            Services
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
            {SOLUTIONS.map((s) => (
              <a
                key={s.key}
                href="#capabilities"
                onClick={onClose}
                className="nf-menu-service-pill"
                style={{
                  color: 'var(--nf-gray-300)',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: 600,
                  border: '1px solid var(--nf-ink-700)',
                  borderRadius: 'var(--radius-pill)',
                  padding: '8px 15px',
                  transition: 'border-color 200ms, color 200ms, background 200ms',
                }}
              >
                {s.title}
              </a>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              paddingTop: '24px',
              borderTop: '1px solid var(--nf-ink-800)',
            }}
          >
            <a
              href="https://www.linkedin.com/company/nforceone/"
              aria-label="LinkedIn"
              className="nf-linkedin-badge"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: '1px solid var(--nf-ink-700)',
                color: 'var(--nf-gray-400)',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 700,
                transition: 'border-color 200ms, color 200ms',
              }}
            >
              in
            </a>
            <span style={{ fontSize: '12.5px', color: 'var(--nf-gray-500)' }}>
              Hyderabad · Dallas
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
