import React, { useState } from 'react';
import { CAREER_VALUES, JOBS } from '../../data/jobs';
import { EMPLOYEE_VOICES } from '../../data/testimonials';
import { Eyebrow } from '../ui/Eyebrow';
import { DynamicIcon } from '../ui/DynamicIcon';
import { ChevronDown } from 'lucide-react';

export const CareersSection: React.FC = () => {
  const [openJob, setOpenJob] = useState<number>(0);

  const toggleJob = (index: number) => {
    setOpenJob((prev) => (prev === index ? -1 : index));
  };

  return (
    <section
      id="careers"
      style={{
        padding: '140px 32px',
        background: 'var(--nf-white)',
        borderTop: '1px solid var(--border-light)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '-8%',
          left: '-6%',
          width: '460px',
          height: '460px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(224,31,38,0.07), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <Eyebrow>Careers</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4.6vw, 56px)',
              fontWeight: 800,
              margin: '16px 0 0',
            }}
          >
            Start Your <span style={{ color: 'var(--nf-red)' }}>Journey</span>
          </h2>
          <p
            style={{
              color: 'var(--nf-gray-500)',
              fontSize: '16px',
              maxWidth: '560px',
              margin: '16px auto 0',
              lineHeight: 1.6,
            }}
          >
            Grow your career as we grow. Join the team that's changing IT services.
          </p>
        </div>

        {/* Strategic Team Culture Photography Banner */}
        <div
          style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            minHeight: '260px',
            marginBottom: '48px',
            boxShadow: '0 12px 36px -10px rgba(0, 0, 0, 0.08)',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
            alt="NForce One Engineering Team Collaboration"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              position: 'absolute',
              inset: 0,
            }}
          />
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              background: 'linear-gradient(90deg, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.55) 60%, transparent 100%)',
              padding: '40px 44px',
              color: '#FFFFFF',
              maxWidth: '640px',
              minHeight: '260px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--nf-red-bright)', marginBottom: '8px' }}>
              Culture & Collaboration
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 2.6vw, 34px)', fontWeight: 800, margin: '0 0 10px', lineHeight: 1.15 }}>
              Where Elite Engineers Build Systems That Matter.
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, margin: 0 }}>
              Join over 100 engineers and architects across Dallas and Hyderabad building the future of enterprise software, autonomous testing, and generative AI.
            </p>
          </div>
        </div>

        {/* Culture / Values Cards */}
        <div
          className="nf-career-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginBottom: '72px',
          }}
        >
          {CAREER_VALUES.map((v) => (
            <div
              key={v.title}
              className="nf-career-card"
              style={{
                padding: '32px 26px',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-card)',
                background: 'var(--nf-gray-50)',
                transition: 'all 240ms var(--ease-out)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(224,31,38,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--nf-red)',
                  marginBottom: '20px',
                }}
              >
                <DynamicIcon name={v.icon} size={22} />
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '17px',
                  fontWeight: 700,
                  marginBottom: '10px',
                }}
              >
                {v.title}
              </div>
              <div style={{ color: 'var(--nf-gray-500)', fontSize: '13.5px', lineHeight: 1.6 }}>
                {v.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Employee Voice & Experience Module (PRD Section 11.1) */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--nf-red)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 700,
              }}
            >
              Authentic Employee Voice
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(24px, 2.8vw, 36px)',
                fontWeight: 800,
                margin: '8px 0 0',
              }}
            >
              Life & Innovation at NForce One
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            {EMPLOYEE_VOICES.map((emp) => (
              <div
                key={emp.id}
                style={{
                  background: 'var(--nf-gray-50)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '16px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'border-color 200ms ease',
                }}
              >
                <div>
                  <div style={{ fontSize: '24px', color: 'var(--nf-red)', lineHeight: 1, marginBottom: '12px' }}>“</div>
                  <p style={{ fontSize: '13.5px', color: 'var(--nf-ink-800)', lineHeight: 1.6, margin: '0 0 20px', fontStyle: 'italic' }}>
                    {emp.quote}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'var(--nf-ink-950)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '13px',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    {emp.initials}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 800, color: 'var(--nf-ink-950)' }}>
                      {emp.name}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--nf-red)', fontWeight: 600 }}>
                      {emp.role}
                    </div>
                    <div style={{ fontSize: '10px', color: 'var(--nf-gray-500)', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
                      {emp.location} · {emp.yearsWithTeam}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Opportunities Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '24px',
            marginBottom: '32px',
            flexWrap: 'wrap',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(22px, 2.6vw, 30px)',
              fontWeight: 800,
              margin: 0,
            }}
          >
            Current Opportunities
          </h3>
          <div
            style={{
              color: 'var(--nf-gray-500)',
              fontSize: '13px',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {JOBS.length} OPEN ROLES · HYDERABAD
          </div>
        </div>

        {/* Job Listings Accordion */}
        <div style={{ borderTop: '1px solid var(--border-light)' }}>
          {JOBS.map((j, i) => {
            const isOpen = openJob === i;
            return (
              <div key={j.title} style={{ borderBottom: '1px solid var(--border-light)' }}>
                <button
                  onClick={() => toggleJob(i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '26px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '13px',
                      color: 'var(--nf-gray-400)',
                      flex: '0 0 auto',
                    }}
                  >
                    0{i + 1}
                  </span>
                  <span
                    style={{
                      flex: 1,
                      fontFamily: 'var(--font-display)',
                      fontSize: '19px',
                      fontWeight: 700,
                    }}
                  >
                    {j.title}
                  </span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 300ms var(--ease-out)',
                      flex: '0 0 auto',
                    }}
                  />
                </button>

                <div
                  style={{
                    overflow: 'hidden',
                    transition: 'grid-template-rows 380ms var(--ease-out)',
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                  }}
                >
                  <div style={{ minHeight: 0, overflow: 'hidden' }}>
                    <div style={{ padding: '0 4px 30px', maxWidth: '760px' }}>
                      <div
                        style={{
                          color: 'var(--nf-gray-500)',
                          fontSize: '14px',
                          lineHeight: 1.65,
                          marginBottom: '16px',
                        }}
                      >
                        {j.overview}
                      </div>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                        {j.reqs.map((r, idx) => (
                          <span
                            key={idx}
                            style={{
                              fontSize: '12.5px',
                              fontWeight: 600,
                              color: 'var(--nf-ink-700)',
                              background: 'var(--nf-gray-100)',
                              borderRadius: 'var(--radius-pill)',
                              padding: '6px 14px',
                            }}
                          >
                            {r}
                          </span>
                        ))}
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '13px', color: 'var(--nf-gray-500)' }}>
                          📍 {j.location}
                        </span>
                        <a
                          href={`mailto:admin@nforceone.com?subject=Application: ${encodeURIComponent(j.title)}`}
                          style={{
                            color: 'var(--nf-red)',
                            textDecoration: 'none',
                            fontFamily: 'var(--font-display)',
                            fontWeight: 700,
                            fontSize: '14px',
                          }}
                        >
                          Send your resume →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '64px' }}>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '22px',
              fontWeight: 800,
              marginBottom: '20px',
            }}
          >
            Come on board at NForce One
          </div>
          <a
            href="mailto:admin@nforceone.com"
            className="nf-resume-cta"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '16px 34px',
              fontSize: '16px',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              letterSpacing: '0.01em',
              textDecoration: 'none',
              color: 'var(--nf-white)',
              background: 'var(--nf-ink-950)',
              borderRadius: 'var(--radius-pill)',
              transition: 'background 200ms',
            }}
          >
            Send Your Resume
          </a>
        </div>
      </div>
    </section>
  );
};
