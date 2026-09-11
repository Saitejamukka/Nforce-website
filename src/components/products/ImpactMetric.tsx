import React from 'react';

export interface ImpactMetricProps {
  value: string;
  label: string;
}

export const ImpactMetric: React.FC<ImpactMetricProps> = ({ value, label }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '16px 20px',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 2.5vw, 36px)',
          fontWeight: 800,
          color: 'var(--nf-red)',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: '6px',
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
          lineHeight: 1.3,
        }}
      >
        {label}
      </div>
    </div>
  );
};
