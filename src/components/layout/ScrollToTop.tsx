import React, { useEffect, useState } from 'react';

export const ScrollToTop: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 900);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: '100px',
        right: '28px',
        zIndex: 150,
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: 'var(--nf-ink-950)',
        border: 'none',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
        boxShadow: 'var(--shadow-md)',
        opacity: showScrollTop ? 1 : 0,
        transform: showScrollTop ? 'translateY(0px)' : 'translateY(16px)',
        transition: 'opacity 260ms var(--ease-out), transform 260ms var(--ease-out)',
        pointerEvents: showScrollTop ? 'auto' : 'none',
      }}
    >
      ↑
    </button>
  );
};
