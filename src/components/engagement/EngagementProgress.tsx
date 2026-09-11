import React from 'react';

export type ClientNeedId = 'own-outcome' | 'extend-team' | 'scale-delivery';

interface EngagementProgressProps {
  activeNeed: ClientNeedId;
  onSelectNeed: (id: ClientNeedId) => void;
}

const STEPS: { id: ClientNeedId; num: string; label: string; tag: string }[] = [
  { id: 'own-outcome', num: '01', label: 'Own the Outcome', tag: 'Managed & SOW' },
  { id: 'extend-team', num: '02', label: 'Extend Your Team', tag: 'Staff Augmentation' },
  { id: 'scale-delivery', num: '03', label: 'Scale Delivery', tag: 'Onshore · Offshore · Hybrid' },
];

export const EngagementProgress: React.FC<EngagementProgressProps> = ({
  activeNeed,
  onSelectNeed,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '28px',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '5px 6px',
          background: '#F1F5F9',
          border: '1px solid #E2E8F0',
          borderRadius: '9999px',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.04)',
          maxWidth: '100%',
          overflowX: 'auto',
        }}
        role="tablist"
        aria-label="Engagement Model Selector"
      >
        {STEPS.map((step) => {
          const isActive = activeNeed === step.id;
          return (
            <button
              key={step.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectNeed(step.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '7px 16px',
                borderRadius: '9999px',
                border: 'none',
                background: isActive ? '#FFFFFF' : 'transparent',
                color: isActive ? '#0F172A' : '#64748B',
                fontFamily: 'var(--font-display)',
                fontSize: '13px',
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 200ms ease',
                boxShadow: isActive
                  ? '0 2px 8px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(224, 31, 38, 0.2)'
                  : 'none',
                whiteSpace: 'nowrap',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: isActive ? 'var(--nf-red)' : '#94A3B8',
                  letterSpacing: '0.04em',
                }}
              >
                {step.num}
              </span>
              <span>{step.label}</span>
              {isActive && (
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--nf-red)',
                    display: 'inline-block',
                  }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
