import React from 'react';

export interface ProgressItem {
  num: string;
  industry: string;
}

interface Props {
  items: ProgressItem[];
  activeIndex: number;
  onSelectIndex: (index: number) => void;
}

export const OutcomeProgress: React.FC<Props> = ({
  items,
  activeIndex,
  onSelectIndex,
}) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${items.length}, 1fr)`,
        gap: '16px',
        width: '100%',
      }}
    >
      {items.map((item, idx) => {
        const isActive = idx === activeIndex;

        return (
          <button
            key={item.num}
            type="button"
            onClick={() => onSelectIndex(idx)}
            style={{
              background: 'transparent',
              border: 'none',
              padding: '10px 0',
              cursor: 'pointer',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            {/* Horizontal Line Bar */}
            <div
              style={{
                width: '100%',
                height: '3px',
                borderRadius: '2px',
                background: isActive ? 'var(--nf-red)' : '#e4e7ec',
                transition: 'background 300ms ease',
              }}
            />

            {/* Step Number & Industry Label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: isActive ? 'var(--nf-red)' : '#8c95a6',
                  transition: 'color 300ms ease',
                }}
              >
                {item.num}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--nf-ink-950)' : '#555d6e',
                  transition: 'color 300ms ease',
                }}
              >
                {item.industry}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};
