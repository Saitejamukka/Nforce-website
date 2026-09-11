import React, { useState, useEffect, useRef } from 'react';

export const StatsStrip: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const start = performance.now();
          const dur = 900;
          const step = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            setProgress(p);
            if (p < 1) {
              requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      display: `${Math.round(8 * progress)}+`,
      label: 'Testing Services',
      sub: 'From Functional & Regression to Automation & Security Testing',
    },
    {
      display: `${Math.round(24 * progress)}/7`,
      label: 'Quality Assurance',
      sub: 'Continuous Test Execution & Reporting',
    },
    {
      display: `${Math.round(100 * progress)}%`,
      label: 'Coverage Focus',
      sub: 'Web, Mobile, API & Cloud Testing Expertise',
    },
    {
      display: '0',
      label: 'Critical Defects',
      sub: 'Shift-Left & Continuous Testing Practices',
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        padding: '0 32px 0',
        background: 'var(--nf-ink-950)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient center crimson glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(224, 31, 38, 0.12), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="nf-stats-grid"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: '1px solid rgba(255, 255, 255, 0.10)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.10)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {stats.map((st, i) => (
          <div
            key={i}
            style={{
              padding: '52px 28px',
              textAlign: 'center',
              borderRight: i < 3 ? '1px solid rgba(255, 255, 255, 0.10)' : 'none',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 4vw, 52px)',
                fontWeight: 800,
                color: 'var(--nf-red)',
                lineHeight: 1,
                textShadow: '0 0 24px rgba(224, 31, 38, 0.35)',
              }}
            >
              {st.display}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '15px',
                fontWeight: 700,
                color: '#ffffff',
                marginTop: '12px',
                letterSpacing: '0.01em',
              }}
            >
              {st.label}
            </div>
            <div
              style={{
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.65)',
                marginTop: '6px',
                lineHeight: 1.5,
              }}
            >
              {st.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
