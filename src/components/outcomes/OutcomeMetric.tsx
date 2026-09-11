import React from 'react';

export interface OutcomeMetricProps {
  value: string;
  label: string;
}

export const OutcomeMetric: React.FC<OutcomeMetricProps> = ({ value, label }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 2.5vw, 36px)',
          fontWeight: 800,
          color: 'var(--nf-red)',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: '4px',
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          fontWeight: 600,
          color: '#555d6e',
          lineHeight: 1.35,
        }}
      >
        {label}
      </div>
    </div>
  );
};
