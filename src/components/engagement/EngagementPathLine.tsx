import React from 'react';

export type PathId = 'own-outcome' | 'extend-team' | 'scale-delivery';

interface EngagementPathLineProps {
  activePath: PathId;
  hoveredPath: PathId | null;
}

export const EngagementPathLine: React.FC<EngagementPathLineProps> = ({
  activePath,
  hoveredPath,
}) => {
  const currentPath = hoveredPath || activePath;

  const isOwn = currentPath === 'own-outcome';
  const isExtend = currentPath === 'extend-team';
  const isScale = currentPath === 'scale-delivery';

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '860px',
        margin: '0 auto 48px',
        padding: '16px 20px',
        background: '#FAFAFA',
        border: '1px solid #EDEDED',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 760 76"
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: '76px',
          overflow: 'visible',
        }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`
          @keyframes nfFlowLine {
            from { stroke-dashoffset: 24; }
            to { stroke-dashoffset: 0; }
          }
          .nf-active-stream {
            animation: nfFlowLine 900ms linear infinite;
          }
        `}</style>

        {/* 1. Branch: 01 OWN THE OUTCOME (y=16) */}
        <path
          d="M 90 16 L 260 16 C 300 16, 320 38, 360 38"
          stroke={isOwn ? 'var(--nf-red)' : '#E2E8F0'}
          strokeWidth={isOwn ? 2.5 : 1.5}
          strokeLinecap="round"
          strokeDasharray={isOwn ? '6 4' : 'none'}
          className={isOwn ? 'nf-active-stream' : undefined}
          style={{ transition: 'stroke 300ms ease, stroke-width 300ms ease' }}
        />
        {/* Circle anchor for Own */}
        <circle
          cx="90"
          cy="16"
          r={isOwn ? 4 : 3}
          fill={isOwn ? 'var(--nf-red)' : '#CBD5E1'}
          style={{ transition: 'all 300ms ease' }}
        />
        <text
          x="12"
          y="20"
          fontFamily="var(--font-mono)"
          fontSize="11"
          fontWeight={isOwn ? '700' : '600'}
          fill={isOwn ? 'var(--nf-red)' : '#64748B'}
          letterSpacing="0.06em"
          style={{ transition: 'fill 300ms ease' }}
        >
          01 OWN
        </text>

        {/* 2. Branch: 02 EXTEND YOUR TEAM (y=38) */}
        <path
          d="M 90 38 L 360 38"
          stroke={isExtend ? 'var(--nf-red)' : '#E2E8F0'}
          strokeWidth={isExtend ? 2.5 : 1.5}
          strokeLinecap="round"
          strokeDasharray={isExtend ? '6 4' : 'none'}
          className={isExtend ? 'nf-active-stream' : undefined}
          style={{ transition: 'stroke 300ms ease, stroke-width 300ms ease' }}
        />
        {/* Circle anchor for Extend */}
        <circle
          cx="90"
          cy="38"
          r={isExtend ? 4 : 3}
          fill={isExtend ? 'var(--nf-red)' : '#CBD5E1'}
          style={{ transition: 'all 300ms ease' }}
        />
        <text
          x="12"
          y="42"
          fontFamily="var(--font-mono)"
          fontSize="11"
          fontWeight={isExtend ? '700' : '600'}
          fill={isExtend ? 'var(--nf-red)' : '#64748B'}
          letterSpacing="0.06em"
          style={{ transition: 'fill 300ms ease' }}
        >
          02 EXTEND
        </text>

        {/* 3. Branch: 03 SCALE DELIVERY (y=60) */}
        <path
          d="M 90 60 L 260 60 C 300 60, 320 38, 360 38"
          stroke={isScale ? 'var(--nf-red)' : '#E2E8F0'}
          strokeWidth={isScale ? 2.5 : 1.5}
          strokeLinecap="round"
          strokeDasharray={isScale ? '6 4' : 'none'}
          className={isScale ? 'nf-active-stream' : undefined}
          style={{ transition: 'stroke 300ms ease, stroke-width 300ms ease' }}
        />
        {/* Circle anchor for Scale */}
        <circle
          cx="90"
          cy="60"
          r={isScale ? 4 : 3}
          fill={isScale ? 'var(--nf-red)' : '#CBD5E1'}
          style={{ transition: 'all 300ms ease' }}
        />
        <text
          x="12"
          y="64"
          fontFamily="var(--font-mono)"
          fontSize="11"
          fontWeight={isScale ? '700' : '600'}
          fill={isScale ? 'var(--nf-red)' : '#64748B'}
          letterSpacing="0.06em"
          style={{ transition: 'fill 300ms ease' }}
        >
          03 SCALE
        </text>

        {/* 4. Converged Trunk -> Business Outcome (x=360 to x=550) */}
        <path
          d="M 360 38 L 545 38"
          stroke="var(--nf-red)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeDasharray="6 4"
          className="nf-active-stream"
        />

        {/* Arrow head at x=545 */}
        <path
          d="M 540 33 L 550 38 L 540 43"
          stroke="var(--nf-red)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Convergence Junction Node */}
        <circle cx="360" cy="38" r="4.5" fill="var(--nf-red)" />
        <circle cx="360" cy="38" r="2" fill="#FFFFFF" />

        {/* Right Label: Outcome */}
        <rect
          x="565"
          y="23"
          width="180"
          height="30"
          rx="6"
          fill="#FFFFFF"
          stroke="rgba(224, 31, 38, 0.25)"
          strokeWidth="1"
        />
        <circle cx="580" cy="38" r="3.5" fill="var(--nf-red)" />
        <text
          x="594"
          y="42"
          fontFamily="var(--font-display)"
          fontSize="11.5"
          fontWeight="700"
          fill="#0F172A"
          letterSpacing="0.02em"
        >
          BUSINESS OUTCOME
        </text>
      </svg>
    </div>
  );
};
