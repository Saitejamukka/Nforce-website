import React from 'react';
import logoOnBlack from '../../assets/nf1-logo-on-black.png';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: 'var(--nf-white)',
        padding: '90px 32px 0',
        borderTop: '1px solid var(--border-light)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div
          className="nf-footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr 1fr 1fr',
            gap: '40px',
            marginBottom: '64px',
          }}
        >
          <div>
            <div
              style={{
                background: 'var(--nf-black)',
                display: 'inline-block',
                padding: '12px 16px',
                marginBottom: '18px',
              }}
            >
              <img
                src={logoOnBlack}
                alt="NForceOne"
                style={{ height: '32px', display: 'block' }}
              />
            </div>
            <p
              style={{
                color: 'var(--nf-gray-500)',
                fontSize: '13px',
                lineHeight: 1.6,
                maxWidth: '260px',
              }}
            >
              Simplifying IT for a complex world. Let's Do{' '}
              <span style={{ color: 'var(--nf-red)' }}>IT</span>!
            </p>
          </div>

          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: 'var(--ls-eyebrow)',
                marginBottom: '18px',
                color: 'var(--nf-gray-500)',
              }}
            >
              Company
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
              <a href="#top" style={{ color: 'var(--nf-ink-700)', textDecoration: 'none' }}>
                Home
              </a>
              <a href="#solutions" style={{ color: 'var(--nf-ink-700)', textDecoration: 'none' }}>
                Services
              </a>
              <a href="#about" style={{ color: 'var(--nf-ink-700)', textDecoration: 'none' }}>
                About Us
              </a>
              <a href="#contact" style={{ color: 'var(--nf-ink-700)', textDecoration: 'none' }}>
                Contact
              </a>
              <a href="#careers" style={{ color: 'var(--nf-ink-700)', textDecoration: 'none' }}>
                Careers
              </a>
              <a href="#faq" style={{ color: 'var(--nf-ink-700)', textDecoration: 'none' }}>
                FAQ
              </a>
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: 'var(--ls-eyebrow)',
                marginBottom: '18px',
                color: 'var(--nf-gray-500)',
              }}
            >
              Hyderabad, India
            </div>
            <p style={{ color: 'var(--nf-gray-500)', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>
              4th Floor, Sanali Spazio, Inorbit Mall Rd, Madhapur, Hyderabad, Telangana, 500081
              <br />
              <a
                href="https://maps.google.com/?q=Sanali+Spazio+Inorbit+Mall+Rd+Madhapur+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--nf-red)', textDecoration: 'none', fontWeight: 600, fontSize: '12px' }}
              >
                Get Directions ↗
              </a>
              <br />
              <a href="mailto:contact@nforceone.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                contact@nforceone.com
              </a>
              <br />
              <a href="tel:+919346934833" style={{ color: 'inherit', textDecoration: 'none' }}>
                +91 9346934833
              </a>
            </p>
          </div>

          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: 'var(--ls-eyebrow)',
                marginBottom: '18px',
                color: 'var(--nf-gray-500)',
              }}
            >
              Dallas, USA
            </div>
            <p style={{ color: 'var(--nf-gray-500)', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>
              5700 Tennyson Parkway, Suite 300, Plano, Texas, 75024
              <br />
              <a
                href="https://maps.google.com/?q=5700+Tennyson+Parkway+Suite+300+Plano+Texas+75024"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--nf-red)', textDecoration: 'none', fontWeight: 600, fontSize: '12px' }}
              >
                Get Directions ↗
              </a>
              <br />
              <a href="mailto:contact@nforceone.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                contact@nforceone.com
              </a>
              <br />
              <a href="tel:+19724996667" style={{ color: 'inherit', textDecoration: 'none' }}>
                +1 (972) 499-6667
              </a>
              <br />
              <span style={{ fontSize: '12px', color: 'var(--nf-ink-700)', fontWeight: 600 }}>
                Toll-Free Support:{' '}
                <a href="tel:18003568933" style={{ color: 'var(--nf-red)', textDecoration: 'none' }}>
                  1-800-356-8933
                </a>
              </span>
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '24px 0',
            borderTop: '1px solid var(--border-light)',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div style={{ fontSize: '13px', color: 'var(--nf-gray-500)' }}>
            © 2026 NForceOne. All rights reserved.
          </div>
          <a
            href="https://www.linkedin.com/company/nforceone/"
            style={{ color: 'var(--nf-gray-500)', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}
          >
            LinkedIn
          </a>
        </div>

        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(60px, 14vw, 220px)',
            lineHeight: 0.8,
            color: 'var(--nf-gray-200)',
            textAlign: 'center',
            letterSpacing: '-0.02em',
            userSelect: 'none',
            padding: '20px 0 0',
          }}
        >
          NForceOne
        </div>
      </div>
    </footer>
  );
};
