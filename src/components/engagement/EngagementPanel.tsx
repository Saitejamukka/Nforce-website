import React from 'react';
import { ArrowRight, ChevronDown, Check } from 'lucide-react';
import { PathId } from './EngagementPathLine';

export interface ModelDetail {
  name: string;
  focus: string;
  note?: string;
}

interface EngagementPanelProps {
  id: PathId;
  num: string;
  title: string;
  description: string;
  visual: React.ReactNode;
  models: ModelDetail[];
  isSelected: boolean;
  isHovered: boolean;
  isAnyHovered: boolean;
  onToggle: () => void;
  onHover: (hovered: boolean) => void;
  staggerDelay: number;
}

export const EngagementPanel: React.FC<EngagementPanelProps> = ({
  id: _id,
  num,
  title,
  description,
  visual,
  models,
  isSelected,
  isHovered,
  isAnyHovered,
  onToggle,
  onHover,
  staggerDelay,
}) => {
  // Soft muting for sibling cards when another card is hovered
  const opacity = isAnyHovered && !isHovered && !isSelected ? 0.65 : 1;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={isSelected}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle();
        }
      }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      style={{
        background: '#FFFFFF',
        border: isSelected
          ? '1.5px solid var(--nf-red)'
          : isHovered
          ? '1.5px solid rgba(224, 31, 38, 0.45)'
          : '1px solid #E5E7EB',
        borderRadius: '20px',
        padding: '40px 36px 36px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition:
          'opacity 300ms ease, transform 300ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 300ms ease, border-color 300ms ease',
        transform: isHovered
          ? 'translateY(-6px)'
          : isSelected
          ? 'translateY(-2px)'
          : 'none',
        boxShadow: isHovered || isSelected
          ? '0 20px 40px -12px rgba(0, 0, 0, 0.08), 0 4px 14px rgba(224, 31, 38, 0.08)'
          : '0 1px 3px rgba(0, 0, 0, 0.02)',
        opacity,
        position: 'relative',
        animation: `nfFadeUp 600ms var(--ease-out) ${staggerDelay}ms both`,
      }}
    >
      {/* Top red accent line when selected */}
      {isSelected && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'var(--nf-red)',
            borderRadius: '20px 20px 0 0',
          }}
        />
      )}

      <div>
        {/* Top Bar: Number & Status indicator */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              color: isSelected || isHovered ? 'var(--nf-red)' : '#94A3B8',
              transition: 'color 250ms ease',
            }}
          >
            {num}
          </span>

          {isSelected ? (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--nf-red)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                background: 'rgba(224, 31, 38, 0.06)',
                padding: '3px 9px',
                borderRadius: '9999px',
                border: '1px solid rgba(224, 31, 38, 0.2)',
              }}
            >
              <Check size={11} /> SELECTED
            </span>
          ) : (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 600,
                color: '#94A3B8',
                letterSpacing: '0.04em',
              }}
            >
              CLICK TO VIEW
            </span>
          )}
        </div>

        {/* Large Title */}
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 2.4vw, 36px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: '#0F172A',
            margin: '0 0 16px',
            lineHeight: 1.15,
          }}
        >
          {title}
        </h3>

        {/* Subtle Concept Visual */}
        <div style={{ margin: '14px 0 20px' }}>{visual}</div>

        {/* Short Description */}
        <p
          style={{
            fontSize: '16px',
            color: '#475569',
            lineHeight: 1.6,
            margin: '0 0 24px',
          }}
        >
          {description}
        </p>
      </div>

      {/* Expanded Models or Explore Link */}
      <div>
        {isSelected ? (
          <div
            style={{
              borderTop: '1px solid #EDF0F3',
              paddingTop: '20px',
              marginTop: '12px',
              animation: 'nfFadeUp 300ms var(--ease-out) both',
            }}
          >
            {/* Simple Editorial Rows (NOT cards in cards) */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                marginBottom: '24px',
              }}
            >
              {models.map((m, idx) => (
                <div key={idx}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '17px',
                      fontWeight: 800,
                      color: '#0F172A',
                      marginBottom: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <span
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: 'var(--nf-red)',
                        display: 'inline-block',
                      }}
                    />
                    {m.name}
                  </div>
                  <p
                    style={{
                      fontSize: '13.5px',
                      color: '#475569',
                      lineHeight: 1.55,
                      margin: '0 0 4px',
                    }}
                  >
                    {m.focus}
                  </p>
                  {m.note && (
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--nf-red)',
                        fontWeight: 600,
                      }}
                    >
                      {m.note}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Action */}
            <div style={{ borderTop: '1px solid #EDF0F3', paddingTop: '16px' }}>
              <a
                href="#contact"
                className="nf-btn-primary"
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  fontSize: '14px',
                }}
              >
                Discuss This Engagement Model <ArrowRight size={14} />
              </a>
            </div>
          </div>
        ) : (
          <div
            style={{
              borderTop: '1px solid #F1F5F9',
              paddingTop: '18px',
              marginTop: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '15px',
                fontWeight: 700,
                color: isHovered ? 'var(--nf-red)' : '#0F172A',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'color 250ms ease',
              }}
            >
              Explore Model
              <ArrowRight
                size={16}
                color={isHovered ? 'var(--nf-red)' : '#0F172A'}
                style={{
                  transform: isHovered ? 'translateX(6px)' : 'none',
                  transition: 'transform 250ms ease, color 250ms ease',
                }}
              />
            </span>

            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: isHovered ? 'rgba(224, 31, 38, 0.08)' : '#F8FAFC',
                border: isHovered
                  ? '1px solid rgba(224, 31, 38, 0.25)'
                  : '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 250ms ease',
              }}
            >
              <ChevronDown
                size={15}
                color={isHovered ? 'var(--nf-red)' : '#94A3B8'}
                style={{
                  transform: isSelected ? 'rotate(180deg)' : 'none',
                  transition: 'transform 250ms ease',
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
