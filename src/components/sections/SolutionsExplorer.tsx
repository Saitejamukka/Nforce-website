import React, { useState } from 'react';
import { SOLUTIONS } from '../../data/solutions';
import { Eyebrow } from '../ui/Eyebrow';
import { DynamicIcon } from '../ui/DynamicIcon';

const CATEGORY_MAP: Record<string, string> = {
  qa: 'qa',
  pt: 'qa',
  do: 'cloud',
  db: 'cloud',
  ai: 'ai',
  da: 'ai',
  bd: 'ai',
  rpa: 'ai',
  sd: 'software',
  dad: 'software',
  pd: 'enterprise',
  ms: 'enterprise',
};

const CATEGORIES = [
  { id: 'all', label: 'All Solutions', count: 12 },
  { id: 'qa', label: 'QA & Testing', count: 2 },
  { id: 'cloud', label: 'Cloud & DevOps', count: 2 },
  { id: 'ai', label: 'AI & Automation', count: 4 },
  { id: 'software', label: 'Custom Software', count: 2 },
  { id: 'enterprise', label: 'Enterprise & Pega', count: 2 },
];

export const SolutionsExplorer: React.FC = () => {
  const [activeKey, setActiveKey] = useState('qa');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const visibleSolutions =
    selectedCategory === 'all'
      ? SOLUTIONS
      : SOLUTIONS.filter((s) => CATEGORY_MAP[s.key] === selectedCategory);

  const activeService =
    visibleSolutions.find((s) => s.key === activeKey) ||
    visibleSolutions[0] ||
    SOLUTIONS[0];

  return (
    <section
      id="solutions"
      style={{
        padding: '140px 32px',
        background: 'var(--nf-white)',
        borderTop: '1px solid var(--border-light)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '24px',
            marginBottom: '48px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <Eyebrow>Solutions</Eyebrow>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(30px, 4vw, 48px)',
                fontWeight: 800,
                letterSpacing: '-0.01em',
                margin: '16px 0 0',
              }}
            >
              Built to Scale
            </h2>
          </div>
          <div className="nf-align-right" style={{ textAlign: 'right' }}>
            <div
              style={{
                color: 'var(--nf-gray-500)',
                fontSize: '15px',
                maxWidth: '380px',
                lineHeight: 1.6,
                marginBottom: '14px',
              }}
            >
              End-to-end engineering — from strategy and QA through DevOps and AI — delivered by one
              accountable team.
            </div>
            <a
              href="#contact"
              style={{
                color: 'var(--nf-red)',
                textDecoration: 'none',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '14px',
              }}
            >
              Request Custom Solution →
            </a>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '32px',
            flexWrap: 'wrap',
          }}
        >
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  const filtered =
                    cat.id === 'all'
                      ? SOLUTIONS
                      : SOLUTIONS.filter((s) => CATEGORY_MAP[s.key] === cat.id);
                  if (filtered.length > 0 && !filtered.some((s) => s.key === activeKey)) {
                    setActiveKey(filtered[0].key);
                  }
                }}
                style={{
                  background: isSelected ? 'var(--nf-red)' : 'var(--nf-gray-100)',
                  color: isSelected ? '#ffffff' : 'var(--nf-ink-700)',
                  border: `1px solid ${isSelected ? 'var(--nf-red)' : 'var(--nf-gray-300)'}`,
                  borderRadius: 'var(--radius-pill)',
                  padding: '8px 18px',
                  fontSize: '13px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 200ms var(--ease-out)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                {cat.label}
                <span
                  style={{
                    fontSize: '11px',
                    opacity: 0.85,
                    background: isSelected ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.06)',
                    padding: '2px 7px',
                    borderRadius: 'var(--radius-pill)',
                  }}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        <div
          className="nf-sol-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '0.85fr 1.15fr',
            gap: 0,
            border: '1px solid var(--border-light)',
          }}
        >
          {/* Left: Filtered clickable selector */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {visibleSolutions.map((s) => {
              const isActive = activeKey === s.key;
              return (
                <button
                  key={s.key}
                  onClick={() => setActiveKey(s.key)}
                  style={{
                    textAlign: 'left',
                    background: isActive ? 'var(--nf-white)' : 'var(--nf-gray-100)',
                    border: 'none',
                    borderBottom: '1px solid var(--border-light)',
                    borderLeft: `3px solid ${isActive ? 'var(--nf-red)' : 'transparent'}`,
                    padding: '20px 24px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    fontFamily: 'var(--font-body)',
                    transition: 'background 200ms',
                  }}
                >
                  <div
                    style={{
                      flex: '0 0 auto',
                      color: isActive ? 'var(--nf-red)' : 'var(--nf-ink-950)',
                      transition: 'color 200ms',
                    }}
                  >
                    <DynamicIcon name={s.icon} size={22} strokeWidth={1.75} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '15px',
                      fontWeight: 700,
                      color: isActive ? 'var(--nf-red)' : 'var(--nf-ink-950)',
                    }}
                  >
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic details panel */}
          <div
            key={activeKey}
            style={{
              background: 'var(--nf-gray-100)',
              padding: '44px',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              animation: 'nfPanelIn 420ms cubic-bezier(.16,1,.3,1) both',
            }}
          >
            <div
              style={{
                color: 'var(--nf-red)',
                marginBottom: '20px',
                opacity: 0,
                animation: 'nfIconPop 480ms var(--ease-out) 80ms both',
              }}
            >
              <DynamicIcon name={activeService.icon} size={34} strokeWidth={2} />
            </div>

            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '24px',
                fontWeight: 800,
                marginBottom: '12px',
                opacity: 0,
                animation: 'nfFadeUp 420ms var(--ease-out) 140ms both',
              }}
            >
              {activeService.title}
            </div>

            <div
              style={{
                color: 'var(--nf-gray-500)',
                fontSize: '14px',
                lineHeight: 1.6,
                marginBottom: '28px',
                opacity: 0,
                animation: 'nfFadeUp 420ms var(--ease-out) 200ms both',
              }}
            >
              {activeService.desc}
            </div>

            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '12px',
                letterSpacing: 'var(--ls-eyebrow)',
                textTransform: 'uppercase',
                color: 'var(--nf-gray-500)',
                marginBottom: '14px',
                opacity: 0,
                animation: 'nfFadeUp 420ms var(--ease-out) 240ms both',
              }}
            >
              Deliverables
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {activeService.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '13.5px',
                    color: 'var(--nf-ink-700)',
                    opacity: 0,
                    animation: `nfFadeUp 380ms var(--ease-out) ${280 + idx * 70}ms both`,
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--nf-red)',
                      display: 'inline-block',
                      flex: '0 0 auto',
                    }}
                  />
                  {item}
                </div>
              ))}
            </div>

            <div style={{ flex: '1 1 auto', minHeight: '20px' }} />

            <div
              style={{
                borderRadius: '10px',
                overflow: 'hidden',
                opacity: 0,
                animation: 'nfFadeUp 460ms var(--ease-out) 260ms both',
              }}
            >
              <img
                src={activeService.img}
                alt={activeService.title}
                style={{ width: '100%', height: '170px', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                marginTop: '24px',
                paddingTop: '24px',
                borderTop: '1px solid var(--border-light)',
                opacity: 0,
                animation: 'nfFadeUp 420ms var(--ease-out) 300ms both',
              }}
            >
              <div style={{ fontSize: '13px', color: 'var(--nf-gray-500)', lineHeight: 1.5 }}>
                Ready to talk about {activeService.title}?
              </div>
              <a
                href="#contact"
                className="nf-sol-cta"
                style={{
                  flex: '0 0 auto',
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '12px 22px',
                  fontSize: '14px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  letterSpacing: '0.01em',
                  textDecoration: 'none',
                  color: 'var(--nf-white)',
                  background: 'var(--nf-red)',
                  borderRadius: 'var(--radius-pill)',
                  whiteSpace: 'nowrap',
                  transition: 'transform 200ms var(--ease-out), box-shadow 200ms',
                }}
              >
                Get a Consultation →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
