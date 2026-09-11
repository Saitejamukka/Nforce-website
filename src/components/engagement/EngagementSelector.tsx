import React from 'react';
import { ShieldCheck, Users, Globe, ArrowDownRight, ChevronRight, Check } from 'lucide-react';
import { ClientNeedId } from './EngagementProgress';

interface EngagementSelectorProps {
  activeNeed: ClientNeedId;
  onSelectNeed: (id: ClientNeedId) => void;
}

interface SelectorOption {
  id: ClientNeedId;
  num: string;
  title: string;
  tagline: string;
  description: string;
  modelsIncluded: string;
  icon: 'ShieldCheck' | 'Users' | 'Globe';
}

const SELECTOR_OPTIONS: SelectorOption[] = [
  {
    id: 'own-outcome',
    num: '01',
    title: 'Own the Outcome',
    tagline: 'End-to-end delivery with NForce owning the result.',
    description: 'Full delivery accountability with guaranteed SLAs, milestone deliverables, and transparent KPI governance.',
    modelsIncluded: 'Managed Delivery · Project / SOW',
    icon: 'ShieldCheck',
  },
  {
    id: 'extend-team',
    num: '02',
    title: 'Extend Your Team',
    tagline: 'Add specialized engineering capability where you need it.',
    description: 'Pre-vetted senior engineers embedded directly into your agile squads with day-one productivity and zero friction.',
    modelsIncluded: 'T&M / Staff Augmentation',
    icon: 'Users',
  },
  {
    id: 'scale-delivery',
    num: '03',
    title: 'Scale Delivery',
    tagline: 'Expand capacity across locations, teams and time zones.',
    description: 'Optimize cost, speed, and timezone coverage across US leadership and global engineering delivery centers.',
    modelsIncluded: 'Onshore · Offshore · Hybrid',
    icon: 'Globe',
  },
];

export const EngagementSelector: React.FC<EngagementSelectorProps> = ({
  activeNeed,
  onSelectNeed,
}) => {
  const renderIcon = (iconName: string, isActive: boolean) => {
    const color = isActive ? 'var(--nf-red)' : '#64748B';
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck size={22} color={color} />;
      case 'Users':
        return <Users size={22} color={color} />;
      case 'Globe':
      default:
        return <Globe size={22} color={color} />;
    }
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '20px',
        marginBottom: '32px',
      }}
      role="tablist"
      aria-label="Client Needs Engagement Selector"
    >
      {SELECTOR_OPTIONS.map((option) => {
        const isActive = activeNeed === option.id;

        return (
          <div
            key={option.id}
            role="tab"
            aria-selected={isActive}
            tabIndex={0}
            onClick={() => onSelectNeed(option.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectNeed(option.id);
              }
            }}
            style={{
              position: 'relative',
              background: '#FFFFFF',
              border: isActive ? '2px solid var(--nf-red)' : '1px solid #E2E8F0',
              borderRadius: '16px',
              padding: '28px 24px 24px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 240ms cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: isActive
                ? '0 12px 32px -6px rgba(224, 31, 38, 0.12), 0 4px 12px rgba(0, 0, 0, 0.04)'
                : '0 1px 3px rgba(0, 0, 0, 0.02)',
              transform: isActive ? 'translateY(-2px)' : 'none',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.borderColor = '#CBD5E1';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 20px -4px rgba(0, 0, 0, 0.06)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.02)';
              }
            }}
          >
            {/* Top accent bar for active card */}
            {isActive && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3.5px',
                  background: 'var(--nf-red)',
                }}
              />
            )}

            <div>
              {/* Header: Num + Icon */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: isActive ? 'rgba(224, 31, 38, 0.08)' : '#F8FAFC',
                      border: isActive
                        ? '1px solid rgba(224, 31, 38, 0.25)'
                        : '1px solid #E2E8F0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 200ms ease',
                    }}
                  >
                    {renderIcon(option.icon, isActive)}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      fontWeight: 800,
                      letterSpacing: '0.04em',
                      color: isActive ? 'var(--nf-red)' : '#94A3B8',
                    }}
                  >
                    {option.num}
                  </span>
                </div>

                {isActive ? (
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '11px',
                      fontWeight: 700,
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--nf-red)',
                      background: 'rgba(224, 31, 38, 0.08)',
                      padding: '3px 8px',
                      borderRadius: '9999px',
                      border: '1px solid rgba(224, 31, 38, 0.2)',
                    }}
                  >
                    <Check size={11} /> SELECTED
                  </span>
                ) : (
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#94A3B8',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    CLICK TO VIEW
                  </span>
                )}
              </div>

              {/* Title & Tagline */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '20px',
                  fontWeight: 800,
                  color: '#0F172A',
                  margin: '0 0 6px',
                  letterSpacing: '-0.01em',
                }}
              >
                {option.title}
              </h3>
              <p
                style={{
                  fontSize: '13.5px',
                  fontWeight: 600,
                  color: isActive ? 'var(--nf-red)' : '#475569',
                  margin: '0 0 12px',
                  lineHeight: 1.4,
                  transition: 'color 200ms ease',
                }}
              >
                {option.tagline}
              </p>

              {/* Description */}
              <p
                style={{
                  fontSize: '13px',
                  color: '#64748B',
                  lineHeight: 1.55,
                  margin: '0 0 18px',
                }}
              >
                {option.description}
              </p>
            </div>

            {/* Bottom Footer: Models Tag & Action */}
            <div
              style={{
                borderTop: '1px solid #F1F5F9',
                paddingTop: '14px',
                marginTop: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: '#94A3B8',
                    marginBottom: '2px',
                  }}
                >
                  Models Revealed
                </span>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: isActive ? '#0F172A' : '#64748B',
                  }}
                >
                  {option.modelsIncluded}
                </span>
              </div>

              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: isActive ? 'var(--nf-red)' : '#F8FAFC',
                  color: isActive ? '#FFFFFF' : '#94A3B8',
                  border: isActive ? 'none' : '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 200ms ease',
                }}
              >
                {isActive ? <ArrowDownRight size={15} /> : <ChevronRight size={15} />}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
