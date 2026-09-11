import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
}

export const OutcomeNavigation: React.FC<Props> = ({
  onPrev,
  onNext,
  canPrev,
  canNext,
}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <button
        type="button"
        onClick={onPrev}
        disabled={!canPrev}
        style={{
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          border: '1px solid #eaedf0',
          background: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: canPrev ? 'pointer' : 'not-allowed',
          opacity: canPrev ? 1 : 0.4,
          color: 'var(--nf-ink-950)',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
          transition: 'all 200ms ease',
        }}
        aria-label="Previous case study"
        onMouseEnter={(e) => {
          if (canPrev) {
            e.currentTarget.style.borderColor = 'var(--nf-red)';
            e.currentTarget.style.color = 'var(--nf-red)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#eaedf0';
          e.currentTarget.style.color = 'var(--nf-ink-950)';
        }}
      >
        <ChevronLeft size={18} />
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={!canNext}
        style={{
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          border: '1px solid #eaedf0',
          background: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: canNext ? 'pointer' : 'not-allowed',
          opacity: canNext ? 1 : 0.4,
          color: 'var(--nf-ink-950)',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
          transition: 'all 200ms ease',
        }}
        aria-label="Next case study"
        onMouseEnter={(e) => {
          if (canNext) {
            e.currentTarget.style.borderColor = 'var(--nf-red)';
            e.currentTarget.style.color = 'var(--nf-red)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#eaedf0';
          e.currentTarget.style.color = 'var(--nf-ink-950)';
        }}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};
