import React, { useState } from 'react';
import { WHAT_WE_DO } from '../../data/whatWeDo';
import { MILESTONES, CULTURAL_VALUES } from '../../data/companyData';
import { Eyebrow } from '../ui/Eyebrow';
import { Highlight } from '../ui/Highlight';
import { DynamicIcon } from '../ui/DynamicIcon';

export const AboutSection: React.FC = () => {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  return (
    <section
      id="about"
      style={{
        padding: '120px 32px 140px',
        background: 'var(--nf-gray-100)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Top Editorial Split Header */}
        <div
          className="nf-about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '64px',
            marginBottom: '80px',
          }}
        >
          <div>
            <Eyebrow>What We Do</Eyebrow>
            <p
              style={{
                color: 'var(--nf-gray-500)',
                fontSize: '15px',
                lineHeight: 1.65,
                maxWidth: '360px',
                margin: '20px 0 0',
              }}
            >
              From the first line of code to the last regression cycle, our teams embed directly
              with yours — no handoffs, no black boxes.
            </p>
            <div style={{ display: 'flex', gap: '28px', marginTop: '32px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 800 }}>
                  4
                </div>
                <div style={{ fontSize: '12px', color: 'var(--nf-gray-500)', marginTop: '2px' }}>
                  Core Disciplines
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 800 }}>
                  100+
                </div>
                <div style={{ fontSize: '12px', color: 'var(--nf-gray-500)', marginTop: '2px' }}>
                  Team of Experts
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 800 }}>
                  15+
                </div>
                <div style={{ fontSize: '12px', color: 'var(--nf-gray-500)', marginTop: '2px' }}>
                  Years Delivering
                </div>
              </div>
            </div>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(30px, 4.2vw, 52px)',
              fontWeight: 800,
              lineHeight: 1.12,
              margin: 0,
            }}
          >
            Engineering quality into every layer of the software you ship —{' '}
            <Highlight tone="red">at enterprise scale</Highlight>.
          </h2>
        </div>

        {/* 4 Core What We Do Rows */}
        <div style={{ marginBottom: '96px' }}>
          {WHAT_WE_DO.map((w) => {
            const isHovered = hoveredKey === w.key;
            return (
              <div
                key={w.key}
                onMouseEnter={() => setHoveredKey(w.key)}
                onMouseLeave={() => setHoveredKey(null)}
                className="nf-wtd-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr 1fr',
                  alignItems: 'center',
                  gap: '32px',
                  padding: '34px 0',
                  borderTop: '1px solid var(--border-light)',
                  cursor: 'default',
                }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '15px', color: 'var(--nf-gray-500)' }}>
                  0{w.n}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(22px, 2.6vw, 30px)',
                    fontWeight: 700,
                    transform: isHovered ? 'translateX(10px)' : 'translateX(0px)',
                    transition: 'transform var(--dur-base) var(--ease-out), color var(--dur-base)',
                    color: isHovered ? 'var(--nf-red)' : 'var(--nf-ink-950)',
                  }}
                >
                  {w.title}
                </div>
                <div
                  style={{
                    color: 'var(--nf-gray-500)',
                    fontSize: '15px',
                    lineHeight: 1.6,
                    maxWidth: '440px',
                    justifySelf: 'end',
                    textAlign: 'right',
                  }}
                >
                  {w.desc}
                </div>
              </div>
            );
          })}
        </div>

        {/* Official Client Milestones Showcase from nforceone.com */}
        <div style={{ marginBottom: '96px' }}>
          <div style={{ marginBottom: '40px' }}>
            <Eyebrow>Proven Track Record</Eyebrow>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(26px, 3.4vw, 40px)',
                fontWeight: 800,
                letterSpacing: '-0.01em',
                margin: '14px 0 0',
              }}
            >
              Everyone has a story. Here is ours.
            </h3>
            <p style={{ color: 'var(--nf-gray-500)', fontSize: '15px', marginTop: '10px', maxWidth: '580px' }}>
              Real outcomes from our client partnerships across enterprise AI, travel tech, and continuous QA.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {MILESTONES.map((m) => (
              <div
                key={m.client}
                style={{
                  background: 'var(--nf-white)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '12px',
                  padding: '36px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 8px 24px -12px rgba(10, 10, 11, 0.08)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'var(--nf-red)',
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'var(--nf-red)',
                      background: 'rgba(224, 31, 38, 0.08)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-pill)',
                    }}
                  >
                    {m.year}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'var(--nf-gray-400)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {m.tag}
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '22px',
                    fontWeight: 800,
                    marginBottom: '14px',
                    color: 'var(--nf-ink-950)',
                  }}
                >
                  {m.client}
                </div>

                <p style={{ color: 'var(--nf-gray-500)', fontSize: '14px', lineHeight: 1.65, margin: 0 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Official 4 G.R.O.W. Cultural Pillars from nforceone.com */}
        <div>
          <div style={{ marginBottom: '40px' }}>
            <Eyebrow>Our Culture</Eyebrow>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(26px, 3.4vw, 40px)',
                fontWeight: 800,
                letterSpacing: '-0.01em',
                margin: '14px 0 0',
                maxWidth: '720px',
              }}
            >
              Built around four key attributes that differentiate us.
            </h3>
            <p style={{ color: 'var(--nf-gray-500)', fontSize: '15px', marginTop: '10px', maxWidth: '580px' }}>
              Over 100 professionals united across India and the US, delivering technical excellence with a human touch.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            {CULTURAL_VALUES.map((val) => (
              <div
                key={val.title}
                style={{
                  background: 'var(--nf-white)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '12px',
                  padding: '32px 28px',
                  transition: 'transform 240ms var(--ease-out), box-shadow 240ms',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(224, 31, 38, 0.1)',
                      color: 'var(--nf-red)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: '18px',
                    }}
                  >
                    {val.letter}
                  </div>
                  <div style={{ color: 'var(--nf-ink-950)' }}>
                    <DynamicIcon name={val.icon} size={22} strokeWidth={1.75} />
                  </div>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '18px',
                    fontWeight: 700,
                    marginBottom: '10px',
                    color: 'var(--nf-ink-950)',
                  }}
                >
                  {val.title}
                </div>

                <p style={{ color: 'var(--nf-gray-500)', fontSize: '13.5px', lineHeight: 1.6, margin: 0 }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
