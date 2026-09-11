import React from 'react';
import { CTA } from '../ui/CTA';

export const CtaBanner: React.FC = () => {
  return (
    <section
      style={{
        padding: '140px 32px',
        background: 'var(--grad-red-field)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative' }}>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '13px',
            letterSpacing: 'var(--ls-eyebrow)',
            textTransform: 'uppercase',
            color: 'var(--nf-cream)',
            opacity: 0.8,
            marginBottom: '24px',
          }}
        >
          Let's Do IT
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(34px, 5.6vw, 68px)',
            fontWeight: 800,
            lineHeight: 1.05,
            color: '#fff',
            margin: '0 0 36px',
          }}
        >
          Let's build what's next, together.
        </h2>
        <CTA href="#contact" variant="ghost" size="lg" style={{ borderColor: '#fff' }}>
          Start the Conversation
        </CTA>
      </div>
    </section>
  );
};
