import React, { useState, useEffect } from 'react';
import { CTA } from '../ui/CTA';
import logoOnBlack from '../../assets/nf1-logo-on-black.png';

interface HeaderProps {
  onToggleMenu: () => void;
}

const NAV_ITEMS = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Telecom', href: '#telecom' },
  { label: 'Products', href: '#products' },
  { label: 'Outcomes', href: '#outcomes' },
  { label: 'Engagement', href: '#engagement' },
  { label: 'About', href: '#about' },
  { label: 'Careers', href: '#careers' },
];

export const Header: React.FC<HeaderProps> = ({ onToggleMenu }) => {
  const [headerCtaTf, setHeaderCtaTf] = useState('translate(0px, 0px)');
  const [menuBtnTf, setMenuBtnTf] = useState('translate(0px, 0px)');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: isScrolled
          ? 'rgba(10, 10, 11, 0.88)'
          : 'linear-gradient(180deg, rgba(10, 10, 11, 0.80) 0%, rgba(10, 10, 11, 0.35) 60%, transparent 100%)',
        backdropFilter: isScrolled ? 'blur(16px)' : 'blur(4px)',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'blur(4px)',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        boxShadow: isScrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.5)' : 'none',
        transition: 'background 300ms var(--ease-out), border-color 300ms, box-shadow 300ms, padding 300ms',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: isScrolled ? '12px 32px' : '18px 32px',
          transition: 'padding 300ms var(--ease-out)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a href="#top" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src={logoOnBlack}
            alt="NForceOne"
            style={{
              height: isScrolled ? '46px' : 'clamp(44px, 4.2vw, 56px)',
              width: 'auto',
              maxHeight: '58px',
              display: 'block',
              transition: 'height 300ms var(--ease-out)',
            }}
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="nf-nav-desktop"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nf-header-nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div
          className="nf-header-actions"
          style={{ display: 'flex', alignItems: 'center', gap: '28px' }}
        >
          <div
            onMouseMove={(e) => handleMagneticMove(e, setHeaderCtaTf)}
            onMouseLeave={() => handleMagneticLeave(setHeaderCtaTf)}
            style={{
              whiteSpace: 'nowrap',
              flexShrink: 0,
              width: 'max-content',
              transform: headerCtaTf,
              transition: 'transform 200ms var(--ease-out)',
            }}
          >
            <CTA href="#contact" size="sm">
              Schedule a Call
            </CTA>
          </div>

          <div
            onMouseMove={(e) => handleMagneticMove(e, setMenuBtnTf)}
            onMouseLeave={() => handleMagneticLeave(setMenuBtnTf)}
            style={{
              transform: menuBtnTf,
              transition: 'transform 200ms var(--ease-out)',
            }}
          >
            <button
              onClick={onToggleMenu}
              aria-label="Toggle Navigation Menu"
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: 0,
                fontFamily: 'var(--font-display)',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Menu
              <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ width: '20px', height: '2px', background: '#fff', display: 'block' }} />
                <span style={{ width: '14px', height: '2px', background: '#fff', display: 'block' }} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
