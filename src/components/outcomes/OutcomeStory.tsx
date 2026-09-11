import React from 'react';
import { OutcomeMetric } from './OutcomeMetric';
import { ArrowRight } from 'lucide-react';

interface MetricItem {
  value: string;
  label: string;
}

interface Props {
  currentIndex: number;
  totalCount: number;
  industry: string;
  client: string;
  title: string;
  description: string;
  metrics: MetricItem[];
  onReadCaseStudy: () => void;
}

export const OutcomeStory: React.FC<Props> = ({
  currentIndex,
  totalCount,
  industry,
  client,
  title,
  description,
  metrics,
  onReadCaseStudy,
}) => {
  const formattedIndex = `0${currentIndex + 1} / 0${totalCount}`;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        animation: 'nfFadeUp 450ms var(--ease-out) both',
      }}
    >
      <div>
        {/* Top Meta: Index & Industry Pill */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '18px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11.5px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--nf-red)',
                background: 'rgba(224, 31, 38, 0.06)',
                padding: '4px 10px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid rgba(224, 31, 38, 0.16)',
              }}
            >
              {industry}
            </span>
            <span style={{ fontSize: '13px', color: '#8c95a6' }}>·</span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 600,
                color: '#555d6e',
              }}
            >
              {client}
            </span>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              fontWeight: 700,
              color: '#8c95a6',
              letterSpacing: '0.04em',
            }}
          >
            {formattedIndex}
          </div>
        </div>

        {/* Case Study Title */}
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(26px, 2.8vw, 40px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            color: 'var(--nf-ink-950)',
            margin: '0 0 16px',
          }}
        >
          {title}
        </h3>

        {/* One Short Description Statement */}
        <p
          style={{
            fontSize: '15.5px',
            lineHeight: 1.65,
            color: '#555d6e',
            margin: '0 0 32px',
          }}
        >
          {description}
        </p>

        {/* 2-3 Editorial Metrics Typography */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '24px',
            marginBottom: '36px',
            paddingTop: '20px',
            borderTop: '1px solid #edf0f3',
          }}
        >
          {metrics.map((m, i) => (
            <OutcomeMetric key={i} value={m.value} label={m.label} />
          ))}
        </div>
      </div>

      {/* Read Case Study Action */}
      <div>
        <button
          type="button"
          onClick={onReadCaseStudy}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '13px 24px',
            background: 'var(--nf-red)',
            color: '#ffffff',
            borderRadius: 'var(--radius-pill)',
            border: 'none',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '14px',
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(224, 31, 38, 0.3)',
            transition: 'background 200ms ease, transform 160ms ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--nf-red-hover)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--nf-red)')}
        >
          Read Case Study <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
};
