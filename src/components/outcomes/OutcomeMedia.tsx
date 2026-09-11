import React, { useState } from 'react';

interface Props {
  imageUrl: string;
  altText: string;
  floatingMetricValue?: string;
  floatingMetricLabel?: string;
}

export const OutcomeMedia: React.FC<Props> = ({
  imageUrl,
  altText,
  floatingMetricValue,
  floatingMetricLabel,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '440px',
        borderRadius: '16px',
        overflow: 'hidden',
        background: '#f2f4f7',
        border: '1px solid #eaedf0',
        boxShadow: '0 8px 30px -8px rgba(0, 0, 0, 0.08)',
      }}
    >
      <img
        src={imageUrl}
        alt={altText}
        onLoad={() => setIsLoaded(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          transition: 'transform 800ms cubic-bezier(0.16, 1, 0.3, 1), opacity 500ms ease',
          opacity: isLoaded ? 1 : 0.6,
          transform: 'scale(1)',
        }}
      />

      {/* Subtle Bottom Readability Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.35) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Floating Metric Pill */}
      {floatingMetricValue && (
        <div
          style={{
            position: 'absolute',
            bottom: '22px',
            left: '22px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '12px',
            padding: '12px 18px',
            boxShadow: '0 12px 30px -6px rgba(0, 0, 0, 0.15)',
            animation: 'nfFadeUp 400ms var(--ease-out) both',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '20px',
              fontWeight: 800,
              color: 'var(--nf-red)',
              lineHeight: 1.1,
              marginBottom: '2px',
            }}
          >
            {floatingMetricValue}
          </div>
          {floatingMetricLabel && (
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 700,
                color: '#555d6e',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              {floatingMetricLabel}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
